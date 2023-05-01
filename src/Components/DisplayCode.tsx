import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface IDisplayCode {
  code: string
  lang: string
}
const DisplayCode = ({ code, lang }: IDisplayCode) => {
  const [copy, setCopy] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "grey" }}>
        <p>Example code</p>
        {copy ?
          <button>Copied!</button>
          :
          <button onClick={() => {
            navigator.clipboard.writeText(code);
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 3000)
          }}>Copy!</button>
        }
      </div>
      <SyntaxHighlighter language={lang} style={
        atomOneDark
        // monokaiSublime
      } customStyle={{
        margin: '0px',

        boxShadow: '1px 2px 5px 0px rgba(0,0,0,0.75)',
        fontSize: '1rem',
        borderRadius: '0.25rem'
      }}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default DisplayCode