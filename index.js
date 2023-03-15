// Code your solution in this file
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}
returnLastTwoDrivers = function(drivers){
return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(value) {
  return function(fareMultiplier){
return fareMultiplier * value;
  }

}
function fareDoubler(fareQuintupler){
  return createFareMultiplier(2)(fareQuintupler);
}
function fareTripler(fareDoubler){
  return createFareMultiplier(3)(fareDoubler);
}
const selectDifferentDrivers = function(driver, valuee) {
   return valuee(driver);
}
function selectFirstTwoDrivers(driver){
  return driver.slice(2,0);
}
function selectLastTwoDrivers(driver){
  return driver.slice(-2);
}
 





