export const getClientIP = (req) => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  
  // Convert "::1" (IPv6 localhost) to "127.0.0.1"
  if (ip === "::1") ip = "127.0.0.1";
  
  return ip;
};
export const getBrowserId = (req) => {
  return (
    req.cookies?.browser_id ||
    req.headers["x-browser-id"] || // Lowercase
    req.headers["X-Browser-ID"] || // Uppercase
    Math.random().toString(36).substr(2, 9)
  );
};