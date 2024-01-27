import { AnimatePresence, motion } from "framer-motion";
import { IconSlashes, IconSnowflake } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function Navbar() {
   const navLinks = [
      {
         to: "/login",
         name: "login",
      },
      {
         to: "/register",
         name: "register",
      },
      {
         to: "/cart",
         name: "cart",
      },
   ];

   const [smallScreen, setSmallScreen] = useState(false);
   const [openMenu, setOpenMenu] = useState(false);

   useEffect(() => {
      if (window.innerWidth < 768) {
         setSmallScreen(true);
      }

      const changeWidth = () => {
         if (window.innerWidth < 768) {
            setSmallScreen(true);
         } else setSmallScreen(false);
      };

      window.addEventListener("resize", changeWidth);

      return () => {
         window.removeEventListener("resize", changeWidth);
      };
   }, []);

   return (
      <motion.nav className="p-4  uppercase text-lg text-night font-semibold border-b-2 border-b-night/20 sticky top-0 z-20 bg-eggshell">
         <motion.div
            initial={{
               y: -30,
               opacity: 0,
            }}
            animate={{
               y: 0,
               opacity: 1,
               transition: {
                  type: "spring",
                  stiffness: 300,
               },
            }}
            className="flex items-center justify-between gap-4"
         >
            <span className="flex items-center gap-2">
               <motion.span
                  whileHover={{
                     scale: 0.9,
                     transition: { type: "spring", stiffness: 500 },
                  }}
               >
                  <Link to={"/"}>home</Link>
               </motion.span>
               <AnimatePresence>
                  {!smallScreen && (
                     <>
                        <motion.span
                           className="text-bittersweet"
                           initial={{ y: -80, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           exit={{ y: -80, opacity: 0 }}
                        >
                           <IconSlashes />
                        </motion.span>
                        <motion.span
                           whileHover={{
                              scale: 0.9,
                              transition: { type: "spring", stiffness: 500 },
                           }}
                           initial={{ y: -80, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           exit={{ y: -80, opacity: 0 }}
                        >
                           <Link to={"/coins"}>coins</Link>
                        </motion.span>
                     </>
                  )}
               </AnimatePresence>
            </span>
            <AnimatePresence>
               {!smallScreen && (
                  <motion.div
                     className="flex items-center gap-2"
                     initial={{ y: -80, opacity: 0 }}
                     animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
                     exit={{ y: -80, opacity: 0 }}
                  >
                     {navLinks.map((link, i) => (
                        <span className="flex items-center gap-2" key={i}>
                           <motion.span
                              whileHover={{
                                 scale: 0.9,
                                 transition: { type: "spring", stiffness: 500 },
                              }}
                           >
                              <Link to={link.to}>{link.name}</Link>
                           </motion.span>
                           {i < navLinks.length - 1 ? (
                              <span className="text-bittersweet">
                                 <IconSlashes />
                              </span>
                           ) : null}
                        </span>
                     ))}
                  </motion.div>
               )}
            </AnimatePresence>
            <AnimatePresence>
               {smallScreen && (
                  <>
                     <motion.button
                        onClick={() => setOpenMenu(!openMenu)}
                        className={`${openMenu ? "text-bittersweet" : ""}`}
                        initial={{ y: 80, opacity: 0 }}
                        animate={{
                           y: 0,
                           opacity: 1,
                           transition: { delay: 0.3 },
                        }}
                        exit={{ y: 80, opacity: 0 }}
                        whileTap={{
                           rotateZ: 360,
                           transition: { type: "spring", stiffness: 200 },
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                     >
                        <IconSnowflake size={26} />
                     </motion.button>
                     <AnimatePresence>
                        {openMenu && (
                           <motion.div
                              className="absolute aspect-square w-56 top-16 right-2 bg-bittersweet rounded-lg"
                              exit={{ x: 100, opacity: 0 }}
                              initial={{ x: 100, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                           ></motion.div>
                        )}
                     </AnimatePresence>
                  </>
               )}
            </AnimatePresence>
         </motion.div>
      </motion.nav>
   );
}
