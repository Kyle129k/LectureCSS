    function greetuser(){
        let firstname = "User";
        let greeting = `Welcome, ${firstname}!`;
        console.log(greeting)
        document.getElementById("output").innerHTML=greeting
    }
 
    greetuser()

    function changeText (){
        document.getElementById("message").innerText= "Hello, World!";
    }

    function addNumbers(){
        let number1= parseFloat(document.getElementById('number1').value);
        let number2= parseFloat(document.getElementById('number2').value);
        let sum = number1 + number2;
        document.getElementById('result').textContent = `Result =${sum}`;
    }

    addNumbers ()

    function updateTitle(){
        let newTitle = document.getElementById(`inputField`).value;
        document.getElementById(`title`).textContent = newTitle;
    }

    function concatenateStrings(){
        let str1 = document.getElementById(`string1`).value;
        let str2 = document.getElementById(`string2`).value;
        let result = str1 + str2;
        document.getElementById(`combinedText`).textContent = result;
    }

    let button = document.getElementById(`changeBackgroundButton`);
    let colorBox = document.getElementById(`colorBox`);

    button.addEventListener(`click`, ()=> {
        colorBox.style.backgroundColor = `blue`;
    })