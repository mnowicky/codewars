function anagrams(word, words) {
  //inits
  index=0;
  lettersArr = [];
  outArr = [];
  
  //put letters of word param into empty array and sort
  for(letters of word){
    lettersArr.push(letters);
    lettersArr.sort();
  }
  
  //for each word in input array, build letters into empty array and sort
  for(wrd of words){
    testArr=[];
    for(letr of wrd){
      testArr.push(letr);
    }
    testArr.sort();
    
    //make same type
    let x = testArr.toString();
    let y = lettersArr.toString();
    
    //if test word from input param is anagram of original word param, they should now match
    if(x==y){
      outArr.push(words[index]);
    }
    //increment index to locate word in original array
    index++;
    
  }
  
  //return our output array if it contains matches, else return empty array
  switch(outArr.length>0){
      case true:
        return outArr;
      case false:
        return [];
  }
}
