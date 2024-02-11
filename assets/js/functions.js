//variable usuelle
var screenOperation = document.getElementsByClassName("screen-operation")[0]
var screenResult = document.getElementsByClassName("screen-result")[0]
export const Calculator = {
    initkeyValue: () => {
        var keyTarget = document.querySelectorAll(".btn-clavier-calc")
        keyTarget[0].innerHTML = "7"
        keyTarget[0].value = 7
        keyTarget[1].innerHTML = "8"
        keyTarget[1].value = 8
        keyTarget[2].innerHTML = "9"
        keyTarget[2].value = 9
        keyTarget[3].innerHTML = "4"
        keyTarget[3].value = 4
        keyTarget[4].innerHTML = "5"
        keyTarget[4].value = 5
        keyTarget[5].innerHTML = "6"
        keyTarget[5].value = 6
        keyTarget[6].innerHTML = "1"
        keyTarget[6].value = 1
        keyTarget[7].innerHTML = "2"
        keyTarget[7].value = 2
        keyTarget[8].innerHTML = "3"
        keyTarget[8].value = 3
        keyTarget[9].innerHTML = "0"
        keyTarget[9].value = 0
        keyTarget[10].innerHTML = "00"
        keyTarget[10].value = 0
        keyTarget[11].innerHTML = "000"
        keyTarget[11].value = 0
        keyTarget[12].innerHTML = "."
        keyTarget[12].value = ","
        keyTarget[13].innerHTML = "("
        keyTarget[13].value = "("
        keyTarget[14].innerHTML = ")"
        keyTarget[14].value = ")"
    },
    obtainKeyValueNumeric: () => {
        //key number form 0 to 9 and coma et bracket
        var keyTarget = document.querySelectorAll(".btn-clavier-calc")
        var tableKeyValueAndLength = {}
        for (let index = 0; index < keyTarget.length; index++) {
            const element = keyTarget[index]
            element.addEventListener('click', () => {
                tableKeyValueAndLength.keyValue = parseInt(element.innerHTML)

                if (isNaN(tableKeyValueAndLength.keyValue)) {
                    tableKeyValueAndLength.keyValue = element.innerHTML
                }
                tableKeyValueAndLength.keyLength = element.innerHTML.length

                console.log(tableKeyValueAndLength);

                Calculator.showKeyOnScreen(tableKeyValueAndLength.keyLength, tableKeyValueAndLength.keyValue)
            })
        }
    },
    obtainKeyValueOperator: () => {
        //key operators
        var tableKeyValueAndLength = {}

        var keytargetOperator = document.querySelectorAll(".calculator-right div")
        for (let index = 1; index < keytargetOperator.length - 1; index++) {
            const element = keytargetOperator[index];
            element.addEventListener('click', () => {
                tableKeyValueAndLength.keyValue = element.innerHTML
                tableKeyValueAndLength.keyLength = element.innerHTML.length
                console.log(tableKeyValueAndLength);
                Calculator.showKeyOnScreen(tableKeyValueAndLength.keyLength, tableKeyValueAndLength.keyValue)

            })
        }
    },
    obtainKeyValueDelete: () => {
        //key delete
        var keyDelete = document.querySelector(".btn-del")
        keyDelete.addEventListener('click', () => {
            var screenContent = screenOperation.innerHTML

            var screenContentNew = ""
            for (let index = 0; index < screenContent.length - 1; index++) {
                const element = screenContent[index];
                screenContentNew += element
            }
            screenOperation.innerHTML = screenContentNew
        })
    },
    obtainKeyValueCancel: () => {
        //key cancel
        var keyCancel = document.getElementsByClassName("btn-cancel")[0]
        keyCancel.addEventListener('click', () => {
            screenOperation.innerHTML = ""
            screenResult.innerHTML = ""
        })
    },
    cleanScreens: () => {
        setTimeout(() => {
            screenOperation.innerHTML = ""
            screenResult.innerHTML = ""
        }, 2000);
    },
    Operationresult: () => {
        var resultBtn = document.querySelectorAll(".calculator-right div")[6]
        resultBtn.addEventListener('click', () => {

            var screenOperationResult = document.getElementsByClassName("screen-result")[0]
            var screenOperationContent = document.getElementsByClassName("screen-operation")[0]
            var operation = screenOperationContent.innerHTML
            screenOperationResult.innerHTML = eval(operation)

        })


    }
    ,
    showKeyOnScreen: (keyLength, keyValue) => {
        var screenOperationContent = document.getElementsByClassName("screen-operation")[0]
        console.log(screenOperationContent);
        for (let index = 0; index < keyLength; index++) {
            screenOperationContent.innerHTML += keyValue;
        }
    }
}