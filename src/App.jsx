import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./App.css";

const TypingEffect = () => {
  return (
    <h2 className="page1 flex">
      <Typewriter
        words={["ALPHA", "MARKETING"]}
        loop={Infinity}
        cursor
        cursorStyle="_"
        typeSpeed={120}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h2>
  );
};

function App() {
  const handleScroll = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    const currentPage = Math.floor(window.scrollY / window.innerHeight);
    const nextPage = direction > 0 ? currentPage + 1 : currentPage - 1;

    const totalPages = 6;
    if (nextPage >= 0 && nextPage < totalPages) {
      window.scrollTo({
        top: nextPage * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-screen bg-black-900 flex items-center justify-center">
        <div className="box"></div>
        <TypingEffect />
      </div>
      <div className="h-screen bg-orange-500 flex items-center justify-center">
        <motion.h2 className="text-white text-4xl font-bold">Page 2</motion.h2>
      </div>
      <div className="h-screen bg-green-500 flex items-center justify-center">
        <motion.h2 className="text-white text-4xl font-bold">Page 3</motion.h2>
      </div>
      <div className="h-screen bg-red-500 flex items-center justify-center">
        <motion.h2 className="text-white text-4xl font-bold">Page 4</motion.h2>
      </div>
      <div className="h-screen bg-yellow-500 flex items-center justify-center">
        <motion.h2 className="text-white text-4xl font-bold">Page 5</motion.h2>
      </div>
      <div className="h-screen bg--500 flex items-center justify-center">
        <motion.h2 className="text-white text-4xl font-bold">Page 6</motion.h2>
      </div>
    </>
  );
}

export default App;
