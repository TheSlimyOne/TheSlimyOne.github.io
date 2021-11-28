from typing import Counter


m = 0
mult1 = 2
mult2 = 5
mult3 = 13

for x in range(10, 100):
    print(x)
    if (x % mult1 == 0 or x % mult2 == 0 or x % mult3 == 0) and (x % (mult1 * mult2) != 0 or x % (mult1 * mult3) != 0 or x % (mult2 * mult3) != 0):
        
        m += 1

for x in range(-99, -9):
    if (x % mult1 == 0 or x % mult2 == 0 or x % mult3 == 0) and (x % (mult1 * mult2) != 0 or x % (mult1 * mult3) != 0 or x % (mult2 * mult3) != 0):
        
        m += 1


