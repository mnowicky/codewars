function isValidWalk(walk) {
  let t = walk.length;
  let counts={};
  if(t!=10){
    return false;
  }
  else{
    for(dir of walk){
      counts[dir] = counts[dir] ? counts[dir] + 1 : 1;
    }
    let numN = counts['n'];
    let numS = counts['s'];
    let numE = counts['e'];
    let numW = counts['w'];

    if(numN && numS && (numN == numS)){
      if(numE && numW){
        if(numE !== numW){
          return false;
        }
        return true;
      }
      else{
        return true;
      }
    }
    else if(numE && numW && (numE == numW)){
      if(numN && numS){
        if(numN !== numS){
          return false;
        }
        return true;
      }
      else{
        return true;
      }
    }

    //Solution using terniary operator
    //(numN && numS && (numN == numS)) ? (numE && numW) ? (numE !== numW) ? false : true : true : (numE && numW && (numE == numW)) ? (numN && numS) ? (numN !== numS) ? false : true : true


    //original solution
    /*
    if((numN && numS && (numN == numS)) || (numE && numW && (numE == numW))){
      return true;
    }
    else{
      return false;
    } */
  }
}
