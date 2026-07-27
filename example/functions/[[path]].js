import { handler } from '../index.cjs';

export async function onRequest(context) {
  return handler(context.request, context.env);
}
