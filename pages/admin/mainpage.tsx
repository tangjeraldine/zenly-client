import Layout from "../../components/layoutAdmin";
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
  if (userDetails?.security_lvl !== 2) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];
  return (
    <Layout home>
      <h1>Admin Page for {name}!</h1>

      <div className='container p-3'>
        <div className='row'>
          <div className='col-sm p-3 w-25'>
            <div className='stackParent position-relative'>
              <Image
                className='stack-Img img-fluid'
                src='/images/massage2.jpg'
                alt='side'
                height={100}
                width={100}
              />
              <div className='stack-Txt position-absolute top-50 start-50 translate-middle'>
                <div className='fourWsText stack-Txt-child text-black'>
                  <Image
                    src='/images/icon_pic.png'
                    height={100}
                    width={100}
                    alt='zenly'
                  />
                  <h1 className='text-center p-4'>
                    Welcome back, <br /> {name}!
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm p-3 w-25'></div>
          <div className='col-sm w-25'></div>
        </div>
      </div>
    </Layout>
  );
}
