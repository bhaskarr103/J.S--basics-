<!DOCTYPE html>
<html>

<head>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: red;
            position: relative;
            animation-name: example;
            animation-duration: 4s;
            animation-iteration-count: 3;
        }

        @keyframes example {
            0% {
                background-color: red;
                left: 0px;
                top: 0px;
            }

            25% {
                background-color: yellow;
                left: 200px;
                top: 0px;
            }

            50% {
                background-color: blue;
                left: 200px;
                top: 200px;
            }

            75% {
                background-color: green;
                left: 0px;
                top: 200px;
            }

            100% {
                background-color: red;
                left: 0px;
                top: 0px;
            }
        }
    </style>
</head>

<body>

    <h1>CSS Animation</h1>

    <p>The animation-iteration-count property specifies the number of times an animation should run. The following
        example will run the animation 3 times before it stops:</p>

    <div></div>

</body>

</html>
