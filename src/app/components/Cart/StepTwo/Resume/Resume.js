import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { forEach, map } from 'lodash';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import styles from './Resume.module.scss'
import { fn } from '@/utils';
import { Cart } from '@/app/api';
import { useAuth, useCart } from '@/hooks';
import { usePathname, useRouter } from 'next/navigation';

const cartCtrl = new Cart();

export function Resume(props) {
  const { games, addressSelected } = props;
  const [total, setTotal] = useState(null)
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth()
  const { deleteAllItems } = useCart()
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let totalTemp = 0;
    forEach(games, (game) => {
      const price = fn.calcDiscounterPrice(game.price, game.discount);
      totalTemp += price * game.quantity;
    });

    setTotal(Number(totalTemp.toFixed(2)))
  }, [games])

  const onPay = async () => {
    setLoading(true)
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement)
    const result = await stripe.createToken(cardElement);
    if (result.error) {
      console.error(result.error.message);
    } else {
      const response = await cartCtrl.paymentCart(result.token, games, user.id, addressSelected);
      if (response.status === 200) {
        setLoading(false);
        deleteAllItems();
        goToStepEnd();
      } else {
        console.error("Error el arealizar el pedido");
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const goToStepEnd = () => {
    router.replace(`${pathname}?step=3`);
  }

  if (!total) return null;
  
  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>
      <div className={styles.block}>
        <div className={styles.products}>
          {map(games, (game) => (
            <div key={game.id} className={styles.product}>
              <div>
                <p>{game.title}</p>
                <span>{game.platform.title}</span>
              </div>
              <span>
                {game.quantity > 0 && `${game.quantity}x`} 
                $ {fn.calcDiscounterPrice(game.price, game.discount)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.blockTotal}>
        <div>
          <span>Total: </span>
          <span>$ {total}</span>
        </div>
        <Button primary fluid disabled={!addressSelected} onClick={onPay} loading={loading}>Pagar</Button>
      </div>
    </div>
  )
}
