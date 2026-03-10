x = int(input())
ok = False
i = 0
while 2 ** i <= x:
    if 2 ** i == x:
        ok = True
    i += 1
if ok:
    print("YES")
else:
    print("NO")