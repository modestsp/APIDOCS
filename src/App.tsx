import './App.css'
import DisplayCode from './Components/DisplayCode'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import styles from "../src/styles/DocsPage.module.css"

function App() {

  return (
    <main className={styles.DocsPage}
    >
      <Header />
      <div className={styles.mainContent}>
        <Sidebar />
        <DisplayCode />
      </div>
      <Footer />
    </main>
  );
}

export default App
