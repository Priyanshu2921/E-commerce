import "./product.css"
// Product.js
import { Price } from "./price";

export function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["12,000", "11,000", "1,000", "499"];
  let description = [
    ["8,000 DPI", "5 programmable buttons"],
    ["Intuitive surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro", "Intuitive surface"],
    ["Wireless mouse", "5 programmable buttons"]
  ];
  
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}


