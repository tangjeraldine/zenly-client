import urlcat from "urlcat";
import axios from "axios";
import { AuthContext } from "../../components/AuthContext";
import { useState, useContext, useEffect } from "react";
import ErrorPage from "../../components/ErrorPage";
import { format, parseISO } from "date-fns";
import LayoutMember from "../../components/Layouts/LayoutMember";

// const SERVER: string = "http://localhost:3000/";
const SERVER: string = "https://easy-lime-capybara-tam.cyclic.app/";

export default function MemberSales() {
  const [purchaseHistory, setPurchaseHistory] = useState([] as any[]);
  const { userDetails } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const urlPurchaseHistory = urlcat(
      SERVER,
      `user/mypurchases/${userDetails?.id}`
    );
    axios
      .get(urlPurchaseHistory)
      .then(({ data }) => {
        // console.log(data);
        setLoading(false);
        setPurchaseHistory(data);
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
    <LayoutMember home>
      <div>
        {loading ? (
          <p className='placeholder-glow p-5'>
            Loading...
            <span className='placeholder col-12'></span>
          </p>
        ) : (
          <div>
            <h1 className='text-center p-3 display-6'>Your past purchases:</h1>
            <div className='container'>
              <div className='row row-cols-1 row-cols-md-2 g-4'>
                {newArray.map((eachPurchase, index) => (
                  <div key={index}>
                    <div className='col'>
                      <div className='card'>
                        <img
                          src={eachPurchase?.purchasePhoto}
                          className='card-img-top mx-auto round'
                          style={{ height: "150px", width: "250px" }}
                          alt='itempic'
                        />
                        <div className='card-body'>
                          <h5 className='card-title'>
                            Item: {eachPurchase?.purchaseItem}
                          </h5>
                          <p className='card-text text-muted'>
                            Price: ${eachPurchase?.purchasePrice} each
                          </p>

                          <p className='card-text'>
                            Quantity Purchased: {eachPurchase?.purchaseQuantity}
                          </p>

                          <p>
                            <em>
                              PayNow Transaction No.:
                              <strong>
                                {eachPurchase?.purchaseTransaction}
                              </strong>
                            </em>
                          </p>
                          <p>Date Purchased: {eachPurchase?.purchaseDate}</p>
                          <hr />
                          <h5>
                            Purchase Status: {eachPurchase?.purchaseStatus}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </LayoutMember>
  );
}
