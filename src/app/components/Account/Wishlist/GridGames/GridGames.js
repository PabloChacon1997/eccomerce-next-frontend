import { map } from 'lodash';
import styles from './GridGames.module.scss'
import Link from 'next/link';
import { Label, WishlistIcon } from '@/app/components/Shared';
import { fn } from '@/utils';

export function GridGames(props) {
  const { wishlist, onReload } = props;
  return (
    <div className={styles.gridGames}>
      {map(wishlist,(item) => {
        return (
          <div key={item.id} className={styles.game}>
            <Link href={`/pages/${item?.game?.slug ?? ''}`}>
              <div>
                <img src={item?.game?.cover?.url ?? ''} />
                {item?.game && item.game.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                    {`-${item?.game?.discount ?? 0}`}
                  </Label.Discount>
                )}
              </div>
              <div>
                <span>{item?.game?.title ?? ''}</span>
                <span className={styles.price}>$ {fn.calcDiscounterPrice(item?.game?.price ?? 0, item?.game?.discount ?? 0)}</span>
              </div>
            </Link>
            <WishlistIcon gameId={item?.game?.id ?? 0} className={styles.wishlistIcon} removeCallback={onReload}/>
          </div>
        )
      })}
    </div>
  )
}
