import { api } from "./base";
class UserApi {
  async login(user: { email: string; password: string }) {
    return await api.post("/auth/login", user);
  }
  async register(user: { email: string; password: string; name: string }) {
    return await api.post("/auth/register", user);
  }

  async checkToken(token: string) {
    return await api.post("/auth/check", token);
  }
}

export const userApi = new UserApi();
