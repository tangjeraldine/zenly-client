import Layout from "../../components/layoutAdmin";
import { AuthContext } from "../../components/AuthContext";
import urlcat from "urlcat";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ErrorPage from "../../components/ErrorPage";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function AdminMain() {
  const { userDetails } = useContext(AuthContext);
  const [pendingOrders, setPendingOrders] = useState([] as any[]);

  if (userDetails?.security_lvl !== 2) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  useEffect(() => {
    const urlAllPendingOrders = urlcat(SERVER, `admin/allpendingorders/`);
    axios
      .get(urlAllPendingOrders)
      .then(({ data }) => {
        console.log(data);
        setPendingOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout home>
      <div>
        <h3>Welcome back, {name}</h3>
        <h5>Here are your statistics in a glance:</h5>
        <div
          id='carouselExampleDark'
          className='carousel carousel-dark slide p-3'
          data-bs-ride='carousel'>
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to='0'
              className=''
              aria-label='Slide 1'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to='1'
              aria-label='Slide 2'
              className=''></button>
            <button
              type='button'
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to='2'
              aria-label='Slide 3'
              className='active'
              aria-current='true'></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item' data-bs-interval='5000'>
              <img
                alt='banner1'
                src='/images/banner1.JPG'
                className='bd-placeholder-img bd-placeholder-img-lg d-block mx-auto'
                style={{ width: "800px", height: "400px" }}></img>
              <h2>Total Orders Pending: {pendingOrders.length}</h2>
            </div>
            <div className='carousel-item' data-bs-interval='2000'>
              <img
                alt='banner1'
                src='/images/banner2.JPG'
                className='bd-placeholder-img bd-placeholder-img-lg d-block mx-auto'
                style={{ width: "800px", height: "400px" }}></img>
            </div>
            <div className='carousel-item active'>
              <img
                alt='banner1'
                src='/images/banner3.JPG'
                className='bd-placeholder-img bd-placeholder-img-lg d-block mx-auto'
                style={{ width: "800px", height: "400px" }}></img>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide='prev'>
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide='next'>
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </Layout>
  );
}
