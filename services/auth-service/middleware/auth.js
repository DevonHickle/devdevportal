import jwt from "jsonwebtoken";
import CookieParser from "cookieparser";

export default ({ store, req }) => {
  if (process.server && !req.headers.cookie) {
    return;
  }
  const parsed = CookieParser.parsed.access_token;
  const accessToken = parsed.access_token;
  if (!accessToken) {
    return;
  }
  try {
    const decoded = jwt.verify(accessToken, process.env.JHWT_SECRET);
    store.commit("setUser", decoded.user);
  } catch (err) {
    console.log(err);
  }
};
