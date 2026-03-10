import sys
sys_input = lambda: sys.stdin.readline().rstrip()
ans = 0

for i in range(1, 101):
    x = int(sys_input())
    ans += x

print(ans)