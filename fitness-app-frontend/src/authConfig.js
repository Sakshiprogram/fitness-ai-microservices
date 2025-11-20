export const authConfig = {
  clientId: 'oauth2-pkce-client',
  authorizationEndpoint: 'http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/auth',
  tokenEndpoint: 'http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/token',
  userInfoEndpoint: 'http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/userinfo',
  logoutEndpoint: 'http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/logout',

  redirectUri: 'http://localhost:5173',
  scope: 'openid profile email offline_access',

  pkce: true,
  onRefreshTokenExpire: (event) => event.logIn(),
};
