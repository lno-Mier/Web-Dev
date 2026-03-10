import sys
sys_input = lambda: sys.stdin.readline().rstrip()
a = int(sys_input())
b = int(sys_input())
if a > b:
    print(a)
else:
    print(b)