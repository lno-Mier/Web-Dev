import sys

sys_input = lambda: sys.stdin.readline().rstrip()

def minn(a, b, c, d):
    return min(a, b, c, d)

def main():
    a, b, c, d = map(int, sys_input().split())
    print(minn(a, b, c, d))

if __name__ == "__main__":
    main()