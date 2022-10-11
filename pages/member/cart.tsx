import Layout from "../../components/layoutLogin";
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

  const [cartEdited, setCartEdited] = useState(true);
  const userID = userDetails?.id;

  useEffect(() => {
    const urlViewMyCart = urlcat(SERVER, `user/allcartitems/${userID}`);
    axios
      .get(urlViewMyCart)
      .then(({ data }) => {
        console.log("data", data);
        setCartArray(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (userDetails?.security_lvl !== 1) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  const handleEditCart = (values: object) => {
    // console.log(values);
    const urlCart = urlcat(SERVER, `user/edititemquantity/`);
    axios
      .put(urlCart, values)
      .then(({ data }) => {
        // console.log(data);
        setCartEdited(true);
        alert("Item quantity has been updated!");
      })
      .catch((error) => {
        console.log(error);
        setCartEdited(false);
      });
  };

  const handleRemoveCartItem = (values: any) => {
    console.log(values);
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

        // setCartEdited(true);
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
        <h1>
          {name}&apos;s Shopping Cart: You have a total of {cartArray.length}
          item(s)
        </h1>
        <Link href='/member/checkout'>Take Me To Checkout</Link>
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
                      className='card w-75 row justify-content-center'>
                      <div className='card-body'>
                        <img
                          src={cartitem.image_url}
                          alt='image'
                          className='bd-placeholder-img card-img-top'
                          width='100%'
                          height='400'
                        />

                        <h4 className='card-title'>Title: {cartitem.title}</h4>
                        <h5 className='card-text text-muted'>
                          Price: ${cartitem.price}
                        </h5>
                        <hr />
                        {/* Make it into a modal when you have time */}
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
                            Update Quantity
                          </button>
                          <br />
                          {!cartEdited && (
                            <p>Failed to Update quantity. Please try again.</p>
                          )}
                          <button type='reset'>Remove Item</button>
                        </Form>
                        <br />
                      </div>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          )
        )}
      </div>
    </Layout>
  );
}
