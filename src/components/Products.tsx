

interface ProductProps{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string
}

interface Props {
    products: ProductProps[]
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = ({ products }: Props) => {
    
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
            {products.map((item) => (
                <Link href={{pathname:"/singproduct",query:{id: item?.id}}} key={item.id}>
                    <div className="border-[1px] border-grey-300 rounded-md
                    overflow-hidden hover:border-grey-950 duration-300">
                        <Image src={item?.images} width={500} height={500} alt="item image" className="w-full h-80 object-cover"/>
                        <div className="px-4 pb-2 text-sm flex flex-col gap-1">
                            <p className="text-gray-600">{item?.title}</p>
                            <p className="font-semibold">{item?.price}</p>
                        </div>
                    </div>
                </Link>
            ))}




        </div>
    )
}

export default Products;