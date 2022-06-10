function numberOfPairs(gloves)
{
  //array to store glove color/pairs already counted
  processedArr = [];
  //init total pairs to 0;
  let totalPairs = 0;
  //function to count number of occurrences for a specific glove color
  function count(val){
    return gloves.filter(function(a){return a===val;}).length;
  }
  //for each glove, if we have not already counted this color, add to array of counted colors, then count the pairs
  //total pairs = current number of pairs + number of pairs for each new color
  for(glove of gloves){
    if(processedArr.includes(glove) == false){
      processedArr.push(glove);
      var pairsCount = count(glove)/2;
      pairsCount = Math.floor(pairsCount);
      totalPairs = totalPairs + pairsCount;
    }
  }
  return totalPairs
}
