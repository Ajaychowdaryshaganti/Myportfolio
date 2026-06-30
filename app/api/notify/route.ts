import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "Telegram not configured" }, { status: 500 });
  }

  let body: { userAgent?: string; referrer?: string; page?: string } = {};
  try {
    body = await req.json();
  } catch {
    // ignore parse errors
  }

  const now = new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" });
  const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "unknown";

  const message = [
    `👤 *New visitor on ajayshaganti.com*`,
    ``,
    `🕐 *Time:* ${now} (Melbourne)`,
    `🌐 *IP:* \`${ip}\``,
    `📄 *Page:* ${body.page ?? "/"}`,
    `🔗 *Referrer:* ${body.referrer || "Direct / None"}`,
    `💻 *User Agent:* ${body.userAgent?.slice(0, 120) ?? "unknown"}`,
  ].join("\n");

  const telegramRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!telegramRes.ok) {
    const err = await telegramRes.text();
    return NextResponse.json({ error: err }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
