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
        checkClose()
        let x = document.getElementsByClassName("btn-new center");
        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let bNode = x[0];
            bNode.click()
        }, 5000);

        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let bNode = x[0];
            bNode.click()
        }, 45000);

        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let bNode = x[0];
            bNode.click()
        }, 90000);

        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let bNode = x[0];
            bNode.click()
        }, 135000);
        setTimeout(function () {
            checkClose();
            checkOK();
        }, 200000);
    } catch (err) {
        checkClose();
        checkOK();
    }
    return exampleFunction;
}(), 12600000);
