import { IconArrowRight } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";

export default function Trending({ coins }) {
   const [activeCoin, setActiveCoin] = useState("Bitcoin");

   const cardAnimation = {
      hidden: {
         opacity: 0,
         x: 200,
      },
      visible: {
         opacity: 1,
         x: 0,
      },
   };

   const headRef = useRef(null);
   const headingInView = useInView(headRef, { once: true });
   const cardRef = useRef(null);
   const cardInView = useInView(cardRef, { once: true });

   return (
      <section
         className="h-dvh bg-eggshell flex flex-col px-4 lg:px-8 py-8 lg:py-16 gap-4 overflow-hidden"
         id="trending"
      >
         <div className="w-full">
            <motion.h2
               ref={headRef}
               initial={{ x: -100, opacity: 0 }}
               animate={
                  headingInView
                     ? { x: 0, opacity: 1, transition: { delay: 0.4 } }
                     : ""
               }
               className="capitalize text-2xl lg:text-3xl font-semibold"
            >
               trending coins.
            </motion.h2>
         </div>
         <motion.div
            ref={cardRef}
            initial="hidden"
            animate={cardInView ? "visible" : ""}
            transition={{
               staggerChildren: 0.2,
               delayChildren: 0.6,
            }}
            className="flex-1 w-full flex flex-col lg:flex-row items-start gap-4"
         >
            {coins.map((coin, i) => (
               <motion.div
                  variants={cardAnimation}
                  key={i}
                  onClick={() => setActiveCoin(coin.name)}
                  className={`bg-night text-eggshell flex justify-between gap-4 rounded-md p-4 w-full lg:w-fit lg:h-full cursor-pointer ${
                     activeCoin === coin.name
                        ? "flex-1 flex-col"
                        : "items-center lg:flex-col"
                  }`}
               >
                  <div
                     className={`flex gap-4 ${
                        activeCoin === coin.name
                           ? "flex-row-reverse justify-between"
                           : "lg:flex-col"
                     }`}
                  >
                     <span className="rounded-lg h-fit">
                        <img
                           src={coin.image}
                           alt={coin.name}
                           className="aspect-square max-h-10"
                        />
                     </span>
                     <span
                        className={`flex gap-4 text-xl lg:text-3xl font-bold uppercase ${
                           activeCoin === coin.name
                              ? ""
                              : "vertical-text items-center"
                        }`}
                     >
                        <span className="">#{coin.market_cap_rank}</span>
                        <span className="">{coin.name}</span>
                     </span>
                  </div>
                  {activeCoin != coin.name && (
                     <motion.div
                        className="p-2 bg-bittersweet rounded-full"
                        initial={{ scale: 0 }}
                        animate={{
                           scale: 1,
                           transition: { type: "spring", stiffness: 400 },
                        }}
                     >
                        <IconArrowRight />
                     </motion.div>
                  )}
                  {activeCoin === coin.name && (
                     <motion.div
                        className="flex flex-col gap-8 font-semibold overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        transition={{
                           staggerChildren: 0.2,
                           delayChildren: 0.2,
                           type: "spring",
                           stiffness: 100,
                        }}
                     >
                        <motion.span
                           className="flex gap-4 md:px-8"
                           variants={cardAnimation}
                        >
                           <span className="text-4xl sm:text-7xl md:text-9xl">
                              {coin.current_price.toFixed(0)}$
                           </span>
                           <span
                              className={`sm:text-2xl md:text-4xl ${
                                 coin.price_change_24h < 0
                                    ? "text-bittersweet"
                                    : "text-emerald"
                              }`}
                           >
                              {coin.price_change_24h > 0 ? "+" : ""}
                              {coin.price_change_24h.toFixed(0)}$
                           </span>
                        </motion.span>
                        <motion.span
                           className="hidden text-4xl w-full md:flex flex-col gap-4 md:px-8"
                           variants={cardAnimation}
                        >
                           <span className="flex justify-between gap-2 capitalize text-emerald">
                              <span>all time high</span>
                              <span>{coin.ath.toFixed(0)}$</span>
                           </span>
                           <span className="flex justify-between gap-2 capitalize text-bittersweet">
                              <span>all time low</span>
                              <span>{coin.atl.toFixed(0)}$</span>
                           </span>
                        </motion.span>
                        <motion.span
                           className="text-2xl md:text-4xl uppercase underline underline-offset-4"
                           variants={cardAnimation}
                        >
                           <Link
                              to={`/coins/$coinId`}
                              params={{
                                 coinId: coin.id,
                              }}
                              className="flex gap-4 items-center justify-end"
                           >
                              <span>buy coin</span>
                              <span className="p-2 rounded-full bg-bittersweet">
                                 <IconArrowRight />
                              </span>
                           </Link>
                        </motion.span>
                     </motion.div>
                  )}
               </motion.div>
            ))}
         </motion.div>
      </section>
   );
}
