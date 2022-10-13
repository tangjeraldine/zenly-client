import Head from "next/head";
import Image from "next/image";

export default function Products() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <h1 className='text-center'>Contact Us!</h1>
      <div className='container-fluid p-5'>
        <div className='row align-items-center'>
          <div className='col'>
            <Image
              src='/images/sidepic1.jpg'
              height={700}
              width={580}
              alt='sideimage'
              className='d-block mx-auto'
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
