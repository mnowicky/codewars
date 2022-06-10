function rgb(r, g, b){
  //init hex bank, add input params to an array, init empty array to hold our solution
  hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  inp=[r,g,b];
  outp=[];
  
  //function to process valid inputs
  //first number = the whole number portion of x/16
  //second number = (2 digits right of the decminal for x/16 - first number) * 16
  const convertHex = (x) => {
    let f = Math.floor(x/16);
    let fz = (parseFloat(x/16)).toFixed(2);
    let s = Math.round(((fz-f)*16));
    
  //convert our numbers to hex via our hex ref arr
    f = hex[f];
    s = hex[s];
  
  //push to our solution arr
    outp.push(f);
    outp.push(s);
  }
  
  //for each of the three values being input...
  //if value is <= 0, add '00' to array; if val >= 255, add 'FF' to the array, else run through 'convertHex' function
  for(val of inp){
    val <= 0 ? outp.push('00') : val >= 255 ? outp.push('FF') : outp.push(convertHex(val));
  }
  
  //return the output array, joining together each element for the solution
  return outp.join('');
  
}
