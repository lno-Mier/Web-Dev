def count_hi(str):
    ans = 0
    for i in range(len(str) - 1):
        if str[i] == 'h' and str[i + 1] == 'i':
            ans += 1

    return ans