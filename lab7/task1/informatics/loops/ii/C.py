x = int(input())
i = 0
while i * i <= x:
    if 2 ** i < x:
        print(2 ** i, end=" ")
    i += 1