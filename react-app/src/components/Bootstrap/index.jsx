import Accordian from "./Accordian";
import { accordianData, carouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Carousel from "./Carousel";

const Bootstrap = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  return (
    <>
      <Accordian data={accordianData} />

      <button onClick={() => setIsShowDropdown((prev) => !prev)}>
        드랍다운
      </button>
      {isShowDropdown && <Dropdown />}
      <Carousel data={carouselData} />
    </>
  );
};
export default Bootstrap;
