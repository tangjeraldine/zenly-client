export default function GoodDealsAccordion() {
  return (
    <div className='accordion p-3' id='accordionPanelsStayOpenExample'>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
          <button
            className='accordion-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#panelsStayOpen-collapseOne'
            aria-expanded='true'
            aria-controls='panelsStayOpen-collapseOne'>
            We&apos;ve got some pretty good deals here.
          </button>
        </h2>
        <div
          id='panelsStayOpen-collapseOne'
          className='accordion-collapse collapse show'
          aria-labelledby='panelsStayOpen-headingOne'>
          <div className='accordion-body'>
            <strong>
              Get any treatment session (1-hour home visit session) at just $50.
            </strong>
            <br />
            From now till 31 Dec 2022, register as a member AND refer a friend
            to get this very special promotion! <br />
            Terms and conditions apply.
          </div>
        </div>
      </div>
    </div>
  );
}
