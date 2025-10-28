import { DateTime } from 'luxon';
import { forEach } from 'lodash';

import styles from './Order.module.scss'

export function Order(props) {
  const { order } = props;
  const createdAt = order?.createdAt ?  new Date(order?.createdAt).toISOString(): new Date().toISOString(); 
  const products = order?.products ?? [];
  const getTotalProductos = () => {
    let total = 0;
    forEach(products, (product) => {
      total += product.quantity;
    })

    return total;
  }
  return (
    <>
      <div className={styles.order}>
        <div>
          <span>{DateTime.fromISO(createdAt, { locale: 'es' }).toFormat("dd/MM/yyyy")}</span>
          <p>{getTotalProductos()} productos</p>
        </div>
        <p>$ {order?.totalPayment.toFixed(2) ?? 0}</p>
      </div>
    </>
  )
}
