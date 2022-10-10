import Layout from "../../components/layoutPublic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import urlcat from "urlcat";
import axios from "axios";

const SERVER: string = "http://localhost:3000/";

type GoodsType = {
  title: string;
  image_url: string;
  description: string;
  good_type: string;
  price: number;
};

export default function Services() {
  const [services, setServices] = useState<GoodsType[]>([]);

  useEffect(() => {
    const url = urlcat(SERVER, "user/allservices");
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data);
        setServices(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout home>
      <Head>
        <title>Our Services</title>
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
                Hey! Check out some of the best massage treatments in Singapore.
              </button>
            </h2>
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
        <div className='card text-center'>
          <div className='card-header'>
            <ul className='nav nav-tabs card-header-tabs'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='true' href='#'>
                  Our Services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/common/products'>
                  Our Products
                </a>
              </li>
            </ul>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Your body deserves a treat.</h5>
            <p className='card-text'>
              Your body works hard to get through everyday, and it deserves to
              be pampered. Our selection of massage and cupping treatments is
              catered to just that. Whether you&apos;re suffering neck and
              shoulder pains induced by long hours of computer use, injuries
              caused by sports, or you want to enhance your child&apos;s overall
              health, we customise each service to your body condition.
            </p>
            <a href='#' className='btn btn-primary'>
              Log In To View More
            </a>
          </div>
        </div>
      </div>
      {services.map((q, index) => (
        <div key={index}>
          <p>{q.title}</p>
          <img src={q.image_url} alt='image' />
        </div>
      ))}
    </Layout>
  );
}
