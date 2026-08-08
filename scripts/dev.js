const { spawn } = require("child_process");
const os = require("os");

function getLanIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      const family = String(net.family);
      if ((family === "IPv4" || family === "4") && !net.internal) {
        return net.address;
      }
    }
  }
  return null;
}

const port = process.env.PORT || "3000";
const lanIp = getLanIp();

const child = spawn(
  "npx",
  ["next", "dev", "-H", "0.0.0.0", "-p", String(port)],
  { stdio: "inherit", shell: true, env: process.env }
);

if (lanIp) {
  // Print after Next's own banner so the real Network URL is visible
  setTimeout(() => {
    console.log(`  - Network (use this): http://${lanIp}:${port}\n`);
  }, 1200);
}

child.on("exit", (code) => process.exit(code ?? 0));
