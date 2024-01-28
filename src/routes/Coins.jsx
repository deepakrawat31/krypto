import { coinsRoute } from "../main";

import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Footer from "../components/Footer";

export default function Coins() {
   const data = coinsRoute.useLoaderData();
   const coins = data.data;

   return (
      <>
         <main className="bg-eggshell min-h-[calc(100dvh-62px)] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 p-4 md:p-8 text-eggshell">
            {coins.map((coin) => (
               <div
                  key={coin.id}
                  className="bg-night p-4 rounded-lg flex flex-col gap-4"
               >
                  <span className="flex items-center justify-between gap-4">
                     <span className="flex gap-2 md:text-xl font-bold">
                        <span>#{coin.market_cap_rank}</span>
                        <span>{coin.name}</span>
                     </span>
                     <span>
                        <img
                           src={coin.image}
                           alt={coin.name}
                           className="aspect-square w-6 md:w-8"
                        />
                     </span>
                  </span>
                  <span className="bg-eggshell p-2 rounded-md">
                     <Line
                        data={{
                           labels: [7, 6, 5, 4, 3, 2, 1],
                           datasets: [
                              {
                                 label: "Sparkline",
                                 data: coin.sparkline_in_7d.price.map((data) =>
                                    data.toFixed(2)
                                 ),
                                 borderColor: "#E26D5C",
                                 tension: 0.5,
                              },
                           ],
                        }}
                     />
                  </span>
                  <span className="self-end p-2 bg-bittersweet text-eggshell rounded-full">
                     <Link to={`/coins/${coin.id}`}>
                        <IconArrowRight />
                     </Link>
                  </span>
               </div>
            ))}
         </main>
         <Footer />
      </>
   );
}
