import { CLIENT_SECRET, CLIENT_ID } from "./keys";

const redirectUri = () => {
  if (window.location.hostname === "localhost") {
    return "redirect_uri=http://localhost:3000/auth";
  } else if (window.location.hostname === "photo-viewer-zonter.vercel.app") {
    return "redirect_uri=https://photo-viewer-zonter.vercel.app/auth";
  }
};

const url = "https://unsplash.com/oauth/";
const token = "token";
const clientId = "client_id=" + CLIENT_ID;
const clientSecret = "client_secret=" + CLIENT_SECRET;
const code = "code=" + document.location.search.replace("?code=", "");
const grantType = "grant_type=authorization_code";

const auth = "authorize";
const responseType = "response_type=code";
const scope = "scope=public+write_likes";

export const getTokenUrl =
  url +
  token +
  "?" +
  clientId +
  "&" +
  clientSecret +
  "&" +
  redirectUri() +
  "&" +
  code +
  "&" +
  grantType;

export const authorizeUrl =
  url +
  auth +
  "?" +
  clientId +
  "&" +
  redirectUri() +
  "&" +
  responseType +
  "&" +
  scope;
