import ProductDetails from "./productDetails";
import Banner from "@/app/components/banner";
import ListRating from "./listRating";
import { productData } from "@/app/utils/productData";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

interface Params {
  productId?: string;
}

const Product = ({ params }: { params: Params }) => {

const product = productData.find((item) => item.id === params.productId)

  return (
    <div>
      <Banner bannerText="***Free Shipping on orders over £60***" />
      <div className="w-full bg-primaryColor py-sectionV px-sectionH sm:px-sectionHSm xl:px-sectionHXl relative">
        <Link href="/" className="absolute top-4 left-4 text-primaryText text-sm sm:text-base flex items-center gap-1 whitespace-nowrap hover:underline hover:opacity-80">
        <FiArrowLeft size={20}/>
        <span>Back</span>
        </Link>
        <ProductDetails product={product} />
        <div className="flex flex-col gap-4 mt-20">
          <ListRating product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
