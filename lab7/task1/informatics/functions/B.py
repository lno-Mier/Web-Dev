import sys
sys_input = lambda: sys.stdin.readline().rstrip()

def ans(a, b):
    return a ** b

def main():
    a, b = map(float, sys_input().split())
    print(ans(a, b))

if __name__ == "__main__":
    main()