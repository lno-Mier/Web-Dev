import sys
sys_input = lambda: sys.stdin.readline().rstrip()
n = int(sys_input())
print(f"The next number for the number {n} is {n + 1}.\nThe previous number for the number {n} is {n - 1}.")