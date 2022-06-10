function XO(str) {
  str = str.toLowerCase();
  cArr = [];
  for(c of str){
    cArr.push(c);
  }
  
  count = (chars) => {return cArr.filter(function(a){return a===chars}).length};
  
  return res = count('x') === count('o') ? true : false;
}
