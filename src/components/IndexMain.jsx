import { motion } from "framer-motion";
import { IconArrowDown } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function IndexMain() {
   const para = "up your crypto game and invest whitout a hassle.";

   const textAnimation = {
      hidden: {
         opacity: 0,
         y: 20,
      },
      visible: {
         opacity: 1,
         y: 0,
      },
   };

   return (
      <main className="h-[calc(100dvh-82px)] py-12 bg-eggshell flex flex-col items-center justify-between gap-8 md:gap-8 relative">
         <div className="flex flex-col gap-8 items-center justify-start">
            <motion.h2
               initial={{ opacity: 0, y: -50 }}
               animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 300 },
               }}
               className="text-eggshell bg-bittersweet p-2 rounded-md font-semibold text-sm uppercase"
            >
               acquire crypto without a hitch
            </motion.h2>

            <motion.p
               initial="hidden"
               animate="visible"
               transition={{ staggerChildren: 0.1 }}
               className="text-5xl lg:text-8xl xl:text-9xl font-bold capitalize px-4 md:px-12 flex flex-wrap gap-x-4 justify-center"
            >
               {para.split(" ").map((text, i) => (
                  <motion.span
                     key={i}
                     variants={textAnimation}
                     transition={{ type: "spring", stiffness: 200 }}
                  >
                     {text}
                  </motion.span>
               ))}
            </motion.p>
         </div>
         <motion.div
            className="text-eggshell p-2 bg-bittersweet rounded-full"
            initial={{ y: -30, opacity: 0 }}
            animate={{
               y: 0,
               opacity: 1,
               transition: { type: "spring", stiffness: 300, delay: 1 },
            }}
            whileHover={{
               scale: 1.1,
               transition: { type: "spring", stiffness: 300 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
         >
            <Link to="#trending">
               <IconArrowDown size={48} />
            </Link>
         </motion.div>
      </main>
   );
}
