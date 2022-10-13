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
import MemberMainCarousel from "../../components/Carousels/MemberMainCarousel";

export default function MemberMain() {
  const { userDetails } = useContext(AuthContext);
  if (userDetails?.security_lvl !== 1) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  return (
    <div>
      <MemberMainCarousel />
      <h1 className='display-3 text-center'>Hi there, {name}!</h1>
      <div className='container p-3'>
        <div className='row'>
          <div className='col-3 p-3'>
            <div className='stackParent position-relative'>
              <img
                className='stack-Img img-fluid'
                src='/images/massage3.jpg'
                alt='side'
              />
              <div className='stack-Txt position-absolute top-50 start-50 translate-middle'>
                <div className='fourWsText stack-Txt-child text-black'>
                  <Image
                    src='/images/icon_pic.png' // Route of the image file
                    height={60} // Desired size with correct aspect ratio
                    width={60} // Desired size with correct aspect ratio
                    alt='zenly'
                  />
                  <p className='lead' style={{ color: "white" }}>
                    <strong>
                      Never miss a game again. Get back on your feet with our
                      Sports Injury treatment package.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-9 p-3'>
            <h2 className='text-center p-2'>
              <span className='badge rounded-pill text-bg-warning'>
                Latest Articles
              </span>
            </h2>
            <div className=' bg-light p-3 rounded-2 h-25 overflow-scroll'>
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
            <hr />
            <h2 className='text-center p-2'>
              <span className='badge rounded-pill text-bg-success'>Videos</span>
            </h2>

            <div className=' bg-light p-3 rounded-2 h-25 overflow-scroll'>
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
  );
}
