import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Footer from "../../components/Footer";
import { coinRoute } from "../../main";
import { IconArrowRight } from "@tabler/icons-react";

export default function Coin() {
   const data = coinRoute.useLoaderData();

   const coin = data.data;

   const animate = {
      hidden: {
         y: 30,
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
      },
   };

   return (
      <>
         <motion.main
            className="min-h-[calc(100dvh-62px)] bg-eggshell flex flex-col lg:flex-row items-center justify-center gap-4 p-4"
            initial={"hidden"}
            animate={"visible"}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
         >
            <motion.div
               className="p-2 max-w-xl w-full bg-night rounded-lg"
               variants={animate}
               transition={{ type: "spring", stiffness: 300 }}
            >
               <div className="p-2 bg-periwink w-full ring-2 ring-night rounded-md">
                  <Line
                     data={{
                        labels: [7, 6, 5, 4, 3, 2, 1],
                        datasets: [
                           {
                              label: "Sparkline",
                              data: coin.market_data.sparkline_7d.price.map(
                                 (data) => data.toFixed(2)
                              ),
                              borderColor: "#E26D5C",
                              backgroundColor: "#E4E3D3",
                              tension: 0.5,
                           },
                        ],
                     }}
                     options={{ responsive: true }}
                  />
               </div>
            </motion.div>
            <motion.div
               className="flex flex-col gap-4 p-4 max-w-xl w-full bg-night rounded-lg text-eggshell"
               variants={animate}
               transition={{ type: "spring", stiffness: 300 }}
            >
               <span className="text-xl md:text-2xl font-semibold flex items-center justify-between">
                  <span className="flex gap-2">
                     <span className="text-emerald">
                        #{coin.market_cap_rank}
                     </span>
                     <span>{coin.name}</span>
                  </span>
                  <span>
                     <img
                        src={coin.image.small}
                        alt={coin.name}
                        className="aspect-square h-10"
                     />
                  </span>
               </span>
               <p className="text-wrap text-sm md:text-base">
                  {coin.description.en.substring(0, 200)} ...
               </p>
               <span className="text-xl font-semibold uppercase flex flex-col gap-2">
                  <span className="flex justify-between items-center gap-4 text-emerald">
                     <span>ath</span>
                     <span>{coin.market_data.ath.usd}$</span>
                  </span>
                  <span className="flex justify-between items-center gap-4 text-bittersweet">
                     <span>atl</span>
                     <span>{coin.market_data.atl.usd}$</span>
                  </span>
               </span>
               <span className="flex justify-between items-center gap-2">
                  <span className="flex gap-2">
                     <span className="text-2xl md:text-4xl font-bold">
                        {coin.market_data.current_price.usd}$
                     </span>
                     <span
                        className={`text-sm md:text-base font-semibold ${
                           coin.market_data.price_change_24h > 0
                              ? "text-emerald"
                              : "text-bittersweet"
                        }`}
                     >
                        {coin.market_data.price_change_24h > 0 && "+"}
                        {coin.market_data.price_change_24h.toFixed(0)}$
                     </span>
                  </span>
                  <button className="flex items-center gap-1 md:text-lg font-semibold uppercase p-2 bg-bittersweet rounded-md">
                     <span>to cart</span>
                     <span>
                        <IconArrowRight />
                     </span>
                  </button>
               </span>
            </motion.div>
         </motion.main>
         <Footer />
      </>
   );
}
