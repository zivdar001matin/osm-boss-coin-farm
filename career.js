function checkOK() {
    try {

        let x = document.getElementsByClassName("btn-new btn-compact btn-wide");
        if (typeof (x) != 'undefined' && x != null && x.length > 0) {
            console.log(x);
            let bNode = x[0];
            bNode.click();
            return true;
        }
        return false;
    } catch (err) {
        console.log("err : ", err);
        return false;
    }
}

function checkClose() {
    let x = document.getElementsByClassName("close");
    if (typeof (x) != 'undefined' && x != null && x.length > 0) {
        let bNode = x[0];
        bNode.click();
    }
}

let intervalId = window.setInterval(function exampleFunction() {
    try {
        setTimeout(function () {
            checkClose();
            let y = document.getElementsByClassName("wallet-container bosscoin-wallet btn-new btn-success");
            let aNode = y[0];
            aNode.click();
        }, 5000);
        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let x = document.getElementsByClassName("product-small product-free");
            let bNode = x[0];
            bNode.click();
        }, 10000);

        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let x = document.getElementsByClassName("product-small product-free");
            let bNode = x[0];
            bNode.click();
        }, 45000);

        setTimeout(function () {
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
            console.log("THIS IS");
            let x = document.getElementsByClassName("product-small product-free");
            let bNode = x[0];
            bNode.click();
        }, 90000);

        setTimeout(function () {
            if (checkOK()) {
                return exampleFunction;
            }
            console.log("THIS IS");
            let x = document.getElementsByClassName("product-small product-free");
            let bNode = x[0];
            bNode.click();
        }, 135000);

        setTimeout(function () {
            checkClose();
            if (checkOK()) {
                checkClose();
                return exampleFunction;
            }
        }, 200000);
    } catch (err) {
        checkClose();
        if (checkOK()) {
            return exampleFunction;
        }
    }
    return exampleFunction;
}(), 4200000);
