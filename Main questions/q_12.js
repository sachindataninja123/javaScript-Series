// 12. The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiresInSeconds) {
  const now = new Date();

  // Calculate expiration time
  const expirationTime = now.getTime() + expiresInSeconds * 1000;

  // Store token and expiration in localStorage
  const tokenData = {
    token: token,
    expiresAt: expirationTime,
  };

  localStorage.setItem("authToken", JSON.stringify(tokenData));
}

function getAuthToken() {
  const tokenData = JSON.parse(localStorage.getItem("authToken"));

  if (!tokenData) return null;

  const now = new Date().getTime();
  if (now > tokenData.expiresAt) {
    // Token has expired
    localStorage.removeItem("authToken");
    return null;
  }

  return tokenData.token;
}
// Save token valid for 1 hour (3600 seconds)
setAuthToken("abcd1234", 3600);

// Later...
const token = getAuthToken();
console.log("Valid token:", token);
