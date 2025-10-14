import { map } from 'lodash';
import styles from './GridGames.module.scss'
import Link from 'next/link';
import { Label, WishlistIcon } from '@/app/components/Shared';
import { fn } from '@/utils';

export function GridGames(props) {
  const { wishlist, onReload } = props;
  // console.log(wishlist);
  return (
    <div className={styles.gridGames}>
      {map(wishlist,(item) => {
        console.log(item)
        return (
          <div key={item.id} className={styles.game}>
            <Link href={`/pages/${item.game.slug}`}>
              <div>
                <img src={item.game.cover.url} />
                {item.game.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                    {`-${item.game.discount}`}
                  </Label.Discount>
                )}
              </div>
              <div>
                <span>{item.game.title}</span>
                <span className={styles.price}>$ {fn.calcDiscounterPrice(item.game.price, item.game.discount)}</span>
              </div>
            </Link>
            <WishlistIcon gameId={item.game.id} className={styles.wishlistIcon} removeCallback={onReload}/>
          </div>
        )
      })}
    </div>
  )
}
