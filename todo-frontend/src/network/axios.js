import { api } from "./base";
class UserApi {
  async login(user) {
    return await api.post("/auth/login", user);
  }
  async register(user) {
    return await api.post("/auth/register", user);
  }
}

export const userApi = new UserApi();
