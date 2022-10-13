import Layout from "../../components/LayoutLogin";
import urlcat from "urlcat";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import { AuthContext } from "../../components/AuthContext";
import {
  useState,
  useContext,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import ErrorPage from "../../components/ErrorPage";
import CartValidation from "../../Validations/CartValidation";
import Link from "next/link";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function MemberSales() {
  const { userDetails, cartArray, setCartArray } = useContext(AuthContext);
  const [cartEdited, setCartEdited] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [updating, setUpdating] = useState<boolean>(false);
  const userID = userDetails?.id;

  useEffect(() => {
    setLoading(true);
    const urlViewMyCart = urlcat(SERVER, `user/allcartitems/${userID}`);
    axios
      .get(urlViewMyCart)
      .then(({ data }) => {
        // console.log("data", data);
        setLoading(false);
        setCartArray(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  if (userDetails?.security_lvl !== 1) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  const handleEditCart = (values: object) => {
    setUpdating(true);
    // console.log(values);
    const urlCart = urlcat(SERVER, `user/edititemquantity/`);
    axios
      .put(urlCart, values)
      .then(({ data }) => {
        // console.log(data);
        setCartEdited(true);
        setUpdating(false);

        alert("Item quantity has been updated!");
      })
      .catch((error) => {
        console.log(error);
        setCartEdited(false);
        setUpdating(false);
      });
  };

  const handleRemoveCartItem = (values: any) => {
    console.log(values);
    // console.log("1", cartArray);
    const cartItemID: number = values?.cartItem_id;
    const urlDeleteFromCart = urlcat(
      SERVER,
      `user/removecartitem/${cartItemID}`
    );
    axios
      .delete(urlDeleteFromCart)
      .then(({ data }) => {
        // console.log(data);
        alert("Item deleted!");
        //? filter the deleted item out? or re-render page (but cannot refresh)
        setCartArray(
          cartArray.filter((del: { id: number }) => del.id !== cartItemID)
        );
        // console.log("2", cartArray);
      })
      .catch((error) => {
        // console.log(error);
        if (error.response.data.msg === "Item not deleted") {
          alert("Item was not deleted. Please try again later.");
        }
        // setCartEdited(false);
      });
  };

  return (
    <Layout home>
      <div>
        <h1 className='text-center p-3 display-6'>
          Shopping Cart: You have a total of {cartArray.length} item(s) to
          checkout! <br />
          <Link href='/member/checkout'>
            <a>
              <button type='button' className='btn btn-success btn-lg'>
                Take Me To Checkout!
              </button>
            </a>
          </Link>
        </h1>

        {loading ? (
          <p className='placeholder-glow p-5'>
            Loading...
            <span className='placeholder col-12'></span>
          </p>
        ) : (
          <div className='container'>
            {cartArray.map(
              (
                cartitem: {
                  quantity: number;
                  Goods_id: number;
                  id: number;
                  image_url: string;
                  title: string;
                  price: number;
                },
                index: number
              ) => (
                <div className='container' key={index}>
                  <Formik
                    initialValues={{
                      quantity: cartitem?.quantity,
                      User_id: userDetails.id,
                      Goods_id: cartitem?.Goods_id,
                      cartItem_id: cartitem?.id,
                      // purchase_price: cartitem.price,
                    }}
                    validationSchema={CartValidation}
                    onSubmit={(values) => handleEditCart(values)}
                    onReset={(values) => handleRemoveCartItem(values)}>
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
                                src={cartitem.image_url}
                                alt='image'
                                className='img-fluid rounded-start'
                              />
                            </div>
                            <div className='col-md-8 p-2'>
                              <div className='card-text'>
                                <h4 className='card-title'>
                                  Title: {cartitem.title}
                                </h4>
                              </div>
                              <h5 className='card-text text-muted'>
                                Price: ${cartitem.price}
                              </h5>
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
                                    min={0}
                                    max={5}
                                  />
                                  {errors.quantity && touched.quantity ? (
                                    <div>{errors.quantity}</div>
                                  ) : null}
                                </div>
                                <br />
                                {updating ? (
                                  <button
                                    className='btn btn-outline-dark mb-3'
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
                                    className='btn btn-outline-dark mb-3'
                                    style={{ backgroundColor: "#5BB318" }}
                                    disabled={
                                      !(
                                        Object.keys(errors).length === 0 &&
                                        Object.keys(touched).length !== 0
                                      )
                                    }>
                                    Update Quantity
                                  </button>
                                )}

                                {!cartEdited && (
                                  <p>
                                    Failed to Update quantity. Please try again.
                                  </p>
                                )}
                                <br />
                                <button type='reset' className='btn btn-danger'>
                                  Remove Item
                                </button>
                              </Form>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Formik>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
