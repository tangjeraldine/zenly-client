export default function MemberMainCarousel() {
  return (
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
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleDark'
        data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
}
