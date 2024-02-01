import { useStore } from '../../../store/BasketStore';
import { observer } from 'mobx-react';
import classes from './Basket.module.css';

export const BasketPage = observer(() => {
  const { store } = useStore();
  if (store.cart.length === 0) {
    return <div className={classes.emptyCart}>Корзина пуста...</div>;
  }
  return (
    <div className={classes.cart}>
      {store.cart.map(({ card, color, size }, index) => (
        <div key={index}>
          <img
            className={classes.image}
            src={color.images[0]}
            alt="Картинка товара"
          />
          <h4>{card.name}</h4>
          <p>Цвет: {color.name}</p>
          <p>Размер: {size.label}</p>
          <p>Цена: {color.price}</p>
          <button onClick={() => store.removeProductFromBasket(index)}>
            Удалить из корзины
          </button>
        </div>
      ))}
    </div>
  );
});
