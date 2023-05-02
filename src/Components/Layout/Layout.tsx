import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import styles from "../../styles/Layout.module.css"
import DropMenu from "./DropMenu"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.main}>
      <Header />
      <DropMenu />
      <div className={styles.container}>

        <Sidebar />
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout