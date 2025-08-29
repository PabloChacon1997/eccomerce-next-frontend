import Link from "next/link"
import styles from "./sign-in.module.scss"
import { JoinLayout } from "@/app/layouts"
import { LoginForm } from "@/app/components/Auth"

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar Sesión</h3>
          <LoginForm />
          <div className={styles.actions}>
            <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  )
}
