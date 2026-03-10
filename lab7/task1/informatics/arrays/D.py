import sys
sys_input = lambda: sys.stdin.readline().rstrip()
a = list(map(int, sys_input().split()))
for i in range(0, len(a) - 1):
    if a[i + 1] > a[i]:
        print(a[i + 1], end=" ")