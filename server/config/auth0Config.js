// config/auth0Config.js
import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "https://gsa/api",         // Substitua pelo seu `audience` do Auth0
  issuerBaseURL: "https://dev-XXXXX.us.auth0.com/", // Substitua pela sua URL do tenant do Auth0
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
