import Head from "next/head";
import Image from "next/image";
import styles2 from "../styles/styles.module.css";
import Link from "next/link";
import { ReactNode } from "react";
import CommonPagesNavBar from "./NavBars/CommonPagesNavBar";
import Footer from "./Footer/Footer";

interface Props {
  children?: ReactNode;
  home?: ReactNode;
}

const Layout: React.FC<Props> = ({ children, home }) => {
  return (
    <div className={styles2.windowScroll}>
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
      <CommonPagesNavBar />
      <br />
      <main style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
