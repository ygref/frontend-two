export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      <div className="cards">
        {props.products.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.images[0].url} />
          </div>
        ))}
      </div>
    </div>
  );
}
