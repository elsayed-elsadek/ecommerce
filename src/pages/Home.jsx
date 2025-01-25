import Bestselling from "../component/Bestselling";
import Categories from "../component/Categories"
import Featured from "../component/Featured";
import OurProducts from "../component/OurProducts";
import SmartCategory from "../component/SmartCategory";
import TodaysProducts from "../component/TodaysProducts";
import Footer from "./Footer";

const Home = () => {

 
  return (
    <>
<Categories/>
<TodaysProducts/>
<SmartCategory/>
<Bestselling/>
<OurProducts/>
<Featured/>
<Footer/>
    </>
  )
}

export default Home
