import { map } from 'lodash';
import styles from './Basket.module.scss'
import { Dropdown, Icon, Image } from 'semantic-ui-react';
import { fn } from '@/utils';
import { useCart } from '@/hooks';

export function Basket(props) {
  const { games } = props;

  const { changeQuantityItem, deleteItem } = useCart();

  // const options = [
  //   { key: 1, text: "1", value: 1},
  //   { key: 2, text: "2", value: 2},
  //   { key: 3, text: "3", value: 3},
  //   { key: 4, text: "4", value: 4},
  //   { key: 5, text: "5", value: 5},
  // ]
  const options = Array.from({ length: 10 }, (_, index) => {
    const number = index +1;
    return { key: number, text: String(number), value: number }
  });
  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>
      <div className={styles.block}>
        {map(games , (game) => (
          <div key={game?.id} className={styles.product}>
            <Image src={game?.cover?.url ?? ''} />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{game.title}</p>
                  <p>{game.platform.title}</p>
                </div>
                <Icon name='trash alternate online' link onClick={() => deleteItem(game.documentId)}/>
              </div>
              <div className={styles.quantity}>
                <Dropdown 
                  className='number'
                  options={options}
                  selection
                  value={game.quantity}
                  compact
                  onChange={(_, data) => changeQuantityItem(game.documentId, data.value)}
                />
                <span>
                  $ {fn.calcDiscounterPrice(game.price, game.discount)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
