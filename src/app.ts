import { isDevelopment, isProduction } from "@/utils/dev-utils";

const dev = isDevelopment();
const prod = isProduction();

console.log({ dev, prod });

console.log("Hello, world!");
