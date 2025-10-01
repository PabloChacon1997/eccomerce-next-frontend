import { useState } from 'react'
import styles from './AddAddress.module.scss'
import { Button } from 'semantic-ui-react';
import { BasicModal } from '@/app/components/Shared/BasicModal';
import { AddressForm } from '../AddressForm';

export function AddAddress() {
  const [show, setShow] = useState(false)
  const onOpenClose = () => setShow((prevState) => !prevState);
  console.log(show)
  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>Crear</Button>

      <BasicModal show={show} onClose={onOpenClose} title='Nueva dirección'>
        <AddressForm onClose={onOpenClose}/>
      </BasicModal>
    </>
  )
}
