import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        className="bg-blue-500 p-10 shadow-lg"
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h2 className="text-white text-2xl font-bold">
          Framer Motion and Tailwind Test
        </h2>
      </motion.div>
      <motion.div
        className="mt-10 bg-orange-500 p-10 shadow-lg"
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h2 className="text-white text-2xl font-bold">
          Framer Motion and Tailwind Test
        </h2>
      </motion.div>
    </>
  );
}

export default App;
