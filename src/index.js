module.exports = function toReadable (number) {
  const firstDozen ={
      0:"",
      1:"one",
      2:"two",
      3:"three",
      4:"four",
      5:"five",
      6:"six",
      7:"seven",
      8:"eight",
      9:"nine",
  }   
  const dozens= {
    0:'' , 
    1:'',
    2:'twenty', 
    3:'thirty', 
    4:'forty', 
    5:'fifty', 
    6:'sixty', 
    7:'seventy', 
    8:'eighty', 
    9:'ninety',
   }
    
    const secondDozen={
    0:"ten",
    1:"eleven",
    2:"twelve",
    3:"thirteen",
    4:"fourteen",
    5:"fifteen",
    6:"sixteen",
    7:"seventeen",
    8:"eighteen",
    9:"nineteen",
    }
    let digits=String(number).split("");
    let unit,dozen,hundred;
    switch(digits.length){
      case 3: {
        unit=digits[2];
        dozen=digits[1];
        hundred=digits[0];
        if(dozen==0 && unit!=0){
          return Object.values(firstDozen)[hundred] +" hundred "+ Object.values(firstDozen)[unit]
      }
      else if(dozen==1){
        return Object.values(firstDozen)[hundred] +" hundred "+ Object.values(secondDozen)[unit]
      }else if(dozen==0 && unit==0){
        console.log(Object.values(firstDozen)[hundred] +" hundred")
        return Object.values(firstDozen)[hundred] +" hundred"
      }
      else if(unit==0){
        return Object.values(firstDozen)[hundred] +" hundred "+ Object.values(dozens)[dozen]
      }
      else{
        console.log(Object.values(firstDozen)[hundred] +" hundred "+ Object.values(dozens)[dozen]+" "+Object.values(firstDozen)[unit])
        return Object.values(firstDozen)[hundred] +" hundred "+ Object.values(dozens)[dozen]+" "+Object.values(firstDozen)[unit]
      }
    }
      case 2:
        {
          unit=digits[1];
          dozen=digits[0];
          console.log( Object.values(dozens)[dozen]+" "+Object.values(firstDozen)[unit])
          if(number<20){
            return Object.values(secondDozen)[unit];
          }
          else if(unit==0){
            return Object.values(dozens)[dozen]
          }
          return Object.values(dozens)[dozen]+" "+Object.values(firstDozen)[unit]
        }
      case 1:
        {
          unit=digits[0];
          if(number==0){
            return "zero"
          }
          return Object.values(firstDozen)[unit];
       
          
        }

    }
  }

