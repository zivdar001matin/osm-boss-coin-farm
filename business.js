function checkOK() {
    try {

        let x = document.getElementsByClassName("btn-new btn-compact btn-wide");
        if (typeof (x) != 'undefined' && x != null && x.length > 0) {
            console.log(x)
            let bNode = x[0];
            bNode.click();
            return true
        }
        return false
    } catch (err) {
        console.log("err : ", err)
        return false
    }
}

function checkClose() {
    let x = document.getElementsByClassName("close");
    if (typeof (x) != 'undefined' && x != null && x.length > 0) {
        let bNode = x[0];
        bNode.click()
    }
}

let intervalId = window.setInterval(function exampleFunction() {
    try {
        checkClose();
        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let x = document.getElementsByClassName("row row-h-xs-150 row-h-sm-24");
            let bNode = x[0];
            bNode.click()
        }, 5000);

        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let x = document.getElementsByClassName("row row-h-xs-150 row-h-sm-24");
            let bNode = x[0];
            bNode.click()
        }, 95000);

        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let x = document.getElementsByClassName("row row-h-xs-150 row-h-sm-24");
            let bNode = x[0];
            bNode.click()
        }, 185000);

        setTimeout(function () {
            if (checkOK()) {
                return exampleFunction;
            }
            console.log("THIS IS");
            let x = document.getElementsByClassName("row row-h-xs-150 row-h-sm-24");
            let bNode = x[0];
            bNode.click()
        }, 275000);

        setTimeout(function () {
            checkClose();
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
        }, 365000);
    } catch (err) {
        checkClose();
        if (checkOK()) {
            return exampleFunction;
        }
    }
    return exampleFunction;
}(), 4200000);
