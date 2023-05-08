import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { MdOutlineDone } from 'react-icons/md'
import styles from '../styles/DisplayCode.module.css'

interface IDisplayCode {
  code: string
  lang: string
}
const DisplayCode = ({ code, lang }: IDisplayCode) => {
  const [copy, setCopy] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <p>Example code</p>
        {copy ?
          <div className={styles.copyContainer}>
            <MdOutlineDone className={styles.copyIcon} />
            <button className={styles.copyButton}>Copied!</button>
          </div>
          :
          <div className={styles.copyContainer}>
            <HiOutlineClipboardCopy className={styles.copyIcon} />
            <button className={styles.copyButton} onClick={() => {
              navigator.clipboard.writeText(code);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000)
            }}>Copy code</button>
          </div>
        }
      </div>
      <SyntaxHighlighter language={lang} style={
        atomOneDark
        // monokaiSublime
      } customStyle={{
        margin: '0px',
        fontSize: '1rem',
      }}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default DisplayCode