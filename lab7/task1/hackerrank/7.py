from collections import deque

d = deque()
n = int(input())

for _ in range(n):
    user_input = input().split()
    command = user_input[0]
    
    if command == 'append':
        d.append(user_input[1])
    elif command == 'appendleft':
        d.appendleft(user_input[1])
    elif command == 'pop':
        d.pop()
    elif command == 'popleft':
        d.popleft()

print(*d)