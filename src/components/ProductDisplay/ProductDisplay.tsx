import type { ProductDisplayProps  } from "../../types";

function ProductDisplay ({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps) {
    const prodInStock: React.ReactNode = <p className="mt-2 text-green-600">In Stock</p>
    const prodOutStock: React.ReactNode = <p className="mt-2 text-red-600">Out of Stock</p>

return (
<div className="flex-col bg-white rounded-lg shadow-md overflow-hidden m-auto">
  <img className="w-full h-48 object-cover" src={product.imageUrl}></img>
  <div className="p-4">
  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
  <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
  {showDescription? <p className="text-gray-600 mt-2">{product.description}</p>: <p></p>}
  {showStockStatus && (product.inStock ? prodInStock: prodOutStock)}
  {children}
  {onAddToCart && (
          <button
            onClick={() => onAddToCart(product.id)}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        )}
  </div>
</div>

)
}

export default ProductDisplay

// References: DevTools on lab page for styling: https://perscholas.instructure.com/courses/3086/assignments/599666