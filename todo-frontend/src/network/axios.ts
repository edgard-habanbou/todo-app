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

  async editTodo(
    id: string | undefined,
    todo: {
      description: string;
      date: string;
      priority: number;
    }
  ) {
    return await api.put(`/todos/${id}`, todo);
  }

  async completeTodo(todoId: string) {
    return await api.put(`/todos/${todoId}`, {
      completed: true,
    });
  }
  async getTodos() {
    return await api.get("/todos");
  }

  async deleteTodo(todoId: string) {
    return await api.delete(`/todos/${todoId}`);
  }
}

export const userApi = new UserApi();
