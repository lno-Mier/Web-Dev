def rotate_left3(nums):
    ans = nums[1:]
    ans.append(nums[0])
    return ans
