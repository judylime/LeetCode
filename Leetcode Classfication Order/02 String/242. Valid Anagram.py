# Given two strings s and t , write a function to determine if t is an anagram of s.

# Example 1:

# Input: s = "anagram", t = "nagaram"
# Output: true
# Example 2:

# Input: s = "rat", t = "car"
# Output: false
# Note:
# You may assume the string contains only lowercase alphabets.

# Follow up:
# What if the inputs contain unicode characters? How would you adapt your solution to such case?


def isAnagram(self, s, t) :
  dictionary ={}

  for i in s:
    if i in dictionary:
      dictionary[i] +=1
    else:
      dictionary[i] =1

  for i in t:
    if i in dictionary:
      dictionary[i] -=1
    else: 
      return False

  for val in dictionary.values():
    if val !=0:
      return False
  
  return True



  class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        obj1 = {}
        obj2 = {}
        
        for i in s:
            if i not in obj1:
                obj1[i] = 1
            else:
                obj1[i] += 1
        
        for i in t:
            if i not in obj2:
                obj2[i] = 1
            else:
                obj2[i] += 1
                
        return obj1 == obj2    # In python you can compare dictionaries



from collections import Counter
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return(collections.Counter(s) == collections.Counter(t))