setScreenMetrics(1080, 2400);

function a1() {
  press(1000, 200, 1);
}
function a2() {
  press(1200, 200, 1);
}
function a3() {
  press(1400, 200, 1);
}
function a4() {
  press(1000, 400, 1);
}
function a5() {
  press(1200, 400, 1);
}
function a6() {
  press(1400, 400, 1);
}
function a7() {
  press(1000, 600, 1);
}
function a8() {
  press(1200, 600, 1);
}
function a9() {
  press(1400, 600, 1);
}
function t() {
  sleep(400);
}
function t2()
{
    sleep(800);
}
// n
a7(); t(); a1(); t(); a5(); t(); a9(); t(); a3(); t2();
// m
a7(); t(); a2(); t(); a8(); t(); a3(); t(); a9(); t2();
// s
a2(); t(); a4(); t(); a6(); t(); a8(); t2();
// l
a1(); t(); a7(); t(); a9(); t2();