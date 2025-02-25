"use client"
import Link from "next/link"
import styles from "./JoinLayout.module.scss"
import { Icon } from "semantic-ui-react"

export function JoinLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <img src="/images/logo.png" alt="Gaming" />
        </Link>
        <Link href="/">
          <Icon name="close" />
        </Link>
      </div>
      <div className={styles.blockLeft}>
        {children}
      </div>

      <div className={styles.blockRight}></div>

    </div>
  )
}
