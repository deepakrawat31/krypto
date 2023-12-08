"use client";

import { IconArrowNarrowUp } from "@tabler/icons-react";
import { IconArrowNarrowDown, IconDots, IconPlus } from "@tabler/icons-react";

export default function Overview({ coins }) {
   return (
      <div className="flex flex-col gap-2">
         <h2 className="text-zinc-300/60 text-xl">Overview</h2>
         <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-2">
            <span className="row-span-2 bg-zinc-900/80 rounded-2xl flex flex-col gap-2 p-2 overflow-hidden">
               <span className="flex items-center justify-between">
                  <span>Starred Crypto</span>
                  <button className="p-1 bg-zinc-950 rounded-full">
                     <IconDots size={18} />
                  </button>
               </span>
               <span className="flex-1 relative">
                  <span className="flex flex-col gap-2 w-full absolute">
                     {coins.map((coin, i) => (
                        <span
                           className="flex items-center justify-between w-full text-sm"
                           key={i}
                        >
                           <span>{coin.name}</span>
                           <span>$ {coin.current_price}</span>
                        </span>
                     ))}
                  </span>
                  <span className="absolute inset-0 z-30 bg-gradient-to-b from-transparent via-zinc-900/70 to-zinc-900/95"></span>
               </span>
            </span>
            <span className="row-start-3 flex flex-col items-end bg-zinc-900/80 rounded-2xl p-2">
               <button className="p-0.5 bg-yellow-300 text-black rounded-full">
                  <IconPlus />
               </button>
               <span className="flex-1 text-4xl w-full flex items-center justify-center">
                  Add Items
               </span>
            </span>
            <span className="row-span-3 grid grid-rows-3 gap-2">
               {coins.slice(0, 3).map((coin, i) => (
                  <span
                     className="flex flex-col gap-2 bg-zinc-900/80 p-4 rounded-2xl"
                     key={i}
                  >
                     <span className="flex items-center justify-between">
                        <span>{coin.name}</span>
                        <span>
                           {coin.price_change_percentage_24h < 0 ? (
                              <span
                                 className={`block p-1 rounded-full bg-zinc-950 ${
                                    coin.price_change_percentage_24h < 0
                                       ? "text-rose-500"
                                       : "text-emerald-500"
                                 }`}
                              >
                                 <IconArrowNarrowDown size={16} />
                              </span>
                           ) : (
                              <span
                                 className={`block p-1 rounded-full bg-zinc-950 ${
                                    coin.price_change_percentage_24h < 0
                                       ? "text-rose-500"
                                       : "text-emerald-500"
                                 }`}
                              >
                                 <IconArrowNarrowUp size={16} />
                              </span>
                           )}
                        </span>
                     </span>
                     <span
                        className={`${
                           coin.price_change_percentage_24h < 0
                              ? "text-rose-500"
                              : "text-emerald-500"
                        }`}
                     >
                        {coin.price_change_percentage_24h.toFixed(3)}
                     </span>
                  </span>
               ))}
            </span>
         </div>
      </div>
   );
}
