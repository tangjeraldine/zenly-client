import Layout from "../../components/LayoutAdmin";
import { AuthContext } from "../../components/AuthContext";
import urlcat from "urlcat";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useState, useEffect, useContext } from "react";
import ErrorPage from "../../components/ErrorPage";
import ViewBuyerModal from "../../components/Modals/ViewBuyerModal";
import Link from "next/link";
import { format, parseISO } from "date-fns";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function AdminMain() {
  const { userDetails, setViewBuyer } = useContext(AuthContext);
  const [allSortedOrders, setAllSortedOrders] = useState([] as any[]);
  const [loading, setLoading] = useState<boolean>(false);
  const [updated, setUpdated] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const urlAllSortedOrders = urlcat(SERVER, `admin/displayallorders/`);
    axios
      .get(urlAllSortedOrders)
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setAllSortedOrders(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (userDetails?.security_lvl !== 2) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  const handleViewBuyer = (id: number) => {
    const urlViewThisBuyer = urlcat(SERVER, `admin/viewthisbuyer/${id}`);
    axios
      .get(urlViewThisBuyer)
      .then(({ data }) => {
        console.log(data);
        setViewBuyer(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeOrderStatus = (values: object) => {
    setUpdated(true);
    const urlEditOrderStatus = urlcat(SERVER, `admin/editorderstatus/`);
    console.log(values);
    axios
      .put(urlEditOrderStatus, values)
      .then(({ data }) => {
        // console.log(data);
        setUpdated(false);
        alert("Order status has been changed.");
      })
      .catch((error) => {
        console.log(error);
        setUpdated(false);
      });
  };

  let newSortedOrders = [] as any[];
  for (const eachOrder of allSortedOrders) {
    if (eachOrder?.transaction_no !== null) {
      let newTimeStamp = eachOrder?.created_at.slice(0, 19);

      let formattedTimeStamp = format(
        parseISO(newTimeStamp),
        "EEE, dd/MM/yyyy"
      );

      let newTimeDate: object = {
        title: eachOrder?.title,
        purchase_price: eachOrder?.purchase_price,
        quantity: eachOrder?.quantity,
        order_status: eachOrder?.order_status,
        transaction_no: eachOrder?.transaction_no,
        created_at: formattedTimeStamp,
        Users_id: eachOrder.Users_id,
      };
      newSortedOrders.push(newTimeDate);
    }
  }

  return (
    <Layout home>
      <div>
        <h3 className='text-center p-3 display-6'>
          Here&apos;s a list of all orders.
        </h3>
        {newSortedOrders.map((thisOrder, index) => (
          <div className='card m-3 w-50 text-center mx-auto' key={index}>
            <div className='card-header'>{thisOrder?.created_at}</div>
            <div className='card-body container'>
              <div className='row'>
                <div className='col-6'>
                  <h5 className='card-title'>Title: {thisOrder?.title}</h5>
                  <p className='card-text'>Quantity: {thisOrder?.quantity}</p>
                  <p className='card-text'>
                    Price: {thisOrder?.purchase_price}
                  </p>
                  <p className='card-text'>Price: {thisOrder?.order_status}</p>
                  <p className='card-text'>
                    PayNow TN: {thisOrder?.transaction_no}
                  </p>
                </div>
                <div className='col-sm-5'>
                  <button
                    type='button'
                    className='btn btn-warning m-3'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                    data-bs-whatever='@getbootstrap'
                    onClick={() => handleViewBuyer(thisOrder.Users_id)}>
                    <a>View Buyer Details</a>
                  </button>
                  <br />
                  {/* using formik */}
                  <Formik
                    initialValues={{
                      order_status: thisOrder?.order_status,
                      transaction_no: thisOrder?.transaction_no,
                      Goods_id: thisOrder?.Goods_id,
                      Users_id: thisOrder?.Users_id,
                      created_at: thisOrder?.created_at,
                    }}
                    onSubmit={(values) => handleChangeOrderStatus(values)}>
                    {({ handleChange, values, initialValues }) => (
                      <Form>
                        <label htmlFor='Order Status'>
                          <h5>Order Status</h5>
                        </label>
                        <div>
                          <Field
                            as='select'
                            name='order_status'
                            values={values.order_status}
                            onChange={handleChange}>
                            <option disabled>select</option>
                            <option value='Pending Confirmation'>
                              Pending Confirmation
                            </option>
                            <option value='Session Booked'>
                              Session Booked
                            </option>
                            <option value='Order Completed'>
                              Order Completed
                            </option>
                            <option value='Order Cancelled'>
                              Order Cancelled
                            </option>
                          </Field>
                        </div>
                        <br />
                        {updated ? (
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
                            style={{ backgroundColor: "#5BB318" }}>
                            Edit Status
                          </button>
                        )}

                        <br />
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        ))}
        <ViewBuyerModal />
      </div>
    </Layout>
  );
}
