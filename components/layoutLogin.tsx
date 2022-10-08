import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/styles.module.css";
import { BsCart4 } from "react-icons/bs";
import Link from "next/link";
import RegisterModal from "./Modals/RegisterModal";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon_zenly.ico' />
        <meta name='description' content='Welcome back to ZenLy!' />
      </Head>
      <div className={styles2.bgWrap}>
        <Image
          alt='zenly'
          src='/images/wallpaper3.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <nav
        className='navbar navbar-expand-lg fixed-top'
        style={{ backgroundColor: "#FF9F29" }}>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img
              src='/images/icon_pic.png'
              alt='Logo'
              width='40'
              height='35'
              className='d-inline-block align-text-top'
            />
            ZenLy
          </a>
          <div id='navbarNav'>
            <ul className='navbar-nav text-black'>
              <li className='nav-item'>
                <a className='nav-link active' href='/member/mainpage'>
                  Home
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link active' href='/member/sales'>
                  Shop
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link active' href='/member/myorders'>
                  Order History
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link active' href='/common/contact'>
                  Contact
                </a>
              </li>
              <li className='nav-item '>
                <button
                  type='button'
                  className='btn btn-success float-start'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                  data-bs-whatever='@mdo'>
                  <BsCart4 /> My Cart
                  <span className='badge text-bg-danger'>4</span>
                </button>{" "}
                <RegisterModal />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <main style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        {children}
      </main>
      <nav
        className='navbar fixed-bottom text-middle'
        style={{
          backgroundColor: "#5BB318",
          color: "white",
          padding: "1rem",
        }}>
        <h5>
          Powered by{" "}
          <Image src='/images/next-js.svg' height={30} width={30} alt='zenly' />
        </h5>
      </nav>
    </div>
  );
}
