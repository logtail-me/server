import { GetObjectCommand, type GetObjectCommandInput, S3Client } from "@aws-sdk/client-s3";

/**
 * get object on cloudflare r2 bucket
 */
export const r2StorageFile = async (props: GetObjectCommandInput) => {
    const client = new S3Client({
        region: 'auto',
        endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
        },
    });
    const cmd = new GetObjectCommand(props);
    const res = await client.send(cmd);
    return res.Body;
}