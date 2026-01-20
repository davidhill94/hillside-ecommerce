import { useState } from "react";

export const useProductPagination = (total: number, initial = 12, step = 6) => {
  const [visibleCount, setVisibleCount] = useState(initial);

  const isShowingAll = visibleCount >= total && total > initial;

  const showMore = () => setVisibleCount(prev => prev + step);
  const reset = () => setVisibleCount(initial);

  return { visibleCount, isShowingAll, showMore, reset };
};