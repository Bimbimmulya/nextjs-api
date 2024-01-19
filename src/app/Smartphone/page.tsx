import Title from "@/components/Title";
import Products from "@/components/Products";

const getData = async() => {
  const res = await fetch("https://dummyjson.com/products/category/smartphones")
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

export default async function Home() {
  const products = await getData();
  
  return (
    <main>
      <Title title="Product Smartphone"/>
      <Products products={products}/>
    </main>
  )
}