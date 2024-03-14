[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

# Tail-Recursive vs. Non-Tail-Recursive Fibonacci:

The primary difference between tail-recursive and non-tail-recursive versions is in how they execute their recursive calls and use the call stack:

- **Non-Tail-Recursive Fibonacci**
  - Makes its recursive call and then performs an operation (typically addition) on its return value. This requires maintaining a call stack for each recursive call until reaching the base case, leading to significant memory usage for large values of $n$. Its complexity is $O(2^n)$ due to the exponential number of calls generated.

- **Tail-Recursive Fibonacci**
  - On the other hand, this version passes the next two numbers in the sequence of its computation as arguments to the recursive calls. Tail recursion enables compilers to optimize by reusing the same memory space for each recursive call. This is because the calculation needed for the result is completed just before the function calls itself again, allowing the system to efficiently manage memory. This means it has a complexity of $O(n)$ since it makes a single linear chain of recursive calls, reducing the amount of memory used.

**To Conclude**:
The tail-recursive Fibonacci implementation, with its linear complexity of $Θ(n)$, is more efficient than the non-tail-recursive version, which has an exponential complexity of $Θ(2^n)$. This efficiency comes from tail recursion's ability to optimize memory use by reusing stack space, differing from the non-tail version's significant memory consumption due to its growing call stack.
 
# Complexity of Tail-Recursive Fibonacci:

The tail-recursive version of Fibonacci mimics an iterative process where each call passes along the current state (last two numbers of the sequence) to the next call. The main difference lies in how the computation is performed and how it avoids exponential branching.

### Characteristics

- **Recursive Calls**: The algorithm executes $\(n\)$ recursive calls to compute the $\(n\)th$ Fibonacci number, with each call requiring only a constant amount of work.
  
- **Constant Work Per Call**: The operations within each recursive call are limited to basic arithmetic, necessary for updating the parameters for the next recursion in the sequence.

### Complexity Analysis

- **Linear Progression**: For each increase in the input size $\(n\)$, the number of steps the algorithm takes increases by the same amount. This one-to-one matching of steps to input size is what makes the algorithm efficient.
  
- **Optimization Potential**: The structure of tail recursion allows for possible compiler optimizations, particularly tail call optimization (TCO), which can further improve performance by reusing stack frames.

## Worst-Case Runtime Complexity

Based on the algorithm's operational efficiency and its characteristics:

- The number of recursive calls correlates linearly with the input size, making $\(n\)$ steps to compute the $nth$ Fibonacci number.
  
- Given the linear relationship between the input size and the computational steps required, alongside the constant amount of work done in each step, the algorithm demonstrates a linear time complexity.

### Conclusion

Given its design, the worst-case $\Theta\$ time complexity of the tail-recursive Fibonacci function is:

- $\Theta(n)\$

This shows that the execution time increases linearly with the input size $\(n\)$, showcasing the method's effectiveness and efficiency in computing Fibonacci numbers. The tail-recursive approach not only simplifies the process but also ensures a predictable and manageable increase in resource consumption.





**Useful References:** 

https://www.geeksforgeeks.org/tail-vs-non-tail-recursion/

https://www.geeksforgeeks.org/tail-recursion-fibonacci/

https://www.geeksforgeeks.org/time-complexity-recursive-fibonacci-program/


