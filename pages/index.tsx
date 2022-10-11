import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layoutPublic";
import RegisterModal from "../components/Modals/RegisterModal";

const Home: NextPage = () => {
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>ZenLy</title>
          <meta
            name='description'
            content='ZenLy, your health and wellness station'
          />
          <link rel='icon' href='/favicon_zenly.ico' />
        </Head>
        <div>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-bs-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item mx-auto'>
                <img
                  src='/images/salesbanner1.jpeg'
                  className='d-block w-100'
                  style={{ width: "800px", height: "400px" }}
                  alt='banner'
                />
              </div>
              <div className='carousel-item mx-auto'>
                <img
                  src='/images/salesbanner3.jpeg'
                  className='d-block w-100'
                  style={{ width: "800px", height: "400px" }}
                  alt='massage'
                />
              </div>
              <div className='carousel-item active mx-auto'>
                <img
                  src='/images/salesbanner2.jpeg'
                  className='d-block w-100'
                  style={{ width: "800px", height: "400px" }}
                  alt='banner'
                />
              </div>
              <div className='carousel-item mx-auto'>
                <img
                  src='/images/salesbanner4.jpeg'
                  className='d-block w-100'
                  style={{ width: "800px", height: "400px" }}
                  alt='banner'
                />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='prev'>
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='next'>
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
          <div>
            <main className={styles.main}>
              <h1 className={styles.title}>Welcome to ZenLy!</h1>
              <br />
              <Link href='/login/main'>
                <a>
                  <button
                    type='button'
                    className='btn  btn-outline-dark btn-info'>
                    Log In
                  </button>
                </a>
              </Link>
              <br />
              or
              <Link href='/common/products'>
                <a>
                  <button
                    type='button'
                    className='btn btn-outline-dark'
                    // style={{ backgroundColor: "#FF9F29" }}
                  >
                    View Our Products & Services
                  </button>
                </a>
              </Link>
              <br />
              <section>
                Not a member yet?
                <button
                  type='button'
                  className='btn btn-link'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                  data-bs-whatever='@mdo'>
                  Register a new account
                </button>
                with us.
              </section>
              <RegisterModal />
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
