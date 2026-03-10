import sys
sys_input = lambda: sys.stdin.readline().rstrip()
a = list(map(int, sys_input().split()))
maxx = -10000000000
ind = -1
for i in range(0, len(a)):
    if maxx < a[i]:
        maxx = a[i]
        ind = i
print(maxx, ind)