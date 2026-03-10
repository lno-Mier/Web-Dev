import sys
sys_input = lambda: sys.stdin.readline().rstrip()

def ans(a, b):
    if a == 0 and b == 1 or b == 0 and a == 1:
        return 1
    return 0

def main():
    a, b = map(int, sys_input().split())
    print(ans(a, b))

if __name__ == "__main__":
    main()