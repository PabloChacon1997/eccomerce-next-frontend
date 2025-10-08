import { Button, Container, Image } from 'semantic-ui-react';
import styles from './Footer.module.scss';
import Link from 'next/link';

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="gaming"/>
            </Link>
          </div>
          <div>
            <ul>
              <Link href="#">Terminos y condiciones</Link>
              <Link href="#">Politicas de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">Fax</Link>
            </ul>
          </div>
          <div className={styles.social}>
            <Button as="a" href="#" circular color='facebook' icon="facebook"></Button>
            <Button as="a" href="#" circular color='twitter' icon="twitter"></Button>
            <Button as="a" href="#" circular color='linkedin' icon="linkedin"></Button>
            <Button as="a" href="#" circular color='youtube' icon="youtube"></Button>
          </div>
        </div>
        <div className={styles.copyright}>
          <span>Copyright 2025 Gaming - All rights reserved</span>
        </div>
      </Container>
    </div>
  )
}
