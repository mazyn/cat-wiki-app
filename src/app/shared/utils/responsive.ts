const isMobile = (window: Window): boolean => {
  return window.innerWidth < 640;
};

export { isMobile };
