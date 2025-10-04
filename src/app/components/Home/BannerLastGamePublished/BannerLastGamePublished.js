import { useEffect, useState } from 'react'
import { Container, Image } from 'semantic-ui-react';
import Link from 'next/link';

import { Game } from '@/app/api';
import styles from './BannerLastGamePublished.module.scss'
import { DateTime } from 'luxon';
import { fn } from '@/utils';
import { Label } from '../../Shared';


const gameCtrl = new Game();


export  function BannerLastGamePublished() {
  const [game, setGame] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    })()
  }, [])

  if(!game) return null;
  const releaseDate = new Date(game.releaseDate).toISOString();
  const price = fn.calcDiscounterPrice(game.price, game.discount);
  
  return (
    <div className={styles.container}>
      <Image src={game.wallpaper.url} className={styles.wallpaper}/>

      <Link className={styles.inforContainer} href={game.slug}>
        <Container>
          <span className={styles.date}>{DateTime.fromISO(releaseDate).minus({days: 1}).toRelative()}</span>
          <h2>{game.title}</h2>
          <p className={styles.price}>
            <Label.Discount>{game.discount}%</Label.Discount>
            <span className={styles.finalPrice}>$ {price}</span>
          </p>
        </Container>
      </Link>
    </div>
  )
}
