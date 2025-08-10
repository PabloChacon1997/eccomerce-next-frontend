import { JoinLayout } from '@/app/layouts'
import styles from "./sign-up.module.scss"
import Link from 'next/link'
import { RegisterForm } from '@/app/components/Auth/RegisterForm'


export default function SignUp() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crear Cuenta</h3>
          <RegisterForm />
          <div className={styles.actions}>
            <Link href="/pages/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  )
}
