import Link from 'next/link';
import styles from './TopBar.module.scss';
import { Image } from 'semantic-ui-react';
import { Account } from '../Account';

export function TopBar(props) {
  const {isOpenSearch} = props
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming"/>
        </Link>
      </div>
      <div className={styles.center}>
        <span>MENU</span>
      </div>
      <div className={styles.rigth}>
        <Account />
      </div>
    </div>
  )
}
