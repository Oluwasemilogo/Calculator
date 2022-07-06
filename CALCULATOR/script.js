const outputText = document.querySelector("#outPut");
const equalSign = document.querySelector("#equal");
const clearAll = document.querySelector("#clearAll");
const deleteBtn = document.querySelector("#del");

const btn9 = document.querySelector("#butt9");
const btn8 = document.querySelector("#butt8");
const btn7 = document.querySelector("#butt7");
const btnPlus = document.querySelector("#buttPlus");
const btn6 = document.querySelector("#butt6");
const btn5 = document.querySelector("#butt5");
const btn4 = document.querySelector("#butt4");
const btnMinus = document.querySelector("#buttMinus");
const btn3 = document.querySelector("#butt3");
const btn2 = document.querySelector("#butt2");
const btn1 = document.querySelector("#butt1");
const btnX = document.querySelector("#buttTimes");
const btn0 = document.querySelector("#butt0");
const btnDiv = document.querySelector("#buttDiv");
const btnDol = document.querySelector("#buttDol");
const btnPeriod = document.querySelector("#buttPeriod");

btn9.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 9}`
});
btn8.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 8}`
});
btn7.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 7}`
});
btn6.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 6}`
});
btn5.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 5}`
});
btn4.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 4}`
});
btn3.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 3}`
});
btn2.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 2}`
});
btn1.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 1}`
});
btn0.addEventListener('click',() =>{
    outputText.value = `${outputText.value + 0}`
});
btnMinus.addEventListener('click',() =>{
    outputText.value = `${outputText.value + '-'}`
});
btnPlus.addEventListener('click',()=>{
    outputText.value = `${outputText.value + '+'}`
})
btnX.addEventListener('click',() =>{
    outputText.value = `${outputText.value + '*'}`
});
btnDiv.addEventListener('click',() =>{
    outputText.value = `${outputText.value + '/'}`
});
btnDol.addEventListener('click',() =>{
    outputText.value = `${outputText.value + '%'}`
});
btnPeriod.addEventListener('click',() =>{
    outputText.value = `${outputText.value + '.'}`
});
 clearAll.addEventListener('click',() =>{
    outputText.value = `${outputText.value = ""}`
 });
 deleteBtn.addEventListener('click',() =>{
    const arr = outputText.value.split("")
    arr[arr.length - 1] = ""
    outputText.value = arr.join("");
 })
 equalSign.addEventListener('click',() =>{
    outputText.value = eval(outputText.value);
 })
