import Layout from "../../components/layoutPublic";
import Head from "next/head";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
  useEffect,
} from "react";
import urlcat from "urlcat";
import axios from "axios";
import Link from "next/link";

const SERVER: string = "http://localhost:3000";

type GoodsType = {
  title: string;
  image_url: string;
  description: string;
  good_type: string;
  price: number;
};

export default function Products() {
  const [products, setProducts] = useState<GoodsType[]>([]);
  const [one, setOne] = useState<string>("this is a prop");
  useEffect(() => {
    //get tutor details to see their subjects, class levels, and class types of specific tutor
    //  const urlTutorDetails = urlcat(SERVER, `/tutor/${user._id}`);
    const url = urlcat(SERVER, "/allproducts");
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout home>
      <Head>
        <title>Our Products</title>
      </Head>
      <div>
        <div className='accordion' id='accordionPanelsStayOpenExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#panelsStayOpen-collapseOne'
                aria-expanded='true'
                aria-controls='panelsStayOpen-collapseOne'>
                We&apos;ve got some pretty good deals here.
              </button>
            </h2>
            <Link href={{ pathname: "/common/services", query: one }}>
              click me
            </Link>
            <div
              id='panelsStayOpen-collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='panelsStayOpen-headingOne'>
              <div className='accordion-body'>
                <strong>This is the first item&apos;s accordion body.</strong>{" "}
                It is shown by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It&apos;s also
                worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        {/* <h1>server is {SERVER}</h1> */}
        <div
          className='alert alert-warning alert-dismissible fade show'
          role='alert'>
          <strong>Holy guacamole!</strong> You found us at the right time.{" "}
          <br />
          We&apos;re running a promotion that ends on 30 Nov 2022. You should
          REALLY check in on some of these great deals by{" "}
          <a href='/login/main' className='alert-link'>
            logging in here
          </a>
          .
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'></button>
        </div>
        {products.map((q, index) => (
          <div key={index}>
            <p>{q.title}</p>
            <img src={q.image_url} alt='image' />
          </div>
        ))}
      </div>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/allgoods`);
//   const json = await res.json();
//   const query = json;
//   console.log(query);
//   return {
//     props: {
//       results: query,
//     },
//   };
// }

// https://easy-lime-capybara-tam.cyclic.app/allicecream
