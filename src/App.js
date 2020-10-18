import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            App Burna
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ad"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="ad">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://fortnitefa.ir/%d8%af%d8%b1%d8%a8%d8%a7%d8%b1%d9%87-%d9%85%d8%a7/"
                >
                  about
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://fortnitefa.ir/%d8%a7%d8%b1%d8%aa%d8%a8%d8%a7%d8%b7-%d8%a8%d8%a7-%d9%85%d8%a7/"
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* nav*/}
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://fortnitefa.ir/wp-content/uploads/2020/08/photo_2020-08-17_20-19-52.jpg"></img>
            <div className="carousel-caption">
              <h1 className="display-2"> Get Started</h1>
              <a
                href="https://fortnitefa.ir/"
                type="button"
                className="btn btn-outline-light btn-lg"
              >
                {" "}
                Start
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://fortnitefa.ir/wp-content/uploads/2020/04/photo_2020-04-05_02-43-29.jpg"></img>
          </div>
          <div className="carousel-item">
            <img src="https://fortnitefa.ir/wp-content/uploads/2020/07/scrap-samurai-510x510.jpg"></img>
          </div>
        </div>
      </div>
      {/* img slider */}
      <div className="container-fluid">
        <div className="row jumbotrun">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead">
              WASHINGTON—President Trump’s doctors said his condition was
              improving and he could be discharged from the hospital as soon as
              Monday, but they also acknowledged that his oxygen levels have
              dropped twice, most recently on Saturday and said he was taking a
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="#">
              {" "}
              <button
                type="button"
                className="btn btn-outline-secondary
          btn-lg"
              >
                Buy
              </button>{" "}
            </a>
          </div>
        </div>
      </div>
      {/* jumbotrun */}
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Wellcome you can buy here</h1>
            <hr></hr>
            <div className="col-12">
              <p className="lead">
                WASHINGTON—President Trump’s doctors said his condition was
                improving and he could be discharged from the hospital as soon
                as Monday, but they also acknowledged that his oxygen levels
                have dropped twice, most recently on Saturday and said he was
                taking a
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Wellcome Section */}
      {/* col 1 */}
      <div className="card container">
        <img src="https://fortnitefa.ir/wp-content/uploads/2020/07/scrap-samurai-510x510.jpg"></img>
        <div className="card-body">
          <h5 className="card-title">TITLE</h5>
          <p id="1" className="card-text text-primary">
            WASHINGTON—President Trump’s doctors said his condition was
            improving and he could be discharged from the hospital as soon as
            Monday, but they also acknowledged that his oxygen levels have
            dropped twice, most recently on Saturday and said he was taking a
          </p>
          <a
            href="https://fortnitefa.ir/product/metal-team-leader/"
            className="btn btn-primary"
          >
            Go Somwway
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
