import { DateTime } from 'luxon';
import { forEach, map } from 'lodash';

import styles from './Order.module.scss'
import { useState } from 'react';
import { BasicModal } from '@/app/components/Shared';
import { Image } from 'semantic-ui-react';
import { fn } from '@/utils';

export function Order(props) {
  const { order } = props;
  const [showModal, setShowModal] = useState(false)
  const createdAt = order?.createdAt ?  new Date(order?.createdAt).toISOString(): new Date().toISOString(); 
  const products = order?.products ?? [];
  const address = order.addressShipping;

  const openCloseModal = () => setShowModal(prevState => !prevState); 

  const getTotalProductos = () => {
    let total = 0;
    forEach(products, (product) => {
      total += product.quantity;
    })

    return total;
  }
  return (
    <>
      <div className={styles.order} onClick={openCloseModal}>
        <div>
          <span>{DateTime.fromISO(createdAt, { locale: 'es' }).toFormat("dd/MM/yyyy")}</span>
          <p>{getTotalProductos()} productos</p>
        </div>
        <p>$ {order?.totalPayment.toFixed(2) ?? 0}</p>
      </div>
      <BasicModal show={showModal} onClose={openCloseModal} title="Informacion del pedido">
        {map(products, (product) => (
          <div key={product.id} className={styles.product}>
            <Image src={product?.cover?.url ?? ''}/>
            <div>
              <div className={styles.info}>
                <div>
                  <p>{product?.title}</p>
                  <p>{product?.platform?.title ?? ''}</p>
                </div>
              </div>
              <div className={styles.quantity}>
                <span>x{product.quantity}</span>
                <span>${fn.calcDiscounterPrice(product.price, product.discount)}</span>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.address}>
          <div>
            <p className={styles.title}>{address.title}</p>
            <p className={styles.addressInfo}>{address.name}, {address.address}, {" "},
              {address.state}, {address.city}, {" "},
              {address.postal_code}
            </p>
          </div>
        </div>
        <div className={styles.total}>
          <p>Total: ${order.totalPayment.toFixed(2)}</p>
        </div>
      </BasicModal>
    </>
  )
}
