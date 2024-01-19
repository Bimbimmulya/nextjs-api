const getData = async() => {
    const res = await fetch("https://dummyjson.com/products")
    if (!res.ok) {
      throw new Error("Failed to fecth data");
    }
    return res.json();
  }

  export const getSingleProduct = async (id: number)=>{
    const item = await getData();
    const singleItem = await item.find((product: any) => product.id === id)
    return singleItem
  }