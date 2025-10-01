import { Address } from '@/app/api'
import styles from './ListAddresses.module.scss'
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks';


const addressCtrl = new Address();


export function ListAddresses() {
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();


  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        setAddresses(response.data);
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  if (!addresses) return null;
  
  return (
    <div>
      <h2>ListAddresses</h2>
    </div>
  )
}
