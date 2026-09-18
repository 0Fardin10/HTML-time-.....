import react from "react";
const ProductsCard = ({ product }) => {
  const { name, price, description } = product;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">${price.toFixed(2)}</button>
        </div>
      </div>
    </div>
  );
};
export default ProductsCard;