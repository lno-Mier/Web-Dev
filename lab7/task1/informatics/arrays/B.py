import sys

sys_input = lambda: sys.stdin.readline().rstrip()
a = list(map(int, sys_input().split()))
for i in range(0, len(a)):
    if a[i] % 2 == 0:
        print(a[i], end=" ")