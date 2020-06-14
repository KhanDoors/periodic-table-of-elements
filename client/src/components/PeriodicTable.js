import React from "react";
import "./PeriodicTable.css";
import data from "./PeriodicTableJSON.json";
import { motion } from "framer-motion";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};

const PeriodicTable = () => {
  return (
    <motion.div
      className="periodic-table"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {data.elements.map((element) => (
        <motion.div
          className="element"
          key={element.name}
          style={{
            gridColumn: element.xpos,
            gridRow: element.ypos,
            backgroundColor: colorMap[element.category],
          }}
          whileHover={{
            scale: 2,
            textShadow: "0px, 0px, 50px, rgb(255, 255, 255)",
            boxShadow: "0px 0px 80px rgb(255, 255, 255)",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
        >
          <motion.strong
            initial={{ y: -750 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 50 }}
          >
            {element.symbol}
          </motion.strong>
          <small className="number">{element.number}</small>
          <motion.strong
            className="name"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {element.name}
          </motion.strong>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PeriodicTable;
