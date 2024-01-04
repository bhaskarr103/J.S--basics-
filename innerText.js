<!DOCTYPE html>
<html>
<body>
<h1>The Element Object</h1>
<h2>The innerText Property</h2>

<button id="myBtn">Try it</button>

<p>The text content of the button element is:</p>
<p id="demo"></p>
<p>The innerText property is not supported in Internet Explorer 9 and earlier.</p>

<script>
let text = document.getElementById("myBtn").innerText;
document.getElementById("demo").innerHTML = text;  
</script>
<!--The innerText property sets or 
returns the text content of an element.-->
</body>
</html>
