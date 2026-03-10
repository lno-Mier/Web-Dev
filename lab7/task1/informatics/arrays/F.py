import sys
sys_input = lambda: sys.stdin.readline().rstrip()
a = list(map(int, sys_input().split()))
ans = 0
for i in range(1, len(a) - 1):
    if a[i] > a[i - 1] and a[i] > a[i + 1]:
        ans += 1

print(ans)