radio.onReceivedNumber(function (receivedNumber) {
    meter.show(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    meter.use(meter.Styles.Bar, -128, -42)
})
radio.setGroup(19)
basic.forever(function () {
    radio.sendNumber(1)
})
