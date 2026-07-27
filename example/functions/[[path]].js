import waline from '@waline/vercel';

const app = waline({
  // 环境变量（MONGO_URL、MONGO_DB 等）会自动从 Cloudflare 后台读取
});

export async function onRequest(context) {
  // 把 Cloudflare 的环境变量注入到运行环境
  Object.assign(process.env, context.env);
  return app(context.request);
}
