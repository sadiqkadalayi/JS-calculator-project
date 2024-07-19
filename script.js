const display = document.getElementById('display');

const appendToDisplay = (val) =>{
    display.value = display.value + val;
}

const clearDisplay = ()=> {
    display.value= "";
}

const calculate = () => {

    try{
        // display.value = Math.floor(eval(display.value))
        display.value = eval(display.value)
    }catch(err){
        display.value = "Error...  Please enter a proper value + value";
    }
}