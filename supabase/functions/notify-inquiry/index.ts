import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (
      !name || name.length > 100 ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 200 ||
      phone.length > 30 ||
      !message || message.length > 2000
    ) {
      return json({ error: "Invalid input" }, 400);
    }

    // 1. save to the database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );
    const { error } = await supabase
      .from("inquiries")
      .insert({ name, email, phone: phone || null, message });
    if (error) {
      console.error("DB insert failed", error);
      return json({ error: "Could not save" }, 500);
    }

    // 2. email you (a failure here does not lose the booking)
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Curated Corners <onboarding@resend.dev>",
        to: [Deno.env.get("NOTIFY_EMAIL")],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        html: `
          <h2>New booking inquiry</h2>
          <p><b>Name:</b> ${esc(name)}</p>
          <p><b>Email:</b> ${esc(email)}</p>
          <p><b>Phone:</b> ${esc(phone) || "—"}</p>
          <p><b>About their space:</b><br>${esc(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });
    if (!res.ok) console.error("Resend failed", await res.text());

    return json({ ok: true });
  } catch (e) {
    console.error(e);
    return json({ error: "Bad request" }, 400);
  }
});