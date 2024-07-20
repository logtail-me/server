import { CfProperties, ExecutionContext, R2Bucket } from '@cloudflare/workers-types';
declare module 'h3' {
    interface H3EventContext {
        cf: CfProperties,
        cloudflare: {
          request: Request,
          env: {
            skins: R2Bucket,
          }
          context: ExecutionContext,
        };
    }
}