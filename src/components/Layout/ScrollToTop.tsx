import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return scroll ? (
    <button
      className="fixed  bottom-4 right-4 rounded-sm bg-primary-300 p-4 text-white transition-all hover:bg-primary-600 "
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  ) : (
    <></>
  );
}
