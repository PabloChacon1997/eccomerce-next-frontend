import { Button, Icon } from 'semantic-ui-react'
import styles from './StepThree.module.scss'
import Link from 'next/link'

export function StepThree() {
  return (
    <div className={styles.stepThree}>
      <Icon name='check circle outline' />
      <h2>Compra exitosa</h2>

      <Button as={Link} href="/pages/account" primary>
        Ver pedido
      </Button>
    </div>
  )
}
