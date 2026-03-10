x = int(input())
ans = 0
for i in range(1, 10000):
    ans += (x % 10)
    x //= 10
    if x == 0:
        break
print(ans)