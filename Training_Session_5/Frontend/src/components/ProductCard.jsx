function ProductCard ({ id, title, price, imageUrl }) {
  const handleAddToCart = () => {
    console.log(`Product ${id} added to cart`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl p-4 m-6">
      <div className="w-full h-auto mb-4">
        <img src={imageUrl} alt={title} className=" w-3/6 h-auto" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700">Price: ${price}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

