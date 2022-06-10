def vowel_indices(word):
    w = word.lower()
    arr=[]
    v = ['a','e','o','i','u','y']
    for p, c in enumerate(w):
        if c in v:
            arr.append(p+1)
    return arr
