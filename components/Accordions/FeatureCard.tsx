import Link from "next/link";

export default function FeatureCard() {
  return (
    <div className='p-3'>
      <div className='card text-center'>
        <div className='card-header'>
          <ul className='nav nav-tabs card-header-tabs'>
            <li className='nav-item'>
              <Link className='nav-link active' href='/common/products'>
                <a>
                  <button className='btn btn-warning btn-outline-light me-3'>
                    Our Products
                  </button>
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='true'
                href='/common/services'>
                <a>
                  <button className='btn btn-warning btn-outline-light'>
                    Our Services
                  </button>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='card-body container'>
          <div className='row'>
            <div className='col-sm-9'>
              <h5 className='card-title'>Your body deserves a treat.</h5>
              <p className='card-text'>
                Your body works hard to get through everyday, and it deserves to
                be pampered. Our selection of massage and cupping treatments is
                catered to just that. Whether you&apos;re suffering neck and
                shoulder pains induced by long hours of computer use, injuries
                caused by sports, or you want to enhance your child&apos;s
                overall health, we customise each service to your body
                condition.
              </p>
              <Link href='/login/main' className='btn btn-primary'>
                Log In To View More
              </Link>
            </div>
            <div className='col-3'>
              <img
                src='https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
                alt='smile'
                style={{ height: "200px", width: "130px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
