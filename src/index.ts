/* eslint-disable no-console */
import { transform } from "./transform";

const args = process.argv.slice(2);

console.log(transform(args));
