"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import { Icon, Image } from 'semantic-ui-react'
import { map } from 'lodash';

import styles from './HeaderCart.module.scss'
import classNames from 'classnames';

export function HeaderCart() {
  const params = useSearchParams();
  const currentStep = params.get('step') ?? 1;
  console.log({currentStep});
  const steps = [
    { number: 1, title: "Cesta" },
    { number: 2, title: "Pago" },
    { number: 3, title: "Confirmación" },
  ];
  return (
    <div className={styles.headerCart}>
      <div className={styles.left}>
        <Link href="/" >
          <Image src="/images/logo.png" alt="Gaming" />
        </Link>
      </div>
      <div className={styles.center}>
        {map(steps, (step) => (
          <div key={step.number} className={classNames({
            [styles.active]: step.number === Number(currentStep),
            [styles.success]: step.number < Number(currentStep),
          })}>
            <span className={styles.number}>
              <Icon name='check' />
              {step.number}
            </span>
            <span>{step.title}</span>
            <span className={styles.space}></span>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <Icon name='lock' />
        <div>
          <span>Pago seguro</span>
          <span>226-bit SSL Secure</span>
        </div>
      </div>
    </div>
  )
}
