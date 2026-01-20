export const getRowHeight = (gridEl: HTMLDivElement, visibleCount: number) => {
  const rows = Math.ceil(visibleCount / 6);
  return gridEl.clientHeight / rows;
};