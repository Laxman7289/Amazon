import React from 'react'


export const Add = () => {
    function day(days){
        let years = parseInt( days/365);
        let months = parseInt((days%365)/30);
        let day = (days%365)%30
        return `years ${years} , months ${months} , days ${day}`

    }
    
    console.log(day(100));
  return (
    <div>
       
      
    </div>
  )
}
 
