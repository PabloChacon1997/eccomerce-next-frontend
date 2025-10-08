import { useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import { Platform } from '@/app/api';
import { map } from 'lodash';
import Link from 'next/link';
import { Icon, Image, Input } from 'semantic-ui-react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

const platformCtrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);
  const [showSearhc, setSetshowSearhc] = useState(isOpenSearch);

  const router = useRouter();

  const openCloseSearch = () => setSetshowSearhc((prevState) => !prevState);

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
  
  const onSearch = (text) => {
    router.replace(`/pages/search?s=${text}`);
  }
  
  return (
    <div className={styles.platforms}>
      {map(platforms, (platform) => (
        <Link key={platform.id} href={`/pages/games/${platform.slug}`}>
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
        <Input id="search-games" placeholder='Buscador' className={styles.input} focus={true} onChange={(_, data) => onSearch(data.value)}/>
        <Icon name='close' className={styles.closeInput} onClick={openCloseSearch} />
      </div>
    </div>
  )
}
