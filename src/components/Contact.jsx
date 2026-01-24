import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { linkedin_logo } from "../assets";

const Contact = () => {
  return (
    <>
      <div className="mt-12 flex justify-center">
        <a
          href="https://www.linkedin.com/in/lee-lewis-lsf/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src={linkedin_logo}
            alt="LinkedIn"
            className="w-16 h-16 object-contain"
          />
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
