import Head from "next/head";
import Image from "next/image";
import styles from "../styles/styles.module.css";
import Link from "next/link";
const name = "Jeraldine";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          alt='zenly'
          src='/images/wallpaper1.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Link href='/'>
        <a>{name}</a>
      </Link>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <div className='dropdown m-3'>
        <button
          className='btn btn-secondary dropdown-toggle'
          style={{ backgroundColor: "#FFCB42" }}
          type='button'
          data-bs-toggle='dropdown'
          id='dropdownMenuButton1'
          aria-expanded='false'>
          Dropdown button
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <li>
            <a className='dropdown-item' href='#'>
              Option 1
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#'>
              Option 2
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#'>
              Option 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
