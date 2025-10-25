import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './Resume.module.scss'
import { forEach } from 'lodash';
import { fn } from '@/utils';
import { Button } from 'semantic-ui-react';
import Link from 'next/link';

export function Resume(props) {
  const { games } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [totals, setTotals] = useState(null);

  useEffect(() => {
    let totals = {
      original: 0,
      discount: 0,
      price: 0,
    }

    forEach(games, (game) => {
      const price = fn.calcDiscounterPrice(game.price, game.discount);
      totals = {
        original: totals.original + game.price * game.quantity,
        discount: totals.discount+ (game.price - price) * game.quantity,
        price: totals.price + price * game.quantity,
      }
    })

    setTotals(totals);
  }, [games])

  const goToStepTwo = () => {
    router.replace(`${pathname}?step=2`);
  }

  if(!totals) return null;
  
  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>
      <div className={styles.block}>
        <div className={styles.prices}>
          <div>
            <span>Precio oficial</span>
            <span>$ {totals?.original.toFixed(2)}</span>
          </div>
          <div>
            <span>Descuento</span>
            <span>$ {totals?.discount.toFixed(2)}</span>
          </div>
          <div>
            <span>Subtotal</span>
            <span>$ {totals?.price.toFixed(2)}</span>
          </div>
        </div>
        <Button primary fluid  onClick={goToStepTwo}>
          Proceder con el pago
        </Button>
        <Link href="/" >Continuar comprando</Link>
      </div>
    </div>
  )
}
