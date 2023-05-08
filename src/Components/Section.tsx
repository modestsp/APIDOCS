import DisplayCode from "./DisplayCode"
import styles from '../styles/Section.module.css'

interface ISection {
  request: string
  response: string
  id?: string
  aditionalContent?: string
  title: string
  lang: string
}
const Section = ({ title, lang, request, response, id, aditionalContent }: ISection) => {
  return (
    <section id={id} className={styles.section}>
      <p className={styles.title}>👉️{title}</p>
      <span className={styles.subtitle}>Request</span>
      <DisplayCode code={request} lang={lang} />
      <span className={styles.subtitle}>Response</span>
      <DisplayCode code={response} lang="json" />
      <p className={styles.aditionalContent}>{aditionalContent}</p>
    </section>
  )
}

export default Section