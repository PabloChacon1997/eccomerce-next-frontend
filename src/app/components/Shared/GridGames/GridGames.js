import { map } from 'lodash';
import styles from './GridGames.module.scss';
import Link from 'next/link';
import { Label } from '../Label';
import { fn } from '@/utils';


export  function GridGames(props) {
  const { games } = props;
  console.log(games)
  return (
    <div className={styles.gridGames}>
      {map(games,  (game) => (
        <Link key={game.id} href={`/pages/${game.slug}`} className={styles.game}>
          <div>
            <img src={game.cover.url}/>
            {game.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${game.discount}`}
              </Label.Discount>
            )}
          </div>
          <div>
            <span>{game.title}</span>
            <span className={styles.price}>$ {fn.calcDiscounterPrice(game.price, game.discount)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
