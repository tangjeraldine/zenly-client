import { AuthContext } from "../../components/AuthContext";
import urlcat from "urlcat";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ErrorPage from "../../components/ErrorPage";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function AdminMain() {
  const { userDetails } = useContext(AuthContext);
  const [pendingOrders, setPendingOrders] = useState([] as any[]);

  useEffect(() => {
    const urlAllPendingOrders = urlcat(SERVER, `admin/allpendingorders/`);
    axios
      .get(urlAllPendingOrders)
      .then(({ data }) => {
        console.log(data);
        setPendingOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (userDetails?.security_lvl !== 2) {
    return <ErrorPage />;
  }
  const name = userDetails.full_name.split(" ")[0];

  return (
    <div>
      <div className='card text-bg-dark w-75 mx-auto'>
        <img
          src='https://images.unsplash.com/photo-1660470071057-43890ce5b7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          className='card-img'
          alt='banner'
        />
        <div className='card-img-overlay'>
          <div>
            <h3 className='text-center display-3'>Welcome back, {name}!</h3>

            <h4 className='card-title text-center display-5'>
              Here are your statistics in a glance:
            </h4>
            <h4 className='card-text text-center display-5'>
              Total Orders Pending: {pendingOrders.length}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
