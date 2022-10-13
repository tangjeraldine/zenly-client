import Link from "next/link";

export default function CommonPagesNavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg fixed-top bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' href='/'>
            <a>
              <img
                src='/images/icon_pic.png'
                alt='Logo'
                width='35'
                height='40'
                className='d-inline-block align-text-top'
              />
              <button type='button' className='btn btn-light'>
                ZenLy
              </button>
            </a>
          </Link>

          <div id='navbarNav'>
            <ul className='navbar-nav text-black'>
              <li className='nav-item me-3'>
                <Link className='nav-link active' aria-current='page' href='/'>
                  <a>
                    <button type='button' className='btn btn-light'>
                      Home
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link' href='/common/story'>
                  <a>
                    <button type='button' className='btn btn-light'>
                      The ZenLy Story
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link' href='/common/blog'>
                  <a>
                    <button type='button' className='btn btn-light'>
                      Blog
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link' href='/common/testimonials'>
                  <a>
                    <button type='button' className='btn btn-light'>
                      FAQs & Testimonials
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link' href='/common/products'>
                  <a>
                    <button
                      type='button'
                      className='btn btn-warning btn-outline-light'>
                      Products
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link' href='/common/services'>
                  <a>
                    <button
                      type='button'
                      className='btn btn-warning btn-outline-light'>
                      Services
                    </button>
                  </a>
                </Link>
              </li>

              <li className='nav-item me-3'>
                <Link className='nav-link' href='/common/contact'>
                  <a>
                    <button type='button' className='btn btn-light '>
                      Contact Us
                    </button>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
