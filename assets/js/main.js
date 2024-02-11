import { Calculator } from "./functions.js"

window.onload = () => {
    Calculator.initkeyValue()
    Calculator.obtainKeyValueOperator()
    Calculator.obtainKeyValueNumeric()
    Calculator.obtainKeyValueDelete()
    Calculator.obtainKeyValueCancel()
    Calculator.cleanScreens()
    Calculator.Operationresult()

}
