export default function CommonMainCarousel() {
  return (
    <div
      id='carouselExampleControls'
      className='carousel slide'
      data-bs-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item mx-auto'>
          <img
            src='/images/salesbanner2.jpeg'
            className='d-block mx-auto'
            style={{ width: "800px", height: "400px" }}
            alt='banner'
          />
        </div>
        <div className='carousel-item mx-auto'>
          <img
            src='/images/salesbanner3.jpeg'
            className='d-block mx-auto'
            style={{ width: "800px", height: "400px" }}
            alt='massage'
          />
        </div>
        <div className='carousel-item active mx-auto'>
          <img
            src='/images/salesbanner1.jpeg'
            className='d-block mx-auto'
            style={{ width: "800px", height: "400px" }}
            alt='banner'
          />
        </div>
        <div className='carousel-item mx-auto'>
          <img
            src='/images/salesbanner4.jpeg'
            className='d-block mx-auto'
            style={{ width: "800px", height: "400px" }}
            alt='banner'
          />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
}
