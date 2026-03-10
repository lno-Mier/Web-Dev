import sys

sys_input = lambda: sys.stdin.readline().rstrip()

a = int(sys_input())
b = int(sys_input())
print(b - b // a * a)