import { useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import { Platform } from '@/app/api';
import { map } from 'lodash';
import Link from 'next/link';
import { Icon, Image, Input } from 'semantic-ui-react';
import classNames from 'classnames';

const platformCtrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);
  const [showSearhc, setSetshowSearhc] = useState(false);

  const openCloseSearch = () => setSetshowSearhc((prevState) => !prevState);

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

      <button className={styles.search} onClick={openCloseSearch}>
        <Icon name='search' />
      </button>
      <div className={classNames(styles.inputContainer, {
        [styles.active]: showSearhc
      })}>
        <Input id="search-games" placeholder='Buscador' className={styles.input} focus={true}/>
        <Icon name='close' className={styles.closeInput} onClick={openCloseSearch} />
      </div>
    </div>
  )
}
