import Layout from "../../components/layoutLogin";
import urlcat from "urlcat";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import { AuthContext } from "../../components/AuthContext";
import { useState, useContext, useEffect } from "react";
import ErrorPage from "../../components/ErrorPage";
import CartValidation from "../../Validations/CartValidation";
import ViewGoodsDetailsModal from "../../components/Modals/ViewGoodsDetailsModal";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function MemberSales() {
  const [goods, setGoods] = useState([] as any[]);
  const [quantity, setQuantity] = useState<number>(0);
  const [addedToCart, setAddedToCart] = useState<boolean>(true);
  const [notAddedToCart, setNotAddedToCart] = useState<boolean>(false);
  const [goodsType, setGoodsType] = useState<boolean>(true);
  const { userDetails, setViewGoodsDets } = useContext(AuthContext);

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

  const handleChange = (e: any) => {
    setQuantity(e.target.value);
  };

  const handleViewGoodsDets = (id: number) => {
    const urlViewThisGood = urlcat(SERVER, `user/viewthisgood/${id}`);
    axios
      .get(urlViewThisGood)
      .then(({ data }) => {
        console.log(data);
        setViewGoodsDets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddToCart = (values: object) => {
    console.log(values);
    const urlCart = urlcat(SERVER, `user/addtocart/`);
    axios
      .post(urlCart, values)
      .then(({ data }) => {
        // console.log(data);
        setAddedToCart(true);
        alert("Item added to cart!");
      })
      .catch((error) => {
        console.log(error);
        console.log("Item already exists in cart");
        setAddedToCart(false);
        alert(
          "Failed to add to cart. Please check your cart - this item may already be there!"
        );
      });
  };

  const name = userDetails.full_name.split(" ")[0];
  return (
    <Layout home>
      <div>
        <h1>hi {name}</h1>
        <div className='container'>
          {goods.map((each, index) => (
            <div key={index}>
              <Formik
                initialValues={{
                  quantity: "",
                  User_id: userDetails.id,
                  Goods_id: each.id,
                }}
                validationSchema={CartValidation}
                onSubmit={(values) => handleAddToCart(values)}>
                {({
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  initialValues,
                }) => (
                  <div>
                    <div
                      key={index}
                      className='card w-75 row justify-content-center'>
                      <img
                        src={each.image_url}
                        alt='image'
                        className='bd-placeholder-img card-img-top'
                        width='100%'
                        height='400'
                      />
                      <div className='card-body'>
                        <button
                          type='button'
                          className='btn btn-primary'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModal'
                          data-bs-whatever='@getbootstrap'
                          onClick={() => handleViewGoodsDets(each.id)}>
                          <h4 className='card-title'>{each.title}</h4>
                        </button>
                        <h5 className='card-text text-muted'>${each.price}</h5>
                        <hr />
                        <Form>
                          <label htmlFor='Quantity'>
                            <h5>Quantity</h5>
                          </label>
                          <div>
                            <Field
                              id='quantity'
                              name='quantity'
                              type='number'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.quantity}
                              placeholder='0'
                            />
                            {errors.quantity && touched.quantity ? (
                              <div>{errors.quantity}</div>
                            ) : null}
                          </div>
                          <br />
                          <button
                            type='submit'
                            className='btn btn-outline-dark'
                            style={{ backgroundColor: "#5BB318" }}
                            disabled={
                              !(
                                Object.keys(errors).length === 0 &&
                                Object.keys(touched).length !== 0
                              )
                            }>
                            Add To Cart
                          </button>
                          <br />
                          {/* {!addedToCart && (
                          <p>
                            Failed to add to cart. Please try again or check
                            your cart to see if item is already in there!
                          </p>
                        )} */}
                        </Form>
                        <span className='badge text-bg-success'>
                          {each.goods_type}
                        </span>
                        <br />
                      </div>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          ))}
          {/* using formik */}
          <ViewGoodsDetailsModal />
        </div>
      </div>
    </Layout>
  );
}
