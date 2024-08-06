import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

//함수의 이름앞에 use가 붙으면 이 함수는 커스텀 훅이 된다.
//커스텀훅은 useEffect,useContext가 자유롭게 호출이 가능하다.
const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    //데이터를 가지고 오는것.
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
      //data 스테이트의 find메서드를 이용해서 모든 일기의 아이템들중에 현재 아이템의 아이디가 params의 id와 일치하는
      //아이템을 찾아서 반환.
    );
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);
  //id나 data가 바뀌었을때 실행이된다.
  return curDiaryItem;
};
export default useDiary;
