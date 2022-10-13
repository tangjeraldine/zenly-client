import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/styles.module.css";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { AuthContext } from "./AuthContext";
import { useState, useContext, ReactNode } from "react";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer/Footer";
import AdminLoginNavBar from "./NavBars/AdminPagesNavBar";

interface Props {
  children?: ReactNode;
  home?: ReactNode;
}

const Layout: React.FC<Props> = ({ children, home }) => {
  const { userDetails } = useContext(AuthContext);

  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon_zenly.ico' />
        <meta name='description' content='Welcome back, Admin!' />
      </Head>
      <div className={styles2.bgWrap}>
        <Image
          alt='zenly'
          src='/images/wallpaper2.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <AdminLoginNavBar />
      <br />
      <main style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
