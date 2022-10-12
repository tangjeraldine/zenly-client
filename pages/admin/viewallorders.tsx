import Layout from "../../components/layoutAdmin";
import { AuthContext } from "../../components/AuthContext";
import urlcat from "urlcat";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useState, useEffect, useContext } from "react";
import ErrorPage from "../../components/ErrorPage";
import ViewBuyerModal from "../../components/Modals/ViewBuyerModal";
import Link from "next/link";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function AdminMain() {
  const { userDetails, setViewBuyer } = useContext(AuthContext);
  const [allSortedOrders, setAllSortedOrders] = useState([] as any[]);

  if (userDetails?.security_lvl !== 2) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  useEffect(() => {
    const urlAllSortedOrders = urlcat(SERVER, `admin/displayallorders/`);
    axios
      .get(urlAllSortedOrders)
      .then(({ data }) => {
        console.log(data);
        setAllSortedOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    const urlEditOrderStatus = urlcat(SERVER, `admin/editorderstatus/`);
    console.log(values);
    axios
      .put(urlEditOrderStatus, values)
      .then(({ data }) => {
        console.log(data);
        alert("Order status has been changed.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout home>
      <div>
        <h3>Welcome back, {name}</h3>
        {allSortedOrders.map((thisOrder, index) => (
          <div className='card p-3 w-50 text-center' key={index}>
            <div className='card-header'>{thisOrder?.created_at}</div>
            <div className='card-body'>
              <h5 className='card-title'>Title: {thisOrder?.title}</h5>
              <p className='card-text'>Quantity: {thisOrder?.quantity}</p>
              <p className='card-text'>Price: {thisOrder?.purchase_price}</p>
              <p className='card-text'>Price: {thisOrder?.order_status}</p>
              <p className='card-text'>
                PayNow TN: {thisOrder?.transaction_no}
              </p>
              <button
                type='button'
                className='btn btn-primary'
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
                        <option value='Session Booked'>Session Booked</option>
                        <option value='Order Completed'>Order Completed</option>
                        <option value='Order Cancelled'>Order Cancelled</option>
                      </Field>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-success'>
                      Edit Status
                    </button>
                    <br />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        ))}
        <ViewBuyerModal />
      </div>
    </Layout>
  );
}
