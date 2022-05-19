import Accordian from "./Accordian";
import { accordianData, carouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Carousel from "./Carousel";
import ModalName from "./ModalName";

const Bootstrap = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  const [name, setName] = useState("홍길동");

  return (
    <>
      <Accordian data={accordianData} />
      <button onClick={() => setIsShowDropdown((prev) => !prev)}>
        드랍다운
      </button>
      {isShowDropdown && <Dropdown />}
      <Carousel data={carouselData} />

      {/* modal 부모와 자식간의 자료 주고 받기 가능 props와  parameter 이용 */}
      {/* 확인버튼을 누르면 input에 입력된 값을 1번 함수에 넣고 실행 & 모달 닫기 */}
      <h1>이름 : {name}</h1>
      <button onClick={() => setIsShowModalName(true)}>이름바꾸기</button>
      {isShowModalName && (
        <ModalName
          onClose={() => setIsShowModalName(false)}
          name={name}
          onSubmit={(val) => setName(val)}
        />
      )}
    </>
  );
};
export default Bootstrap;
