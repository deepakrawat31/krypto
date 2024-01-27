import { IconBolt, IconCurrencyDollar, IconLock } from "@tabler/icons-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Service() {
   const headRef = useRef(null);
   const cardRef = useRef(null);

   const animation = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
   };

   const headInView = useInView(headRef, { once: true });
   const cardInView = useInView(cardRef, { once: true });

   return (
      <section className="h-dvh bg-eggshell flex flex-col p-4 lg:p-8 gap-4 overflow-hidden">
         <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            ref={headRef}
            className="capitalize text-2xl lg:text-3xl font-semibold"
         >
            what we offer.
         </motion.h2>
         <motion.div
            ref={cardRef}
            initial={"hidden"}
            animate={cardInView ? "visible" : ""}
            transition={{
               staggerChildren: 0.2,
               delayChildren: 0.4,
            }}
            className="flex-1 grid grid-rows-3 grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 text-eggshell"
         >
            <motion.div
               variants={animation}
               whileHover={{
                  scale: 0.97,
                  transition: { type: "spring", stiffness: 300 },
               }}
               transition={{ type: "spring", stiffness: 300 }}
               className="lg:row-span-2 bg-night rounded-lg p-4 flex flex-row lg:flex-col items-center justify-between gap-8"
            >
               <span className="p-2 bg-bittersweet rounded-full inline-block w-fit text-night">
                  <IconLock size={36} />
               </span>
               <span className="lg:flex-1 flex flex-col justify-between h-full gap-4">
                  <h3 className="text-2xl md:text-4xl font-bold uppercase underline underline-offset-4 text-center">
                     protection
                  </h3>
                  <p className="max-w-md text-base md:text-xl text-center">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Quod accusamus facilis ad.
                  </p>
               </span>
            </motion.div>
            <motion.div
               variants={animation}
               whileHover={{
                  scale: 0.97,
                  transition: { type: "spring", stiffness: 300 },
               }}
               transition={{ type: "spring", stiffness: 300 }}
               className="lg:row-span-2 lg:row-start-2 lg:col-start-2 bg-night rounded-lg p-4 flex flex-row lg:flex-col items-center justify-between gap-8"
            >
               <span className="p-2 bg-emerald rounded-full inline-block w-fit text-night">
                  <IconBolt size={36} />
               </span>
               <span className="lg:flex-1 flex flex-col justify-between h-full gap-4">
                  <h3 className="text-2xl md:text-4xl font-bold uppercase underline underline-offset-4 text-center">
                     quality
                  </h3>
                  <p className="max-w-md text-base md:text-xl text-center">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Quod accusamus facilis ad.
                  </p>
               </span>
            </motion.div>
            <motion.div
               variants={animation}
               whileHover={{
                  scale: 0.97,
                  transition: { type: "spring", stiffness: 300 },
               }}
               transition={{ type: "spring", stiffness: 300 }}
               className="lg:row-span-2 bg-night rounded-lg p-4 flex flex-row lg:flex-col items-center justify-between gap-8"
            >
               <span className="p-2 bg-bittersweet rounded-full inline-block w-fit text-night">
                  <IconCurrencyDollar size={36} />
               </span>
               <span className="lg:flex-1 flex flex-col justify-between h-full gap-4">
                  <h3 className="text-2xl md:text-4xl font-bold uppercase underline underline-offset-4 text-center">
                     commerce
                  </h3>
                  <p className="max-w-md text-base md:text-xl text-center">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Quod accusamus facilis ad.
                  </p>
               </span>
            </motion.div>
         </motion.div>
      </section>
   );
}
