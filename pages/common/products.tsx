import Head from "next/head";
import { useState, useEffect } from "react";
import urlcat from "urlcat";
import axios from "axios";
import Link from "next/link";
import GoodDealsAccordion from "../../components/Accordions/GoodDealsAccordion";
import HolyGuacNotification from "../../components/Notifications/HolyGuacNotification";
import FeatureCard from "../../components/Accordions/FeatureCard";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

type GoodsType = {
  title: string;
  image_url: string;
  description: string;
  good_type: string;
  price: number;
};

export default function Products() {
  const [products, setProducts] = useState<GoodsType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = urlcat(SERVER, "user/allproducts");
    axios
      .get(url)
      .then(({ data }) => {
        // console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Our Products</title>
      </Head>
      <div>
        <HolyGuacNotification />
        <GoodDealsAccordion />
        <FeatureCard />
        {loading && (
          <p className='placeholder-glow p-5'>
            Loading...
            <span className='placeholder col-12'></span>
          </p>
        )}
        {products.map((q, index) => (
          <div
            key={index}
            className='card mb-3 mx-auto'
            style={{ maxWidth: "640px" }}>
            <div className='row g-0'>
              <div className='col-md-4'>
                <img
                  src={q.image_url}
                  className='img-fluid rounded-start'
                  alt='item'
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                  <h5 className='card-title'>{q.title}</h5>
                  <p className='card-text'>Log in to view details!</p>
                  <p className='card-text'>
                    <small className='text-muted'>
                      Last updated 1 week ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
