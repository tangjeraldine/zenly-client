import Head from "next/head";
import Image from "next/image";
import styles2 from "../../styles/styles.module.css";
import { AuthContext } from "../AuthContext";
import { useState, useContext, useEffect, ReactNode } from "react";
import MemberLoginNavBar from "../NavBars/MemberLoginNavBar";
import Footer from "../Footer/Footer";
interface Props {
  children?: ReactNode;
  home?: ReactNode;
}
const LayoutMember: React.FC<Props> = ({ children, home }) => {
  const { cartArray } = useContext(AuthContext);
  return (
    <div className={styles2.windowScroll}>
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
      <MemberLoginNavBar />
      <br />
      <main style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default LayoutMember;
