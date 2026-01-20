"use client";

import { productData } from "@/app/utils/productData";
import ProductCard from "./ProductsCard";
import { Button } from "../buttons/buttons";
import { useRef } from "react";
import { smoothScrollTo } from "../../utils/smoothScroll";
import { useProductPagination } from "@/app/hooks/useProductPagination";

const Products = () => {
  const totalCards = productData.length;

  // Custom hook handles visibleCount, isShowingAll, showMore, reset
  const { visibleCount, isShowingAll, showMore, reset } =
    useProductPagination(totalCards);

  const topRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const visibleCards = productData.slice(0, visibleCount);

  const handleLoadMore = () => {
    if (isShowingAll) {
      // Collapse back to 12
      reset();

      // Scroll UP slightly above the top
      const target = (topRef.current?.offsetTop ?? 0) - 80;
      smoothScrollTo(target, 450);
      return;
    }

    // Expand by 6
    showMore();

    // Scroll DOWN by exactly one row height
    setTimeout(() => {
      if (gridRef.current) {
        const rows = Math.ceil(visibleCount / 6);
        const rowHeight = gridRef.current.clientHeight / rows;

        const target = window.scrollY + rowHeight - 100;
        smoothScrollTo(target, 450);
      }
    }, 50);
  };

  return (
    <div
      ref={topRef}
      className="flex flex-col gap-8 items-center py-sectionV px-sectionH sm:px-sectionHSm xl:px-sectionHXl bg-primaryColor"
    >
      <div
        ref={gridRef}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
      >
        {visibleCards.map((item: any, index: number) => (
          <ProductCard data={item} key={index} />
        ))}
      </div>

      {totalCards > 12 && (
        <Button
          buttonText={isShowingAll ? "See Less" : "View More"}
          onClick={handleLoadMore}
          outline={1}
        />
      )}
    </div>
  );
};

export default Products;