function climbingStairs(numbers)
    {
    let n = numbers.length;
        // declare an array
    let dp = new Array(n);
  
    if (n == 1)
        return numbers[0];
  
    dp[0] = numbers[0];
    dp[1] = numbers[1];
  
    for (let i = 2; i < n; i++)
    {dp[i] = Math.min(dp[i - 1],
            dp[i - 2]) + numbers[i];}
  
    console.log (Math.min(dp[n - 2],//minimum
                    dp[n - 1]))
    }
     
climbingStairs([0, 2, 2, 1])
climbingStairs([0, 2, 3, 2])
climbingStairs([10, 15, 20])
climbingStairs([0, 0, 0, 0, 0, 0])
