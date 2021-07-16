function insertValue(num){
    const input = document.getElementById('input-value').value
    const input = input.value = input + num
}

function calculate() {
    document.getElementById("input-value").value = eval(input)
}

function clear(){
    document.getElementById('input-value').value = " "
}

function invertValue(){
    calculate()

    document.getElementById('input-value').value *= -1
}

function percent(){
    
}