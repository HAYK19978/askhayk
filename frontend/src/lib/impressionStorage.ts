import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "impressions.json");

export type ImpressionEvent = {
  variant: string;
  timestamp: string;
};

export function saveImpression(event: ImpressionEvent) {
  let data: ImpressionEvent[] = [];

  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf-8");
    data = JSON.parse(raw);
  }

  data.push(event);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function getImpressions(): ImpressionEvent[] {
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}