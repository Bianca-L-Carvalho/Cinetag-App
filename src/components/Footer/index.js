import { MarkGithubIcon } from "@primer/octicons-react"
import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <a className={styles.text} href="https://github.com/Bianca-L-Carvalho"><MarkGithubIcon size={23} />Bianca-L-Carvalho</a>
        </footer>
    )
}