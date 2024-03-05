import { api } from "./base";
class UserApi {
  async login(user: { email: string; password: string }) {
    return await api.post("/auth/login", user);
  }
  async register(user: { email: string; password: string; name: string }) {
    return await api.post("/auth/register", user);
  }

  async checkToken(token: { token: string }) {
    return await api.post("/auth/check", token);
  }

  async addTodo(todo: { description: string; date: string; priority: number }) {
    return await api.post("/todos", todo);
  }

  async getTodos() {
    return await api.get("/todos");
  }
}

export const userApi = new UserApi();
