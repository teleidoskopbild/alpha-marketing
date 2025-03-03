import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./App.css";

const TypingEffect = () => {
  return (
    <h2 className="brandname flex">
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
    const targetSections = document.querySelectorAll(".target-jump");
    const scrollPositions = Array.from(targetSections).map(
      (sec) => sec.offsetTop
    );

    const currentScroll = window.scrollY;
    let currentIndex = scrollPositions.findIndex(
      (pos) => currentScroll < pos + 10
    );

    if (currentIndex === -1) currentIndex = scrollPositions.length - 1;

    const direction = event.deltaY > 0 ? 1 : -1;
    const nextIndex = Math.max(
      0,
      Math.min(scrollPositions.length - 1, currentIndex + direction)
    );

    window.scrollTo({
      top: scrollPositions[nextIndex],
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <>
      <div className="target-jump overflow-hidden-y h-screen bg-black-900 flex items-center justify-center">
        <div className="box"></div>
        <TypingEffect />
      </div>
      <div className="target-jump h-screen bg-black-500 flex flex-col items-center justify-center">
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
      <div className="target-jump h-screen bg-black-500 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-white text-4xl font-bold text-center"
        >
          ELEVATE YOUR BRAND WITH <br /> ALPHA MARKETING
        </motion.h2>
      </div>

      <div className="target-jump h-screen w-screen bg-black-600">
        <h2 className="mt-10 text-white text-2xl sm:text-3xl lg:text-6xl lg:mt-16 font-bold text-center">
          OUR LOCATIONS
        </h2>
        <div className="mt-5 flex flex-col lg:flex-row justify-center gap-8 items-center">
          <div className="mb-5 sm:mb-0 bg-transparent text-white p-5 w-70 text-center border-3 border-white">
            <h3 className="text-xl font-bold">New York</h3>
            <p className="mt-2 text-sm">123 5th Ave, New York, NY 10010, USA</p>
          </div>
          <div className="mb-5 sm:mb-0 bg-transparent text-white p-5 w-70 text-center border-3 border-white">
            <h3 className="text-xl font-bold">Barcelona</h3>
            <p className="mt-2 text-sm">Av. Diagonal, 08008 Barcelona, Spain</p>
          </div>
          <div className="mb-5 sm:mb-0 bg-transparent text-white p-5 w-70 text-center border-3 border-white">
            <h3 className="text-xl font-bold">Tokyo</h3>
            <p className="mt-2 text-sm">
              1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan
            </p>
          </div>
        </div>
        <img
          className="w-auto mx-auto overflow-hidden"
          src="scaled_map.svg"
          alt="Scaled Map"
        />
      </div>
      <div className="target-jump h-screen mb-0 bg-black-500 flex items-center justify-center">
        <motion.button
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.2,
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
          whileTap={{ scale: 2 }}
          className="cursor-pointer px-6 py-3 border-2 border-white text-white text-lg"
          onClick={() => (window.location.href = "mailto:marketing@alpha.com")}
        >
          CONTACT US
        </motion.button>
      </div>
    </>
  );
}

export default App;
