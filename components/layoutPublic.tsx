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
                  <Link
                    className='nav-link active'
                    aria-current='page'
                    href='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/common/story'>
                    The ZenLy Story
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/common/blog'>
                    Blog
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/common/testimonials'>
                    Our Testimonials + FAQs
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <Link
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    What We Do
                  </Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item' href='/common/products'>
                        Our Products
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='/common/services'>
                        Our Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/common/contact'>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
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
