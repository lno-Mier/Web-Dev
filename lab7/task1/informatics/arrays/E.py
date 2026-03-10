import sys
sys_input = lambda: sys.stdin.readline().rstrip()

a = list(map(int, sys_input().split()))

for i in range(0, len(a) - 1):
    if a[i] > 0 and a[i + 1] > 0:
        print(a[i], a[i + 1])
        break
    elif a[i] < 0 and a[i + 1] < 0:
        print(a[i], a[i + 1])
        break

    