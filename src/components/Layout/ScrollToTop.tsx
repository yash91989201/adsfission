import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [scrollToTopBtn, setScrollToTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setScrollToTopBtn(true);
      } else {
        setScrollToTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!scrollToTopBtn) return <></>;

  return (
    <button
      className="fixed bottom-4 right-4 rounded-sm border border-primary-300 bg-primary-300 p-3 text-sm text-white transition-all delay-75 ease-in-out hover:bg-white hover:text-primary-300"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}
