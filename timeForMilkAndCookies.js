function timeForMilkAndCookies(date){

    let getMonth = date.getMonth();
    let getDate = date.getDate();
  
    if (getMonth == 11 && getDate == 24) {
        return true;
    } else {
        return false;
    }
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))  // true