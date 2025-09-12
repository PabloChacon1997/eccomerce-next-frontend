import { useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import { Platform } from '@/app/api';
import { map } from 'lodash';
import Link from 'next/link';
import { Image } from 'semantic-ui-react';

const platformCtrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);

  console.log(platforms)
  useEffect(() => {
      (async () => {
        try {
          const response = await platformCtrl.getAll();
          setPlatforms(response.data);
        } catch (error) {
          console.error(error);
        }
      })();
  }, []);
  
  return (
    <div className={styles.platforms}>
      {map(platforms, (platform) => (
        <Link key={platform.id} href={`/games/${platform.slug}`}>
          <Image src={platform.icon.url}/>
          { platform.title }
        </Link>
      ))}
    </div>
  )
}
