import Layout from "../../components/layoutLogin";
import Image from "next/image";
import {
  InstagramEmbed,
  YouTubeEmbed,
  TikTokEmbed,
  FacebookEmbed,
} from "react-social-media-embed";

export default function MemberMain() {
  return (
    <Layout home>
      <h1>Admin Page!</h1>

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
                    Welcome back, <br /> XXX!
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
                frameborder='0'
                allowfullscreen='true'
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>
              <iframe
                src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffeelfreetaichi%2Fposts%2F683143525192263&show_text=true&width=500'
                width='500'
                height='551'
                scrolling='no'
                frameborder='0'
                allowfullscreen='true'
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>
            </div>
          </div>
          <div className='col-sm w-25'>
            <h2 className='text-center p-2'>
              <span className='badge rounded-pill text-bg-success'>Videos</span>
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
    </Layout>
  );
}
