import { useEffect, useState } from 'react';
import { map } from 'lodash';

import { Address as AddressCtrl} from '@/app/api'
import styles from './ListAddresses.module.scss'
import { useAuth } from '@/hooks';
import { Address } from './Address'


const addressCtrl = new AddressCtrl();


export function ListAddresses(props) {
  const { reload, onReload } = props;
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();

  console.log(addresses);

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        setAddresses(response.data);
      } catch (error) {
        console.error(error)
      }
    })()
  }, [reload])

  if (!addresses) return null;
  
  return (
    <div className={styles.addresses}>
      {map(addresses, (address) => (
        <Address key={address.id} addressId={address.documentId} address={address} onReload={onReload}/>
      ))}
    </div>
  )
}
