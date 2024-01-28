import { client } from "../database/db"

export default defineEventHandler({
    onBeforeResponse(e) {
        // e.waitUntil(client.end());
    },
    handler() { /** */ }
})