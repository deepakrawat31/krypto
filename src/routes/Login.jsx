import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Login() {
   const [username, setUsername] = useState("");
   const inputRef = useRef();

   const submitHandler = (e) => {
      e.preventDefault();
      setUsername(inputRef.current.value);
      inputRef.current.value = "";
   };

   return (
      <main className="h-[calc(100dvh-62px)] bg-eggshell flex items-center justify-center p-2">
         <motion.div
            className="max-w-lg w-full p-4 bg-night text-eggshell rounded-lg flex flex-col gap-8"
            initial={{ scale: 0.5 }}
            animate={{
               scale: 1,
               transition: { type: "spring", stiffness: 200 },
            }}
         >
            <div className="flex flex-col gap-2">
               <span className="text-xl md:text-4xl uppercase font-bold">
                  login
               </span>
               <span className="capitalize font-semibold text-periwink">
                  welcome to the word of crypto!
               </span>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col gap-6">
               <label
                  htmlFor="username"
                  className="flex flex-col gap-2 text-lg font-semibold uppercase"
               >
                  <span>username</span>
                  <input
                     type="text"
                     name="username"
                     id="username"
                     autoComplete="off"
                     ref={inputRef}
                     className="outline-none p-2 bg-periwink text-lg font-semibold text-night rounded-md uppercase focus:ring-eggshell focus:ring-2 focus:ring-offset-2"
                  />
               </label>
               <span className="capitalize font-semibold">
                  not a user?{" "}
                  <Link
                     to={"/register"}
                     className="uppercase text-periwink underline underline-offset-2"
                  >
                     register here
                  </Link>
               </span>
               <motion.input
                  whileHover={{
                     scale: 0.95,
                     transition: { type: "spring", stiffness: 400 },
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                  type="submit"
                  value="log in"
                  className="bg-periwink p-2 text-lg text-night font-bold uppercase rounded-lg cursor-pointer"
               />
            </form>
         </motion.div>
      </main>
   );
}
