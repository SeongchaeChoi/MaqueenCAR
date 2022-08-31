function 좌회전 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 200)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        정지()
    }
    if (receivedNumber == 1) {
        전진()
    }
    if (receivedNumber == 2) {
        후진()
    }
    if (receivedNumber == 3) {
        좌회전()
    }
    if (receivedNumber == 4) {
        우회전()
    }
    if (receivedNumber == 5) {
        기술1()
    }
    if (receivedNumber == 6) {
        기술2()
    }
    if (receivedNumber == 7) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.Triangle)
        soundExpression.giggle.playUntilDone()
    }
})
function 우회전 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 200)
}
function 기술1 () {
    basic.showIcon(IconNames.Happy)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 200)
}
function 기술2 () {
    basic.showIcon(IconNames.Asleep)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 200)
}
function 정지 () {
    maqueen.motorStop(maqueen.Motors.All)
}
function 후진 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
}
function 공격 () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.showIcon(IconNames.Happy)
    angle = 80
    maqueen.servoRun(maqueen.Servos.S1, angle)
    basic.pause(100)
    for (let index = 0; index < 10; index++) {
        angle += -50
        maqueen.servoRun(maqueen.Servos.S1, angle)
        basic.pause(150)
        angle += 50
        maqueen.servoRun(maqueen.Servos.S1, angle)
        basic.pause(150)
    }
}
function 전진 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
}
let angle = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
