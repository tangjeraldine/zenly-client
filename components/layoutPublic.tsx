import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/styles.module.css";
import Link from "next/link";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon_zenly.ico' />
        <meta
          name='description'
          content='ZenLy, your health and wellness station'
        />
      </Head>
      <div className={styles2.bgWrap}>
        <Image
          alt='zenly'
          src='/images/wallpaper1.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <nav className='navbar fixed-top bg-light'>
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
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            // tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'>
            <div className='offcanvas-header'>
              <h4 className='offcanvas-title' id='offcanvasNavbarLabel'>
                Look good. Feel good. <br />
                With Zenly.
              </h4>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    The ZenLy Story
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Blog
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Our Testimonials
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    What We Do
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Our Products
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Our Services
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <main style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        {children}
      </main>
      <nav
        className='navbar fixed-bottom'
        style={{
          backgroundColor: "#5BB318",
          color: "white",
          padding: "2rem",
        }}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{" "}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </nav>
    </div>
  );
}
