import { ENV } from "@/utils";
import { forEach } from "lodash";


export class Cart {
  add(gameId) {
    const games = this.getAll();
    const objectIndex = games.findIndex((game) => game.id === gameId);
    if (objectIndex<0) {
      games.push({id: gameId,quantity: 1})
    } else {
      const game = games[objectIndex];
      games[objectIndex].quantity = game.quantity +1;
    }
    
    localStorage.setItem(ENV.CART, JSON.stringify(games));
  }

  getAll() {
    const response = localStorage.getItem(ENV.CART);
    if (!response) {
      return [];
    } else {
      return JSON.parse(response);
    }
  }

  count() {
    const response = this.getAll();
    let count = 0;
    forEach(response, (item) => {
      count += item.quantity;
    })

    return count;
  }

  changeQuantity(gameId, quantity) {
    const games = this.getAll();
    const objectIndex = games.findIndex((game) => game.id === gameId);

    games[objectIndex].quantity = quantity;
    localStorage.setItem(ENV.CART, JSON.stringify(games));
  }

  delete(gameId) {
    const games = this.getAll();
    const updateGames = games.filter((game) => game.id !== gameId);
    
    localStorage.setItem(ENV.CART, JSON.stringify(updateGames));
  }
}