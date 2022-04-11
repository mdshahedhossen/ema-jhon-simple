import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItems.css";

const ReviewItems = (props) => {
  const{product,handleRemoveProduct}=props
  const { name, img, price, shipping, quantity } =product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="review-details-container">
        <div className="review-details">
            <p className="product-name" title={name}>
                {name.length>20 ?name.slice(0,20)+'...':name}
            </p>
            <p><small>price:${price}</small></p>
            <p><small>Shipping Charge:${shipping}</small></p>
            <p><small>Quantity:{quantity}</small></p>
        </div>

        <div className="delete-container">
          <button onClick={()=>handleRemoveProduct(product)} className="delete-btn">
              <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} ></FontAwesomeIcon>
            </button>
        </div>

      </div>
    </div>
  );
};

export default ReviewItems;
