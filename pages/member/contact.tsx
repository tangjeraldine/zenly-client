import Head from "next/head";
import { AuthContext } from "../../components/AuthContext";
import { useState, useContext } from "react";
import ErrorPage from "../../components/ErrorPage";

export default function Products() {
  const { userDetails } = useContext(AuthContext);
  if (userDetails?.security_lvl !== 1) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <div className='container-fluid p-5'>
        <div className='row align-items-center'>
          <div className='col'>
            <img
              src='/images/sidepic1.jpg'
              alt='sideimage'
              className='img-fluid'
            />
          </div>
          <div className='col p-3'>
            <h3>Address</h3>
            <br />
            <h5>Blk 182D Jurong West St 11</h5>
            <h5>Singapore 090909</h5>
            <br />
            <hr />
            <br />
            <h3>For Other Enquiries</h3>
            <br />
            <h5>We are available on WhatsApp, WeChat, or phone call</h5>
            <h5>at +65 91234567.</h5>
            <br />
            <h5>Please allow us 1 working day to reply you.</h5>
            <p>
              If you have purchased a massage, cupping, or treatment session
              through our site, please send us a message to book a time slot as
              soon as possible to ensure availability of slots!
            </p>
            <p style={{ color: "red" }}>
              For purchase of guasha tools and lumbar pillows, please contact us
              to arrange for your preferred mode of delivery or collection!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
