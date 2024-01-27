import { coinRoute } from "../../main";

export default function Coin() {
   const data = coinRoute.useLoaderData();

   const coin = data.data;

   return <div>{coin.name}</div>;
}
