import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import RegisterModal from "../components/Modals/RegisterModal";
import CommonMainCarousel from "../components/Carousels/CommonMainCarousel";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZenLy</title>
        <meta name='description' content='ZenLy' />
        <link rel='icon' href='/favicon_zenly.ico' />
      </Head>
      <div>
        <div>
          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to ZenLy!</h1>
            <br />
            <Link href='/login/main'>
              <a>
                <button
                  type='button'
                  className='btn  btn-outline-dark'
                  style={{ backgroundColor: "#FF9F29" }}>
                  Log In
                </button>
              </a>
            </Link>
            <br />
            or
            <br />
            <Link href='/common/products'>
              <a>
                <button type='button' className='btn btn-outline-dark'>
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
            <div>
              <img
                className='d-block mx-auto m-5'
                src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
                alt='smiling'
              />
              <h3 className='m-4'>
                <strong>
                  Never let your pain deny you of what&apos;s yours.
                </strong>
              </h3>
              <h3 className='m-4'>Trust ZenLy.</h3>
              <br />
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-sm'>
                  <img
                    className='d-block mx-auto'
                    src='https://images.unsplash.com/photo-1620939068789-fc0c88ddb71e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                    alt='aches'
                  />
                </div>
                <div className='col-sm'>
                  <div className='mx-auto p-3'>
                    <h3 className='m-4'>
                      Because we understand your aches, every nook and cranny of
                      it.
                    </h3>
                    <h3 className='m-4'>
                      And we know exactly how to solve it.
                    </h3>
                    <p className='m-4 lead'>
                      Get a free 5-minute phone consultation with us by
                      registering as a new member on our site.
                      <em>
                        Only for the first 200 members to sign up on our site.
                      </em>
                    </p>
                    <p className='m-4 lead'>
                      Once you&apos;ve created your account, drop us a text at
                      +65 91234567 to secure a slot!
                    </p>
                    <p className='m-4 lead'>
                      <strong>
                        Let the experts ease your worries and of course, your
                        pains.
                      </strong>
                    </p>
                    <button
                      type='button'
                      className='btn btn-warning btn-outline-dark m-4'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                      data-bs-whatever='@mdo'>
                      Register a new account
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h3 className='m-5'>What&apos;s Going On</h3>
            <CommonMainCarousel />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
