import { useMemo } from 'react';
import {connect} from 'react-redux';
import BasketItem from '../basketItem/basketItem.component';
import style from './basket.module.css';

const Basket = ({order}) => {
  const items = useMemo(() => Object.entries(order), [order]);

  return (
    <div className={style.basket}>
      {
        items.length
        ? items.map(([id, props]) => <BasketItem key={id} {...props} id={id}/>)
        : <div className={style.empty}>cart is empty</div>
      }

      {
        !!items.length &&
        <div className={style.total}>
          Total: { items.reduce((total, [, {price, amount}]) => total + price * amount, 0) } $
        </div>
      }

    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order
})

export default connect(mapStateToProps)(Basket);