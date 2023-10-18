import { motion, useScroll } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 400,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

// Opted to don't pass Children prop because it's the only usecase of the modal in the app.

function AboutModal({ handleClose }) {
  const { scrollYProgress } = useScroll();
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        style={{ scaleX: scrollYProgress }}
        className="h-contain w-3/4 max-w-2xl m-auto p-5 rounded-md bg-white overflow-y-auto"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full flex flex-col gap-5 tracking-wide">
          <div className="flex flex-col gap-2 mb-3">
            <p className="font-semibold text-xl capitalize text-blue-900 text-center">
              About StackTimers
            </p>
            <div className="bg-blue-100 h-[1px] rounded-full"></div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-blue-950">
              <span className="font-semibold">StackTimers</span> is a
              non-profitable educational project and a case study of the amazing{" "}
              <a
                className="font-semibold hover:text-red-600"
                href="https://pomofocus.io/"
                target="blank"
              >
                Pomofocus
              </a>
              , which inspired both the functionality and design choices (the
              monochromatic theme, the central positioning of the timers and the
              playful typeface).
            </p>
            <div>
              <p className="text-lg text-blue-900 font-semibold text-center">
                &quot;Rebuilding websites you admire is the right path to
                learning &quot;
              </p>
            </div>
            <p className="text-blue-950">
              My goal with <span className="font-semibold">StackTimers</span> is
              to showcase some skills I have learned during my journey with
              React. Here, I leveraged React&apos;s useContext and useReducer to
              manage state and allow the creation of multiple timers to fit the
              user&apos;s workflow.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-1 text-sm">
            <p className="text-blue-950 ">
              Want to take a peek at the design and code?
            </p>
            <ul className="ml-2 flex gap-2">
              <li>
                <a
                  href="https://www.figma.com/file/RrbcIi6F59VCOTgfUaU0Id/StackTimer?type=design&mode=design&t=LXonOIWxZCWmpzGb-1"
                  target="blank"
                  className="border border-blue-950 text-blue-950 text-xs px-2 py-0.5 rounded-full hover:bg-blue-800 hover:text-white  transition-all duration-200"
                >
                  Figma file
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dealencardavid/stacktimers"
                  target="blank"
                  className="border border-blue-950 text-blue-950 text-xs px-2 py-0.5 rounded-full hover:bg-blue-800 hover:text-white  transition-all duration-200"
                >
                  Github page
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 flex flex-col gap-2 self-center">
            <div className="bg-slate-200 h-[1px] w-24 rounded-full self-center"></div>
            <p className="text-slate-500 text-sm">
              Made by{" "}
              <a
                href="https://www.linkedin.com/in/david-de-alencar/"
                target="blank"
                className="hover:text-blue-900"
              >
                David de Alencar
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default AboutModal;
