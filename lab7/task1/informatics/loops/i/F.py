x = input()
ok = False
for i in range(0, len(x)):
    if x[len(x) - i - 1] != '0' and ok == False:
        ok = True

    if ok == False:
        continue

    else:
        print(x[len(x) - i - 1], end="")