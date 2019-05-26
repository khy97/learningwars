---
path: '/cannot-get-bored-with-boyer-moore-algorithm'
title: 'You cannot get bored with Boyer Moore Algorithm!'
author: 'Huiyeon Kim'
date: '2019-05-27'
cover_image: "./backgroun.jpg"
---
Welcome back to LearnWars! I am back with another algorithm which sort of blew my mind. Its solves a problem which is seen many times and has a lot of different solutions to it. Boyer-Moore's Majority Vote algorithm is really something. Lets dive into the problem statement of what this algorithms solves!

**Problem:** Given an array of n numbers, find the **Majority Element**. (Majority element is basically a number which appears more than n/2 times). Basically we just need to find the element which appears in more than half of the positions of the array. Here are some sample input/outputs.

**Input 1:** [1,3,4,3,3,3,3]

**Output 1:** 3

This is because there are 7 items in total and "3" appears 5 times in the array which is of course more than 7/2 which is 3. (3.5 to be exact but we take as 3).

**Input 2:** [5,5,3,5,4,4,4,3,3,3,3,3,3]

**Output 2:** 3

Again, there are 13 elements in the list and "3" appears 7 times which is more than 13/2 = 6.

Sounds pretty simple? Well it isnt a hard question to solve as there are many solutions to it. In this article, I will go through 3 different solutions and show why Boyer-Moore's algorithm is so cool.

<div class="md gif">

![Lets get Started](https://media.giphy.com/media/5zf2M4HgjjWszLd4a5/giphy.gif)
</div>

## Method 1: Sort it out.

This method is the shortest one out of the three methods and possibly the easiest to understand. Since the problem states that the majority element appears more than half times in the array, we can just sort the array and take the middle element! No matter what the value of the item is, the middle item will always be the majority element. It is sort of like finding the median of the array.

Lets take a look at the code:

```
public class MajorityElement {
    public int findMajorityElement(int[] nums) {
    
        // Sort the array
        Arrays.sort(nums);
    
        // Return the mid point
        return nums[nums.length/2];
    }
}
```

So short and so simple right? It is! And it is pretty fast too. With time complexity of O(nlogn) and Space of O(1). Great!!

But of course we can do better than this. Introducing Hashing (Hashing usually makes everything better).

## Method 2: Hash it out.

We can keep a HashMap of the item as the key and the frequency of the item as the value. Once the value of any key becomes greater than half of the length of the array, the key is the answer. Its pretty simple, lets check it out in code.

```
public class MajorityElement {
    public int findMajorityElement(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i : nums) {
            int val = map.getOrDefault(i, 0) + 1;
            if(val > nums.length/2) return i;
            map.put(i, val);
        }
        
        // Technically should not reach here.
        return -1;
    }
}
```

Well its pretty simple too. The map will store the frequency of all the items in the array and when the frequency becomes higher than the length/2, we return the key! Its easy, it faster than the previous one! With time complexity of O(n), this is a good enough solution right? Well yeah it is but retrieving from a map is an amortized O(1). So its not always O(1). Moreover, time taken to hash might be quite long, depending on the algorithm to hash. Finally, it takes O(n) space.

We can do better than this right? Lets bring in Boyer Moore's Algorithm and see how to make this better.

## Method 3: Boyer-Moore's Algorithm

This algorithm is actually pretty simple. There is no need of any special data structure nor does it require an insane algorithm. With just two variables, we can get the same output.

As I mentioned, we need 2 variables: `counter` and `result`. When the `counter` variable is zero, we set the `result` to the current element in the list and increment the `counter` variable. For subsequent elements, if the subsequent element is equal to the element stored in result, we increment the `counter` variable. When the subsequent element is not equal to the `result` then we decrement the `counter` variable. Of course, when the `counter` variable reaches zero, then the `result` variable will be set to the element in the current position.

The `result` variable will store the final answer, the majority element. Lets see it through code to see how it works again.

```
public class MajorityElement {
    public int findMajorityElement(int[] nums) {
        int counter = 0;
        int result = 0;
        for(int i : nums) {
            if(counter == 0) {
                result = i;
                counter++;
            } else if(result == i) {
                counter++;
            } else {
                counter--;
            }
        }
        return result;
    }
}
```

As you can see, the first `if` statement checks if the counter is zero and updates the `result` variable if it is. Then in the next loop, since the `counter` variable is not zero, it will check if the current element `i` is equal to `result` and if it is, it will increment `counter` and if not it will decrement `counter`. In the end, we just return result and voila!! Thats it.

<div class="md gif">

![Boyer Moore Voting](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Boyer-Moore_MJRTY.svg/300px-Boyer-Moore_MJRTY.svg.png)

</div>

This image from [Wikipedia](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm) visualizes this algorithm perfectly.

And thats it! Congrats on making it this far and I hope to see y'all soon!