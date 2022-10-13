import Image from "next/image";

export default function Footer() {
  return (
    <nav
      className='navbar fixed-bottom text-middle'
      style={{
        backgroundColor: "#5BB318",
        padding: "0.5rem",
      }}>
      <div>
        <p>
          Powered by
          <img
            src='/images/next-js.svg'
            style={{ height: "40px", width: "40px" }}
            alt='zenly'
            className='ms-3'
          />
        </p>
      </div>
    </nav>
  );
}
