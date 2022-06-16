function solve(data) {
  const freq = data.reduce((r, e) => {
    if (!r[e]) r[e] = 1;
    else r[e]++;
    return r;
  }, {})

  return [...data].sort((a, b) => {
    return freq[b] - freq[a] || a - b
  })
}
