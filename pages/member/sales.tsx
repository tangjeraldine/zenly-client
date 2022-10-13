
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
  const [loading, setLoading] = useState<boolean>(false);
  const [adding, setAdding] = useState<boolean>(false);
  const { userDetails, setViewGoodsDets } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const urlGoods = urlcat(SERVER, `/user/all`);
    axios
      .get(urlGoods)
      .then(({ data }) => {
        // console.log(data);
        setLoading(false);
        setGoods(data);
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
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
        // console.log(data);
        setViewGoodsDets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddToCart = (values: object) => {
    setAdding(true);
    // console.log(values);
    const urlCart = urlcat(SERVER, `user/addtocart/`);
    axios
      .post(urlCart, values)
      .then(({ data }) => {
        // console.log(data);
        setAddedToCart(true);
        setAdding(false);
        alert("Item added to cart!");
      })
      .catch((error) => {
        // console.log(error);
        console.log("Item already exists in cart");
        setAdding(false);
        setAddedToCart(false);
        alert(
          "Failed to add to cart. Please check your cart - this item may already be there!"
        );
      });
  };

  const name = userDetails.full_name.split(" ")[0];

  return (
    <div>
      {loading ? (
        <p className='placeholder-glow p-5'>
          Loading...
          <span className='placeholder col-12'></span>
        </p>
      ) : (
        <div>
          <h1 className='text-center p-4 display-6'>
            Hey {name}, check out our latest products and services!
          </h1>
          <div className='container'>
            {goods.map((each, index) => (
              <div key={index}>
                <Formik
                  initialValues={{
                    quantity: "",
                    User_id: userDetails?.id,
                    Goods_id: each?.id,
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
                        className='card mb-3 mx-auto'
                        style={{ maxWidth: "700px" }}>
                        <div className='row g-0'>
                          <div className='col-md-4 p-2'>
                            <img
                              src={each?.image_url}
                              className='img-fluid rounded-start'
                              alt='item'
                            />
                          </div>
                          <div className='col-md-8 p-2'>
                            <div className='card-text'>
                              <span className='badge text-bg-success float-end'>
                                {each.goods_type}
                              </span>
                              <button
                                type='button'
                                className='btn btn-outline-dark m-3'
                                data-bs-toggle='modal'
                                data-bs-target='#exampleModal'
                                data-bs-whatever='@getbootstrap'
                                onClick={() => handleViewGoodsDets(each.id)}>
                                <h5 className='card-title'>{each?.title}</h5>
                              </button>
                              <p>
                                <em>Click for more info</em>
                              </p>
                              <h4 className='card-text text-muted'>
                                Price: ${each?.price}
                              </h4>
                              <hr />
                              <Form>
                                <label htmlFor='Quantity'>
                                  <h5>Quantity:</h5>
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
                                {adding ? (
                                  <button
                                    className='btn btn-outline-dark'
                                    style={{ backgroundColor: "#5BB318" }}
                                    type='button'
                                    disabled>
                                    <span
                                      className='spinner-border spinner-border-sm'
                                      role='status'
                                      aria-hidden='true'></span>
                                    Loading...
                                  </button>
                                ) : (
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
                                )}
                                <br />
                              </Form>

                              <br />
                            </div>
                            <p className='card-text'>
                              <small className='text-muted'>
                                Last updated 1 week ago
                              </small>
                            </p>
                          </div>
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
      )}
    </div>
  );
}
