export async function main(ns) {
  if (ns.getHostname() !== "home") {
    throw new Exception("Run the script from home");
  }

  await ns.wget(
    `https://raw.githubusercontent.com/dagibb995/DaGibbSaveBB/main/src/initHacking.js?ts=${new Date().getTime()}`,
    "initHacking.js"
  );
  ns.spawn("initHacking.js", 1);
}
