import type { ProductDisplayProps  } from "../../types";

function ProductDisplay ({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps) {
    const prodInStock: React.ReactNode = <p className="text-color-green">In Stock</p>
    const prodOutStock: React.ReactNode = <p className="text-color-red">Out of Stock</p>

return (
<div className="flex-col">
  <img className="bg-cover" src={product.imageUrl}></img>
  <div className="bg-white">
  <h1>{product.name}</h1>
  <p className="text-color-blue">{product.price}</p>
  {showDescription? <p>{product.description}</p>: <p></p>}
  {showStockStatus && (product.inStock ? prodInStock: prodOutStock)}
  {children}
  {onAddToCart && (
          <button
            onClick={() => onAddToCart(product.id)}
            className="ml-4 text-blue-500 hover:text-darkblue-700"
          >
            Add to Cart
          </button>
        )}
  </div>
</div>

)
}

export default ProductDisplay