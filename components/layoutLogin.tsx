import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/styles.module.css";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { AuthContext } from "./AuthContext";
import { useState, useContext, useEffect } from "react";

export default function Layout({ children, home }) {
  const { cartArray } = useContext(AuthContext);
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
                <Link className='nav-link active' href='/member/mainpage'>
                  Home
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/member/sales'>
                  Shop
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/member/myorders'>
                  Order History
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/member/contact'>
                  Contact
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/member/editprofile'>
                  Edit Profile
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link active' href='/'>
                  Logout
                </Link>
              </li>
              <li className='nav-item '>
                {/* <button
                  type='button'
                  className='btn btn-success float-start'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                  data-bs-whatever='@mdo'></button>{" "} */}
                <BsCart4 /> <Link href='/member/cart'>My Cart</Link>
                <span className='position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle'>
                  <span className='visually-hidden'>New alerts</span>
                </span>
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
