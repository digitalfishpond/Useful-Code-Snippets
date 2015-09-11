var changeableText = document.getElementById("text");
var listOfTests = ["Text 1", "Text 2", "Text 3", "awesome", "this rules"];
var i = 1;

var setText = function (indx) {
    changeableText.innerHTML = listOfTests[indx];
};

var runit = function () {
    
    setTimeout(function () {
        setText(i);
        if (i < (listOfTests.length - 1)) {
            i = i + 1;
        } else {
            i = 0;
        }
        runit();
    }, 2000);
};

runit();
