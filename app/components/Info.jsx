import Image from "next/image";
import grid from "@/public/grid.png";
import supercharge from "@/public/supercharge.jpg";
import crypto from "@/public/crypto.jpg";
import { IconCreditCard } from "@tabler/icons-react";

export default function Info() {
   return (
      <div className="flex flex-col p-6 bg-yellow-300/90 rounded-3xl">
         <span className="flex-1 text-black text-2xl font-medium uppercase leading-10">
            supercharge{" "}
            <Image
               src={supercharge}
               alt="harley"
               className="h-10 w-24 object-cover object-top inline-block rounded-full"
            ></Image>{" "}
            your crypto finances. issue cards for your team, track expences and
            on/off ramp crypto{" "}
            <Image
               src={crypto}
               alt="crypto"
               className="h-10 w-24 object-cover object-top inline-block rounded-full"
            ></Image>{" "}
            fast and securely.
         </span>
         <span className="flex justify-between items-center">
            <span>
               <Image src={grid} alt="grid"></Image>
            </span>
            <span>
               <button className="flex items-center gap-2 text-yellow-300 bg-black/90 px-6 py-4 rounded-full capitalize text-sm">
                  <span>
                     <IconCreditCard size={22} />
                  </span>
                  <span>order now</span>
               </button>
            </span>
         </span>
      </div>
   );
}
