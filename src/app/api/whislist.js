const { ENV, authFetch } = require("@/utils");

export class WhisList {
  async check(userId, gameId) {
    try {
      const filertUser = `filters[user][id][$eq][0]=${userId}`;
      const filertGame = `filters[game][id][$eq][1]=${gameId}`;
      const urlParams = `${filertUser}&${filertGame}`
      
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WHISLIST}?${urlParams}`;
      const response = await authFetch(url);
      const result = await response.json();
      if(response.status !== 200) throw result;
      if(result.data.length === 0) {
        return false
      };
      return result;
    } catch (error) {
      throw error;
    }
  }

  async add(userId, gameId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WHISLIST}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({data: {
          user: userId,
          game: gameId,
        }}),
      }
      const response = await authFetch(url, params);
      const result = await response.json();
      if(response.status !== 201) throw result;
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WHISLIST}/${id}`;
      const params = {
        method: "DELETE",
      }
      const response = await authFetch(url, params);
      const result = await response.json();
      if(response.status !== 204) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAll(userId) {
    try {
      const filert = `filters[user][id][$eq][0]=${userId}`;
      const populate = "populate[0]=game&populate[1]=game.cover";
      const urlParams = `${filert}&${populate}`;
      
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WHISLIST}?${urlParams}`;
      const response = await authFetch(url);
      const result = await response.json();
      if(response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}