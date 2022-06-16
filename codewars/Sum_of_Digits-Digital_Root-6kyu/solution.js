function digital_root(n) {
  r = (x) => String(x).split('').reduce((p, c) => Number(p) + Number(c));
  while(n>9){n=r(n);}
  return n;
}
