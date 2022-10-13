import Link from "next/link";

export default function HolyGuacNotification() {
  return (
    <div className='ps-3 pe-3'>
      <div
        className='alert alert-warning alert-dismissible fade show'
        role='alert'>
        <strong>Holy guacamole!</strong> You found us at the right time.
        <br />
        We&apos;re running a free 5-minute phone consultation promotion that
        ends on 30 Nov 2022. You should REALLY check in on some of the great
        deals we have by{" "}
        <Link href='/login/main' className='alert-link'>
          logging in here
        </Link>{" "}
        or registering as a member!
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'></button>
      </div>
    </div>
  );
}
