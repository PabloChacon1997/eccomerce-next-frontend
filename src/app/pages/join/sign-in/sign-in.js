import styles from "./sign-in.module.scss"
import { JoinLayout } from "@/app/layouts"

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar Sesión</h3>
        </div>
      </JoinLayout>
    </>
  )
}
