# Big O Notation
Big O Notation is a way to describe how the time or space needed by an algorithm grows as the size of the input increases. 
When it is said that a function f(n) is O(g(n)), it means that f(n) will not grow faster than a certain multiple of another function g(n) once the input size is large enough. 
In other words, f(n) is bounded by g(n) scaled up by some constant value for large inputs.

## 1. Linear Search
In a linear search, the algorithm checks each element one by one.
### Best-case:
The element is at the first position.
Time complexity: O(1).
### Average-case:
The element is somewhere in the middle of the list.
Time complexity: O(n).
### Worst-case:
The element is at the end of the list or not present at all.
Time complexity: O(n).

## 2. Binary Search (Only works on sorted arrays or lists)
In binary search, the list is divided into two halves repeatedly.
### Best-case:
The element is right in the middle on the first try.
Time complexity: O(1).
### Average-case:
The element is found after a few divisions.
Time complexity: O(log n).
### Worst-case:
The element is found after the maximum number of divisions or not found at all.
Time complexity: O(log n).

## 3. Hash Table Search (e.g., using HashMap in Java)
In hash table search, a hash function is used to find the index.
### Best-case:
The hash function gives a unique index with no collisions.
Time complexity: O(1).
### Average-case:
There are a few collisions, but the structure handles them efficiently.
Time complexity: O(1).
### Worst-case:
Too many collisions occur and everything goes into the same bucket (like a linked list).
Time complexity: O(n).
