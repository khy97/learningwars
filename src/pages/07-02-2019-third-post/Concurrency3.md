---
path: '/concurrency-programming-part-3'
title: 'Concurrency Programming in Java - Part 3'
author: 'Huiyeon Kim'
date: '2019-02-07'
cover_image: "./Concurrency.jpg"
---
Welcome to the last part of Introduction to Concurrency Programming in Java! In this last section we will quickly go through what Race Condition is how to resolve them! If you missed the last two articles:

[Click here for Part 1](https://learnwars.com/concurrency-programming-part-1) 

[Click here for Part 2](https://learnwars.com/concurrency-programming-part-2) 

The key concepts we will go through will be:
1. What is a Race Condition?
2. `Synchronized` keyword

## What is a Race Condition?
Until now, if you never searched about Multithreading, you wouldnt have heard of Race Conditions before. 

> Race condition is a situation where 2 Threads try to manipulate a shared resource at the same time, leading to **unexpected** results.

Lets break this statement down by taking a look at this code.

```
for(int i = 0; i < 1000000; i++) {
    x += 1;	
}
System.out.println(x)
```
Lets say 5 threads are executing this piece of code at once. Your natural guess would be 1000000 * 5  = 5000000. But when it is actually implemented in code, the actual answer would differ. It would in fact vary with each run. This is because `x += 1`  is not an atomic step. What actually occurs is:

1. Retrieve the Value of x
2. Add 1 to the value of x
3. Assign the new value to the previous x.

But due to the nature of Thread CPU scheduling, at any point of time during the execution of the 3 steps mentioned above, the CPU might get switched to another thread. Consider this situation

1. Thread A retrieves the value of x (Assuming its 7) - the value is 7
2. Thread A adds 1 to 7 which returns 8
3. Before Thread A executes the re-assignment, Thread B gets the CPU
4. Thread B retrieves the value of x  - still the value is 7
5. Thread B adds 1 to 7 which returns 8
6. Thread B assigns 8 to x
7. Thread A assigns 8 to x.

In this case you can see that even though the incrementing step has been executed twice by 2 different threads, the value of x only increased by 1. This occurs several times which leads to the actual output being completely different from the expected output.

Race conditions are extremely hard to detect and hard to debug due to the nature of it being in the background. The code might be correct to the programmer's eye but due to the execution of threads, it may lead to a frustrating bug. The only way to prevent or detect a race condition is to thoroughly go through the code..

<div class="md gif">

![Alt Text](https://media.giphy.com/media/l44Q5OXJ6qaNr838Q/giphy.gif)

</div>

Luckily, Java has provided ways to go about solving Race Conditions (NOT detecting but solving) if ever it occurs in your program. Hence comes the `synchronized` keyword.

## Synchronized Keyword

Before we learn how to use the Synchronized keyword, we need to know what Critical Section means in Java. 

Reusing the example from above, the variable `x` in the code snippet is called the *Shared Resource*. It means that the value of x is shared among many different threads. And the part which updates the value of `x` is called the *Critical Section*. Basically, the part which is manipulates (Read, Write etc) the shared resource is called the Critical Section as it is the part where multiple threads are affected.

*Critical Sections* are the part of code which are most likely to cause Race Conditions as they are the only part of the code which actually manipulates the Shared Resource. To solve the race condition, we need to somehow protect the Critical section so that when that part of the code is running by one thread, NO other thread can touch that part. Its like a princess with a knight protecting it.

There are 2 ways of using the synchronized keyword:

1. Method Synchronization
2. Block Synchronization

### 1. Method Synchronization

Lets take an example of a method named `increase()`

```
public void increase() {
    // x is a shared resource
    x = x + 1;
}
```

As we know, if this is used in a multithreaded program, it will DEFINITELY cause a race condition. By using Method Synchronization, we can change it to be

```
public synchronized void increase() {
    // x is a shared resource
    x = x + 1;
}
```

What the above snippet does is when Thread A tries to call this method, Thread A obtains the "LOCK" of this Object (Assuming this method was in some class) and executes. While the "Lock" of the object is occupied by a thread, NO other threads can obtain the lock, which prevents them from executing this method UNTIL the thread holding the lock (Thread A) finishes its execution. 

This method can completely remove the Race Condition of this method! BUT what if there are other codes in this method which is NOT a Critical Section? Do we still want to lock up the WHOLE method?  This is where Synchronized Block comes in.

### 2. Block Synchronization
Lets say in the example above, there were additional code such as

```
public void increase() {
    for(int i = 0; i < 1000000; i++) {
        //DO SOMETHING 
    }
    
    // x is a shared resource
    x = x + 1;
}
```

If we were to use method synchronization, we will not be maximizing the capacity of multithreading. If we use method synchronization, 1 Thread which holds the lock will go into the function, loop 1000000 times then execute the critical section. While the thread is executing this, ALL other thread which calls this method has to wait for the thread to end its execution. With the **Block Synchronization** we can only LOCK the `x = x + 1`, and the For loop part will actually be handled in a multithreaded manner, which would definitely provide a performance gain. 

Lets see how to implement it!

```
public void increase() {
    for(int i = 0; i < 1000000; i++) {
        //DO SOMETHING 
    }
    
    // x is a shared resource
    synchronized(this) {
        x = x + 1;
    }
}
```

There, simple right? The only thing we need to take note is that we pass "this" as the argument to tell the Threads trying to the get lock that the lock they should get is THE CURRENT object's lock and not any other. If some other object were to be passed, it will acquire the lock of that object to perform the update.

In the above scenario, 2 or more threads can call the function and execute the loop, reducing the execution time, but the main *Critical Section* part of the function will still be Race Condition Free!!! Catching 2 birds with 1 stone.

<div class="md gif">

![Alt Text](https://media.giphy.com/media/olAik8MhYOB9K/giphy.gif)
</div>

## Final Conclusion

This will be the last article of the Concurrency Programming in Java Series. It is definitely not super comprehensive but it can be sufficient enough to get a gist of what Concurrency Programming is and how it works! I will be back with more articles in the future!
