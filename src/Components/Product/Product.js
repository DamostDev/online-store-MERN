import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ProductConsumer } from "../../ContextApi";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="card-main-container">
        <div className="cards-container">
          <div
            className="card-img-holder"
            onClick={() => console.log("Go to DETAILS")}
          >
            <NavLink to="/details">
              <img src={img} className="" alt="UHum" />
            </NavLink>
          </div>
          {/*Card Footer*/}
          <div className="card-footer-holder">
            <div className="card-footer-top">
              <p className="product-name"> {title}</p>
              <h5 className="product-price">
                <span className="mr-1 fas fa-dollar-sign"></span>
                {price}
              </h5>
            </div>
            <div className="card-footer-bottom">
              <NavLink to="/home">
                <button
                  className="btn-add-cart"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    console.log("added to the cart");
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <p>
                      Add to cart <i className="fab fa-opencart" />
                    </p>
                  )}
                </button>
              </NavLink>
              <NavLink to="/details">
                <button className="btn-add-cart">Details</button>
              </NavLink>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

//Make sure that the props are passed with the correct dataType
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    company: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .cards-container {
    border: 1px solid var(--main-gray-color);
    width: 20vw;
    height: 60vh;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center !important;
  }
  .card-footer-top,
  .card-footer-bottom {
    // border: solid 1px red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
    margin-top: 1rem;
  }
  .card-footer-bottom {
    width: 100%;
    padding: 0.7rem;
  }

  .card-footer-holder,
  .card-img-holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .card-img-holder img {
    width: 20rem;
    height: 300px;
    transition: all 1s linear;
  }

  .btn-add-cart {
    padding: 0.5rem;
    font-size: 1rem;
    border: 0;
    color: var(--main-vivid-color);
    background-color: transparent;
    
  }
  &:focus {
    outline: none;
  }
  .btn-add-cart:hover {
    cursor: pointer;
    background: var(--main-vivid-color);
    color: var(--main-bg);
    transition: all 1s linear;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    transform: scale(0.9);
  }

  .card-img-holder img:hover,
  btn-add-cart:hover {
    transform: scale(1.1);
  }

  .product-name {
    font-size: 1.2rem;
    color: var(--main-dark-gray);
    letter-spacing: 2px;
  }
  .product-price,
  .product-price span {
    font-size: 1.2rem;
    color: var(--main-vivid-color);
    margin-left: 0.5rem;
    padding: 0.2rem;
  }
`;
