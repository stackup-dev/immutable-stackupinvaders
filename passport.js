window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'enter-client-id',
    redirectUri: 'redirect-url',
    logoutRedirectUri: 'logout-url',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

