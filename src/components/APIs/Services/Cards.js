import { HttpClient } from "../HttpClient";

class CardsService extends HttpClient {
  constructor() {
    super("https://jsonplaceholder.typicode.com");
  }

  getAllPosts() {
    return this.get("posts");
  }

  postNewPosts(body) {
    return this.post("posts", body);
  }

  editPost(id, body) {
    return this.put("posts", body, id);
  }
}

export const cardService = new CardsService();
