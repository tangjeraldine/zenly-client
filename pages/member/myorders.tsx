import Layout from "../../components/layoutLogin";
import urlcat from "urlcat";
import axios from "axios";
import { AuthContext } from "../../components/AuthContext";
import { useState, useContext, useEffect } from "react";
import ErrorPage from "../../components/ErrorPage";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function MemberSales() {
  const [goods, setGoods] = useState([]);
  const { token, setToken, userDetails } = useContext(AuthContext);

  useEffect(() => {
    const urlGoods = urlcat(SERVER, `/user/all`);
    axios
      .get(urlGoods)
      .then(({ data }) => {
        console.log(data);
        setGoods(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (userDetails?.security_lvl !== 1) {
    return <ErrorPage />;
  }

  const name = userDetails.full_name.split(" ")[0];

  return (
    <Layout home>
      <h1>This is the order history page, {name}</h1>
      <div className='container'>
        {goods.map((each, index) => (
          <div key={index} className='card w-75 row justify-content-center'>
            <img
              src={each.image_url}
              alt='image'
              className='bd-placeholder-img card-img-top'
              width='100%'
              height='400'
            />
            <div className='card-body'>
              <h4 className='card-title'>{each.title}</h4>
              <h5 className='card-text text-muted'>${each.price}</h5>
              <hr />
              <p className='card-text'>{each.description}</p>
              <button
                type='button'
                className='btn btn-danger btn-outline-light'>
                Add to Cart
              </button>
              <span className='badge text-bg-success'>{each.goods_type}</span>
              <br />
              <br />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
