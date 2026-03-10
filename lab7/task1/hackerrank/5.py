if __name__ == '__main__':
    m = int(input())
    set_a = set(map(int, input().split()))
    
    n = int(input())
    set_b = set(map(int, input().split()))
    
    result = set_a ^ set_b
    
    for num in sorted(result):
        print(num)