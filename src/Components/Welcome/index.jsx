

import React from "react";
import Banner from "../Banner";
import Article from "../Article";
import PropTypes from 'prop-types'




const Welcome = ()=> {
    return (
      <div>
        <Banner
          backgroundImage="url(assets/img/bg-gift.jpg)"
          title="Latest Blog Posts"
          subTitle="Read And Get Updated How we Progress."
        />

        <main className="main-content bg-gray">
          <div className="row" />
          <div className="col-12 col-lg-6 offset-lg-3">
            <Article />
            <nav className="flexbox mt-50 mb-50">
              <a className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4" /> Newer
              </a>
              <a className="btn btn-white" href="#">
                Older
                <i className="ti-arrow-right fs-9 ml-4" />
              </a>
            </nav>
          </div>
        </main>
      </div>
    );
}
Welcome.propTypes={
  getArticles:PropTypes.func.isRequired,
  setArticles:PropTypes.func.isRequired
}

export default Welcome;