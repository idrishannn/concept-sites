// Updates public/office/status.json, the live "who is doing what" board.
// Usage: npm run status -- <agent> <working|done|blocked|idle> <slug> "message"
// Agents: research, build, qa

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

const FILE = "public/office/status.json";
const AGENTS = ["research", "build", "qa"];
const STATES = ["working", "done", "blocked", "idle"];

const [agent, state, slug = "", ...rest] = process.argv.slice(2);
const message = rest.join(" ").trim();

if (!AGENTS.includes(agent) || !STATES.includes(state)) {
  console.error(`Usage: npm run status -- <${AGENTS.join("|")}> <${STATES.join("|")}> <slug> "message"`);
  process.exit(1);
}

mkdirSync("public/office", { recursive: true });
const now = new Date().toISOString();
const board = existsSync(FILE)
  ? JSON.parse(readFileSync(FILE, "utf8"))
  : { updatedAt: now, current: null, agents: {}, log: [] };

const prev = board.agents[agent] ?? {};
board.agents[agent] = {
  state,
  concept: slug || null,
  message,
  startedAt: state === "working" ? now : prev.startedAt ?? null,
  finishedAt: state === "working" ? null : now,
};
board.updatedAt = now;
if (slug) board.current = slug;
board.log = [{ at: now, agent, state, concept: slug || null, message }, ...(board.log ?? [])].slice(0, 50);

for (const a of AGENTS) board.agents[a] ??= { state: "idle", concept: null, message: "", startedAt: null, finishedAt: null };

writeFileSync(FILE, JSON.stringify(board, null, 2) + "\n");
console.log(`status: ${agent} → ${state}${slug ? ` (${slug})` : ""}${message ? `: ${message}` : ""}`);
