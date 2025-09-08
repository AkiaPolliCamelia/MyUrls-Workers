export async function onRequest(context) {
  const redirectUrl = context.env.ROOT_REDIRECT_URL;
  if (redirectUrl) {
    return Response.redirect(redirectUrl, 32);
  }
  return await context.next();
}