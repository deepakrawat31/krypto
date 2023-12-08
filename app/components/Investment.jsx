"use client";

import {
   IconArrowNarrowRight,
   IconCurrencyDollar,
   IconPlus,
} from "@tabler/icons-react";
import { useState } from "react";

export default function Investment({ coins }) {
   const [timeline, setTimeline] = useState("daily");

   return (
      <div className="flex flex-col gap-2">
         <h2 className="text-zinc-300/60 text-xl">Investments</h2>
         <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-2">
            <span className="row-span-3 bg-green-400/90 text-black p-2 rounded-2xl flex flex-col gap-2">
               <span className="flex items-center justify-between">
                  <span className="text-lg">Balance</span>
                  <span className="flex items-center gap-1 bg-black text-green-400/90 rounded-full ring-2 ring-black">
                     <button
                        className={`relative isolate px-4 py-2 text-sm ${
                           timeline === "daily" ? "text-black" : ""
                        }`}
                        onClick={() => setTimeline("daily")}
                     >
                        Daily
                        {timeline === "daily" ? (
                           <span
                              className={`${
                                 timeline === "daily"
                                    ? "absolute inset-0 rounded-full w-full h-full bg-green-400/90 -z-20"
                                    : ""
                              }`}
                           ></span>
                        ) : (
                           ""
                        )}
                     </button>
                     <button
                        className={`relative isolate px-4 py-2 text-sm ${
                           timeline === "weekly" ? "text-black" : ""
                        }`}
                        onClick={() => setTimeline("weekly")}
                     >
                        Weekly
                        {timeline === "weekly" ? (
                           <span
                              className={`${
                                 timeline === "weekly"
                                    ? "absolute inset-0 rounded-full w-full h-full bg-green-400/90 -z-20"
                                    : ""
                              }`}
                           ></span>
                        ) : (
                           ""
                        )}
                     </button>
                  </span>
               </span>
               <span className="text-5xl font-semibold tracking-wide">
                  $ {coins[0].current_price}
               </span>
            </span>
            <span className="row-span-1 flex flex-col gap-2 rounded-2xl bg-slate-400/80 text-black px-4 py-2">
               <span className="flex items-center justify-between">
                  <span className="text-sm">Active Wallet</span>
                  <button className="p-1 bg-black text-slate-400/80 rounded-full">
                     <IconPlus size={16} />
                  </button>
               </span>
               <span className="text-4xl flex-1 flex items-end justify-start">
                  3
               </span>
            </span>
            <span className="row-span-1 flex flex-col gap-2 rounded-2xl bg-zinc-800/80 text-black px-4 py-2">
               <span className="flex items-center justify-between text-slate-100">
                  <span className="text-sm">Buy or Sell or Exchange</span>
                  <span className="p-1 bg-black rounded-full">
                     <IconCurrencyDollar size={16} />
                  </span>
               </span>
               <span className="flex-1 flex items-center justify-start gap-2 text-yellow-300">
                  <span className="text-4xl">Do it</span>
                  <span>
                     <IconArrowNarrowRight size={52} stroke={1} />
                  </span>
               </span>
            </span>
         </div>
      </div>
   );
}
