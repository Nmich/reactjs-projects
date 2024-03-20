import Accordian from "@/components/accordion";
import RandomColor from "@/components/ramdom-color";
import StarRating from "@/components/star-rating";
import Image from "next/image";

export default function Home() {
  return (
<div className="App">
  {/* Accordian component */}
  {/* <Accordian/> */}
  {/* Random color component */}
  {/* <RandomColor/> */}
  {/* Star Rating component */}
  <StarRating noOfStarts={10}/>
</div>
    );
}
