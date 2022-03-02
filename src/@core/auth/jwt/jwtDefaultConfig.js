// ** Auth Endpoints
export default {
  // loginEndpoint: '/jwt/login',
  loginEndpoint: `${process.env.REACT_APP_API_SERVER_URL}/auth/A01-SignInAuth`,
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: '/jwt/logout',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}
