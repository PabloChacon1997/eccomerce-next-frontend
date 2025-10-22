import { Button, Container, Icon, Image } from 'semantic-ui-react'
import styles from './Panel.module.scss'
import { fn } from '@/utils';
import { WishlistIcon } from '@/app/components/Shared';
import { useCart } from '@/hooks';
import { useState } from 'react';

export function Panel(props) {
  const{ gameId, game } = props;
  const [loading, setLoading] = useState(false);
  const { addCart } = useCart();

  const buyPrice = fn.calcDiscounterPrice(game?.price ?? 0, game?.discount ?? 0);

  const addCartWrapper = () => {
    setLoading(true)
    addCart(gameId);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image src={game?.cover?.url ?? ''}/> 
      </div>
      <div className={styles.actionContainer}>
        <div>
          <h2>{game?.title ?? ''}</h2>
          <div className={styles.moreInfo}>
            <span>
              <Image src={ game?.platform?.icon?.url ?? '' } />
              {game?.platform?.title ?? ''}
            </span>
            <span>
              <Icon name="check" />
              En stock
            </span>
          </div>

          <div className={styles.price}>
            {game && game.discount > 0 && (
              <>
                <span className={styles.originalPrice}>
                  <Icon name='tag' />
                  $ {game.price}
                </span>
                <span className={styles.discount}>-{game.discount}%</span>
              </>
            )}

            <span className={styles.price}>$ {buyPrice}</span>
          </div>
          <Button primary fluid onClick={addCartWrapper} loading={loading}>
            Comprar ahora
          </Button>
          <WishlistIcon gameId={gameId} className={styles.heart}/>
        </div>
      </div>
    </Container>
  )
}
