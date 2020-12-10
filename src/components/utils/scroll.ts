export const scrollTo = (
  elementId: string,
  position: ScrollLogicalPosition = "center",
  offset: boolean = true,
  offsetSize: number = 110
) => {
  const el = document.getElementById(elementId);

  if (!el) {
    return;
  }

  const scrollToY = offsetSize ? el.offsetTop - offsetSize : el.offsetTop;

  const onScroll = () => {
    if (window.pageYOffset === scrollToY) {
      const itemScrollToY = offsetSize
        ? el.offsetTop - offsetSize
        : el.offsetTop;

      if (window.pageYOffset === itemScrollToY) {
        window.removeEventListener("scroll", onScroll);
      } else {
        scrollTo(elementId, position, offset, offsetSize);
      }
    }
  };

  window.addEventListener("scroll", onScroll);

  if (offset) {
    return window.scroll({
      left: 0,
      top: el.offsetTop - offsetSize,
      behavior: "smooth",
    });
  }

  el.scrollIntoView({ behavior: "smooth", block: position });
};
