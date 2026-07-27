import waline from '@waline/server';

export async function onRequest(context) {
  // 注入环境变量
  Object.assign(process.env, context.env);
  
  const app = waline({
    // 使用纯轻量服务端引擎
  });

  return app(context.request);
}
