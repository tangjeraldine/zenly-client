import Layout from "../../components/layoutLogin";

export default function MemberSales() {
  return (
    <Layout home>
      <div className='container text-center bg-light rounded'>
        <h1 className='p-5'>Your order has been received!</h1>
        <h5>
          Please give us 1 working day to verify your transaction and we will
          confirm your order status as soon as possible.
        </h5>
        <br />
        <h5>
          Thank you for your purchase and we look forward to getting in touch
          with you soon!
        </h5>
        <br />
        <p className='p-1'>
          For products: Once the order status of your product has been
          confirmed, we will get in touch with you to confirm your preferred
          mode of collection or delivery.
        </p>
        <p className='p-3'>
          For treatments: Once the order status has been confirmed, please reach
          out to us on WhatsApp, WeChat or phone call to book a time slot with
          us as soon as possible.
        </p>
      </div>
    </Layout>
  );
}
