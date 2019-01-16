// 20190116 0x64编写
// 仿照auto.js社区中代码调试制作并添加了注释，非本人原创
// 只适用于已安装ACEnergy模块且分辨率为1920x1080的手机
function unlock() {
    if (!device.isScreenOn()) {
        device.wakeUp();
        sleep(1000);
        swipe(540, 1600, 540, 400, 300); // 上滑唤醒图案解锁
        sleep(4000);
        gesture(1000, [253, 1666], [813, 1127], [834, 1383]); // 自己的解锁图案
        sleep(300);
        home();  //回桌面
    }
}

function start_app() {
    launchApp("ACEnergy");
    sleep(6000);
}

function click_more() {
    while (true) {
        if (descEndsWith("查看更多好友").exists()) {
            if (descEndsWith("查看更多好友").findOne().bounds().centerY() < device.height) {
                bs = descEndsWith("查看更多好友").findOne().bounds();
                click(bs.centerX(), bs.centerY());
                break;
            }
        }
        scrollDown();
    }
}

function travers_friends_list() {
    click_more();
    sleep(3000);
    while (true) {
        descEndsWith("g").find().forEach(function(collectable) {
            if (collectable.bounds().centerY() < device.height) {
                var p = findColor(captureScreen(), "#ff1da06d", {
                    region: [collectable.bounds().right, collectable.bounds().top - 30, 30, 30],
                    threshold: 4
                });

            }
        });
        if (descEndsWith("邀请").exists()) {
            if (descEndsWith("邀请").findOne().bounds().centerY() < device.height) break;
        }
        scrollDown();
        sleep(3000);
    }
    if (descEndsWith("关闭").exists()) descEndsWith("关闭").findOne().click();
    home();
}

var i = 0;
while (i < 3) {
    auto();  // 检查无障碍服务是否已经启用，如果没有启用则抛出异常并跳转到无障碍服务启用界面；
    requestScreenCapture(); // 截屏
    unlock();   // 解锁
    start_app();  // 打开蚂蚁森林助手
    travers_friends_list();  // 遍历好友列表
    i++;
    sleep(60000);   // 等待一分钟
}  //  每隔一分钟启动一次，共三次