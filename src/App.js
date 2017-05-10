import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Body1 from './component/Body1.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Carousel from './component/Carousel.js';
import ProductDetail from './component/ProductDetail.js';

function App() {
    return (
      <div className="App">

        <Header />

        <div className="container">
        <div className="row">


            <div className="col-md-3">
                <p className="lead">Shop Name</p>
                <div className="list-group">
                    <a href="#" className="list-group-item">Category 1</a>
                    <a href="#" className="list-group-item">Category 2</a>
                    <a href="#" className="list-group-item">Category 3</a>
                </div>
            </div>

          <Carousel />
          <ProductDetail />
          </div>
        </div>
        <hr/>
        <Footer />
      </div>

    );
}

export default App;