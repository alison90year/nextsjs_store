import Links from './links/page'
import Link from 'next/link'
import styles from './navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.container}>
              <Link href="/" className={styles.logo}>Logo</Link>
               <div>
               <Links />
               </div>
        </div>
    )
}



export default Navbar