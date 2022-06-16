def solve(arr):
    return sorted(arr, key= lambda x: (-arr.count(x), x))
    
    
####################################

from collections import Counter

def solve(a):
    c = Counter(a)
    return sorted(a, key=lambda k: (-c[k], k))
    
#####################################

def solve(arr):
    return sorted(sorted(arr), key=lambda n: arr.count(n), reverse=True)
    
    
