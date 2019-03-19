---
path: '/lets-get-insane-with-kadanes-algorithm'
title: "Lets get insane with Kadane's Algorithm!"
author: 'Huiyeon Kim'
date: '2019-03-19'
cover_image: "./background.jpg"
---
Today, I will be going through a Programming Question and the different ways to solve the question using the Kadane's Algorithm!

The **Maximal Continuous Sub-Array** is a question which comes up in many Technical interviews and also on many programming challenges websites such as Hackerrank. The problem definition goes like this:

**Question**: Given an array of negative and positive integers, find the sum of a contiguous subarray of numbers which has the largest sum.

Understanding the problem itself is not too hard. We just need a part of the input array whos sum is maximal. Lets take a look at some sample inputs and outputs.

*Input 1:* [1, -2, 3, 4, -5, -3]
*Output 1:* 7

*Input 2:* [1, -2, 1, 2, -1]
*Output 2:* 3

As you can see in the sample I/O, the output provides an array which has the maximum sum among all the sub arrays.  Now let's try to solve this question!!

<div class="md gif">

![enter image description here](https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif)
</div>

## Method 1: Brute Force Algorithm

One of the easiest way to solve this problem is to Brute Force the problem. By Brute force I mean, checking every single sub array of the input array and find the maximum. It is fairly easy to implement and it is guaranteed to get the correct answer everytime. 

#### High Level Explanation:
We would have 2 for loops, looping through the array. We would check the sub arrays starting at the first index until the end, then the sub arrays starting from the second index and so on until we reach the end. By doing so, we would always get the correct answer as there wont be any possible sub array which we havent checked! Lets try and implement this in code!

    public class MaximumSum {
        public int findMaxSubArray(int[] arr) {
            // Assign the min value of integer first
            int max = Integer.MIN_VALUE;
            
            // Loop from the beginning
            for(int i = 0; i < arr.length; i++) {
                int sum = 0;
                // Sum from the starting index "i"
                for(int j = i; j < arr.length; j++) {
                    sum += arr[j];
                    if(sum > max) {
                        max = sum;
                    }
                }
            }
            return max;
        }
    }

Fairly simple right? We just need two loops, one loop for the start index and the inner loop to sum the sub arrays!

This algorithm will run in O(n^2) time as we go through the array twice! I wont go into detail on exactly how we get O(n^2) time but thats fairly easy to derive!

Its a good solution yes but we can definitely do better. Bring in Kadane's Algorithm!!

<div class="md gif">

![enter image description here](https://media.giphy.com/media/l0ExghDSRxU2g55sc/giphy.gif)
</div>

## Method 2: Kadane's Algorithm

Kadane's algorithm provides an elegant solution to this problem. We would be able to solve the same question using an O(n) run-time algorithm!!

#### High Level Explanation
This algorithm makes use of the fact that for each index of the array, we would know the max sub array leading to that index! So if we are in the third index of the array, we would just need to check if the number in that index is larger than the maximal sub array until that index (second index)! Lets try and understand further by looking at the code!

    public class MaximalSum {
        public int findMaxSubArray(int[] arr) {
            int globalMax = arr[0];
            int currentMax = arr[0];
            for(int i = 1; i < arr.length; i++) {
                currentMax = Math.max(currentMax + arr[i], arr[i]);
                globalMax = Math.max(globalMax, currentMax);
            }
            
            return globalMax;
        }
    }


There are a few things going on, lets see what they are:

1. We keep the `globalMax` variable to store the overall max value. It is initialized as the first item in the array.
2. We keep the `currentMax` variable to store the current max value. This is also initialized as the first item in the array.
3. We keep a for loop running from the second position.
4. For each of the items in the array, we see if the value of `currentMax + current item` is greater than the item itself. This line is the one which checks against the maximum subarray before the current index.
5. Then we update the globalMax if the currentMax is greater than it.
6. Return the globalmax.

Easy right? This algorithm will run in O(n) time and it actually is shorter to write than the brute force algorithm!

I hope you had fun learning about this algorithm! I will be back with more!.