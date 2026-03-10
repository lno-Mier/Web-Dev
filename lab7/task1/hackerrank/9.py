n = int(input())
eng = set(input().split())

b = int(input())
french = set(input().split())

all = eng & french

print(len(all))