x, d = int(input()), int(input())
ans = 0
for i in range(1, 1000):
    if x % 10 == d:
        ans += 1
    x = x // 10
    if x == 0:
        break
print(ans)