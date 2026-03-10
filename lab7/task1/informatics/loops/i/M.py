import sys
sys_input = lambda: sys.stdin.readline().rstrip()
n = int(sys_input())
ans = 0
for i in range(1, n + 1):
    x = int(sys_input())
    if x == 0:
        ans += 1

print(ans)