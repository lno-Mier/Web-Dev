import math

x = int(input())
ans = 0

root = math.isqrt(x) 

for i in range(1, root + 1):
    if x % i == 0:
        if i * i == x:
            ans += 1
        else:
            ans += 2
            
print(ans)