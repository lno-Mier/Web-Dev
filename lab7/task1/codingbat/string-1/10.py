def non_start(a, b):
    ans = ""
    for i in range(len(a)):
        if i == 0:
            continue
        ans += a[i]

    for i in range(len(b)):
        if i == 0:
            continue
        ans += b[i]

    return ans