let inputNum = document.querySelector('#inputNum');
let btnResult = document.querySelector('#btnResult');
let output = document.querySelector('.output');

// Kaprekar's Constant function to compute number of steps
const kaprekarConstant = () =>{
  let inputNumber = inputNum.value;
  if(inputNumber !== ''){
    let numArray = inputNumber.split('');
    if(numArray.length == 4){
      let minNum, maxNum, result, steps;
      if(typeof(result) == 'number'){
         output.innerHTML = 'Kindly type only numbers!!'
         }else{
        for(let i=1; result !== 6174; i++){
          if(i == 1){
            getNumber = inputNumber;
          } else{
            getNumber = result;
          }
          minNum = getNumber.toString().split('').sort().join('');
          maxNum = getNumber.toString().split('').sort((a,b) => b-a).join('');
          result = parseInt(maxNum) - parseInt(minNum);
          outputTxt = `${maxNum} - ${minNum} = ${result} <br />`;
          steps = i;
        }
           output.innerHTML = `It takes ${steps} steps to get to Keprakar's constant`;
      }
    }else{
      output.innerHTML = 'Please Enter 4 digits Number';
    }
  }else{
    output.innerHTML = "Input Field can't be empty";
  }
  
}

// get number of steps and display them once user hit button
btnResult.addEventListener('click', kaprekarConstant);