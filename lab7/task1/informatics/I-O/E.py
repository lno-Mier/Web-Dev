import sys

sys_input = lambda: sys.stdin.readline().rstrip()

v = int(sys_input())
a = int(sys_input())
print(((v * a) % 109 + 109) % 109)