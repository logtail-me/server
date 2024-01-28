import { client, db } from "../../../database/db"
import { article } from "../../../database/schemas";

export default eventHandler(async (e) => {
    await client.connect();
    console.log(await db.select().from(article)); /* @DELETE  */
    e.waitUntil(client.end());
    return 'OK';
})