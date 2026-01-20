export const smoothScrollTo = (target: number, duration = 700) => {
  const start = window.scrollY;
  const distance = target - start;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};