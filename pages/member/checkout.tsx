import urlcat from "urlcat";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import { AuthContext } from "../../components/AuthContext";
import { useState, useContext, useEffect } from "react";
import ErrorPage from "../../components/ErrorPage";
import Link from "next/link";
import Image from "next/image";
import TransactionNoValidation from "../../Validations/TransactionNoValidation";
import LayoutMember from "../../components/Layouts/LayoutMember";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

type CartType = {
  quantity: number;
  Goods_id: number;
  id: number;
  image_url: string;
  title: string;
  price: number;
};

export default function MemberSales() {
  const { userDetails, cartArray, setCartArray } = useContext(AuthContext);
  const [addToPurchases, setAddedToPurchases] = useState<any>(null);
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

  let itemTotal = [] as any[];
  for (const item of cartArray) {
    let itemSum: number = item.quantity * item.price;
    itemTotal.push(itemSum);
  }
  let Grand_Total = 0;
  const grand_totalReducer = itemTotal.reduce(
    (prevVal, currVal) => prevVal + currVal,
    Grand_Total
  );
  // console.log(grand_totalReducer);

  //? POST entire array of cart items together with grand_total
  const handleAddToPurchasedList = (values: object) => {
    console.log(values);
    const urlAddToPurchase = urlcat(SERVER, `user/addtopurchases/`);
    axios
      .post(urlAddToPurchase, values)
      .then(({ data }) => {
        console.log(data);
        setAddedToPurchases(true);
        alert("We've received your order!");
      })
      .catch((error) => {
        console.log(error);
        setAddedToPurchases(false);
      });
  };

  return (
    <LayoutMember home>
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm p-5'>
              <h2 className='display-5'>
                Hey {name}, you have altogether {cartArray.length}
                item(s) to check out.
              </h2>
              <br />
              <h5 className='display-6'>
                Grand total: SGD ${grand_totalReducer}.00
              </h5>
              <hr />
              <h5 style={{ color: "red" }}>
                PLEASE READ THE FOLLOWING BEFORE PROCEEDING:
              </h5>
              <p>
                Please make a payment of <u>${grand_totalReducer}.00</u> via the
                PayNow QR code shown below, and provide us with the payment
                transaction number in the field below.
              </p>
              <Formik
                initialValues={{
                  transaction_no: "",
                  checkedOutItems: cartArray,
                  grand_total: grand_totalReducer,
                  User_id: userDetails?.id,
                }}
                validationSchema={TransactionNoValidation}
                onSubmit={(values) => handleAddToPurchasedList(values)}>
                {({
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  initialValues,
                }) => (
                  <div>
                    <div className='card w-75 row justify-content-center'>
                      <div className='card-body'>
                        <Form>
                          <label htmlFor='transaction_no'>
                            <h5>Your PayNow Reference No.:</h5>
                          </label>
                          <div>
                            <Field
                              id='transaction_no'
                              name='transaction_no'
                              type='text'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.transaction_no}
                              placeholder='e.g. MB1234567890C99'
                            />
                            {errors.transaction_no && touched.transaction_no ? (
                              <div>{errors.transaction_no}</div>
                            ) : null}
                          </div>
                          <br />
                          <button
                            type='submit'
                            className='btn btn-outline-dark'
                            style={{ backgroundColor: "#FD841F" }}
                            disabled={
                              !(
                                Object.keys(errors).length === 0 &&
                                Object.keys(touched).length !== 0
                              )
                            }>
                            Check Out Cart
                          </button>
                          <br />
                        </Form>
                        <br />
                      </div>
                    </div>
                  </div>
                )}
              </Formik>
              <br />
              <div
                className='rounded p-4'
                style={{ backgroundColor: "#FFCB42" }}>
                <p>
                  <strong>Payment Mode</strong>
                </p>
                <p>
                  Do note that we only accept payment by PayNow at this time.
                  Our team will need to verify your payment by transaction
                  number and your date of purchase. We will not be able to
                  proceed with item collection or honour any appointment
                  bookings until full payment has been confirmed.
                </p>
                <p>
                  <strong>Appointment Booking</strong>
                </p>
                <p>
                  Once we have confirmed receipt of your payment, we will update
                  your order status and be in touch with you to discuss
                  collection or timeslot bookings!
                </p>
                <p>
                  <strong>Refund/ Return Policy</strong>
                </p>
                <p>
                  Refunds and returns will be considered on a case-by-case
                  basis. For other enquiries, do drop us a message by WhatsApp
                  or WeChat, and we will reply you within 1 business day.
                </p>
                <Link href='/member/cart'>
                  <a>
                    <button className='btn btn-success btn-outline-light'>
                      Click here to return to cart
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-sm w-25 p-5'>
              <Image
                src='/images/qrcode.png'
                height={400}
                width={400}
                alt='zenly'
              />

              <hr />
              <h5 className='text-center display-6'>Items to check out:</h5>
              {addToPurchases === null || addToPurchases === false ? (
                cartArray.map((cartitem: CartType, index: number) => (
                  <div className='container' key={index}>
                    <div className='card mb-3' style={{ maxWidth: "600px" }}>
                      <div className='row g-0'>
                        <div className='col-md-4'>
                          <img
                            src={cartitem.image_url}
                            className='img-fluid rounded-start'
                            alt='itemimage'
                          />
                        </div>
                        <div className='col-md-8'>
                          <div className='card-body'>
                            <h5 className='card-title'>
                              Title: {cartitem.title}
                            </h5>
                            <div className='card-text'>
                              <p>
                                Price: <strong>${cartitem.price}</strong>
                              </p>
                              <p>
                                Quantity: <strong>{cartitem.quantity}</strong>
                              </p>
                              <p>
                                Item Total: $
                                <strong>
                                  {cartitem.quantity * cartitem.price}
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>We&apos;ve received your order!</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutMember>
  );
}
