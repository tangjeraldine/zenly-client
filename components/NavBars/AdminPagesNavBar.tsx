import Link from "next/link";

export default function AdminLoginNavBar() {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg fixed-top'
        style={{ backgroundColor: "#FF9F29" }}>
        <div className='container-fluid'>
          <Link className='navbar-brand' href='/'>
            <a>
              <img
                src='/images/icon_pic.png'
                alt='Logo'
                width='40'
                height='35'
                className='d-inline-block align-text-top'
              />
              <a>
                <button type='button' className='btn btn-dark'>
                  ZenLy
                </button>
              </a>
            </a>
          </Link>
          <div id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/admin/mainpage'>
                  <a>
                    <button type='button' className='btn btn-dark'>
                      Home
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/admin/viewallorders'>
                  <a>
                    <button type='button' className='btn btn-dark'>
                      View All Orders
                    </button>
                  </a>
                </Link>
              </li>
              {/* <li className='nav-item '>
                <Link className='nav-link active' href='/admin/viewallorders'>
                  Appointments
                </Link>
              </li> */}
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/admin/editgoodslist'>
                  <a>
                    <button type='button' className='btn btn-dark'>
                      Edit Goods List
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/admin/editusers'>
                  <a>
                    <button type='button' className='btn btn-dark'>
                      Member Account Status
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/'>
                  <a>
                    <button type='button' className='btn btn-dark'>
                      Logout
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
