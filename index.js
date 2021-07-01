const os = require("os");
const free_memory = os.freemem();
const free_mem_kb = free_memory / 1024;
const free_mem_mb = Math.floor(free_mem_kb / 1024);
const { username, homedir } = os.userInfo();
const fs = require("fs");
const path = require("path");
console.log("Hackeando tu sistema...");
setTimeout(() => {
  if (process.platform === "win32") {
    console.log("Tú no molas mucho");
  } else if (process.platform === "linux") {
    console.log("Tú molas");
  } else {
    console.log(
      "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
    );
  }
  console.log("Cuidado, te quedan " + free_mem_mb + "Mb de RAM libre");
  console.log("Tu version de sistema operativo es: " + os.version());
  console.log("tu Usuario es: " + username + " y tu directorio es: " + homedir);
  fs.readdir(homedir, (err, archivos) => {
    if (err) {
      console.log("Algo a salido mal");
      return;
    }
    for (const archivo of archivos) {
      console.log(
        archivo,
        fs.lstatSync(homedir + "/" + archivo).size / 1024 + "kb",
        fs.lstatSync(homedir + "/" + archivo).isDirectory()
      );
    }
  });
}, 2000);
