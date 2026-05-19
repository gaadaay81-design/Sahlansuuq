export default function SahlanSuuqHomepage() {
  const products = [
    { title: "iPhone 15 Pro", price: "9500$", image: "https://via.placeholder.com/400" },
    { title: "Nike Shoes", price: "850$", image: "https://via.placeholder.com/400" },
    { title: "Gaming Laptop", price: "6200$", image: "https://via.placeholder.com/400" },
  ];

  return (
    <main style={{fontFamily:"Arial",padding:"20px"}}>
      <h1 style={{color:"#0a7"}}>SahlanSuuq</h1>
      <p>Somali Marketplace Demo</p>

      <h2>Products</h2>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"20px"}}>
        {products.map((p, i) => (
          <div key={i} style={{border:"1px solid #ccc",borderRadius:"12px",padding:"10px"}}>
            <img src={p.image} alt={p.title} width="100%" />
            <h3>{p.title}</h3>
            <p>{p.price}</p>
            <button style={{padding:"10px",background:"#0a7",color:"white",border:"none",borderRadius:"8px"}}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
