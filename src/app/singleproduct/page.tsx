import { getSingleProduct } from "@/helpers";
import Image from "next/image";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined};
}

const SingleProduct = async ({ searchParams }: Props) => {
    const idString = searchParams?.id;
    const id = Number(idString)
    const product = await getSingleProduct(id)
    
    return <div className="max-w-screen-xl mx-auto flex items-center gap-10 xl-gap-0">
        <Image src={product?.images} alt="product image" width={500} height={500}/>
        <div>
            <p className="text-cl font-semibold">{product?.title}</p>
            <p>{product?.description}</p>
            <p>Price: ${product?.price}</p>
            <p>Category: {product?.category}</p>
            <p>Stock: {product?.stock}</p>
        </div>
    </div>
};

export default SingleProduct;