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
import Link from "next/link";
import Image from "next/image";
import PurchasesValidation from "../../Validations/PurchasesValidation";
import TransactionNoValidation from "../../Validations/TransactionNoValidation";

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

  let itemTotal = [];
  for (const item of cartArray) {
    let itemSum = item.quantity * item.price;
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
    <Layout home>
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <h1>
                Hey {name}, you have altogether {cartArray.length}
                item(s) to check out.
              </h1>
              <br />
              <h3>The grand total to pay is: SGD ${grand_totalReducer}</h3>
              <hr />
              <h5>PLEASE READ THE FOLLOWING BEFORE PROCEEDING:</h5>
              <p>
                Please make a payment of **INSERT GRANT TOTAL** via the PayNow
                QR code shown below, and provide us with the payment transaction
                number in the field below.
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
              <p>
                Do note that we only accept payment by PayNow at this time. Our
                team will need to verify your payment by transaction number and
                your date of purchase. We will not be able to proceed with item
                collection or honour any appointment bookings until full payment
                has been confirmed.
              </p>
              <p>
                Once we have confirmed receipt of your payment, we will update
                your order status and be in touch with you to discuss collection
                or timeslot bookings!
              </p>
              <p>
                For other enquiries, do drop us a message by WhatsApp or WeChat,
                and we will reply you within 1 business day.
              </p>
              <Link href='/member/cart'>Click here to return to cart</Link>
            </div>
            <div className='col-sm w-25'>
              <Image
                src='/images/qrcode.png'
                height={400}
                width={400}
                alt='zenly'
              />{" "}
              <hr />
              {addToPurchases === null || addToPurchases === false ? (
                cartArray.map((cartitem: CartType, index: number) => (
                  <div className='container' key={index}>
                    <img src={cartitem.image_url} alt={cartitem.image_url} />
                    <h5>Title: {cartitem.title}</h5>
                    <h5>Price: ${cartitem.price}</h5>
                    <h5>Quantity: {cartitem.quantity}</h5>
                    <h3>Item Total: ${cartitem.quantity * cartitem.price}</h3>
                    <hr />
                  </div>
                ))
              ) : (
                <h1>We've received your order!</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
