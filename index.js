function scuberGreetingForFeet(feet){
  if(feet<=400) {
    return 'This one is on me!';
    
  }
else if(feet>2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
else {
    return 'No can do.';
  }
  
}

function ternaryCheckCity(City){
  return (City==='NYC' ? "Ok, sounds good." : 'No go.');
  city(NYC);
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous' :
    return "Thank you so much." 
  case 'not as generous' :
    return "Thank you."
  default:
    return 'Bye.'
  }
  
}