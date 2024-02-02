let valNum=10;
function temperatureConverter(valNum) {
    let f=valNum;
    let c=(f-32)/1.8;

    
    return c.toFixed(2);

  
  }
  console.log(temperatureConverter(103));