import Layout from "../../components/LayoutLogin";
import urlcat from "urlcat";
import axios from "axios";
import { AuthContext } from "../../components/AuthContext";
import { useState, useContext, useEffect } from "react";
import ErrorPage from "../../components/ErrorPage";
import { format, parseISO } from "date-fns";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function MemberSales() {
  const [purchaseHistory, setPurchaseHistory] = useState([] as any[]);
  const { userDetails } = useContext(AuthContext);

  useEffect(() => {
    const urlPurchaseHistory = urlcat(
      SERVER,
      `user/mypurchases/${userDetails?.id}`
    );
    axios
      .get(urlPurchaseHistory)
      .then(({ data }) => {
        // console.log(data);
        setPurchaseHistory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (userDetails?.security_lvl !== 1) {
    return <ErrorPage />;
  }

  const name = userDetails.full_name.split(" ")[0];

  let newArray = [] as any[];
  for (const purchasedItem of purchaseHistory) {
    let newTimeStamp = purchasedItem?.created_at.slice(0, 19);
    let formattedTimeStamp = format(parseISO(newTimeStamp), "EEE, dd/MM/yyyy");
    // console.log(formattedTimeStamp);
    let newTimeDate: object = {
      purchasePhoto: purchasedItem?.image_url,
      purchaseItem: purchasedItem?.title,
      purchasePrice: purchasedItem?.purchase_price,
      purchaseQuantity: purchasedItem?.quantity,
      purchaseStatus: purchasedItem?.order_status,
      purchaseTransaction: purchasedItem?.transaction_no,
      purchaseDate: formattedTimeStamp,
    };
    newArray.push(newTimeDate);
  }

  return (
    <Layout home>
      <div>
        <h1>This is the order history page, {name}</h1>
        <div className='container'>
          {newArray.map((eachPurchase, index) => (
            <div key={index} className='card w-75 row justify-content-center'>
              <div className='card-body'>
                <img
                  src={eachPurchase?.purchasePhoto}
                  alt='itempic'
                  style={{ height: "200px", width: "350px" }}
                />
                <h4 className='card-title'>
                  Item: {eachPurchase?.purchaseItem}
                </h4>
                <h5 className='card-text text-muted'>
                  Price: ${eachPurchase?.purchasePrice} each
                </h5>
                <hr />
                <p className='card-text'>
                  Quantity Purchased: {eachPurchase?.purchaseQuantity}
                </p>
                <h5>Purchase Status: {eachPurchase?.purchaseStatus}</h5>
                <p>
                  <em>
                    PayNow Transaction No.:
                    <strong>{eachPurchase?.purchaseTransaction}</strong>
                  </em>
                </p>
                <p>Date Purchased: {eachPurchase?.purchaseDate}</p>
                <br />
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
