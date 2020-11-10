var preTip = 1000;
var tipPercent = 12.5;
var percent = tipPercent / 100 * preTip;
var total = preTip + percent;
var roundedTip = percent.toFixed(2);
var totalRounded = total.toFixed(2);

var totalBill = 'Your bill came to £' + preTip + ' with a discretionary' + tipPercent + '% tip of £' + roundedTip + '. Your bill is £' + totalRounded + '.'

document.write(totalBill);
alert(totalBill);
document.write(totalBill)