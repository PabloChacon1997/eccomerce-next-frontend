import { Icon } from 'semantic-ui-react';
import styles from './WishlistIcon.module.scss'
import classNames from 'classnames';
import { WhisList } from '@/app/api';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks';

const whislistsCtrl = new WhisList();

export function WishlistIcon(props) {
  const { gameId, className, removeCallback } = props;
  const [hasWhislist, setHasWhislist] = useState(null);
  const { user } = useAuth()
  

  useEffect(() => {
    (async () => {
      try {
        const response = await whislistsCtrl.check(user.id,gameId);
        setHasWhislist(response);
      } catch (error) {
        setHasWhislist(false)
        console.error(error)
      }
    })()
  }, [gameId]);

  const addWhisList = async () => {
    const response = await whislistsCtrl.add(user.id,gameId-1);
    setHasWhislist(response);
    console.log(response);
  }
  const deleteWhisList = async () => {
    try {
      await whislistsCtrl.delete(hasWhislist.data[0].documentId);
      setHasWhislist(false);

      if(removeCallback) {
        removeCallback();
      }
    } catch (error) {
      console.error(error)
    }
  }

  
  if (hasWhislist === null) return null;
  return (
    <Icon 
      name={hasWhislist ? 'heart': 'heart outline'} 
      onClick={hasWhislist ? deleteWhisList: addWhisList} 
      className={classNames(styles.wishlistIcon, {
      [className]: className
    })} />
  )
}
