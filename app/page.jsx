import Info from "./components/Info";
import Investment from "./components/Investment";
import Nav from "./components/Nav";
import Overview from "./components/Overview";

async function getCoins() {
   const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
   );

   return res.json();
}

export default async function Home() {
   const data = await getCoins();

   return (
      <main className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-4 min-h-screen p-2">
         <Nav />
         <Info />
         <Overview coins={data} />
         <Investment coins={data} />
      </main>
   );
}
