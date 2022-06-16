def solve(arr):
    #inits
    freqs={}
    output=[]
    #sort the list now to meet requirement "if 2 elements have same frequency, sort ascending"
    arr.sort()
    
    #function to count number of occurences in the list
    def count(arr, x):
        count=0
        for element in arr:
            if (element == x):
                count=count+1
        return count
    
    #add each to a dictionary containing the number element as key, frequency as value
    for item in arr:
        if item not in freqs:
            f = count(arr, item)
            freqs.update({item:f})
    
    #restructure dict in proper order
    freqs=dict(sorted(freqs.items(), key=lambda item: item[1], reverse=True))
    #example value of freqs = ([(3,3), (5,2), (7,2), (2, 1), (9,1)])
    
    #for each key/val, add element number to output list equal to each of their frequencies
    #output = [3, 3, 3, 5, 5, 7, 7, 2, 9]
    for val, frequency in freqs.items():
        i=0
        while i < frequency:
            output.append(val)
            i+=1
            
    return output
        
        
    
