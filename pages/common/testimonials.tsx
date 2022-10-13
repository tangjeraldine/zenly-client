import Layout from "../../components/LayoutPublic";
import Head from "next/head";
import FAQAccordion from "../../components/Accordions/FAQAccordion";

export default function Products() {
  return (
    <Layout home>
      <div>
        <Head>
          <title>FAQs and Testimonials</title>
        </Head>
        <h3 className='text-center m-3'>Frequently Asked Questions</h3>
        <FAQAccordion />
        <div className='container-fluid p-5'>
          <div className='row align-items-center'>
            <div className='col-sm p-3'>
              <h3>
                Let&apos;s hear from some of Bobby&apos;s clients over the
                years!
              </h3>
              <div
                className='card text-bg-warning mb-3 mx-auto'
                style={{ maxWidth: "24rem" }}>
                <div className='card-header'>Client: timayh</div>
                <div className='card-body'>
                  <h5 className='card-title'>&quot;Highly Engaging&quot;</h5>
                  <p className='card-text'>
                    Bobby is highly skilled and professional at what he does. He
                    is always happy to engage us and listen to what we have to
                    say and ask.
                  </p>
                </div>
              </div>
              <br />
              <div
                className='card text-bg-warning mb-3 mx-auto'
                style={{ maxWidth: "24rem" }}>
                <div className='card-header'>Client: ericolester</div>
                <div className='card-body'>
                  <h5 className='card-title'>&quot;Knows his stuff&quot;</h5>
                  <p className='card-text'>
                    The massage had just the right amount of pressure, nicely
                    done and not rushed. Bobby really knows his stuff. I felt
                    immediately relieved after the session. Highly recommended
                    and I&apos;m already looking forward to my next session!
                  </p>
                </div>
              </div>
              <br />
              <div
                className='card text-bg-warning mb-3 mx-auto'
                style={{ maxWidth: "24rem" }}>
                <div className='card-header'>Client: megankim</div>
                <div className='card-body'>
                  <h5 className='card-title'>&quot;Highly Engaging&quot;</h5>
                  <p className='card-text'>
                    Bobby is polite, straightforward and well-organised. I had a
                    very pleasant experience. The massage combined good
                    technique, the TCM and swedish ways of massage. He also gave
                    tips on how to prevent frozen shoulders. Would recommend!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm p-3 mx-auto'>
              <img
                src='https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
                alt='sideimage'
                className='d-block mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
