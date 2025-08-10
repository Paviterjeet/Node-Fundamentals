import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ItemCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "17rem" }}>
      <img
        src={item.image}
        className="card-img-top"
        alt={item.name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
          {item.shortDescription}
        </p>
        <h6 className="mb-3">${item.price}</h6>
        <button
          className="btn btn-primary w-100"
          onClick={() => dispatch(addItem(item))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
