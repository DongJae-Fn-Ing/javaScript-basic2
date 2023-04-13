/* js/03-2.js */

function loadEnd2(){alert("loadEnd2() 실행");}

//window.onload = loadEnd2;

// 방법 : 모던 브라우저
//window.addEventListener("load", loadEnd2 );

// 방법2 : 구형 IE 대응 ->조건문 이용
if(window.attachEvent){ //window.attachEvent 구형 익스플로어를 위해 작성함
  window.attachEvent("onload", loadEnd2); //익스플로어는 이벤트 종류에 on을 붙힌다.
}else{
  window.addEventListener("load", loadEnd2); //익스플로어가 아닐 때
}