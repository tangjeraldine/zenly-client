import Layout from "../../components/LayoutLogin";
import Image from "next/image";
import {
  InstagramEmbed,
  YouTubeEmbed,
  TikTokEmbed,
  FacebookEmbed,
} from "react-social-media-embed";
import { AuthContext } from "../../components/AuthContext";
import { useState, useContext } from "react";
import ErrorPage from "../../components/ErrorPage";

export default function MemberMain() {
  const { userDetails } = useContext(AuthContext);
  if (userDetails?.security_lvl !== 1) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  return (
    <Layout home>
      <div>
        <h3>Welcome back, {name}</h3>
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

        <div className='container p-3'>
          <div className='row'>
            <div className='col-sm p-3 w-25'>
              <div className='stackParent position-relative'>
                <img
                  className='stack-Img img-fluid'
                  src='/images/massage2.jpg'
                  alt='side'
                />
                <div className='stack-Txt position-absolute top-50 start-50 translate-middle'>
                  <div className='fourWsText stack-Txt-child text-black'>
                    <Image
                      src='/images/icon_pic.png' // Route of the image file
                      height={100} // Desired size with correct aspect ratio
                      width={100} // Desired size with correct aspect ratio
                      alt='zenly'
                    />
                    <h1 className='text-center p-4'>
                      Welcome back, <br /> {name}!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm p-3 w-25'>
              <h2 className='text-center p-2'>
                <span className='badge rounded-pill text-bg-warning'>
                  Latest Articles
                </span>
              </h2>
              <div className=' bg-light p-3 rounded-2 h-25 overflow-auto'>
                <iframe
                  src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMothershipSG%2Fposts%2Fpfbid02sxueMfMBQ7aMSp8JLSqHaSzoVCPgguQNWCWMhWLpXzZhWYGvVn7YB4C7K7h6vNqhl&show_text=true&width=500'
                  width='500'
                  height='545'
                  scrolling='no'
                  frameBorder={0}
                  allowFullScreen={true}
                  allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>
                <iframe
                  src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffeelfreetaichi%2Fposts%2F683143525192263&show_text=true&width=500'
                  width='500'
                  height='551'
                  scrolling='no'
                  frameBorder={0}
                  allowFullScreen={true}
                  allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>
              </div>
            </div>
            <div className='col-sm w-25'>
              <h2 className='text-center p-2'>
                <span className='badge rounded-pill text-bg-success'>
                  Videos
                </span>
              </h2>

              <div className=' bg-light p-3 rounded-2 h-25 overflow-auto'>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <FacebookEmbed
                    url=' https://www.facebook.com/watch/?v=376044129753467'
                    width={550}
                  />
                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <InstagramEmbed
                    url='https://www.instagram.com/p/CfWSKkNpMaQ/?hl=en'
                    width={328}
                  />
                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <TikTokEmbed
                    url='https://www.tiktok.com/@sunwayctm/video/7035487564106599686?is_from_webapp=v1&item_id=7035487564106599686&lang=en'
                    width={325}
                  />
                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <YouTubeEmbed
                    url='https://www.youtube.com/watch?v=InlxUxtVWaE'
                    width={325}
                    height={220}
                  />
                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <YouTubeEmbed
                    url='https://www.youtube.com/watch?v=m-eVqNEhnI4'
                    width={325}
                    height={220}
                  />
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
