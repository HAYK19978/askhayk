import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "clicks.json");

export type ClickEvent = {
  slug: string;
  variant: string;
  timestamp: string;
  ip: string | null;
  referer: string | null;
  userAgent: string | null;
};

function isBot(userAgent: string | null) {
  if (!userAgent) return true;

  const botPatterns = [
    "bot",
    "crawler",
    "spider",
    "preview",
    "facebook",
    "whatsapp",
    "telegram",
    "discord",
  ];

  const ua = userAgent.toLowerCase();

  return botPatterns.some((pattern) => ua.includes(pattern));
}

let recentClicks: Record<string, number> = {};

export function saveClick(event: ClickEvent) {
  // 1️⃣ Бот фильтр
  if (isBot(event.userAgent)) {
    return;
  }

  // 2️⃣ Простейший throttle по IP (1 клик в 5 секунд)
  const now = Date.now();
  if (event.ip) {
    const lastClick = recentClicks[event.ip] || 0;

    if (now - lastClick < 5000) {
      return; // игнорируем слишком частые клики
    }

    recentClicks[event.ip] = now;
  }

  let data: ClickEvent[] = [];

  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf-8");
    data = JSON.parse(raw);
  }

  data.push(event);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function getClicks(): ClickEvent[] {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}