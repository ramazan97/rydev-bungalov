import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// sayfa her yenilendiğinde sayfanın en yukarısına gelmek için kullanılıyor

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToTop;
