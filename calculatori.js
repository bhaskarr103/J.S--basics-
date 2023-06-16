function cal() {
    var op1 = document.getElementById('first').value;
    var op2 = document.getElementById('second').value;
    var ope = document.getElementById('ope').value;
    if (ope == '+') {
        var res = parseInt(op1) + parseInt(op2);
    }

    if (ope == '-') {
        var res = parseInt(op1) - parseInt(op2);
    }

    if (ope == '*') {
        var res = parseInt(op1) * parseInt(op2);
    }

    if (ope == '/') {
        var res = parseInt(op1) / parseInt(op2);
    }
}