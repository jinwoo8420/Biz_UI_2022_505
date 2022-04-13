// 현재 화면의 모든 요소들이 다 완성되면 js 코드를 시작
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const section = document.querySelector("section");

  // 화면의 스크롤이 발생 시 실행
  document.addEventListener("scroll", () => {
    const windowTop = window.scrollY;

    if (windowTop > 150) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});
