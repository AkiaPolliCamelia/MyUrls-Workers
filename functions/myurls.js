export async function onRequest(context) {
  // 1. 检查根目录重定向功能是否已启用
  const redirectUrl = context.env.ROOT_REDIRECT_URL;

  // 2. 只有在重定向启用时，/link 才作为后台入口生效
  if (redirectUrl) {
    const request = context.request;
    const indexPageUrl = new URL('/index.html', request.url);
    // 功能启用，返回原始主页
    return fetch(indexPageUrl);
  } else {
    // 3. 如果重定向未启用，则 /link 路径无效，返回 404
    return new Response('Not Found', { status: 404 });
  }
}