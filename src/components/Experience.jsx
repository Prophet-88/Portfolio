import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElements,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>My Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col"></div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
