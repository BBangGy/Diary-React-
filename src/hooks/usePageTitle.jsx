import { useEffect } from "react";
const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    //타이틀이라는 이름을 갖는 모든 태그를 불러온다.
    //거기서 0번 요소를 골라 내면 페이지의 title태그가 $title이라는 변수에 저장된다.
    //$를 쓰는이유는 관례상 이 변수안에 dom요소가 저장된다 라는걸 보여주기 위해
    $title.innerText = title;
  }, [title]);
};
export default usePageTitle;
