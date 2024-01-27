import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./routes/Index";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Cart from "./routes/Cart";
import Coins from "./routes/Coins";
import Coin from "./routes/$coinId/Coin";
import Navbar from "./components/Navbar";
import "./index.css";

import {
   Outlet,
   RouterProvider,
   Router,
   Route,
   RootRoute,
} from "@tanstack/react-router";

const rootRoute = new RootRoute({
   component: () => (
      <>
         <Navbar />
         <div className="overflow-hidden">
            <Outlet />
         </div>
      </>
   ),
});

export const indexRoute = new Route({
   getParentRoute: () => rootRoute,
   path: "/",
   component: Index,
   loader: async () => {
      const res = await fetch(
         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=true&locale=en`
      );
      const data = await res.json();

      return {
         data,
      };
   },
});
const loginRoute = new Route({
   getParentRoute: () => rootRoute,
   path: "login",
   component: Login,
});
const registerRoute = new Route({
   getParentRoute: () => rootRoute,
   path: "register",
   component: Register,
});
const cartRoute = new Route({
   getParentRoute: () => rootRoute,
   path: "cart",
   component: Cart,
});
const coinListRoute = new Route({
   getParentRoute: () => rootRoute,
   path: "coins",
   component: () => (
      <>
         <Outlet />
      </>
   ),
});
export const coinsRoute = new Route({
   getParentRoute: () => coinListRoute,
   path: "/",
   // loader: async () => {
   //    const res = await fetch(
   //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&locale=en`
   //    );
   //    const data = await res.json();

   //    return {
   //       data,
   //    };
   // },
   component: Coins,
});
export const coinRoute = new Route({
   getParentRoute: () => coinListRoute,
   path: "$coinId",
   loader: async ({ params }) => {
      const res = await fetch(
         `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&tickers=false&community_data=false&developer_data=true&sparkline=true`
      );
      const data = await res.json();

      return {
         data,
      };
   },
   component: Coin,
});

const routeTree = rootRoute.addChildren([
   indexRoute,
   loginRoute,
   registerRoute,
   cartRoute,
   coinListRoute.addChildren([coinsRoute, coinRoute]),
]);

const router = new Router({ routeTree });

const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
   const root = ReactDOM.createRoot(rootElement);
   root.render(
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
   );
}
