export function isAuthenticated() {
  return localStorage.getItem("authToken") !== null;
}

export function login() {
  localStorage.setItem("authToken", "12345");
}

export function logout() {
  localStorage.removeItem("authToken");
}
