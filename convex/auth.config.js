const convexAuthProviderUrl = process.env.CONVEX_AUTH_PROVIDER_URL ?? "";
const authConfig = {
  providers: [
    {
      domain: convexAuthProviderUrl,
      applicationID: "convex",
    },
  ],
};
export default authConfig;
