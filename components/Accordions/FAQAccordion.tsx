export default function FAQAccordion() {
  return (
    <div className='accordion' id='accordionExample'>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingOne'>
          <button
            className='accordion-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseOne'
            aria-expanded='true'
            aria-controls='collapseOne'>
            What is Cupping?
          </button>
        </h2>
        <div
          id='collapseOne'
          className='accordion-collapse collapse show'
          aria-labelledby='headingOne'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            <strong>
              Cupping is a type of alternative therapy that involves placing
              cups on the skin to create suction. This suction is thought to
              improve the flow of energy in the body and facilitate healing.
            </strong>
            Proponents believe the suction helps facilitate the flow of “qi” in
            the body. Qi is a Chinese word meaning life force. Many believe that
            cupping helps balance yin and yang, or the negative and positive,
            within the body. Restoring balance between these two extremes is
            thought to help with body resistance to pathogens as well as its
            ability to increase blood flow and reduce pain. Cupping increases
            blood circulation to the area where the cups are placed. This may
            relieve muscle tension, which can improve overall blood flow and
            promote cell repair. It may also help form new connective tissues
            and create new blood vessels in the tissue.
          </div>
        </div>
      </div>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingTwo'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseTwo'
            aria-expanded='false'
            aria-controls='collapseTwo'>
            How does massage and cupping help with my wellness in general?
          </button>
        </h2>
        <div
          id='collapseTwo'
          className='accordion-collapse collapse'
          aria-labelledby='headingTwo'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            Massage therapy may help the body in many ways. Massage can relax
            muscle tissue, which may lead to decreased nerve compression,
            increased joint space, and range of motion. This may lead to reduced
            pain and improved function. Massage therapy may also improve
            circulation, which enhances the delivery of oxygen and nutrients to
            muscle cells and helps remove waste products. These circulatory
            effects of massage may have value in the treatment of some
            inflammatory conditions.
          </div>
        </div>
      </div>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingThree'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseThree'
            aria-expanded='false'
            aria-controls='collapseThree'>
            Is pediatric tuina safe for my child?
          </button>
        </h2>
        <div
          id='collapseThree'
          className='accordion-collapse collapse'
          aria-labelledby='headingThree'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            <strong>
              TCM treatment for pediatric disorders is safe, painless and free
              of side effect. It is effective for symptom relief and immune
              strengthening.
            </strong>
            TuiNa can stimulate a child&apos;s immunity and, in turn, achieve
            great results. Physiology, pathology and acupoints specific to
            pediatric patients dictate gentler manual techniques and atypical
            therapeutic frequency and duration. TuiNa can also be applied to
            infant who cannot tolerate Chinese herbal medicine yet. Pediatric
            TuiNa can treat many conditions, such as diarrhea, vomiting,
            constipation, influenza, asthma, bronchial pneumonia etc.
          </div>
        </div>
      </div>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingFour'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseFour'
            aria-expanded='false'
            aria-controls='collapseFour'>
            How can I book a treatment with ZenLy?
          </button>
        </h2>
        <div
          id='collapseFour'
          className='accordion-collapse collapse'
          aria-labelledby='headingFour'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            Register as a member with us on this site, where you will be able to
            purchase treatments! Do note that payment is by PayNow QR code only,
            and only purchases that have been confirmed (payment received on our
            end) and verified can be used to book a session with us.
          </div>
        </div>
      </div>
    </div>
  );
}
