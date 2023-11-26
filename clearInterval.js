<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="h1"></h1>
    <button onclick="stop()">STOP</button>
</body>
<script type="text/javascript">
    var my = setInterval(count,1000);
    var c = 0;
    function count() {
        document.getElementById('h1').innerHTML = c;
        c++;
    }
    function stop() {
        clearInterval(my);
    }
</script>
</html>

<!------* The clearInterval() clears the interval set with the setInterval method

* The ID value used by the setInterval() is used as the parameter for
clearInterval() method

*myVar = setInterval("function", milliseconds);
* clearInterval(myVar);-->
