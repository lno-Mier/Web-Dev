def left2(str):
    if len(str) > 2:
        ans = str[2:] + str[0] + str[1]
        return ans

    return str