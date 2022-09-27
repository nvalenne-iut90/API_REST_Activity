import re


def factorielle(n):
    res = 1
    for i in range(n):
        res *= i+1
    return res

def factorielle_recur(n):
    if n <= 1:
        return 1
    else :
        return n*factorielle_recur(n-1)

print(factorielle(5))
print(factorielle_recur(5))
