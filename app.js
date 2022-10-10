console.log ("Hello World")

    const sum = (a,b) => {
        return a + b

    }

    
    console.log(sum(7,3))

    




     let oneEuroIs = {
         "JPY": 127.9, // japan yen
         "USD": 1.2, // us dollar
         "GBP": 0.8, // british pound
     }  
     
     function fromEuroToDollar (euros){
        return euros * oneEuroIs.USD;

    }

    function fromDollarToYen (dolares){
        return (dolares * oneEuroIs.USD) * oneEuroIs.JPY

     }

    
     function fromYanToPound (yenes){
         return (yenes * oneEuroIs.USD)* oneEuroIs.GBP


     }

   
     module.exports = {sum, fromEuroToDollar};
