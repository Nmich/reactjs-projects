import Accordian from "@/components/accordion";
import ImageSlider from "@/components/image-slider";
import LoadMoreData from "@/components/load-more-data";
import QRCodeGenerator from "@/components/qr-code-generator";
import RandomColor from "@/components/ramdom-color";
import StarRating from "@/components/star-rating";
import TreeView from "@/components/tree-view";
import menus from "@/components/tree-view/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}
      {/* Random color component */}
      {/* <RandomColor/> */}
      {/* Star Rating component */}
      {/* <StarRating noOfStarts={10}/> */}
      {/* Image Slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}
      {/* Load More data component */}
      {/* <LoadMoreData/> */}
      {/* Tree View component */}
      {/* <TreeView menus={menus}/> */}
      {/* QR Code Generator component */}
      <QRCodeGenerator/>

    </div>
  );
}
