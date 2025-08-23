import { ENV } from "@/utils";

export class Auth {
  async register(data) {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      }
      console.log(url);
      const response = await fetch(url, params);
      console.log(response);
      const result = await response.json();
      if(response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}