import sys
sys_input = lambda: sys.stdin.readline().rstrip()

a, b = sys_input().split()

a = a.capitalize()
b = b.capitalize()

print(a, b)