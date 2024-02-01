import { MobXProviderContext } from 'mobx-react';
import { makeAutoObservable } from 'mobx';
import { useContext } from 'react';

class BasketStore {
  cart = [];

  constructor() {
    makeAutoObservable(this);
  }

  sendProductToBasket = (product) => {
    alert('Товар добавлен');
    this.cart.push(product);
  };
  removeProductFromBasket = (id) => {
    this.cart = this.cart.filter((elem, index) => index !== id);
  };
}

const store = new BasketStore();
export const useStore = () => useContext(MobXProviderContext);
export default store;
