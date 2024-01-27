import IndexMain from "../components/IndexMain";
import Trending from "../components/Trensing";
import Service from "../components/Service";
import Footer from "../components/Footer";
import { indexRoute } from "../main";

export default function Index() {
   const data = indexRoute.useLoaderData();

   const coins = data.data;

   return (
      <>
         <IndexMain />
         <Trending coins={coins} />
         <Service />
         <Footer />
      </>
   );
}
