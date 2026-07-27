import waline from '@waline/vercel';

const app = waline({
  // 基础配置由 Cloudflare Pages 的环境变量（MONGO_URL 等）自动注入
});

export async function onRequest(context) {
  // 注入 Cloudflare 的环境变量到 process.env
  Object.assign(process.env, context.env);
  return app(context.request);
}
