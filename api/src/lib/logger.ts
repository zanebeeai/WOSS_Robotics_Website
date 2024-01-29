import clc from "cli-color";

class Logger {
  public static info(prefix: string, message: string) {
    console.log(`[${clc.cyan(prefix)}] ${message}`);
  }

  public static error(prefix: string, message: string) {
    console.log(`[${clc.red(prefix)}] ${message}`);
  }

  public static success(prefix: string, message: string) {
    console.log(`[${clc.green(prefix)}] ${message}`);
  }

  public static custom(color: string, prefix: string, message: string) {
    switch (color) {
      case "red":
        console.log(`[${clc.redBright(prefix)}] ${message}`);
        break;

      case "yellow":
        console.log(`[${clc.yellowBright(prefix)}] ${message}`);
        break;

      case "orange":
        console.log(`[${clc.xterm(209)(prefix)}] ${message}`);
        break;

      case "green":
        console.log(`[${clc.greenBright(prefix)}] ${message}`);
        break;

      case "purple":
        console.log(`[${clc.xterm(104)(prefix)}] ${message}`);
        break;
    }
  }
}

export { Logger };