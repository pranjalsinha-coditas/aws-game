#data-types using type and is_instance
# immutable datatypes: tuples, integers, floating points, booleans
# mutable: lists, dictionaries, sets, bytearrays, arrays
#variable naming in python 
#random method for generating numbers randomly 
import random 
print(random.randint(2, 5))
#bitwise operators
print(5 >> 4)
print(6 << 7)
print(8 & 5)
print(9 | 5)
print(12 ^ 42)
print(~88)
#Assignment operators
print(5 == '5')
print(5 != 6)
print(7 < 8)
print(8 > 9)
#booleans in python 
# Falsy values include empty sequences (lists, tuples, strings, dictionaries, sets), zero in every numeric type, None, and False.
# Truthy values include non-empty sequences, numbers (except 0 in every numeric type), and basically every value that is not falsy.
Empty_Lists = []
print(type(Empty_Lists))
Empty_Tuples = ()
print(type(Empty_Tuples))
Empty_Dictionaries = {}
print(type(Empty_Dictionaries))
Empty_sets = set()
print(type(Empty_sets))
Empty_String = ""
print(type(Empty_String))
Empty_ranges = range(0)
print(type(Empty_ranges))
Empty_Integer = 0
print(type(Empty_Integer))
Float = 0.0
print(type(Float))
Complex = 0j
print(type(Complex))
None
print(type(None))
False
print(type(False))

#destructuring and using rest operators
list = [1, 2, 3]
tuple = (1, 2, 3)
dict = {
    "one": 1, 
    "two": 2, 
    "three": 3
}

#slicing using arr[start:stop:step]
#index and count method for tuples and lists
#packing and unpacking 
numbers = [1, 2, 3]
a, b, c= numbers
print(a)
print(b)
print(c)

numbers_1 = [1, 3, 5]
numbers_2 = [2, 4, 6]
numbers = [*numbers_1 ,*numbers_2]
print(sorted(numbers))
#get(), pop(), popitem(), copy(), items() in dictionaries
#fromkeys(), fromvalues() in python 

from itertools import count

def is_prime(n):
    if n <= 1:
        return False
    elif n <= 3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

# Generate primes using filter and itertools.count
primes_generator = filter(is_prime, count(2))

# Print first 10 prime numbers
for _ in range(10):
    print(next(primes_generator))
    




    


            
            