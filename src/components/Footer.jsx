import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
   const animation = {
      hidden: {
         y: -100,
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
      },
   };

   const footRef = useRef(null);
   const isInView = useInView(footRef, { once: true });

   return (
      <motion.footer
         ref={footRef}
         className="bg-night text-eggshell flex justify-between p-4 md:p-8 h-52 md:h-72 overflow-hidden"
         initial={"hidden"}
         animate={isInView ? "visible" : ""}
         transition={{
            staggerChildren: 0.2,
            delayChildren: 0.4,
         }}
      >
         <motion.div
            className="flex flex-col justify-between gap-4"
            variants={animation}
            transition={{ type: "spring", stiffness: 200 }}
         >
            <span className="text2xl md:text-4xl uppercase font-bold">
               krypto
            </span>
            <span className="flex gap-6">
               <motion.span
                  className="p-2 bg-bittersweet rounded-full"
                  whileHover={{
                     scale: 0.9,
                     transition: { type: "spring", stiffness: 500 },
                  }}
                  transition={{ type: "spring", stiffness: 500 }}
               >
                  <Link to={"https://github.com/deepakrawat31/krypto"}>
                     <IconBrandGithub className="w-6 md:w-9 h-6 md:h-9" />
                  </Link>
               </motion.span>
               <motion.span
                  className="p-2 bg-bittersweet rounded-full"
                  whileHover={{
                     scale: 0.9,
                     transition: { type: "spring", stiffness: 500 },
                  }}
                  transition={{ type: "spring", stiffness: 500 }}
               >
                  <Link
                     to={
                        "https://github.com/deepakrawat31/https://www.linkedin.com/in/deepak-rawat-987968238/"
                     }
                  >
                     <IconBrandLinkedin className="w-6 md:w-9 h-6 md:h-9" />
                  </Link>
               </motion.span>
            </span>
         </motion.div>
         <motion.nav
            className="flex flex-col gap-4 text-base md:text-2xl font-bold capitalize"
            variants={animation}
            transition={{ type: "spring", stiffness: 200 }}
         >
            <Link
               to={"/coins"}
               className="underline underline-offset-4 hover:underline-offset-8 transition-all"
            >
               coins
            </Link>
            <Link
               to={"/login"}
               className="underline underline-offset-4 hover:underline-offset-8 transition-all"
            >
               login
            </Link>
            <Link
               to={"/register"}
               className="underline underline-offset-4 hover:underline-offset-8 transition-all"
            >
               register
            </Link>
         </motion.nav>
      </motion.footer>
   );
}
