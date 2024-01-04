<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="mains"></h1>
</body>
<script>
    var x = false;
    var y = false;
    var z = x && y; 
    document.getElementById("mains").innerHTML = z;
</script>
</html>
