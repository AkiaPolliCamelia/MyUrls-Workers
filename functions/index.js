export async function onRequest(context) {
  const redirectUrl = context.env.ROOT_REDIRECT_URL;
  if (redirectUrl) {
    return Response.redirect(redirectUrl, 302);
  }
  const request = context.request;
  const indexPageUrl = new URL('/index.html', request.url);
  return fetch(indexPageUrl);
}