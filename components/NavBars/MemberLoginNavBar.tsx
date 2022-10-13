import Link from "next/link";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";

export default function MemberLoginNavBar() {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg fixed-top'
        style={{ backgroundColor: "#FF9F29" }}>
        <div className='container-fluid'>
          <Link className='navbar-brand' href='/'>
            <a>
              <Image
                src='/images/icon_pic.png'
                alt='Logo'
                width='40'
                height='35'
                className='d-inline-block align-text-top'
              />
            </a>
          </Link>
          <h5>Welcome to ZenLy!</h5>
          <div id='navbarNav'>
            <ul className='navbar-nav text-black'>
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/member/mainpage'>
                  <a>
                    <button className='btn btn-outline-light'>Home</button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/member/sales'>
                  <a>
                    <button className='btn btn-outline-light'>Shop</button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/member/myorders'>
                  <a>
                    <button className='btn btn-outline-light'>
                      Order History
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/member/contact'>
                  <a>
                    <button className='btn btn-outline-light'> Contact</button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link
                  className='nav-link active'
                  href='/member/editaccountdetails'>
                  <a>
                    <button className='btn btn-outline-light'>
                      Edit Profile
                    </button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link className='nav-link active' href='/'>
                  <a>
                    <button className='btn btn-outline-light'>Logout</button>
                  </a>
                </Link>
              </li>
              <li className='nav-item me-3'>
                <Link href='/member/cart'>
                  <a>
                    <button className='btn btn-outline-dark'>
                      <BsCart4 />
                      My Cart
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
