import Accordian from "@/components/accordion";
import RandomColor from "@/components/ramdom-color";
import Image from "next/image";

export default function Home() {
  return (
<div className="App">
  {/* Accordian component */}
  <Accordian/>
  {/* Random color component */}
  <RandomColor/>
</div>
    );
}
