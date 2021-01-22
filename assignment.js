// 

// kilometer to meter converter
function kilometerToMeter(number){
      var meter = number * 1000;
    return meter;
    }
    
  // var result = kilometerToMeter(8);
  //   console.log(result);

  // budgetCalculator

function budgetCalculator(num1,num2,num3){
    var watch = num1 * 50;
    var mobile = num2 * 100;
    var labtop = num3 * 500;
    var result = watch + mobile + labtop;
    return result;
}
// var total = budgetCalculator(2,4,1)
// console.log(total);



// hotelCost

function hotelCost(day){
  var moneyCost = 0;
  if (day<=10) {
    moneyCost = day * 100;
 }
   else if (day<=20) {
      var firstPart = 10 * 100;
      var totelCost = day -10;
      var scondPart = totelCost * 80;    
      moneyCost = firstPart + scondPart;
 }
   else {
      var firstPart = 10 * 100;
      var scondPart = 10 * 80;
      var totelCost = day - 20;
      var thirdPart = totelCost * 50;
      moneyCost =  firstPart + scondPart + thirdPart;
 }
    return moneyCost;
  }
    // var result = hotelCost (30);
    // console.log(result);


// megaFriend

function megaFriend(arr){
  var longest="";

  for(var i=0;i<arr.length;i++){
      //Condition for compiring length of the given name
     if (arr[i].length>longest.length){
        longest=arr[i];
     }
  } 
  return longest;
}
// var result = megaFriend(["shahed", "shahida", "shimul", "shoinik"])
// console.log(result);