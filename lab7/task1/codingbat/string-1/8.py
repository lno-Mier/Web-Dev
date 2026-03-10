def without_end(str):
    ans = ""
    for i in range(len(str)):
        if i == 0 or i == len(str) - 1:
            continue
        ans += str[i]
    return ans