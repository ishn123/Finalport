import "./lazycss.css";
import React from 'react'

function LazySpinnerLoader() {
  return (
    <div className="new-wrapper-loader-container">
      <section>
      {/* <div id="loader"></div> */}
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </section>
    </div>
    
  )
}

export default LazySpinnerLoader;