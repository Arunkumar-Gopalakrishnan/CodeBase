var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement
    if (map.has(complement)) { // Check if complement exists in the map
      return [map.get(complement), i]; // Return indices
    }
    map.set(nums[i], i); // Store the current number and its index in the map
  }
  throw new Error("No solution found"); // This won't be reached as per the problem
};

// Call the function with an array as input
const nums = [2, 6, 7, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
