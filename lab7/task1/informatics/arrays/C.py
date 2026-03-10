import sys
sys_input = lambda: sys.stdin.readline().rstrip()

a = list(map(int, sys_input().split()))
ans = 0
for i in range(0, len(a)):
    if a[i] > 0:
        ans += 1

print(ans)