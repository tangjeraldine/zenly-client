import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/styles.module.css";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { AuthContext } from "../components/AuthContext";
import { useState, useContext, ReactNode } from "react";
import ErrorPage from "../components/ErrorPage";

interface Props {
  children?: ReactNode;
  home?: ReactNode;
}

const Layout: React.FC<Props> = ({ children, home }) => {
  const { userDetails } = useContext(AuthContext);

  // }
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon_zenly.ico' />
        <meta name='description' content='Welcome back, Admin!' />
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
          <Link className='navbar-brand' href='/'>
            <img
              src='/images/icon_pic.png'
              alt='Logo'
              width='40'
              height='35'
              className='d-inline-block align-text-top'
            />
            ZenLy
          </Link>
          <div id='navbarNav'>
            <ul className='navbar-nav text-black'>
              <li className='nav-item'>
                <Link className='nav-link active' href='/admin/mainpage'>
                  Home
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/admin/viewallorders'>
                  View All Orders
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/admin/viewallfeedback'>
                  View All Feedback
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/admin/viewallorders'>
                  Appointments
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/admin/deleteusers'>
                  Delete Users
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/'>
                  Logout
                </Link>
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
          Powered by
          <Image src='/images/next-js.svg' height={30} width={30} alt='zenly' />
        </h5>
      </nav>
    </div>
  );
};
export default Layout;
