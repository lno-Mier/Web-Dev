def make_chocolate(small, big, goal):
    max_big = goal // 5
    
    if big >= max_big:
        rem_goal = goal - (max_big * 5)
    else:
        rem_goal = goal - (big * 5)
        
    if rem_goal <= small:
        return rem_goal
    else:
        return -1