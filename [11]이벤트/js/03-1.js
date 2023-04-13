/* js/03-1.js */

function loadEnd1(){alert("loadEnd() 실행");}

//window.onload = loadEnd1;
window.addEventListener("load", loadEnd1); 
// addEventListener> 이벤트감지기 및 센서 평소에는 가만히 이벤트가 발생하면 캐치를 해서 바로 실행 
// ("load", loadEnd1); load 이벤트 종류, loadEnd1 이벤트 내용
// 이런식으로 쓰면 중복되지 않고 작동을 한다,
// 객체. 이벤트리스너("이벤트종류","실행내용");