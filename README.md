<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewpoint" content="width-device,initial-scale=1.0">
        <style>

    
            body {
    align-items: center;
    margin: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: hsl(0, 0%, 95%);
}
#calculator {
    font-family: Arial,sans-serif;
    background-color: hsl(0 0% 15%);
    max-width:50px ;
    border: 1px solid #ccc;
    border-radius: 15px;
    overflow: hidden;
}
#display {
    width: 50%;
    height:70%;
    margin-bottom: 10px;
    padding: 20px;
    font-size: 5rem;
    text-align: left;
    background-color: hsl(0, 0%, 20%);
    color: white;
}
#keys{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-left: 10px;
    margin-right: 400px;
    gap: 5px;
    padding: 20px;
}
button {
    width: 50PX;
    height: 50px;
    
    font-size: 3rem;
    background-color: hsl(0, 0%, 30%);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    color: white;
    font-weight: bold;
}
button:hover {
    background-color: hsl(0, 0%, 40%);
}
button:active{
    background-color: hsl(0, 0%, 50%);
}
.operator-btn{
    background-color: hsl(21, 100%, 55%);
}
.operator-btn:hover{
    background-color: hsl(35, 100%, 65%);
}
.operator-btn:active{
    background-color: hsl(35, 100%, 75%);
}
        </style>
        <title> Calculator</title>
    </head>
    <body>
        <div class="Calculator">
            <input id="display"readonly>
            <div id="keys">
                <button onclick="clearDisplay" class="operator-btn">C</button>
                <button onclick="appendToDisplay('7')">7</button>
                <button onclick="appendToDisplay('8')">8</button>
                <button onclick="appendToDisplay('9')">9</button>
                <button onclick="appendToDisplay('+')" class="operator-btn">+</button>
                <button onclick="appendToDisplay('4')">4</button>
                <button onclick="appendToDisplay('5')">5</button>
                <button onclick="appendToDisplay('6')">6</button>
                <button onclick="appendToDisplay('-')" class="operator-btn">-</button>
                <button onclick="appendToDisplay('1')">1</button>
                <button onclick="appendToDisplay('2')">2</button>
                <button onclick="appendToDisplay('3')">3</button>
                <button onclick="appendToDisplay('*')" class="operator-btn">*</button>
                <button onclick="appendToDisplay('0')">0</button>
                <button onclick="appendToDisplay('')"
                <button onclick="appendToDisplay('.')">.</button>
                <button onclick="calculate()">=</button>
                <button onclick="appendToDisplay('/')" class="operator-btn">/</button>
                
                
            </div>
        </div>
        <script src="script.js"></script>
    </body>
</html>
