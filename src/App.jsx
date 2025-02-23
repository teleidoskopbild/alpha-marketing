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
      <div className="h-screen bg-black-500 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="mt-4 text-white text-2xl sm:text-4xl font-bold w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border-4 border-white mx-auto text-center bg-transparent"
        >
          OUR VALUES
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="mt-4 text-white text-2xl sm:text-4xl font-bold w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border-4 border-white mx-auto text-center bg-transparent"
        >
          Innovate
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="mt-4 text-white text-2xl sm:text-4xl font-bold w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border-4 border-white mx-auto text-center bg-transparent"
        >
          Create
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 1, 1, 1, 0, 0, 0, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="mt-4 text-white text-2xl sm:text-4xl font-bold w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border-4 border-white mx-auto text-center bg-transparent"
        >
          Transform
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="mt-4 mb-0 p-0 text-white text-xl sm:text-4xl font-bold w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border-4 border-white mx-auto text-center bg-transparent"
        >
          Thrive
        </motion.div>
      </div>
      <div className="h-screen bg-red-500 flex items-center justify-center">
        <motion.h2 className="text-white text-4xl font-bold">Page 4</motion.h2>
      </div>
      <div className=" h-screen w-screen bg-black-600">
        <h2 className="mt-8 text-white text-2xl sm:text-4xl lg:text-6xl font-bold text-center">
          OUR LOCATIONS
        </h2>
        <img className="" src="/scaled_map.svg" alt="Scaled Map" />
      </div>
      <div className="h-screen bg--500 flex items-center justify-center">
        <motion.h2 className="text-white text-4xl font-bold">Page 6</motion.h2>
      </div>
    </>
  );
}

export default App;
