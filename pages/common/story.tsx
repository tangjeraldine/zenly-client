import Head from "next/head";

export default function Products() {
  return (
    <div>
      <Head>
        <title>The ZenLy Story</title>
      </Head>
      <div className='container-fluid p-5'>
        <div className='row align-items-center'>
          <div className='col'>
            <img
              src='https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              alt='sideimage'
              className='d-block mx-auto'
            />
          </div>
          <div className='col p-3'>
            <h3>The Founder</h3>
            <br />
            <h5 className='m-2'>It all starts with movement.</h5>
            <p className='m-2'>
              Back in 2011 when ZenLy&apos;s founder, Bobby, was just a student
              in NTU&apos;s Chinese Medicine and Biomedical Science course, he
              discovered his passion for applying alternative medicine
              principles to massage treatments.
            </p>
            <br />
            <p className='m-2'>
              He had the opportunity to train further in the Beijing Dongfang
              Hospital for 2 years under various reputable Chinese Medicine
              massage therapists and physicians. He converted his career fully
              into becoming a massage therapist by earning further
              accreditations at the Soha Institute.
            </p>
            <br />
            <p className='m-2'>
              To date, he has a Level 3 Diploma in Holistic Massage, allowing
              him to practice fusion TCM with Swedish massage, and has been
              doing so for the last 7 years. He now also trains other students
              in TCM massage, cupping, and Moxa techniques.
            </p>
            <hr />
            <br />
            <div
              className='card border-warning mb-3'
              style={{ maxWidth: "700px" }}>
              <div className='card-header'>
                <h5>Say Hi!</h5>
              </div>
              <div className='card-body'>
                {/* <h5 className='card-title'>Say Hi!</h5> */}
                <div className='card-text'>
                  <p className='m-2'>
                    <strong>
                      If you have any concerns regarding the treatments
                      available at ZenLy, you may contact Bobby directly via
                      WhatsApp, WeChat, or phone call at +65 91234567.
                    </strong>
                  </p>
                  <br />
                  <p className='m-2'>
                    Bobby typically replies within the day. However, during peak
                    seasons, please allow at least 1 working day for him to
                    attend to non-urgent enquiries!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
