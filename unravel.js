// 《unravel》
// 摘谱，编写，调试由个人独自完成
setScreenMetrics(1080, 1920);
function A1() {
  press(595, 95, 1);
}
function A2() {
  press(775, 95, 1);
}
function A3() {
  press(960, 95, 1);
}
function A4() {
  press(1145, 95, 1);
}
function A5() {
  press(1325, 95, 1);
}
function A6() {
  press(595, 275, 1);
}
function A7() {
  press(775, 275, 1);
}
function B1() {
  press(960, 275, 1);
}
function B2() {
  press(1145, 275, 1);
}
function B3() {
  press(1325, 275, 1);
}
function B4() {
  press(595, 460, 1);
}
function B5() {
  press(775, 460, 1);
}
function B6() {
  press(960, 460, 1);
}
function B7() {
  press(1145, 460, 1);
}
function C1() {
  press(1325, 460, 1);
}
function T()
{
  sleep(400);
}
function delay300() {
  sleep(300);
}
function delay350() {
  sleep(350);
}
function delay500() {
  sleep(500);
}
function delay600() {
  sleep(600);
}
function delay800() {
  sleep(800);
}
// a段
B1(); T(); B2(); T(); B1(); T(); A7(); T(); A6(); delay600();
B2(); T(); B1(); T(); A7(); T(); A6(); delay800();
A6(); T(); A5(); delay600();
A4(); T(); A4(); T(); A5(); T(); A3(); delay800();
A3(); T(); A3(); T(); A3(); delay500(); A3(); T(); B3(); T(); B3(); delay600();
B1(); T(); A7(); T(); A7(); delay500(); B1(); T(); B1(); delay800();
B1(); T(); B2(); T(); B1(); T(); A7(); T(); A6(); delay600();
B2(); T(); B1(); T(); A7(); T(); A6(); delay800();
A6(); T(); A5(); delay600();
A4(); T(); A4(); T(); A5(); T(); A3(); delay800();
A3(); T(); A3(); T(); A3(); delay500(); A3(); T(); B3(); T(); B3(); delay600();
B1(); T(); A7(); T(); A7(); delay500(); A7(); T(); B1(); T(); B1(); delay800();
// b段
A7(); T(); B1(); T(); B1(); T(); B1(); delay600();
B1(); T(); B3(); T(); B3(); T(); B2(); T(); B2(); delay800();
B1(); T(); B2(); T(); B1(); T(); A7(); T(); A5(); T(); A3(); delay800();
A7(); T(); B1(); T(); B1(); T(); B1(); delay600();
B1(); T(); B3(); T(); B3(); T(); B2(); T(); B2(); T(); B1(); delay800();
B3(); T(); B2(); T(); B2(); T(); A7(); T(); B1(); delay600();
A3(); delay800();
// c段
A5(); T(); A5(); delay350(); A3(); delay300(); A3(); delay500();
A3(); delay300(); A2(); delay300(); A3(); delay300(); A3(); delay800();
A5(); delay300(); A5(); delay300(); A3(); delay300(); A3(); delay500();
A3(); delay300(); A2(); delay300(); A3(); delay300(); A3(); delay800();
A5(); delay300(); A5(); delay300(); A3(); delay300(); A3(); delay300(); A3(); delay300(); A2(); delay300(); A3(); delay300(); A3(); delay800();
// d段
A3(); delay300(); B3(); delay300(); B2(); delay300(); B3(); delay300(); B2(); delay300(); B2(); delay300(); B2(); delay300(); B1(); delay300(); B1(); delay300(); A7(); delay300(); B1(); delay300(); A7(); delay300(); A5(); delay800();
A5(); delay300(); B3(); delay300(); B2(); delay300(); B2(); delay300(); B2(); delay300(); B1(); delay300(); B1(); delay300(); A7(); delay300(); B1(); delay300(); B5(); delay300(); A7(); delay800();
A7(); delay300(); B6(); delay350(); B5(); T(); B3(); T(); B1(); delay600();
B1(); T(); B1(); T(); A7(); T(); A6(); T(); A7(); T(); B1(); delay800();
B1(); T(); A7(); T(); B1(); delay350(); A7(); delay300(); A5(); delay800();
A5(); delay300(); B3(); delay300(); B2(); delay300(); B2(); delay300(); B2(); delay300(); B1(); delay300(); B1(); delay300(); A7(); delay300(); B1(); delay300(); A7(); delay300(); A5(); delay800();
A5(); delay300(); B3(); delay300(); B2(); delay300(); B2(); delay300(); B2(); delay300(); B1(); delay300(); B1(); delay300(); A7(); delay300(); B1(); delay300(); B5(); delay300(); A7(); delay800();
A7(); delay300(); B6(); delay350(); B5(); T(); B3(); T(); B1(); delay600();
B1(); T(); B1(); T(); A7(); T(); A6(); T(); A7(); T(); B1(); delay800();
B1(); T(); B3(); T(); B2(); T(); B1(); T(); A7(); T(); B1(); delay800();
// 痛了吗？ 
