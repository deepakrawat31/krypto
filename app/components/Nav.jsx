"use client";

import {
   IconCirclesRelation,
   IconCreditCard,
   IconPigMoney,
} from "@tabler/icons-react";
import { useState } from "react";

export default function Nav() {
   const [selectedNav, setSelectedNav] = useState(0);

   const navItems = ["Finances", "Cards", "Integrations"];

   return (
      <div className="flex flex-col gap-2 bg-zinc-900/80 rounded-3xl px-2 py-6">
         <nav className="flex justify-center gap-12">
            {navItems.map((item, i) => (
               <button
                  className={`flex gap-2 items-center justify-center text-lg ${
                     selectedNav === i
                        ? "text-yellow-300"
                        : "text-zinc-300/80 hover:text-zinc-300"
                  }`}
                  key={i}
                  onClick={() => setSelectedNav(i)}
               >
                  <span>
                     {i === 0 ? (
                        <IconPigMoney />
                     ) : i === 1 ? (
                        <IconCreditCard />
                     ) : (
                        <IconCirclesRelation />
                     )}
                  </span>
                  <span>{item}</span>
               </button>
            ))}
         </nav>
         <div className="flex-1 grid place-content-center font-podkova text-8xl text-yellow-300">
            {navItems[selectedNav]}
         </div>
      </div>
   );
}
