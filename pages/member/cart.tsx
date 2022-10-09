import Layout from "../../components/layoutLogin";
import { useState, useEffect } from "react";
import urlcat from "urlcat";
import axios from "axios";

const SERVER: string = "http://localhost:3000/";

export default function MemberSales() {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    const urlCart = urlcat(SERVER, `/allcartitems/:id`);
    axios
      .get(urlCart)
      .then(({ data }) => {
        console.log(data);
        setGoods(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Layout home>
      <h1>My Shopping Cart</h1>
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
