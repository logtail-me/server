import { Eta } from "eta";
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const eta = new Eta({
    // views: path.join(__dirname, "assets/templates"),
    varName: 'data',
    tags: ['{{', '}}'],
});