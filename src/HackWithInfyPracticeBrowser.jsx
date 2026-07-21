import React, { useState } from "react";
import { ChevronDown, ChevronRight, Code2, ListChecks, Sparkles, ExternalLink } from "lucide-react";

const DIFF_STYLES = {
  E: { label: "Easy", pill: "bg-emerald-950 text-emerald-400 border border-emerald-800" },
  M: { label: "Medium", pill: "bg-amber-950 text-amber-400 border border-amber-800" },
  H: { label: "Hard", pill: "bg-rose-950 text-rose-400 border border-rose-800" },
};

const TOPICS = [
  {
    id: 1,
    name: "Arrays",
    solved: true,
    problems: [
      {
        diff: "E",
        title: "Rearrange Array Elements by Sign",
        url: "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
        problem:
          "Array of size n (n even) with equal positive and negative numbers. Rearrange so positives and negatives alternate, starting with positive, preserving relative order within each sign.",
        approach:
          "Use a result array of size n. Fill even indices (0,2,4...) with positives in order, odd indices (1,3,5...) with negatives in order. Single pass, O(n) extra space.",
        java: `public int[] rearrangeArray(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    int posIdx = 0, negIdx = 1;
    for (int num : nums) {
        if (num >= 0) {
            result[posIdx] = num;
            posIdx += 2;
        } else {
            result[negIdx] = num;
            negIdx += 2;
        }
    }
    return result;
}`,
        python: `def rearrange_array(nums):
    n = len(nums)
    result = [0] * n
    pos_idx, neg_idx = 0, 1
    for num in nums:
        if num >= 0:
            result[pos_idx] = num
            pos_idx += 2
        else:
            result[neg_idx] = num
            neg_idx += 2
    return result`,
        complexity: "Time O(n), Space O(n) — required to preserve order.",
        edge: "All positives/negatives violates the equal-count precondition; array of size 0 or 2; confirm whether 0 counts as positive.",
      },
      {
        diff: "M",
        title: "Maximum Product Subarray",
        url: "https://leetcode.com/problems/maximum-product-subarray/",
        problem: "Find the contiguous subarray with the largest product.",
        approach:
          "Track running max AND running min ending at each index, since a negative number can flip min into max. Candidates each step: num, maxSoFar*num, minSoFar*num.",
        java: `public int maxProduct(int[] nums) {
    int maxSoFar = nums[0], minSoFar = nums[0], result = nums[0];
    for (int i = 1; i < nums.length; i++) {
        int num = nums[i];
        if (num < 0) {
            int temp = maxSoFar;
            maxSoFar = minSoFar;
            minSoFar = temp;
        }
        maxSoFar = Math.max(num, maxSoFar * num);
        minSoFar = Math.min(num, minSoFar * num);
        result = Math.max(result, maxSoFar);
    }
    return result;
}`,
        python: `def max_product(nums):
    max_so_far = min_so_far = result = nums[0]
    for num in nums[1:]:
        if num < 0:
            max_so_far, min_so_far = min_so_far, max_so_far
        max_so_far = max(num, max_so_far * num)
        min_so_far = min(num, min_so_far * num)
        result = max(result, max_so_far)
    return result`,
        complexity: "Time O(n), Space O(1).",
        edge: "Array contains 0 (resets candidates); single element; all-negative with odd count.",
      },
      {
        diff: "M",
        title: "Rotate Matrix In-Place by 90°",
        url: "https://leetcode.com/problems/rotate-image/",
        problem: "N×N matrix, rotate 90° clockwise using O(1) extra space.",
        approach: "Transpose the matrix (swap [i][j] with [j][i]), then reverse each row.",
        java: `public void rotate(int[][] matrix) {
    int n = matrix.length;
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    for (int[] row : matrix) {
        for (int l = 0, r = n - 1; l < r; l++, r--) {
            int temp = row[l];
            row[l] = row[r];
            row[r] = temp;
        }
    }
}`,
        python: `def rotate(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()`,
        complexity: "Time O(n^2), Space O(1).",
        edge: "1x1 matrix; non-square input is out of scope for this approach; CCW rotation needs reverse-then-transpose instead.",
      },
      {
        diff: "M",
        title: "Merge Overlapping Intervals",
        url: "https://leetcode.com/problems/merge-intervals/",
        problem: "Given [start, end] pairs, merge all overlaps.",
        approach:
          "Sort by start time. Iterate, merging into the last interval in the result if current.start <= last.end.",
        java: `public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
    List<int[]> result = new ArrayList<>();
    for (int[] interval : intervals) {
        if (result.isEmpty() || result.get(result.size() - 1)[1] < interval[0]) {
            result.add(interval);
        } else {
            result.get(result.size() - 1)[1] =
                Math.max(result.get(result.size() - 1)[1], interval[1]);
        }
    }
    return result.toArray(new int[result.size()][]);
}`,
        python: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    result = []
    for start, end in intervals:
        if not result or result[-1][1] < start:
            result.append([start, end])
        else:
            result[-1][1] = max(result[-1][1], end)
    return result`,
        complexity: "Time O(n log n), Space O(n).",
        edge: "Empty input; single interval; intervals that touch exactly ([1,4],[4,5]); fully nested intervals.",
      },
      {
        diff: "H",
        title: "Trapping Rain Water",
        url: "https://leetcode.com/problems/trapping-rain-water/",
        problem: "Given elevation heights, compute total trapped water.",
        approach:
          "Two-pointer, O(1) space. Water at i = min(maxLeft, maxRight) - height[i]. Always move the side with the smaller max.",
        java: `public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}`,
        python: `def trap(height):
    left, right = 0, len(height) - 1
    left_max = right_max = water = 0
    while left < right:
        if height[left] < height[right]:
            left_max = max(left_max, height[left])
            water += left_max - height[left]
            left += 1
        else:
            right_max = max(right_max, height[right])
            water += right_max - height[right]
            right -= 1
    return water`,
        complexity: "Time O(n), Space O(1).",
        edge: "Array length < 3 (0 water); all same height; strictly increasing/decreasing.",
      },
      {
        diff: "H",
        title: "Median of Two Sorted Arrays",
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        problem: "Two sorted arrays sizes m, n. Find median in O(log(min(m,n))).",
        approach:
          "Binary search on the smaller array for a partition point where all left elements <= all right elements across both arrays.",
        java: `public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    int m = nums1.length, n = nums2.length;
    int low = 0, high = m;
    while (low <= high) {
        int cut1 = (low + high) / 2;
        int cut2 = (m + n + 1) / 2 - cut1;
        int left1 = (cut1 == 0) ? Integer.MIN_VALUE : nums1[cut1 - 1];
        int left2 = (cut2 == 0) ? Integer.MIN_VALUE : nums2[cut2 - 1];
        int right1 = (cut1 == m) ? Integer.MAX_VALUE : nums1[cut1];
        int right2 = (cut2 == n) ? Integer.MAX_VALUE : nums2[cut2];
        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 == 0)
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2.0;
            return Math.max(left1, left2);
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    throw new IllegalArgumentException("Input arrays are not sorted");
}`,
        python: `def find_median_sorted_arrays(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    low, high = 0, m
    while low <= high:
        cut1 = (low + high) // 2
        cut2 = (m + n + 1) // 2 - cut1
        left1 = float('-inf') if cut1 == 0 else nums1[cut1 - 1]
        left2 = float('-inf') if cut2 == 0 else nums2[cut2 - 1]
        right1 = float('inf') if cut1 == m else nums1[cut1]
        right2 = float('inf') if cut2 == n else nums2[cut2]
        if left1 <= right2 and left2 <= right1:
            if (m + n) % 2 == 0:
                return (max(left1, left2) + min(right1, right2)) / 2
            return max(left1, left2)
        elif left1 > right2:
            high = cut1 - 1
        else:
            low = cut1 + 1
    raise ValueError("Input arrays are not sorted")`,
        complexity: "Time O(log(min(m,n))), Space O(1).",
        edge: "One array empty; very different sizes (always search the smaller); odd vs even total length changes the formula.",
      },
      {
        diff: "H",
        title: "Next Permutation",
        url: "https://leetcode.com/problems/next-permutation/",
        problem:
          "Rearrange to the lexicographically next greater permutation, in-place. If none exists, return the lowest.",
        approach:
          "From the right, find pivot i where nums[i] < nums[i+1]. Find rightmost j > i with nums[j] > nums[i], swap, then reverse the suffix after i.",
        java: `public void nextPermutation(int[] nums) {
    int n = nums.length, i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        int j = n - 1;
        while (nums[j] <= nums[i]) j--;
        int temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
    }
    int l = i + 1, r = n - 1;
    while (l < r) {
        int temp = nums[l]; nums[l] = nums[r]; nums[r] = temp;
        l++; r--;
    }
}`,
        python: `def next_permutation(nums):
    n = len(nums)
    i = n - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    if i >= 0:
        j = n - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    nums[i + 1:] = reversed(nums[i + 1:])`,
        complexity: "Time O(n), Space O(1).",
        edge: "Already fully descending (wraps to ascending); size 1 array; all duplicate elements.",
      },
    ],
  },
  {
    id: 2,
    name: "Strings",
    solved: true,
    problems: [
      {
        diff: "E",
        title: "Group Anagrams",
        url: "https://leetcode.com/problems/group-anagrams/",
        problem: "Group a list of strings so each group is a set of anagrams.",
        approach: "Use the sorted string (or a 26-count signature) as a hashmap key.",
        java: `public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String s : strs) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    return new ArrayList<>(map.values());
}`,
        python: `def group_anagrams(strs):
    groups = {}
    for s in strs:
        key = ''.join(sorted(s))
        groups.setdefault(key, []).append(s)
    return list(groups.values())`,
        complexity: "Time O(n * k log k), Space O(n * k).",
        edge: "Empty strings; non-lowercase/unicode characters; single-element input.",
      },
      {
        diff: "E",
        title: "Longest Common Prefix",
        url: "https://leetcode.com/problems/longest-common-prefix/",
        problem: "Find the longest common prefix across an array of strings.",
        approach: "Take the first string as candidate; trim it until it prefixes every string.",
        java: `public String longestCommonPrefix(String[] strs) {
    if (strs.length == 0) return "";
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }
    }
    return prefix;
}`,
        python: `def longest_common_prefix(strs):
    if not strs:
        return ""
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix`,
        complexity: "Time O(S) total chars, Space O(1) extra.",
        edge: "Empty array; single string; no common prefix at all.",
      },
      {
        diff: "M",
        title: "Longest Palindromic Substring",
        url: "https://leetcode.com/problems/longest-palindromic-substring/",
        problem: "Find the longest palindromic substring.",
        approach:
          "Expand around center for both odd-length and even-length palindromes at every index.",
        java: `public String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    int start = 0, end = 0;
    for (int i = 0; i < s.length(); i++) {
        int len1 = expand(s, i, i);
        int len2 = expand(s, i, i + 1);
        int len = Math.max(len1, len2);
        if (len > end - start + 1) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}
private int expand(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
        left--; right++;
    }
    return right - left - 1;
}`,
        python: `def longest_palindrome(s):
    if not s:
        return ""
    start, end = 0, 0

    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1

    for i in range(len(s)):
        length = max(expand(i, i), expand(i, i + 1))
        if length > end - start + 1:
            start = i - (length - 1) // 2
            end = i + length // 2
    return s[start:end + 1]`,
        complexity: "Time O(n^2), Space O(1). Manacher's gives O(n) as a follow-up.",
        edge: "Empty string; single character; all identical characters; no palindrome > 1 char.",
      },
      {
        diff: "M",
        title: "String Compression (In-Place)",
        url: "https://leetcode.com/problems/string-compression/",
        problem: '"aaabbc" -> "a3b2c1", modify array in place, O(1) space.',
        approach: "Two pointers: read scans runs, write writes char + count back into same array.",
        java: `public int compress(char[] chars) {
    int write = 0, read = 0;
    while (read < chars.length) {
        char currentChar = chars[read];
        int count = 0;
        while (read < chars.length && chars[read] == currentChar) {
            read++; count++;
        }
        chars[write++] = currentChar;
        if (count > 1) {
            for (char c : Integer.toString(count).toCharArray()) {
                chars[write++] = c;
            }
        }
    }
    return write;
}`,
        python: `def compress(chars):
    write = read = 0
    n = len(chars)
    while read < n:
        current_char = chars[read]
        count = 0
        while read < n and chars[read] == current_char:
            read += 1
            count += 1
        chars[write] = current_char
        write += 1
        if count > 1:
            for digit in str(count):
                chars[write] = digit
                write += 1
    return write`,
        complexity: "Time O(n), Space O(1) extra.",
        edge: "Single char; all same char; no repeats at all; counts >= 10 need multi-digit writes.",
      },
      {
        diff: "M",
        title: "Minimum Window Substring",
        url: "https://leetcode.com/problems/minimum-window-substring/",
        problem: "Smallest substring of S containing all characters of T (with multiplicity).",
        approach:
          "Sliding window + frequency map of T. Expand right until valid, contract left while still valid, track minimum.",
        java: `public String minWindow(String s, String t) {
    if (s.isEmpty() || t.isEmpty()) return "";
    Map<Character, Integer> need = new HashMap<>();
    for (char c : t.toCharArray()) need.merge(c, 1, Integer::sum);
    int required = need.size(), formed = 0;
    Map<Character, Integer> windowCounts = new HashMap<>();
    int left = 0, minLen = Integer.MAX_VALUE, minStart = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        windowCounts.merge(c, 1, Integer::sum);
        if (need.containsKey(c) && windowCounts.get(c).intValue() == need.get(c).intValue()) formed++;
        while (left <= right && formed == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; minStart = left; }
            char lc = s.charAt(left);
            windowCounts.put(lc, windowCounts.get(lc) - 1);
            if (need.containsKey(lc) && windowCounts.get(lc) < need.get(lc)) formed--;
            left++;
        }
    }
    return minLen == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLen);
}`,
        python: `from collections import Counter

def min_window(s, t):
    if not s or not t:
        return ""
    need = Counter(t)
    required = len(need)
    window_counts = {}
    formed = 0
    left = 0
    min_len, min_start = float('inf'), 0
    for right, char in enumerate(s):
        window_counts[char] = window_counts.get(char, 0) + 1
        if char in need and window_counts[char] == need[char]:
            formed += 1
        while left <= right and formed == required:
            if right - left + 1 < min_len:
                min_len, min_start = right - left + 1, left
            lc = s[left]
            window_counts[lc] -= 1
            if lc in need and window_counts[lc] < need[lc]:
                formed -= 1
            left += 1
    return "" if min_len == float('inf') else s[min_start:min_start + min_len]`,
        complexity: "Time O(|S| + |T|), Space O(|S| + |T|).",
        edge: "T longer than S; T has repeated chars (must match multiplicity); no valid window exists.",
      },
      {
        diff: "H",
        title: "Regular Expression Matching (. and *)",
        url: "https://leetcode.com/problems/regular-expression-matching/",
        problem: "Implement regex matching supporting '.' and '*'.",
        approach:
          "DP table dp[i][j]. For '*' consider zero occurrences (skip pair) and one more occurrence (if char matches).",
        java: `public boolean isMatch(String s, String p) {
    int m = s.length(), n = p.length();
    boolean[][] dp = new boolean[m + 1][n + 1];
    dp[0][0] = true;
    for (int j = 1; j <= n; j++) if (p.charAt(j - 1) == '*') dp[0][j] = dp[0][j - 2];
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            char sc = s.charAt(i - 1), pc = p.charAt(j - 1);
            if (pc == '.' || pc == sc) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (pc == '*') {
                dp[i][j] = dp[i][j - 2];
                char prevP = p.charAt(j - 2);
                if (prevP == '.' || prevP == sc) dp[i][j] = dp[i][j] || dp[i - 1][j];
            }
        }
    }
    return dp[m][n];
}`,
        python: `def is_match(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(1, n + 1):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 2]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            sc, pc = s[i - 1], p[j - 1]
            if pc == '.' or pc == sc:
                dp[i][j] = dp[i - 1][j - 1]
            elif pc == '*':
                dp[i][j] = dp[i][j - 2]
                prev_p = p[j - 2]
                if prev_p == '.' or prev_p == sc:
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
    return dp[m][n]`,
        complexity: "Time O(m*n), Space O(m*n), reducible to O(n).",
        edge: "Pattern like a* matching empty string; consecutive * patterns; empty pattern vs non-empty string.",
      },
      {
        diff: "H",
        title: "Word Break II",
        url: "https://leetcode.com/problems/word-break-ii/",
        problem: "Return ALL ways to segment a string into dictionary words.",
        approach:
          "Backtracking with memoization on start index — try every valid dictionary prefix, recurse on remainder, combine.",
        java: `public List<String> wordBreak(String s, List<String> wordDict) {
    Set<String> dict = new HashSet<>(wordDict);
    Map<Integer, List<String>> memo = new HashMap<>();
    return backtrack(s, 0, dict, memo);
}
private List<String> backtrack(String s, int start, Set<String> dict, Map<Integer, List<String>> memo) {
    if (memo.containsKey(start)) return memo.get(start);
    List<String> result = new ArrayList<>();
    if (start == s.length()) { result.add(""); return result; }
    for (int end = start + 1; end <= s.length(); end++) {
        String word = s.substring(start, end);
        if (dict.contains(word)) {
            for (String sub : backtrack(s, end, dict, memo)) {
                result.add(word + (sub.isEmpty() ? "" : " " + sub));
            }
        }
    }
    memo.put(start, result);
    return result;
}`,
        python: `def word_break(s, word_dict):
    dict_set = set(word_dict)
    memo = {}

    def backtrack(start):
        if start in memo:
            return memo[start]
        if start == len(s):
            return [""]
        result = []
        for end in range(start + 1, len(s) + 1):
            word = s[start:end]
            if word in dict_set:
                for sub in backtrack(end):
                    result.append(word + ("" if not sub else " " + sub))
        memo[start] = result
        return result

    return backtrack(0)`,
        complexity: "Time O(n^2) distinct states plus output-sensitive combination; Space O(n^2).",
        edge: "No valid segmentation (empty list); whole string is one word; exponential-output adversarial cases need a reachability pre-check.",
      },
    ],
  },
  {
    id: 3,
    name: "Sliding Window",
    solved: true,
    problems: [
      {
        diff: "E",
        title: "Maximum Average Subarray I (Max Sum Subarray)",
        url: "https://leetcode.com/problems/maximum-average-subarray-i/",
        problem: "Fixed-size window, find max sum or average.",
        approach: "Sum first window, then slide: subtract outgoing element, add incoming element.",
        java: `public int maxSumSubarray(int[] nums, int k) {
    int windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += nums[i];
    int maxSum = windowSum;
    for (int i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}`,
        python: `def max_sum_subarray(nums, k):
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum`,
        complexity: "Time O(n), Space O(1).",
        edge: "k > array length (invalid); k == array length; negative numbers present.",
      },
      {
        diff: "M",
        title: "Longest Substring Without Repeating Characters",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        problem: "Find length of the longest substring with all unique characters.",
        approach:
          "Sliding window + hashmap of last-seen index. On a repeat inside the window, jump left past the previous occurrence.",
        java: `public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> lastSeen = new HashMap<>();
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (lastSeen.containsKey(c) && lastSeen.get(c) >= left) left = lastSeen.get(c) + 1;
        lastSeen.put(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
        python: `def length_of_longest_substring(s):
    last_seen = {}
    left = max_len = 0
    for right, char in enumerate(s):
        if char in last_seen and last_seen[char] >= left:
            left = last_seen[char] + 1
        last_seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,
        complexity: "Time O(n), Space O(min(n, charset)).",
        edge: "Empty string; all unique; all identical characters; the >= left check is essential.",
      },
      {
        diff: "M",
        title: "Longest Substring with At Most K Distinct Characters",
        url: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
        problem: "Sliding window with a frequency map; shrink from left while distinct count > k.",
        approach: "Expand right always; while freq map size > k, shrink from left.",
        java: `public int lengthOfLongestSubstringKDistinct(String s, int k) {
    if (k == 0) return 0;
    Map<Character, Integer> freq = new HashMap<>();
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        freq.merge(s.charAt(right), 1, Integer::sum);
        while (freq.size() > k) {
            char lc = s.charAt(left);
            freq.put(lc, freq.get(lc) - 1);
            if (freq.get(lc) == 0) freq.remove(lc);
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
        python: `def length_of_longest_substring_k_distinct(s, k):
    if k == 0:
        return 0
    freq = {}
    left = max_len = 0
    for right, char in enumerate(s):
        freq[char] = freq.get(char, 0) + 1
        while len(freq) > k:
            lc = s[left]
            freq[lc] -= 1
            if freq[lc] == 0:
                del freq[lc]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len`,
        complexity: "Time O(n), Space O(k).",
        edge: "k = 0; k >= distinct chars in s; empty string.",
      },
      {
        diff: "M",
        title: "Fruit Into Baskets",
        url: "https://leetcode.com/problems/fruit-into-baskets/",
        problem: "Same template as K-distinct with k=2 hardcoded — recognize the disguise.",
        approach: "Reuse the exact K-distinct sliding window template with k=2.",
        java: `public int totalFruit(int[] fruits) {
    Map<Integer, Integer> freq = new HashMap<>();
    int left = 0, maxLen = 0;
    for (int right = 0; right < fruits.length; right++) {
        freq.merge(fruits[right], 1, Integer::sum);
        while (freq.size() > 2) {
            int lf = fruits[left];
            freq.put(lf, freq.get(lf) - 1);
            if (freq.get(lf) == 0) freq.remove(lf);
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
        python: `def total_fruit(fruits):
    freq = {}
    left = max_len = 0
    for right, fruit in enumerate(fruits):
        freq[fruit] = freq.get(fruit, 0) + 1
        while len(freq) > 2:
            lf = fruits[left]
            freq[lf] -= 1
            if freq[lf] == 0:
                del freq[lf]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len`,
        complexity: "Time O(n), Space O(1) (at most 3 keys).",
        edge: "Fewer than 2 distinct fruit types total; empty array.",
      },
      {
        diff: "H",
        title: "Sliding Window Maximum",
        url: "https://leetcode.com/problems/sliding-window-maximum/",
        problem: "Max in every window of size K, return array of maxes.",
        approach:
          "Monotonic decreasing deque of indices. Front is always current window max. Pop back while smaller than new element; pop front if out of window.",
        java: `public int[] maxSlidingWindow(int[] nums, int k) {
    Deque<Integer> deque = new ArrayDeque<>();
    int[] result = new int[nums.length - k + 1];
    for (int i = 0; i < nums.length; i++) {
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) deque.pollFirst();
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) deque.pollLast();
        deque.offerLast(i);
        if (i >= k - 1) result[i - k + 1] = nums[deque.peekFirst()];
    }
    return result;
}`,
        python: `from collections import deque

def max_sliding_window(nums, k):
    dq = deque()
    result = []
    for i, num in enumerate(nums):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] < num:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,
        complexity: "Time O(n) amortized, Space O(k).",
        edge: "k = 1; k = array length; duplicate values; empty array.",
      },
      {
        diff: "H",
        title: "Subarrays with K Different Integers",
        url: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
        problem: "Count subarrays with exactly K distinct integers.",
        approach: "exactly(K) = atMost(K) - atMost(K-1), each implemented as a shrinking window.",
        java: `public int subarraysWithKDistinct(int[] nums, int k) {
    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
}
private int atMostKDistinct(int[] nums, int k) {
    if (k < 0) return 0;
    Map<Integer, Integer> freq = new HashMap<>();
    int left = 0, count = 0;
    for (int right = 0; right < nums.length; right++) {
        freq.merge(nums[right], 1, Integer::sum);
        while (freq.size() > k) {
            int ln = nums[left];
            freq.put(ln, freq.get(ln) - 1);
            if (freq.get(ln) == 0) freq.remove(ln);
            left++;
        }
        count += right - left + 1;
    }
    return count;
}`,
        python: `def subarrays_with_k_distinct(nums, k):
    def at_most_k_distinct(k):
        if k < 0:
            return 0
        freq = {}
        left = count = 0
        for right, num in enumerate(nums):
            freq[num] = freq.get(num, 0) + 1
            while len(freq) > k:
                ln = nums[left]
                freq[ln] -= 1
                if freq[ln] == 0:
                    del freq[ln]
                left += 1
            count += right - left + 1
        return count

    return at_most_k_distinct(k) - at_most_k_distinct(k - 1)`,
        complexity: "Time O(n), Space O(k).",
        edge: "k = 0; k > distinct elements in array; the atMost trick is the key insight, don't track 'exactly K' directly.",
      },
    ],
  },
  {
    id: 4,
    name: "Binary Search",
    solved: true,
    problems: [
      {
        diff: "E",
        title: "Search in Rotated Sorted Array",
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        problem: "Array sorted ascending then rotated at an unknown pivot. Search target in O(log n).",
        approach:
          "Standard binary search; at each step determine which half is sorted, check if target lies in that half's range.",
        java: `public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}`,
        python: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`,
        complexity: "Time O(log n), Space O(1).",
        edge: "Not rotated at all; single element; target absent; duplicates break the log-n guarantee.",
      },
      {
        diff: "E",
        title: "Find First and Last Position of Element in Sorted Array",
        url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        problem: "Return [first, last] index of target, or [-1,-1].",
        approach: "Two binary searches, one biased to leftmost occurrence, one to rightmost.",
        java: `public int[] searchRange(int[] nums, int target) {
    return new int[]{findBound(nums, target, true), findBound(nums, target, false)};
}
private int findBound(int[] nums, int target, boolean findFirst) {
    int left = 0, right = nums.length - 1, result = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            result = mid;
            if (findFirst) right = mid - 1; else left = mid + 1;
        } else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}`,
        python: `def search_range(nums, target):
    def find_bound(find_first):
        left, right, result = 0, len(nums) - 1, -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                result = mid
                if find_first:
                    right = mid - 1
                else:
                    left = mid + 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return result

    return [find_bound(True), find_bound(False)]`,
        complexity: "Time O(log n), Space O(1).",
        edge: "Target not present; empty array; target appears once; whole array is the target.",
      },
      {
        diff: "M",
        title: "Search a 2D Matrix II",
        url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
        problem: "Each row sorted L-R, each column sorted top-bottom. Search for target.",
        approach: "Start top-right. If current > target move left; if current < target move down.",
        java: `public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix.length == 0 || matrix[0].length == 0) return false;
    int row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] == target) return true;
        else if (matrix[row][col] > target) col--;
        else row++;
    }
    return false;
}`,
        python: `def search_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] > target:
            col -= 1
        else:
            row += 1
    return False`,
        complexity: "Time O(m + n), Space O(1).",
        edge: "Empty matrix/rows; target outside value range; 1x1 matrix.",
      },
      {
        diff: "M",
        title: "Find Peak Element",
        url: "https://leetcode.com/problems/find-peak-element/",
        problem: "Array not necessarily sorted; find any index that is a local peak, in O(log n).",
        approach: "Binary search comparing nums[mid] to nums[mid+1] to decide which half must contain a peak.",
        java: `public int findPeakElement(int[] nums) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[mid + 1]) right = mid;
        else left = mid + 1;
    }
    return left;
}`,
        python: `def find_peak_element(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[mid + 1]:
            right = mid
        else:
            left = mid + 1
    return left`,
        complexity: "Time O(log n), Space O(1).",
        edge: "Single element; strictly increasing/decreasing; multiple peaks (any valid one is fine).",
      },
      {
        diff: "M",
        title: "Koko Eating Bananas",
        url: "https://leetcode.com/problems/koko-eating-bananas/",
        problem: "Find minimum integer eating speed k so all piles finish within H hours.",
        approach:
          "Binary search over the ANSWER SPACE (1..max pile), not the array. Check feasibility in O(n) per candidate speed.",
        java: `public int minEatingSpeed(int[] piles, int h) {
    int left = 1, right = Arrays.stream(piles).max().getAsInt();
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (canFinish(piles, mid, h)) right = mid;
        else left = mid + 1;
    }
    return left;
}
private boolean canFinish(int[] piles, int speed, int h) {
    long hours = 0;
    for (int pile : piles) hours += (pile + speed - 1) / speed;
    return hours <= h;
}`,
        python: `import math

def min_eating_speed(piles, h):
    left, right = 1, max(piles)
    while left < right:
        mid = (left + right) // 2
        hours = sum(math.ceil(pile / mid) for pile in piles)
        if hours <= h:
            right = mid
        else:
            left = mid + 1
    return left`,
        complexity: "Time O(n log(max pile)), Space O(1).",
        edge: "H equal to number of piles forces max speed; large values need 64-bit accumulation in Java.",
      },
      {
        diff: "H",
        title: "Median of Two Sorted Arrays",
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        problem: "Same problem as Arrays 1.6 — revisit as a partition-based binary search on which array contributes more elements to the left half.",
        approach: "See Arrays topic for the full annotated solution; the search space here is a partition count, not array values.",
        java: `// See Arrays topic -> "Median of Two Sorted Arrays" for the full solution.`,
        python: `# See Arrays topic -> "Median of Two Sorted Arrays" for the full solution.`,
        complexity: "Time O(log(min(m,n))), Space O(1).",
        edge: "Cross-reference only — solved fully under Arrays.",
      },
      {
        diff: "H",
        title: "Split Array Largest Sum",
        url: "https://leetcode.com/problems/split-array-largest-sum/",
        problem: "Split array into m contiguous subarrays to minimize the largest subarray sum.",
        approach:
          "Binary search on answer (candidate max sum, range max(nums)..sum(nums)). Greedily count subarrays needed; feasible if count <= m.",
        java: `public int splitArray(int[] nums, int m) {
    int left = Arrays.stream(nums).max().getAsInt();
    int right = Arrays.stream(nums).sum();
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (canSplit(nums, mid, m)) right = mid;
        else left = mid + 1;
    }
    return left;
}
private boolean canSplit(int[] nums, int maxSum, int m) {
    int count = 1, currentSum = 0;
    for (int num : nums) {
        if (currentSum + num > maxSum) { count++; currentSum = num; }
        else currentSum += num;
    }
    return count <= m;
}`,
        python: `def split_array(nums, m):
    left, right = max(nums), sum(nums)

    def can_split(max_sum):
        count, current_sum = 1, 0
        for num in nums:
            if current_sum + num > max_sum:
                count += 1
                current_sum = num
            else:
                current_sum += num
        return count <= m

    while left < right:
        mid = (left + right) // 2
        if can_split(mid):
            right = mid
        else:
            left = mid + 1
    return left`,
        complexity: "Time O(n log(sum - max)), Space O(1).",
        edge: "m = 1 (whole-array sum); m >= array length (max single element); one dominant element.",
      },
    ],
  },
  {
    "id": 5,
    "name": "Hashing",
    "solved": true,
    "problems": [
      {
        "diff": "E",
        "title": "Two Sum",
        "url": "https://leetcode.com/problems/two-sum/",
        "problem": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        "approach": "Use a Hash Map to store complement values (target - current element) mapped to their indices for O(1) lookups.",
        "java": "public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) {\n            return new int[] { map.get(complement), i };\n        }\n        map.put(nums[i], i);\n    }\n    return new int[0];\n}",
        "python": "def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Negative numbers; exact pair adding to target; duplicate values."
      },
      {
        "diff": "E",
        "title": "Subarray Sum Equals K",
        "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
        "problem": "Find the total number of contiguous subarrays whose sum equals to k.",
        "approach": "Maintain running prefix sum and store frequency of each sum in a hashmap. Count matches where (currSum - k) exists.",
        "java": "public int subarraySum(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>();\n    map.put(0, 1);\n    int sum = 0, count = 0;\n    for (int num : nums) {\n        sum += num;\n        if (map.containsKey(sum - k)) {\n            count += map.get(sum - k);\n        }\n        map.put(sum, map.getOrDefault(sum, 0) + 1);\n    }\n    return count;\n}",
        "python": "def subarray_sum(nums, k):\n    counts = {0: 1}\n    curr_sum = count = 0\n    for num in nums:\n        curr_sum += num\n        if (curr_sum - k) in counts:\n            count += counts[curr_sum - k]\n        counts[curr_sum] = counts.get(curr_sum, 0) + 1\n    return count",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Negative numbers in array; k = 0; entire array sums to k."
      },
      {
        "diff": "M",
        "title": "Longest Consecutive Sequence",
        "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "problem": "Find length of the longest consecutive elements sequence in unsorted array in O(n) time.",
        "approach": "Put elements into a HashSet. Only expand sequences starting at num if (num - 1) is NOT present in the set.",
        "java": "public int longestConsecutive(int[] nums) {\n    Set<Integer> set = new HashSet<>();\n    for (int num : nums) set.add(num);\n    int maxLen = 0;\n    for (int num : set) {\n        if (!set.contains(num - 1)) {\n            int curr = num, len = 1;\n            while (set.contains(curr + 1)) { curr++; len++; }\n            maxLen = Math.max(maxLen, len);\n        }\n    }\n    return maxLen;\n}",
        "python": "def longest_consecutive(nums):\n    num_set = set(nums)\n    max_len = 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            curr = num\n            curr_len = 1\n            while curr + 1 in num_set:\n                curr += 1\n                curr_len += 1\n            max_len = max(max_len, curr_len)\n    return max_len",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Empty array; duplicate numbers; negative values."
      },
      {
        "diff": "M",
        "title": "Insert Delete GetRandom O(1)",
        "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/",
        "problem": "Design data structure supporting insert, remove, and getRandom in O(1) average time.",
        "approach": "Combine dynamic array with a HashMap (val -> array index). Swap target element with last element for O(1) removal.",
        "java": "class RandomizedSet {\n    List<Integer> list = new ArrayList<>();\n    Map<Integer, Integer> map = new HashMap<>();\n    Random rand = new Random();\n\n    public boolean insert(int val) {\n        if (map.containsKey(val)) return false;\n        map.put(val, list.size());\n        list.add(val);\n        return true;\n    }\n    public boolean remove(int val) {\n        if (!map.containsKey(val)) return false;\n        int idx = map.get(val);\n        int last = list.get(list.size() - 1);\n        list.set(idx, last);\n        map.put(last, idx);\n        list.remove(list.size() - 1);\n        map.remove(val);\n        return true;\n    }\n    public int getRandom() {\n        return list.get(rand.nextInt(list.size()));\n    }\n}",
        "python": "import random\n\nclass RandomizedSet:\n    def __init__(self):\n        self.nums = []\n        self.val_map = {}\n\n    def insert(self, val: int) -> bool:\n        if val in self.val_map: return False\n        self.val_map[val] = len(self.nums)\n        self.nums.append(val)\n        return True\n\n    def remove(self, val: int) -> bool:\n        if val not in self.val_map: return False\n        idx = self.val_map[val]\n        last = self.nums[-1]\n        self.nums[idx] = last\n        self.val_map[last] = idx\n        self.nums.pop()\n        del self.val_map[val]\n        return True\n\n    def getRandom(self) -> int:\n        return random.choice(self.nums)",
        "complexity": "Time O(1) average, Space O(n).",
        "edge": "Removing element that is already at the end of the array."
      },
      {
        "diff": "M",
        "title": "Isomorphic Strings",
        "url": "https://leetcode.com/problems/isomorphic-strings/",
        "problem": "Check if characters in s can be replaced 1-to-1 to get t.",
        "approach": "Store the last seen 1-based index for characters in both strings using fixed 256 size arrays.",
        "java": "public boolean isIsomorphic(String s, String t) {\n    int[] m1 = new int[256], m2 = new int[256];\n    for (int i = 0; i < s.length(); i++) {\n        if (m1[s.charAt(i)] != m2[t.charAt(i)]) return false;\n        m1[s.charAt(i)] = i + 1;\n        m2[t.charAt(i)] = i + 1;\n    }\n    return true;\n}",
        "python": "def is_isomorphic(s: str, t: str) -> bool:\n    m1, m2 = {}, {}\n    for c1, c2 in zip(s, t):\n        if m1.get(c1) != m2.get(c2):\n            return False\n        m1[c1] = m2[c2] = c1 + \"-\" + c2\n    return True",
        "complexity": "Time O(n), Space O(1).",
        "edge": "Multiple characters trying to map to the same target character."
      },
      {
        "diff": "H",
        "title": "LFU Cache",
        "url": "https://leetcode.com/problems/lfu-cache/",
        "problem": "Design LFU (Least Frequently Used) Cache with get & put in O(1).",
        "approach": "Map key to node, and map frequency to a Doubly Linked List of nodes. Track minFreq.",
        "java": "class LFUCache {\n    class Node {\n        int key, val, freq = 1;\n        Node prev, next;\n        Node(int k, int v) { key = k; val = v; }\n    }\n    class DLList {\n        Node head = new Node(0, 0), tail = new Node(0, 0);\n        int size = 0;\n        DLList() { head.next = tail; tail.prev = head; }\n        void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; size++; }\n        void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; size--; }\n        Node popTail() { if (size == 0) return null; Node n = tail.prev; remove(n); return n; }\n    }\n    int cap, minFreq = 0;\n    Map<Integer, Node> keyMap = new HashMap<>();\n    Map<Integer, DLList> freqMap = new HashMap<>();\n\n    public LFUCache(int capacity) { cap = capacity; }\n    public int get(int key) {\n        Node n = keyMap.get(key);\n        if (n == null) return -1;\n        update(n);\n        return n.val;\n    }\n    public void put(int key, int value) {\n        if (cap == 0) return;\n        if (keyMap.containsKey(key)) {\n            Node n = keyMap.get(key);\n            n.val = value;\n            update(n);\n        } else {\n            if (keyMap.size() >= cap) {\n                Node evicted = freqMap.get(minFreq).popTail();\n                keyMap.remove(evicted.key);\n            }\n            Node n = new Node(key, value);\n            keyMap.put(key, n);\n            freqMap.computeIfAbsent(1, k -> new DLList()).add(n);\n            minFreq = 1;\n        }\n    }\n    private void update(Node n) {\n        DLList oldList = freqMap.get(n.freq);\n        oldList.remove(n);\n        if (n.freq == minFreq && oldList.size == 0) minFreq++;\n        n.freq++;\n        freqMap.computeIfAbsent(n.freq, k -> new DLList()).add(n);\n    }\n}",
        "python": "from collections import defaultdict\n\nclass Node:\n    def __init__(self, k, v):\n        self.key, self.val, self.freq = k, v, 1\n        self.prev = self.next = None\n\nclass DLList:\n    def __init__(self):\n        self.head, self.tail = Node(0, 0), Node(0, 0)\n        self.head.next = self.tail; self.tail.prev = self.head\n        self.size = 0\n    def add(self, n):\n        n.next = self.head.next; n.prev = self.head\n        self.head.next.prev = n; self.head.next = n; self.size += 1\n    def remove(self, n):\n        n.prev.next = n.next; n.next.prev = n.prev; self.size -= 1\n    def pop_tail(self):\n        if self.size == 0: return None\n        n = self.tail.prev; self.remove(n); return n\n\nclass LFUCache:\n    def __init__(self, capacity: int):\n        self.cap, self.min_freq = capacity, 0\n        self.key_map, self.freq_map = {}, defaultdict(DLList)\n\n    def get(self, key: int) -> int:\n        if key not in self.key_map: return -1\n        node = self.key_map[key]\n        self._update(node)\n        return node.val\n\n    def put(self, key: int, value: int) -> None:\n        if self.cap == 0: return\n        if key in self.key_map:\n            node = self.key_map[key]\n            node.val = value\n            self._update(node)\n        else:\n            if len(self.key_map) >= self.cap:\n                evicted = self.freq_map[self.min_freq].pop_tail()\n                del self.key_map[evicted.key]\n            node = Node(key, value)\n            self.key_map[key] = node\n            self.freq_map[1].add(node)\n            self.min_freq = 1\n\n    def _update(self, node):\n        flist = self.freq_map[node.freq]\n        flist.remove(node)\n        if node.freq == self.min_freq and flist.size == 0: self.min_freq += 1\n        node.freq += 1\n        self.freq_map[node.freq].add(node)",
        "complexity": "Time O(1), Space O(capacity).",
        "edge": "Capacity 0; tie-breaker for identical frequencies (evicts least recently used)."
      }
    ]
  },
  {
    "id": 6,
    "name": "Stack & Queue",
    "solved": true,
    "problems": [
      {
        "diff": "E",
        "title": "Valid Parentheses",
        "url": "https://leetcode.com/problems/valid-parentheses/",
        "problem": "Determine if string of brackets '()[]{}' is valid and matched in order.",
        "approach": "Use a Stack. Push expected closing brackets for open brackets; pop and compare for closing brackets.",
        "java": "public boolean isValid(String s) {\n    Deque<Character> stack = new ArrayDeque<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(') stack.push(')');\n        else if (c == '{') stack.push('}');\n        else if (c == '[') stack.push(']');\n        else if (stack.isEmpty() || stack.pop() != c) return false;\n    }\n    return stack.isEmpty();\n}",
        "python": "def is_valid(s: str) -> bool:\n    stack = []\n    mapping = {\")\": \"(\", \"}\": \"{\", \"]\": \"[\"}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top: return False\n        else:\n            stack.append(char)\n    return not stack",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Odd length string; starting with closing bracket; remaining unclosed brackets."
      },
      {
        "diff": "E",
        "title": "Implement Queue using Stacks",
        "url": "https://leetcode.com/problems/implement-queue-using-stacks/",
        "problem": "Implement FIFO queue using two stacks (inStack and outStack).",
        "approach": "Push to inStack. For pop/peek, transfer elements to outStack if outStack is empty.",
        "java": "class MyQueue {\n    Deque<Integer> in = new ArrayDeque<>(), out = new ArrayDeque<>();\n    public void push(int x) { in.push(x); }\n    public int pop() { peek(); return out.pop(); }\n    public int peek() {\n        if (out.isEmpty()) {\n            while (!in.isEmpty()) out.push(in.pop());\n        }\n        return out.peek();\n    }\n    public boolean empty() { return in.isEmpty() && out.isEmpty(); }\n}",
        "python": "class MyQueue:\n    def __init__(self):\n        self.in_stk, self.out_stk = [], []\n    def push(self, x: int) -> None:\n        self.in_stk.append(x)\n    def pop(self) -> int:\n        self.peek()\n        return self.out_stk.pop()\n    def peek(self) -> int:\n        if not self.out_stk:\n            while self.in_stk:\n                self.out_stk.append(self.in_stk.pop())\n        return self.out_stk[-1]\n    def empty(self) -> bool:\n        return not self.in_stk and not self.out_stk",
        "complexity": "Time O(1) amortized, Space O(n).",
        "edge": "Popping or peeking when queue is empty."
      },
      {
        "diff": "M",
        "title": "Next Greater Element II",
        "url": "https://leetcode.com/problems/next-greater-element-ii/",
        "problem": "Find next greater element in a circular array.",
        "approach": "Monotonic stack holding indices, iterating through array twice (index i % n).",
        "java": "public int[] nextGreaterElements(int[] nums) {\n    int n = nums.length;\n    int[] res = new int[n];\n    Arrays.fill(res, -1);\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int i = 0; i < 2 * n; i++) {\n        while (!stack.isEmpty() && nums[stack.peek()] < nums[i % n]) {\n            res[stack.pop()] = nums[i % n];\n        }\n        if (i < n) stack.push(i);\n    }\n    return res;\n}",
        "python": "def next_greater_elements(nums):\n    n = len(nums)\n    res = [-1] * n\n    stack = []\n    for i in range(2 * n):\n        while stack and nums[stack[-1]] < nums[i % n]:\n            res[stack.pop()] = nums[i % n]\n        if i < n: stack.append(i)\n    return res",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Strictly decreasing array; all elements equal."
      },
      {
        "diff": "M",
        "title": "Min Stack",
        "url": "https://leetcode.com/problems/min-stack/",
        "problem": "Design stack that supports push, pop, top, and retrieving min in O(1).",
        "approach": "Maintain a primary stack and a minStack that records running minimums.",
        "java": "class MinStack {\n    Deque<Integer> stack = new ArrayDeque<>(), minStack = new ArrayDeque<>();\n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val <= minStack.peek()) minStack.push(val);\n    }\n    public void pop() {\n        if (stack.pop().equals(minStack.peek())) minStack.pop();\n    }\n    public int top() { return stack.peek(); }\n    public int getMin() { return minStack.peek(); }\n}",
        "python": "class MinStack:\n    def __init__(self):\n        self.stack, self.min_stack = [], []\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        if not self.min_stack or val <= self.min_stack[-1]:\n            self.min_stack.append(val)\n    def pop(self) -> None:\n        if self.stack.pop() == self.min_stack[-1]:\n            self.min_stack.pop()\n    def top(self) -> int: return self.stack[-1]\n    def getMin(self) -> int: return self.min_stack[-1]",
        "complexity": "Time O(1), Space O(n).",
        "edge": "Duplicate minimum values pushed consecutively."
      },
      {
        "diff": "M",
        "title": "Evaluate Reverse Polish Notation",
        "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        "problem": "Evaluate arithmetic expression in Reverse Polish Notation (postfix).",
        "approach": "Use a Stack. Push numbers; pop two operands for operators and push result.",
        "java": "public int evalRPN(String[] tokens) {\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (String t : tokens) {\n        if (t.equals(\"+\")) stack.push(stack.pop() + stack.pop());\n        else if (t.equals(\"-\")) { int b = stack.pop(); stack.push(stack.pop() - b); }\n        else if (t.equals(\"*\")) stack.push(stack.pop() * stack.pop());\n        else if (t.equals(\"/\")) { int b = stack.pop(); stack.push(stack.pop() / b); }\n        else stack.push(Integer.parseInt(t));\n    }\n    return stack.pop();\n}",
        "python": "def eval_rpn(tokens):\n    stack = []\n    for t in tokens:\n        if t in \"+-*/\":\n            b = stack.pop()\n            a = stack.pop()\n            if t == '+': stack.append(a + b)\n            elif t == '-': stack.append(a - b)\n            elif t == '*': stack.append(a * b)\n            elif t == '/': stack.append(int(a / b))\n        else:\n            stack.append(int(t))\n    return stack[0]",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Integer division truncates toward zero; negative numbers."
      },
      {
        "diff": "H",
        "title": "Largest Rectangle in Histogram",
        "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "problem": "Find area of largest rectangle in histogram bar heights.",
        "approach": "Monotonic increasing stack holding bar indices. Compute area when height decreases.",
        "java": "public int largestRectangleArea(int[] heights) {\n    int n = heights.length, maxArea = 0;\n    Deque<Integer> stack = new ArrayDeque<>();\n    for (int i = 0; i <= n; i++) {\n        int h = (i == n) ? 0 : heights[i];\n        while (!stack.isEmpty() && heights[stack.peek()] > h) {\n            int height = heights[stack.pop()];\n            int width = stack.isEmpty() ? i : i - stack.peek() - 1;\n            maxArea = Math.max(maxArea, height * width);\n        }\n        stack.push(i);\n    }\n    return maxArea;\n}",
        "python": "def largest_rectangle_area(heights):\n    stack = []\n    max_area = 0\n    heights.append(0)\n    for i, h in enumerate(heights):\n        while stack and heights[stack[-1]] > h:\n            height = heights[stack.pop()]\n            width = i if not stack else i - stack[-1] - 1\n            max_area = max(max_area, height * width)\n        stack.append(i)\n    heights.pop()\n    return max_area",
        "complexity": "Time O(n), Space O(n).",
        "edge": "All heights equal; strictly increasing or decreasing heights."
      },
      {
        "diff": "H",
        "title": "Sliding Window Maximum",
        "url": "https://leetcode.com/problems/sliding-window-maximum/",
        "problem": "Find max element in each sliding window of size k.",
        "approach": "Monotonic Deque storing indices in decreasing order of values.",
        "java": "public int[] maxSlidingWindow(int[] nums, int k) {\n    int n = nums.length;\n    int[] res = new int[n - k + 1];\n    Deque<Integer> dq = new ArrayDeque<>();\n    for (int i = 0; i < n; i++) {\n        if (!dq.isEmpty() && dq.peekFirst() < i - k + 1) dq.pollFirst();\n        while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) dq.pollLast();\n        dq.offerLast(i);\n        if (i >= k - 1) res[i - k + 1] = nums[dq.peekFirst()];\n    }\n    return res;\n}",
        "python": "from collections import deque\n\ndef max_sliding_window(nums, k):\n    dq = deque()\n    res = []\n    for i, num in enumerate(nums):\n        if dq and dq[0] < i - k + 1: dq.popleft()\n        while dq and nums[dq[-1]] < num: dq.pop()\n        dq.append(i)\n        if i >= k - 1: res.append(nums[dq[0]])\n    return res",
        "complexity": "Time O(n), Space O(k).",
        "edge": "k = 1; k = nums.length."
      }
    ]
  },
  {
    "id": 7,
    "name": "Linked List",
    "solved": true,
    "problems": [
      {
        "diff": "E",
        "title": "Reverse Linked List",
        "url": "https://leetcode.com/problems/reverse-linked-list/",
        "problem": "Reverse a singly linked list.",
        "approach": "Iterative three-pointer approach (prev, curr, nextTemp).",
        "java": "public ListNode reverseList(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) {\n        ListNode nextTemp = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}",
        "python": "def reverse_list(head):\n    prev, curr = None, head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev",
        "complexity": "Time O(n), Space O(1).",
        "edge": "Null head; single node list."
      },
      {
        "diff": "E",
        "title": "Linked List Cycle II",
        "url": "https://leetcode.com/problems/linked-list-cycle-ii/",
        "problem": "Find the node where the cycle begins in a linked list.",
        "approach": "Floyd's Cycle Finding algorithm (Slow & Fast pointers). Reset slow to head upon intersection.",
        "java": "public ListNode detectCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) {\n            ListNode entry = head;\n            while (entry != slow) {\n                entry = entry.next;\n                slow = slow.next;\n            }\n            return entry;\n        }\n    }\n    return null;\n}",
        "python": "def detect_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow, fast = slow.next, fast.next.next\n        if slow == fast:\n            entry = head\n            while entry != slow:\n                entry, slow = entry.next, slow.next\n            return entry\n    return None",
        "complexity": "Time O(n), Space O(1).",
        "edge": "No cycle; cycle at node 0 (head)."
      },
      {
        "diff": "M",
        "title": "Merge k Sorted Lists",
        "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "problem": "Merge k sorted linked lists into one sorted list.",
        "approach": "Min-Heap / PriorityQueue storing head of each list.",
        "java": "public ListNode mergeKLists(ListNode[] lists) {\n    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);\n    for (ListNode node : lists) if (node != null) pq.add(node);\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (!pq.isEmpty()) {\n        ListNode top = pq.poll();\n        curr.next = top;\n        curr = curr.next;\n        if (top.next != null) pq.add(top.next);\n    }\n    return dummy.next;\n}",
        "python": "import heapq\n\ndef merge_k_lists(lists):\n    heap = []\n    for i, l in enumerate(lists):\n        if l: heapq.heappush(heap, (l.val, i, l))\n    dummy = curr = ListNode(0)\n    while heap:\n        val, i, node = heapq.heappop(heap)\n        curr.next = node\n        curr = curr.next\n        if node.next:\n            heapq.heappush(heap, (node.next.val, i, node.next))\n    return dummy.next",
        "complexity": "Time O(N log k), Space O(k).",
        "edge": "Empty array of lists; lists containing nulls."
      },
      {
        "diff": "M",
        "title": "Add Two Numbers",
        "url": "https://leetcode.com/problems/add-two-numbers/",
        "problem": "Add two non-empty linked lists representing non-negative integers in reverse order.",
        "approach": "Iterate through lists digit by digit, maintaining carry.",
        "java": "public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    int carry = 0;\n    while (l1 != null || l2 != null || carry != 0) {\n        int sum = carry;\n        if (l1 != null) { sum += l1.val; l1 = l1.next; }\n        if (l2 != null) { sum += l2.val; l2 = l2.next; }\n        carry = sum / 10;\n        curr.next = new ListNode(sum % 10);\n        curr = curr.next;\n    }\n    return dummy.next;\n}",
        "python": "def add_two_numbers(l1, l2):\n    dummy = curr = ListNode(0)\n    carry = 0\n    while l1 or l2 or carry:\n        val = carry\n        if l1: val += l1.val; l1 = l1.next\n        if l2: val += l2.val; l2 = l2.next\n        carry = val // 10\n        curr.next = ListNode(val % 10)\n        curr = curr.next\n    return dummy.next",
        "complexity": "Time O(max(N,M)), Space O(max(N,M)).",
        "edge": "Final carry producing an additional node."
      },
      {
        "diff": "M",
        "title": "Flatten a Multilevel Doubly Linked List",
        "url": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
        "problem": "Flatten a multilevel doubly linked list so nodes form a single-level doubly linked list.",
        "approach": "Use a Stack to store next pointers when child pointers are encountered.",
        "java": "public Node flatten(Node head) {\n    if (head == null) return head;\n    Node curr = head;\n    while (curr != null) {\n        if (curr.child != null) {\n            Node next = curr.next;\n            Node child = curr.child;\n            curr.next = child; child.prev = curr; curr.child = null;\n            Node tail = child;\n            while (tail.next != null) tail = tail.next;\n            tail.next = next;\n            if (next != null) next.prev = tail;\n        }\n        curr = curr.next;\n    }\n    return head;\n}",
        "python": "def flatten(head):\n    if not head: return head\n    curr = head\n    while curr:\n        if curr.child:\n            nxt = curr.next\n            child = curr.child\n            curr.next = child; child.prev = curr; curr.child = None\n            tail = child\n            while tail.next: tail = tail.next\n            tail.next = nxt\n            if nxt: nxt.prev = tail\n        curr = curr.next\n    return head",
        "complexity": "Time O(n), Space O(1).",
        "edge": "Deeply nested children; child at the end of list."
      },
      {
        "diff": "H",
        "title": "LRU Cache",
        "url": "https://leetcode.com/problems/lru-cache/",
        "problem": "Design LRU (Least Recently Used) Cache with get and put in O(1).",
        "approach": "HashMap (key -> Node) + Doubly Linked List for ordering access.",
        "java": "class LRUCache {\n    class Node {\n        int key, val; Node prev, next;\n        Node(int k, int v) { key = k; val = v; }\n    }\n    int cap;\n    Map<Integer, Node> map = new HashMap<>();\n    Node head = new Node(0, 0), tail = new Node(0, 0);\n    public LRUCache(int capacity) {\n        cap = capacity; head.next = tail; tail.prev = head;\n    }\n    public int get(int key) {\n        if (!map.containsKey(key)) return -1;\n        Node n = map.get(key); remove(n); insert(n);\n        return n.val;\n    }\n    public void put(int key, int value) {\n        if (map.containsKey(key)) remove(map.get(key));\n        if (map.size() == cap) { map.remove(tail.prev.key); remove(tail.prev); }\n        Node n = new Node(key, value); insert(n); map.put(key, n);\n    }\n    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }\n    private void insert(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }\n}",
        "python": "class Node:\n    def __init__(self, k, v): self.key, self.val = k, v; self.prev = self.next = None\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity; self.map = {}\n        self.head, self.tail = Node(0, 0), Node(0, 0)\n        self.head.next = self.tail; self.tail.prev = self.head\n    def get(self, key: int) -> int:\n        if key not in self.map: return -1\n        n = self.map[key]; self._remove(n); self._insert(n)\n        return n.val\n    def put(self, key: int, value: int) -> None:\n        if key in self.map: self._remove(self.map[key])\n        if len(self.map) == self.cap:\n            del self.map[self.tail.prev.key]; self._remove(self.tail.prev)\n        n = Node(key, value); self._insert(n); self.map[key] = n\n    def _remove(self, n): n.prev.next = n.next; n.next.prev = n.prev\n    def _insert(self, n): n.next = self.head.next; n.prev = self.head; self.head.next.prev = n; self.head.next = n",
        "complexity": "Time O(1), Space O(capacity).",
        "edge": "Updating existing key; capacity 1."
      },
      {
        "diff": "H",
        "title": "Reverse Nodes in k-Group",
        "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "problem": "Reverse nodes of a linked list k at a time.",
        "approach": "Check if k nodes exist. If so, reverse the k sublist and recurse for the remainder.",
        "java": "public ListNode reverseKGroup(ListNode head, int k) {\n    ListNode curr = head;\n    int count = 0;\n    while (curr != null && count != k) { curr = curr.next; count++; }\n    if (count == k) {\n        curr = reverseKGroup(curr, k);\n        while (count-- > 0) {\n            ListNode tmp = head.next;\n            head.next = curr;\n            curr = head;\n            head = tmp;\n        }\n        head = curr;\n    }\n    return head;\n}",
        "python": "def reverse_k_group(head, k):\n    curr = head\n    count = 0\n    while curr and count != k:\n        curr = curr.next\n        count += 1\n    if count == k:\n        curr = reverse_k_group(curr, k)\n        while count > 0:\n            tmp = head.next\n            head.next = curr\n            curr = head\n            head = tmp\n            count -= 1\n        head = curr\n    return head",
        "complexity": "Time O(n), Space O(n / k) call stack.",
        "edge": "Length of list not multiple of k (leaves last part intact)."
      }
    ]
  },
  {
    "id": 8,
    "name": "Trees",
    "solved": true,
    "problems": [
      {
        "diff": "E",
        "title": "Binary Tree Level Order Traversal",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "problem": "Return level order traversal of binary tree nodes' values.",
        "approach": "BFS using a Queue. Process queue level by level.",
        "java": "public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<>();\n    if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.add(root);\n    while (!q.isEmpty()) {\n        int size = q.size();\n        List<Integer> level = new ArrayList<>();\n        for (int i = 0; i < size; i++) {\n            TreeNode node = q.poll();\n            level.add(node.val);\n            if (node.left != null) q.add(node.left);\n            if (node.right != null) q.add(node.right);\n        }\n        res.add(level);\n    }\n    return res;\n}",
        "python": "from collections import deque\n\ndef level_order(root):\n    if not root: return []\n    res, q = [], deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Empty tree (null root)."
      },
      {
        "diff": "E",
        "title": "Balanced Binary Tree",
        "url": "https://leetcode.com/problems/balanced-binary-tree/",
        "problem": "Check if height of left & right subtrees of every node differs by <= 1.",
        "approach": "Bottom-up DFS returning height if balanced or -1 if unbalanced.",
        "java": "public boolean isBalanced(TreeNode root) {\n    return checkHeight(root) != -1;\n}\nprivate int checkHeight(TreeNode node) {\n    if (node == null) return 0;\n    int l = checkHeight(node.left);\n    if (l == -1) return -1;\n    int r = checkHeight(node.right);\n    if (r == -1) return -1;\n    if (Math.abs(l - r) > 1) return -1;\n    return Math.max(l, r) + 1;\n}",
        "python": "def is_balanced(root) -> bool:\n    def check(node):\n        if not node: return 0\n        l = check(node.left)\n        if l == -1: return -1\n        r = check(node.right)\n        if r == -1: return -1\n        if abs(l - r) > 1: return -1\n        return max(l, r) + 1\n    return check(root) != -1",
        "complexity": "Time O(n), Space O(h).",
        "edge": "Single node tree; skewed tree."
      },
      {
        "diff": "M",
        "title": "Lowest Common Ancestor of a Binary Tree",
        "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        "problem": "Find LCA of two given nodes p and q in binary tree.",
        "approach": "Recursive DFS: return root if root == p || root == q. If both left & right return non-null, root is LCA.",
        "java": "public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lowestCommonAncestor(root.left, p, q);\n    TreeNode right = lowestCommonAncestor(root.right, p, q);\n    if (left != null && right != null) return root;\n    return left != null ? left : right;\n}",
        "python": "def lowest_common_ancestor(root, p, q):\n    if not root or root == p or root == q: return root\n    left = lowest_common_ancestor(root.left, p, q)\n    right = lowest_common_ancestor(root.right, p, q)\n    if left and right: return root\n    return left or right",
        "complexity": "Time O(n), Space O(h).",
        "edge": "p is ancestor of q."
      },
      {
        "diff": "M",
        "title": "Diameter of Binary Tree",
        "url": "https://leetcode.com/problems/diameter-of-binary-tree/",
        "problem": "Find length of longest path between any two nodes in a tree.",
        "approach": "DFS tracking global max of (leftHeight + rightHeight).",
        "java": "int maxDiam = 0;\npublic int diameterOfBinaryTree(TreeNode root) {\n    getHeight(root);\n    return maxDiam;\n}\nprivate int getHeight(TreeNode node) {\n    if (node == null) return 0;\n    int l = getHeight(node.left);\n    int r = getHeight(node.right);\n    maxDiam = Math.max(maxDiam, l + r);\n    return Math.max(l, r) + 1;\n}",
        "python": "def diameter_of_binary_tree(root) -> int:\n    max_d = 0\n    def height(node):\n        nonlocal max_d\n        if not node: return 0\n        l, r = height(node.left), height(node.right)\n        max_d = max(max_d, l + r)\n        return max(l, r) + 1\n    height(root)\n    return max_d",
        "complexity": "Time O(n), Space O(h).",
        "edge": "Path does not pass through root."
      },
      {
        "diff": "M",
        "title": "Serialize and Deserialize Binary Tree",
        "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        "problem": "Design an algorithm to serialize and deserialize a binary tree.",
        "approach": "Preorder traversal with null markers (e.g. 'null,').",
        "java": "public class Codec {\n    public String serialize(TreeNode root) {\n        if (root == null) return \"N\";\n        return root.val + \",\" + serialize(root.left) + \",\" + serialize(root.right);\n    }\n    public TreeNode deserialize(String data) {\n        Queue<String> q = new LinkedList<>(Arrays.asList(data.split(\",\")));\n        return build(q);\n    }\n    private TreeNode build(Queue<String> q) {\n        String s = q.poll();\n        if (s.equals(\"N\")) return null;\n        TreeNode node = new TreeNode(Integer.parseInt(s));\n        node.left = build(q);\n        node.right = build(q);\n        return node;\n    }\n}",
        "python": "class Codec:\n    def serialize(self, root):\n        if not root: return \"N\"\n        return f\"{root.val},{self.serialize(root.left)},{self.serialize(root.right)}\"\n\n    def deserialize(self, data):\n        vals = iter(data.split(','))\n        def build():\n            val = next(vals)\n            if val == 'N': return None\n            node = TreeNode(int(val))\n            node.left = build()\n            node.right = build()\n            return node\n        return build()",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Negative values in tree; single node."
      },
      {
        "diff": "M",
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "problem": "Reconstruct binary tree given preorder & inorder arrays.",
        "approach": "Preorder gives root. Find root index in inorder array using HashMap to divide left & right subtrees.",
        "java": "Map<Integer, Integer> map = new HashMap<>();\nint preIdx = 0;\npublic TreeNode buildTree(int[] preorder, int[] inorder) {\n    for (int i = 0; i < inorder.length; i++) map.put(inorder[i], i);\n    return helper(preorder, 0, inorder.length - 1);\n}\nprivate TreeNode helper(int[] preorder, int left, int right) {\n    if (left > right) return null;\n    int val = preorder[preIdx++];\n    TreeNode root = new TreeNode(val);\n    int inIdx = map.get(val);\n    root.left = helper(preorder, left, inIdx - 1);\n    root.right = helper(preorder, inIdx + 1, right);\n    return root;\n}",
        "python": "def build_tree(preorder, inorder):\n    in_map = {val: i for i, val in enumerate(inorder)}\n    pre_idx = 0\n    def helper(left, right):\n        nonlocal pre_idx\n        if left > right: return None\n        val = preorder[pre_idx]\n        pre_idx += 1\n        root = TreeNode(val)\n        idx = in_map[val]\n        root.left = helper(left, idx - 1)\n        root.right = helper(idx + 1, right)\n        return root\n    return helper(0, len(inorder) - 1)",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Single element tree."
      },
      {
        "diff": "H",
        "title": "Binary Tree Maximum Path Sum",
        "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "problem": "Find maximum path sum where path goes from any node to any node.",
        "approach": "DFS calculating max gain from subtrees (ignore negative gains with Math.max(0, gain)).",
        "java": "int maxSum = Integer.MIN_VALUE;\npublic int maxPathSum(TreeNode root) {\n    maxGain(root);\n    return maxSum;\n}\nprivate int maxGain(TreeNode node) {\n    if (node == null) return 0;\n    int left = Math.max(0, maxGain(node.left));\n    int right = Math.max(0, maxGain(node.right));\n    maxSum = Math.max(maxSum, node.val + left + right);\n    return node.val + Math.max(left, right);\n}",
        "python": "def max_path_sum(root) -> int:\n    max_sum = float('-inf')\n    def gain(node):\n        nonlocal max_sum\n        if not node: return 0\n        l = max(0, gain(node.left))\n        r = max(0, gain(node.right))\n        max_sum = max(max_sum, node.val + l + r)\n        return node.val + max(l, r)\n    gain(root)\n    return max_sum",
        "complexity": "Time O(n), Space O(h).",
        "edge": "All negative node values in tree."
      },
      {
        "diff": "H",
        "title": "Vertical Order Traversal of a Binary Tree",
        "url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
        "problem": "Return vertical order traversal of a binary tree.",
        "approach": "BFS/DFS tracking (col, row, val). Sort by col, then row, then val.",
        "java": "class Tuple {\n    TreeNode node; int row, col;\n    Tuple(TreeNode n, int r, int c) { node = n; row = r; col = c; }\n}\npublic List<List<Integer>> verticalTraversal(TreeNode root) {\n    TreeMap<Integer, TreeMap<Integer, PriorityQueue<Integer>>> map = new TreeMap<>();\n    Queue<Tuple> q = new LinkedList<>();\n    q.add(new Tuple(root, 0, 0));\n    while (!q.isEmpty()) {\n        Tuple t = q.poll();\n        map.computeIfAbsent(t.col, k -> new TreeMap<>())\n           .computeIfAbsent(t.row, k -> new PriorityQueue<>())\n           .add(t.node.val);\n        if (t.node.left != null) q.add(new Tuple(t.node.left, t.row + 1, t.col - 1));\n        if (t.node.right != null) q.add(new Tuple(t.node.right, t.row + 1, t.col + 1));\n    }\n    List<List<Integer>> res = new ArrayList<>();\n    for (TreeMap<Integer, PriorityQueue<Integer>> cols : map.values()) {\n        List<Integer> colList = new ArrayList<>();\n        for (PriorityQueue<Integer> pq : cols.values()) {\n            while (!pq.isEmpty()) colList.add(pq.poll());\n        }\n        res.add(colList);\n    }\n    return res;\n}",
        "python": "from collections import defaultConfig, deque\n\ndef vertical_traversal(root):\n    nodes = []\n    q = deque([(root, 0, 0)])\n    while q:\n        node, row, col = q.popleft()\n        if node:\n            nodes.append((col, row, node.val))\n            q.append((node.left, row + 1, col - 1))\n            q.append((node.right, row + 1, col + 1))\n    nodes.sort()\n    res = {}\n    for col, row, val in nodes:\n        res.setdefault(col, []).append(val)\n    return list(res.values())",
        "complexity": "Time O(n log n), Space O(n).",
        "edge": "Multiple nodes at identical (col, row)."
      }
    ]
  },
  {
    "id": 9,
    "name": "Graphs",
    "solved": true,
    "problems": [
      {
        "diff": "E",
        "title": "Number of Connected Components in an Undirected Graph",
        "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
        "problem": "Find number of connected components in n nodes with undirected edges.",
        "approach": "Union-Find (Disjoint Set Union) with path compression.",
        "java": "public int countComponents(int n, int[][] edges) {\n    int[] parent = new int[n];\n    for (int i = 0; i < n; i++) parent[i] = i;\n    int comp = n;\n    for (int[] e : edges) {\n        int r1 = find(parent, e[0]), r2 = find(parent, e[1]);\n        if (r1 != r2) { parent[r1] = r2; comp--; }\n    }\n    return comp;\n}\nprivate int find(int[] p, int i) {\n    if (p[i] == i) return i;\n    return p[i] = find(p, p[i]);\n}",
        "python": "def count_components(n, edges):\n    parent = list(range(n))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    comp = n\n    for u, v in edges:\n        r1, r2 = find(u), find(v)\n        if r1 != r2:\n            parent[r1] = r2\n            comp -= 1\n    return comp",
        "complexity": "Time O(E * α(V)), Space O(V).",
        "edge": "Graph with 0 edges (n components)."
      },
      {
        "diff": "M",
        "title": "Course Schedule",
        "url": "https://leetcode.com/problems/course-schedule/",
        "problem": "Determine if you can finish all courses given prerequisite dependencies.",
        "approach": "Topological Sort via Kahn's Algorithm (In-degree array + BFS Queue).",
        "java": "public boolean canFinish(int numCourses, int[][] prerequisites) {\n    int[] inDegree = new int[numCourses];\n    List<List<Integer>> adj = new ArrayList<>();\n    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n    for (int[] p : prerequisites) {\n        adj.get(p[1]).add(p[0]);\n        inDegree[p[0]]++;\n    }\n    Queue<Integer> q = new LinkedList<>();\n    for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.add(i);\n    int count = 0;\n    while (!q.isEmpty()) {\n        int curr = q.poll();\n        count++;\n        for (int next : adj.get(curr)) {\n            if (--inDegree[next] == 0) q.add(next);\n        }\n    }\n    return count == numCourses;\n}",
        "python": "from collections import deque, defaultdict\n\ndef can_finish(num_courses, prerequisites):\n    in_degree = [0] * num_courses\n    adj = defaultdict(list)\n    for dest, src in prerequisites:\n        adj[src].append(dest)\n        in_degree[dest] += 1\n    q = deque([i for i in range(num_courses) if in_degree[i] == 0])\n    visited = 0\n    while q:\n        curr = q.popleft()\n        visited += 1\n        for nxt in adj[curr]:\n            in_degree[nxt] -= 1\n            if in_degree[nxt] == 0: q.append(nxt)\n    return visited == num_courses",
        "complexity": "Time O(V + E), Space O(V + E).",
        "edge": "Cyclic dependencies present (e.g. 0->1 and 1->0)."
      },
      {
        "diff": "M",
        "title": "Number of Islands",
        "url": "https://leetcode.com/problems/number-of-islands/",
        "problem": "Count number of islands surrounded by water in a 2D binary grid.",
        "approach": "DFS/BFS grid traversal. Sink visited land nodes from '1' to '0'.",
        "java": "public int numIslands(char[][] grid) {\n    if (grid == null || grid.length == 0) return 0;\n    int count = 0;\n    for (int i = 0; i < grid.length; i++) {\n        for (int j = 0; j < grid[0].length; j++) {\n            if (grid[i][j] == '1') {\n                count++;\n                dfs(grid, i, j);\n            }\n        }\n    }\n    return count;\n}\nprivate void dfs(char[][] grid, int r, int c) {\n    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] == '0') return;\n    grid[r][c] = '0';\n    dfs(grid, r + 1, c); dfs(grid, r - 1, c);\n    dfs(grid, r, c + 1); dfs(grid, r, c - 1);\n}",
        "python": "def num_islands(grid):\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n    def dfs(r, c):\n        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0': return\n        grid[r][c] = '0'\n        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                count += 1\n                dfs(r, c)\n    return count",
        "complexity": "Time O(R * C), Space O(R * C).",
        "edge": "Grid containing only water '0'."
      },
      {
        "diff": "M",
        "title": "Network Delay Time (Dijkstra)",
        "url": "https://leetcode.com/problems/network-delay-time/",
        "problem": "Find minimum time for signal to reach all n nodes from node k.",
        "approach": "Dijkstra's Algorithm using a Min-Heap (dist, node).",
        "java": "public int networkDelayTime(int[][] times, int n, int k) {\n    Map<Integer, List<int[]>> adj = new HashMap<>();\n    for (int[] t : times) {\n        adj.computeIfAbsent(t[0], x -> new ArrayList<>()).add(new int[]{t[1], t[2]});\n    }\n    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);\n    pq.add(new int[]{0, k});\n    Map<Integer, Integer> dist = new HashMap<>();\n    while (!pq.isEmpty()) {\n        int[] top = pq.poll();\n        int d = top[0], node = top[1];\n        if (dist.containsKey(node)) continue;\n        dist.put(node, d);\n        if (adj.containsKey(node)) {\n            for (int[] next : adj.get(node)) {\n                if (!dist.containsKey(next[0])) pq.add(new int[]{d + next[1], next[0]});\n            }\n        }\n    }\n    if (dist.size() != n) return -1;\n    int maxTime = 0;\n    for (int v : dist.values()) maxTime = Math.max(maxTime, v);\n    return maxTime;\n}",
        "python": "import heapq, collections\n\ndef network_delay_time(times, n, k):\n    adj = collections.defaultdict(list)\n    for u, v, w in times: adj[u].append((v, w))\n    pq = [(0, k)]\n    dist = {}\n    while pq:\n        d, node = heapq.heappop(pq)\n        if node not in dist:\n            dist[node] = d\n            for nxt, w in adj[node]:\n                if nxt not in dist: heapq.heappush(pq, (d + w, nxt))\n    return max(dist.values()) if len(dist) == n else -1",
        "complexity": "Time O(E log V), Space O(V + E).",
        "edge": "Disconnected graph nodes."
      },
      {
        "diff": "M",
        "title": "Clone Graph",
        "url": "https://leetcode.com/problems/clone-graph/",
        "problem": "Return a deep copy of a connected undirected graph.",
        "approach": "HashMap mapping original Node -> cloned Node + DFS traversal.",
        "java": "Map<Node, Node> map = new HashMap<>();\npublic Node cloneGraph(Node node) {\n    if (node == null) return null;\n    if (map.containsKey(node)) return map.get(node);\n    Node clone = new Node(node.val, new ArrayList<>());\n    map.put(node, clone);\n    for (Node neighbor : node.neighbors) {\n        clone.neighbors.add(cloneGraph(neighbor));\n    }\n    return clone;\n}",
        "python": "def clone_graph(node):\n    old_to_new = {}\n    def dfs(n):\n        if not n: return None\n        if n in old_to_new: return old_to_new[n]\n        copy = Node(n.val)\n        old_to_new[n] = copy\n        for nei in n.neighbors:\n            copy.neighbors.append(dfs(nei))\n        return copy\n    return dfs(node)",
        "complexity": "Time O(V + E), Space O(V).",
        "edge": "Single node with no neighbors."
      },
      {
        "diff": "H",
        "title": "Word Ladder",
        "url": "https://leetcode.com/problems/word-ladder/",
        "problem": "Find length of shortest transformation sequence from beginWord to endWord.",
        "approach": "BFS level-by-level state search. Replace each character 'a'-'z'.",
        "java": "public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n    Set<String> set = new HashSet<>(wordList);\n    if (!set.contains(endWord)) return 0;\n    Queue<String> q = new LinkedList<>();\n    q.add(beginWord);\n    int level = 1;\n    while (!q.isEmpty()) {\n        int size = q.size();\n        for (int i = 0; i < size; i++) {\n            char[] word = q.poll().toCharArray();\n            for (int j = 0; j < word.length; j++) {\n                char orig = word[j];\n                for (char c = 'a'; c <= 'z'; c++) {\n                    word[j] = c;\n                    String check = new String(word);\n                    if (check.equals(endWord)) return level + 1;\n                    if (set.contains(check)) {\n                        q.add(check);\n                        set.remove(check);\n                    }\n                }\n                word[j] = orig;\n            }\n        }\n        level++;\n    }\n    return 0;\n}",
        "python": "from collections import deque\n\ndef ladder_length(begin_word, end_word, word_list):\n    words = set(word_list)\n    if end_word not in words: return 0\n    q = deque([(begin_word, 1)])\n    while q:\n        word, step = q.popleft()\n        if word == end_word: return step\n        for i in range(len(word)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                nxt = word[:i] + c + word[i+1:]\n                if nxt in words:\n                    words.remove(nxt)\n                    q.append((nxt, step + 1))\n    return 0",
        "complexity": "Time O(N * L * 26), Space O(N).",
        "edge": "endWord not in wordList."
      },
      {
        "diff": "H",
        "title": "Alien Dictionary",
        "url": "https://leetcode.com/problems/alien-dictionary/",
        "problem": "Derive character ordering from sorted words list in alien language.",
        "approach": "Build directed graph by comparing adjacent words, then perform Topological Sort.",
        "java": "public String alienOrder(String[] words) {\n    Map<Character, Set<Character>> adj = new HashMap<>();\n    Map<Character, Integer> inDegree = new HashMap<>();\n    for (String w : words) for (char c : w.toCharArray()) { adj.put(c, new HashSet<>()); inDegree.put(c, 0); }\n    for (int i = 0; i < words.length - 1; i++) {\n        String w1 = words[i], w2 = words[i + 1];\n        if (w1.length() > w2.length() && w1.startsWith(w2)) return \"\";\n        for (int j = 0; j < Math.min(w1.length(), w2.length()); j++) {\n            if (w1.charAt(j) != w2.charAt(j)) {\n                if (!adj.get(w1.charAt(j)).contains(w2.charAt(j))) {\n                    adj.get(w1.charAt(j)).add(w2.charAt(j));\n                    inDegree.put(w2.charAt(j), inDegree.get(w2.charAt(j)) + 1);\n                }\n                break;\n            }\n        }\n    }\n    Queue<Character> q = new LinkedList<>();\n    for (char c : inDegree.keySet()) if (inDegree.get(c) == 0) q.add(c);\n    StringBuilder sb = new StringBuilder();\n    while (!q.isEmpty()) {\n        char c = q.poll();\n        sb.append(c);\n        for (char next : adj.get(c)) {\n            inDegree.put(next, inDegree.get(next) - 1);\n            if (inDegree.get(next) == 0) q.add(next);\n        }\n    }\n    return sb.length() == inDegree.size() ? sb.toString() : \"\";\n}",
        "python": "from collections import defaultdict, deque\n\ndef alien_order(words):\n    adj = {c: set() for w in words for c in w}\n    in_degree = {c: 0 for c in words for c in words}\n    for i in range(len(words) - 1):\n        w1, w2 = words[i], words[i+1]\n        if len(w1) > len(w2) and w1.startswith(w2): return \"\"\n        for c1, c2 in zip(w1, w2):\n            if c1 != c2:\n                if c2 not in adj[c1]:\n                    adj[c1].add(c2)\n                    in_degree[c2] += 1\n                break\n    q = deque([c for c in in_degree if in_degree[c] == 0])\n    res = []\n    while q:\n        c = q.popleft()\n        res.append(c)\n        for nxt in adj[c]:\n            in_degree[nxt] -= 1\n            if in_degree[nxt] == 0: q.append(nxt)\n    return \"\".join(res) if len(res) == len(in_degree) else \"\"",
        "complexity": "Time O(C) total characters, Space O(U) unique letters.",
        "edge": "Invalid prefix order (e.g. 'abc' before 'ab'); cycle in ordering."
      },
      {
        "diff": "H",
        "title": "Cheapest Flights Within K Stops",
        "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        "problem": "Find cheapest price from src to dst with at most k stops.",
        "approach": "Bellman-Ford algorithm executed for k + 1 iterations.",
        "java": "public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {\n    int[] dist = new int[n];\n    Arrays.fill(dist, Integer.MAX_VALUE);\n    dist[src] = 0;\n    for (int i = 0; i <= k; i++) {\n        int[] temp = Arrays.copyOf(dist, n);\n        for (int[] f : flights) {\n            int u = f[0], v = f[1], w = f[2];\n            if (dist[u] != Integer.MAX_VALUE && dist[u] + w < temp[v]) {\n                temp[v] = dist[u] + w;\n            }\n        }\n        dist = temp;\n    }\n    return dist[dst] == Integer.MAX_VALUE ? -1 : dist[dst];\n}",
        "python": "def find_cheapest_price(n, flights, src, dst, k):\n    dist = [float('inf')] * n\n    dist[src] = 0\n    for _ in range(k + 1):\n        tmp = list(dist)\n        for u, v, w in flights:\n            if dist[u] != float('inf') and dist[u] + w < tmp[v]:\n                tmp[v] = dist[u] + w\n        dist = tmp\n    return dist[dst] if dist[dst] != float('inf') else -1",
        "complexity": "Time O(K * E), Space O(V).",
        "edge": "Destination unreachable within k stops."
      }
    ]
  },
  {
    "id": 10,
    "name": "Dynamic Programming",
    "solved": true,
    "problems": [
      {
        "diff": "E",
        "title": "Climbing Stairs / House Robber",
        "url": "https://leetcode.com/problems/house-robber/",
        "problem": "Determine max money you can rob without robbing adjacent houses.",
        "approach": "DP with 2 variables: rob1 (max up to i-2) and rob2 (max up to i-1).",
        "java": "public int rob(int[] nums) {\n    int rob1 = 0, rob2 = 0;\n    for (int n : nums) {\n        int temp = Math.max(n + rob1, rob2);\n        rob1 = rob2;\n        rob2 = temp;\n    }\n    return rob2;\n}",
        "python": "def rob(nums):\n    rob1 = rob2 = 0\n    for n in nums:\n        rob1, rob2 = rob2, max(n + rob1, rob2)\n    return rob2",
        "complexity": "Time O(n), Space O(1).",
        "edge": "Empty array; single house."
      },
      {
        "diff": "E",
        "title": "Coin Change",
        "url": "https://leetcode.com/problems/coin-change/",
        "problem": "Fewest coins needed to make up given amount.",
        "approach": "Bottom-up 1D DP table where dp[i] = min coins for amount i.",
        "java": "public int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int coin : coins) {\n            if (i >= coin) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
        "python": "def coin_change(coins, amount):\n    dp = [amount + 1] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for coin in coins:\n            if i >= coin:\n                dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] <= amount else -1",
        "complexity": "Time O(amount * n), Space O(amount).",
        "edge": "amount = 0; impossible to make change."
      },
      {
        "diff": "M",
        "title": "Longest Increasing Subsequence",
        "url": "https://leetcode.com/problems/longest-increasing-subsequence/",
        "problem": "Find length of longest strictly increasing subsequence.",
        "approach": "Patience Sorting / Binary Search on tail values in O(n log n).",
        "java": "public int lengthOfLIS(int[] nums) {\n    int[] tails = new int[nums.length];\n    int size = 0;\n    for (int x : nums) {\n        int i = 0, j = size;\n        while (i < j) {\n            int mid = (i + j) / 2;\n            if (tails[mid] < x) i = mid + 1;\n            else j = mid;\n        }\n        tails[i] = x;\n        if (i == size) size++;\n    }\n    return size;\n}",
        "python": "import bisect\n\ndef length_of_lis(nums):\n    tails = []\n    for x in nums:\n        idx = bisect.bisect_left(tails, x)\n        if idx == len(tails): tails.append(x)\n        else: tails[idx] = x\n    return len(tails)",
        "complexity": "Time O(n log n), Space O(n).",
        "edge": "Strictly decreasing array."
      },
      {
        "diff": "M",
        "title": "Partition Equal Subset Sum",
        "url": "https://leetcode.com/problems/partition-equal-subset-sum/",
        "problem": "Check if array can be partitioned into two subsets with equal sum.",
        "approach": "0/1 Knapsack DP using boolean array for target sum = totalSum / 2.",
        "java": "public boolean canPartition(int[] nums) {\n    int sum = 0; for (int n : nums) sum += n;\n    if (sum % 2 != 0) return false;\n    int target = sum / 2;\n    boolean[] dp = new boolean[target + 1];\n    dp[0] = true;\n    for (int n : nums) {\n        for (int i = target; i >= n; i--) {\n            dp[i] = dp[i] || dp[i - n];\n        }\n    }\n    return dp[target];\n}",
        "python": "def can_partition(nums):\n    total = sum(nums)\n    if total % 2 != 0: return False\n    target = total // 2\n    dp = {0}\n    for n in nums:\n        dp |= {x + n for x in dp if x + n <= target}\n    return target in dp",
        "complexity": "Time O(N * Sum), Space O(Sum).",
        "edge": "Odd total sum."
      },
      {
        "diff": "M",
        "title": "Edit Distance",
        "url": "https://leetcode.com/problems/edit-distance/",
        "problem": "Find min operations (insert, delete, replace) to convert word1 to word2.",
        "approach": "2D DP grid: dp[i][j] = min edits to convert word1[0..i] to word2[0..j].",
        "java": "public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 0; i <= m; i++) dp[i][0] = i;\n    for (int j = 0; j <= n; j++) dp[0][j] = j;\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (word1.charAt(i - 1) == word2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1];\n            else dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));\n        }\n    }\n    return dp[m][n];\n}",
        "python": "def min_distance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i-1] == word2[j-1]: dp[i][j] = dp[i-1][j-1]\n            else: dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])\n    return dp[m][n]",
        "complexity": "Time O(M * N), Space O(M * N).",
        "edge": "Empty string."
      },
      {
        "diff": "M",
        "title": "Unique Paths II",
        "url": "https://leetcode.com/problems/unique-paths-ii/",
        "problem": "Find unique paths from top-left to bottom-right in grid with obstacles.",
        "approach": "2D DP table. Set dp[r][c] = 0 if obstacle, else dp[r-1][c] + dp[r][c-1].",
        "java": "public int uniquePathsWithObstacles(int[][] obstacleGrid) {\n    int width = obstacleGrid[0].length;\n    int[] dp = new int[width];\n    dp[0] = 1;\n    for (int[] row : obstacleGrid) {\n        for (int j = 0; j < width; j++) {\n            if (row[j] == 1) dp[j] = 0;\n            else if (j > 0) dp[j] += dp[j - 1];\n        }\n    }\n    return dp[width - 1];\n}",
        "python": "def unique_paths_with_obstacles(obstacle_grid):\n    w = len(obstacle_grid[0])\n    dp = [0] * w\n    dp[0] = 1\n    for row in obstacle_grid:\n        for j in range(w):\n            if row[j] == 1: dp[j] = 0\n            elif j > 0: dp[j] += dp[j - 1]\n    return dp[-1]",
        "complexity": "Time O(R * C), Space O(C).",
        "edge": "Obstacle at start or end."
      },
      {
        "diff": "H",
        "title": "Matrix Chain Multiplication",
        "url": "https://leetcode.com/problems/minimum-score-triangulation-of-polygon/",
        "problem": "Find minimum cost to multiply a chain of matrices.",
        "approach": "Interval DP over chain length subproblems.",
        "java": "public int matrixMultiplication(int[] arr) {\n    int n = arr.length;\n    int[][] dp = new int[n][n];\n    for (int len = 2; len < n; len++) {\n        for (int i = 1; i < n - len + 1; i++) {\n            int j = i + len - 1;\n            dp[i][j] = Integer.MAX_VALUE;\n            for (int k = i; k < j; k++) {\n                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];\n                dp[i][j] = Math.min(dp[i][j], cost);\n            }\n        }\n    }\n    return dp[1][n - 1];\n}",
        "python": "def matrix_multiplication(arr):\n    n = len(arr)\n    dp = [[0] * n for _ in range(n)]\n    for length in range(2, n):\n        for i in range(1, n - length + 1):\n            j = i + length - 1\n            dp[i][j] = float('inf')\n            for k in range(i, j):\n                cost = dp[i][k] + dp[k+1][j] + arr[i-1] * arr[k] * arr[j]\n                dp[i][j] = min(dp[i][j], cost)\n    return dp[1][n-1]",
        "complexity": "Time O(n^3), Space O(n^2).",
        "edge": "Minimum chain length of 3."
      },
      {
        "diff": "H",
        "title": "Palindrome Partitioning II",
        "url": "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "problem": "Minimum cuts needed for a palindrome partitioning of string s.",
        "approach": "Expand around center to find palindromes, updating 1D min-cut array.",
        "java": "public int minCut(String s) {\n    int n = s.length();\n    int[] cuts = new int[n];\n    for (int i = 0; i < n; i++) cuts[i] = i;\n    for (int i = 0; i < n; i++) {\n        expand(s, i, i, cuts);\n        expand(s, i, i + 1, cuts);\n    }\n    return cuts[n - 1];\n}\nprivate void expand(String s, int l, int r, int[] cuts) {\n    while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {\n        int newCut = (l == 0) ? 0 : cuts[l - 1] + 1;\n        cuts[r] = Math.min(cuts[r], newCut);\n        l--; r++;\n    }\n}",
        "python": "def min_cut(s: str) -> int:\n    n = len(s)\n    cuts = list(range(n))\n    def expand(l, r):\n        while l >= 0 and r < n and s[l] == s[r]:\n            new_cut = 0 if l == 0 else cuts[l - 1] + 1\n            cuts[r] = min(cuts[r], new_cut)\n            l -= 1; r += 1\n    for i in range(n):\n        expand(i, i)\n        expand(i, i + 1)\n    return cuts[-1]",
        "complexity": "Time O(n^2), Space O(n).",
        "edge": "Entire string is already a palindrome (0 cuts)."
      },
      {
        "diff": "H",
        "title": "Burst Balloons",
        "url": "https://leetcode.com/problems/burst-balloons/",
        "problem": "Find maximum coins collected by bursting balloons strategically.",
        "approach": "Interval DP: consider which balloon is burst LAST in interval [i, j].",
        "java": "public int maxCoins(int[] nums) {\n    int[] val = new int[nums.length + 2];\n    val[0] = val[val.length - 1] = 1;\n    for (int i = 0; i < nums.length; i++) val[i + 1] = nums[i];\n    int n = val.length;\n    int[][] dp = new int[n][n];\n    for (int len = 2; len < n; len++) {\n        for (int left = 0; left < n - len; left++) {\n            int right = left + len;\n            for (int i = left + 1; i < right; i++) {\n                dp[left][right] = Math.max(dp[left][right],\n                    val[left] * val[i] * val[right] + dp[left][i] + dp[i][right]);\n            }\n        }\n    }\n    return dp[0][n - 1];\n}",
        "python": "def max_coins(nums):\n    val = [1] + nums + [1]\n    n = len(val)\n    dp = [[0] * n for _ in range(n)]\n    for length in range(2, n):\n        for left in range(n - length):\n            right = left + length\n            for i in range(left + 1, right):\n                dp[left][right] = max(dp[left][right],\n                    val[left] * val[i] * val[right] + dp[left][i] + dp[i][right])\n    return dp[0][n-1]",
        "complexity": "Time O(n^3), Space O(n^2).",
        "edge": "Single balloon."
      },
      {
        "diff": "H",
        "title": "Wildcard Matching",
        "url": "https://leetcode.com/problems/wildcard-matching/",
        "problem": "Implement wildcard pattern matching with '?' and '*'.",
        "approach": "Greedy 2-pointer approach tracking last star index and matched position.",
        "java": "public boolean isMatch(String s, String p) {\n    int sIdx = 0, pIdx = 0, match = 0, starIdx = -1;\n    while (sIdx < s.length()) {\n        if (pIdx < p.length() && (p.charAt(pIdx) == '?' || p.charAt(pIdx) == s.charAt(sIdx))) {\n            sIdx++; pIdx++;\n        } else if (pIdx < p.length() && p.charAt(pIdx) == '*') {\n            starIdx = pIdx; match = sIdx; pIdx++;\n        } else if (starIdx != -1) {\n            pIdx = starIdx + 1; match++; sIdx = match;\n        } else return false;\n    }\n    while (pIdx < p.length() && p.charAt(pIdx) == '*') pIdx++;\n    return pIdx == p.length();\n}",
        "python": "def is_match(s: str, p: str) -> bool:\n    s_idx = p_idx = match = 0\n    star_idx = -1\n    while s_idx < len(s):\n        if p_idx < len(p) and (p[p_idx] in ('?', s[s_idx])):\n            s_idx += 1; p_idx += 1\n        elif p_idx < len(p) and p[p_idx] == '*':\n            star_idx = p_idx; match = s_idx; p_idx += 1\n        elif star_idx != -1:\n            p_idx = star_idx + 1; match += 1; s_idx = match\n        else: return False\n    return all(c == '*' for c in p[p_idx:])",
        "complexity": "Time O(S * P) worst case, O(S) average, Space O(1).",
        "edge": "Pattern composed entirely of '*'."
      }
    ]
  },
  {
    "id": 11,
    "name": "Greedy",
    "solved": true,
    "problems": [
      {
        "diff": "E",
        "title": "Non-overlapping Intervals",
        "url": "https://leetcode.com/problems/non-overlapping-intervals/",
        "problem": "Find minimum intervals to remove to make remaining intervals non-overlapping.",
        "approach": "Greedy sort by end time. Keep track of previous end time.",
        "java": "public int eraseOverlapIntervals(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));\n    int removals = 0, prevEnd = intervals[0][1];\n    for (int i = 1; i < intervals.length; i++) {\n        if (intervals[i][0] < prevEnd) removals++;\n        else prevEnd = intervals[i][1];\n    }\n    return removals;\n}",
        "python": "def erase_overlap_intervals(intervals):\n    intervals.sort(key=lambda x: x[1])\n    removals = 0\n    prev_end = intervals[0][1]\n    for start, end in intervals[1:]:\n        if start < prev_end: removals += 1\n        else: prev_end = end\n    return removals",
        "complexity": "Time O(n log n), Space O(1).",
        "edge": "Intervals touching at endpoint (e.g. [1,2] and [2,3] do not overlap)."
      },
      {
        "diff": "E",
        "title": "Jump Game II",
        "url": "https://leetcode.com/problems/jump-game-ii/",
        "problem": "Find minimum jumps required to reach the last index.",
        "approach": "Greedy BFS: track current jump boundary and max reachable index within boundary.",
        "java": "public int jump(int[] nums) {\n    int jumps = 0, currEnd = 0, maxReach = 0;\n    for (int i = 0; i < nums.length - 1; i++) {\n        maxReach = Math.max(maxReach, i + nums[i]);\n        if (i == currEnd) {\n            jumps++;\n            currEnd = maxReach;\n        }\n    }\n    return jumps;\n}",
        "python": "def jump(nums):\n    jumps = curr_end = max_reach = 0\n    for i in range(len(nums) - 1):\n        max_reach = max(max_reach, i + nums[i])\n        if i == curr_end:\n            jumps += 1\n            curr_end = max_reach\n    return jumps",
        "complexity": "Time O(n), Space O(1).",
        "edge": "Single element array (0 jumps required)."
      },
      {
        "diff": "M",
        "title": "Gas Station",
        "url": "https://leetcode.com/problems/gas-station/",
        "problem": "Find starting gas station index to travel circuit clockwise once.",
        "approach": "If total gas < total cost, return -1. Otherwise, reset start index whenever tank drops below 0.",
        "java": "public int canCompleteCircuit(int[] gas, int[] cost) {\n    int total = 0, tank = 0, start = 0;\n    for (int i = 0; i < gas.length; i++) {\n        int diff = gas[i] - cost[i];\n        total += diff; tank += diff;\n        if (tank < 0) { start = i + 1; tank = 0; }\n    }\n    return total >= 0 ? start : -1;\n}",
        "python": "def can_complete_circuit(gas, cost):\n    if sum(gas) < sum(cost): return -1\n    tank = start = 0\n    for i in range(len(gas)):\n        tank += gas[i] - cost[i]\n        if tank < 0:\n            start = i + 1\n            tank = 0\n    return start",
        "complexity": "Time O(n), Space O(1).",
        "edge": "Circuit starting at last index."
      },
      {
        "diff": "M",
        "title": "Task Scheduler",
        "url": "https://leetcode.com/problems/task-scheduler/",
        "problem": "Find minimum CPU intervals needed to complete tasks given cooldown n.",
        "approach": "Math/Greedy formula based on max frequency task count.",
        "java": "public int leastInterval(char[] tasks, int n) {\n    int[] freq = new int[26];\n    for (char c : tasks) freq[c - 'A']++;\n    Arrays.sort(freq);\n    int maxFreq = freq[25];\n    int idleSlots = (maxFreq - 1) * n;\n    for (int i = 24; i >= 0 && freq[i] > 0; i--) {\n        idleSlots -= Math.min(maxFreq - 1, freq[i]);\n    }\n    return tasks.length + Math.max(0, idleSlots);\n}",
        "python": "from collections import Counter\n\ndef least_interval(tasks, n):\n    counts = Counter(tasks)\n    max_freq = max(counts.values())\n    max_count = sum(1 for v in counts.values() if v == max_freq)\n    return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)",
        "complexity": "Time O(N), Space O(1).",
        "edge": "n = 0 (no cooldown required)."
      },
      {
        "diff": "M",
        "title": "Minimum Number of Arrows to Burst Balloons",
        "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
        "problem": "Find minimum arrows needed to burst all balloons.",
        "approach": "Greedy sort by end coordinate; shoot arrow at balloon's end coordinate.",
        "java": "public int findMinArrowShots(int[][] points) {\n    Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));\n    int arrows = 1, arrowPos = points[0][1];\n    for (int i = 1; i < points.length; i++) {\n        if (points[i][0] > arrowPos) {\n            arrows++;\n            arrowPos = points[i][1];\n        }\n    }\n    return arrows;\n}",
        "python": "def find_min_arrow_shots(points):\n    points.sort(key=lambda x: x[1])\n    arrows = 1\n    pos = points[0][1]\n    for start, end in points[1:]:\n        if start > pos:\n            arrows += 1\n            pos = end\n    return arrows",
        "complexity": "Time O(n log n), Space O(1).",
        "edge": "Integer overflow on sorting coordinates (use Integer.compare)."
      },
      {
        "diff": "H",
        "title": "Course Schedule III",
        "url": "https://leetcode.com/problems/course-schedule-iii/",
        "problem": "Find maximum courses you can take given duration & deadline.",
        "approach": "Greedy sort by deadline + Max-Heap for replacing long duration courses.",
        "java": "public int scheduleCourse(int[][] courses) {\n    Arrays.sort(courses, (a, b) -> a[1] - b[1]);\n    PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);\n    int time = 0;\n    for (int[] c : courses) {\n        if (time + c[0] <= c[1]) {\n            time += c[0];\n            pq.add(c[0]);\n        } else if (!pq.isEmpty() && pq.peek() > c[0]) {\n            time += c[0] - pq.poll();\n            pq.add(c[0]);\n        }\n    }\n    return pq.size();\n}",
        "python": "import heapq\n\ndef schedule_course(courses):\n    courses.sort(key=lambda x: x[1])\n    heap = []\n    time = 0\n    for dur, end in courses:\n        if time + dur <= end:\n            time += dur\n            heapq.heappush(heap, -dur)\n        elif heap and -heap[0] > dur:\n            time += dur + heapq.heappop(heap)\n            heapq.heappush(heap, -dur)\n    return len(heap)",
        "complexity": "Time O(n log n), Space O(n).",
        "edge": "Duration exceeds deadline."
      },
      {
        "diff": "H",
        "title": "Candy",
        "url": "https://leetcode.com/problems/candy/",
        "problem": "Distribute minimum candies to children satisfying rating constraints.",
        "approach": "Two passes: left-to-right pass then right-to-left pass.",
        "java": "public int candy(int[] ratings) {\n    int n = ratings.length;\n    int[] candies = new int[n];\n    Arrays.fill(candies, 1);\n    for (int i = 1; i < n; i++) {\n        if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;\n    }\n    for (int i = n - 2; i >= 0; i--) {\n        if (ratings[i] > ratings[i + 1]) candies[i] = Math.max(candies[i], candies[i + 1] + 1);\n    }\n    int sum = 0; for (int c : candies) sum += c;\n    return sum;\n}",
        "python": "def candy(ratings):\n    n = len(ratings)\n    candies = [1] * n\n    for i in range(1, n):\n        if ratings[i] > ratings[i - 1]: candies[i] = candies[i - 1] + 1\n    for i in range(n - 2, -1, -1):\n        if ratings[i] > ratings[i + 1]: candies[i] = max(candies[i], candies[i + 1] + 1)\n    return sum(candies)",
        "complexity": "Time O(n), Space O(n).",
        "edge": "Equal ratings."
      }
    ]
  },
  {
    "id": 12,
    "name": "Backtracking",
    "solved": true,
    "problems": [
      {
        "diff": "E",
        "title": "Permutations / Subsets",
        "url": "https://leetcode.com/problems/subsets/",
        "problem": "Return all possible subsets (the power set) of unique elements.",
        "approach": "Backtracking DFS: decide whether to include element at current index.",
        "java": "public List<List<Integer>> subsets(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), nums, 0);\n    return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> curr, int[] nums, int start) {\n    res.add(new ArrayList<>(curr));\n    for (int i = start; i < nums.length; i++) {\n        curr.add(nums[i]);\n        backtrack(res, curr, nums, i + 1);\n        curr.remove(curr.size() - 1);\n    }\n}",
        "python": "def subsets(nums):\n    res = []\n    def backtrack(start, curr):\n        res.append(list(curr))\n        for i in range(start, len(nums)):\n            curr.append(nums[i])\n            backtrack(i + 1, curr)\n            curr.pop()\n    backtrack(0, [])\n    return res",
        "complexity": "Time O(2^n), Space O(n).",
        "edge": "Empty set."
      },
      {
        "diff": "M",
        "title": "Combination Sum",
        "url": "https://leetcode.com/problems/combination-sum/",
        "problem": "Find unique combinations summing to target (elements reusable).",
        "approach": "Backtracking passing start index to allow element reuse.",
        "java": "public List<List<Integer>> combinationSum(int[] candidates, int target) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), candidates, target, 0);\n    return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> curr, int[] candidates, int remain, int start) {\n    if (remain < 0) return;\n    if (remain == 0) { res.add(new ArrayList<>(curr)); return; }\n    for (int i = start; i < candidates.length; i++) {\n        curr.add(candidates[i]);\n        backtrack(res, curr, candidates, remain - candidates[i], i);\n        curr.remove(curr.size() - 1);\n    }\n}",
        "python": "def combination_sum(candidates, target):\n    res = []\n    def backtrack(remain, curr, start):\n        if remain == 0: res.append(list(curr)); return\n        if remain < 0: return\n        for i in range(start, len(candidates)):\n            curr.append(candidates[i])\n            backtrack(remain - candidates[i], curr, i)\n            curr.pop()\n    backtrack(target, [], 0)\n    return res",
        "complexity": "Time O(2^target), Space O(target).",
        "edge": "Target smaller than smallest candidate."
      },
      {
        "diff": "M",
        "title": "N-Queens",
        "url": "https://leetcode.com/problems/n-queens/",
        "problem": "Place N queens on N x N board such that no two queens attack each other.",
        "approach": "Backtrack row by row tracking occupied columns and diagonals.",
        "java": "public List<List<String>> solveNQueens(int n) {\n    List<List<String>> res = new ArrayList<>();\n    char[][] board = new char[n][n];\n    for (char[] row : board) Arrays.fill(row, '.');\n    backtrack(res, board, 0, new boolean[n], new boolean[2 * n], new boolean[2 * n]);\n    return res;\n}\nprivate void backtrack(List<List<String>> res, char[][] b, int r, boolean[] cols, boolean[] d1, boolean[] d2) {\n    int n = b.length;\n    if (r == n) {\n        List<String> list = new ArrayList<>();\n        for (char[] row : b) list.add(new String(row));\n        res.add(list);\n        return;\n    }\n    for (int c = 0; c < n; c++) {\n        if (!cols[c] && !d1[r + c] && !d2[r - c + n]) {\n            b[r][c] = 'Q'; cols[c] = d1[r + c] = d2[r - c + n] = true;\n            backtrack(res, b, r + 1, cols, d1, d2);\n            b[r][c] = '.'; cols[c] = d1[r + c] = d2[r - c + n] = false;\n        }\n    }\n}",
        "python": "def solve_n_queens(n):\n    res = []\n    cols, d1, d2 = set(), set(), set()\n    board = [[\".\"] * n for _ in range(n)]\n    def backtrack(r):\n        if r == n:\n            res.append([\"\".join(row) for row in board])\n            return\n        for c in range(n):\n            if c not in cols and (r + c) not in d1 and (r - c) not in d2:\n                cols.add(c); d1.add(r + c); d2.add(r - c)\n                board[r][c] = \"Q\"\n                backtrack(r + 1)\n                cols.remove(c); d1.remove(r + c); d2.remove(r - c)\n                board[r][c] = \".\"\n    backtrack(0)\n    return res",
        "complexity": "Time O(N!), Space O(N^2).",
        "edge": "N = 1."
      },
      {
        "diff": "M",
        "title": "Sudoku Solver",
        "url": "https://leetcode.com/problems/sudoku-solver/",
        "problem": "Solve a Sudoku puzzle by filling empty cells '.'.",
        "approach": "Backtracking attempting digits '1'-'9' for empty cells.",
        "java": "public void solveSudoku(char[][] board) {\n    solve(board);\n}\nprivate boolean solve(char[][] board) {\n    for (int r = 0; r < 9; r++) {\n        for (int c = 0; c < 9; c++) {\n            if (board[r][c] == '.') {\n                for (char ch = '1'; ch <= '9'; ch++) {\n                    if (isValid(board, r, c, ch)) {\n                        board[r][c] = ch;\n                        if (solve(board)) return true;\n                        board[r][c] = '.';\n                    }\n                }\n                return false;\n            }\n        }\n    }\n    return true;\n}\nprivate boolean isValid(char[][] b, int r, int c, char ch) {\n    for (int i = 0; i < 9; i++) {\n        if (b[r][i] == ch || b[i][c] == ch || b[3 * (r / 3) + i / 3][3 * (c / 3) + i % 3] == ch) return false;\n    }\n    return true;\n}",
        "python": "def solve_sudoku(board):\n    def is_valid(r, c, ch):\n        for i in range(9):\n            if board[r][i] == ch or board[i][c] == ch or board[3*(r//3) + i//3][3*(c//3) + i%3] == ch:\n                return False\n        return True\n    def solve():\n        for r in range(9):\n            for c in range(9):\n                if board[r][c] == '.':\n                    for ch in '123456789':\n                        if is_valid(r, c, ch):\n                            board[r][c] = ch\n                            if solve(): return True\n                            board[r][c] = '.'\n                    return False\n        return True\n    solve()",
        "complexity": "Time O(9^(N^2)), Space O(1).",
        "edge": "Invalid puzzle state."
      },
      {
        "diff": "M",
        "title": "Word Search",
        "url": "https://leetcode.com/problems/word-search/",
        "problem": "Check if word exists in 2D board of characters.",
        "approach": "Grid DFS with backtracking (temporarily overwrite visited cell).",
        "java": "public boolean exist(char[][] board, String word) {\n    for (int r = 0; r < board.length; r++) {\n        for (int c = 0; c < board[0].length; c++) {\n            if (dfs(board, word, r, c, 0)) return true;\n        }\n    }\n    return false;\n}\nprivate boolean dfs(char[][] board, String word, int r, int c, int i) {\n    if (i == word.length()) return true;\n    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] != word.charAt(i)) return false;\n    char temp = board[r][c];\n    board[r][c] = '#';\n    boolean found = dfs(board, word, r + 1, c, i + 1) || dfs(board, word, r - 1, c, i + 1) ||\n                    dfs(board, word, r, c + 1, i + 1) || dfs(board, word, r, c - 1, i + 1);\n    board[r][c] = temp;\n    return found;\n}",
        "python": "def exist(board, word):\n    rows, cols = len(board), len(board[0])\n    def dfs(r, c, i):\n        if i == len(word): return True\n        if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[i]: return False\n        temp = board[r][c]\n        board[r][c] = '#'\n        res = dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or dfs(r, c+1, i+1) or dfs(r, c-1, i+1)\n        board[r][c] = temp\n        return res\n    for r in range(rows):\n        for c in range(cols):\n            if dfs(r, c, 0): return True\n    return False",
        "complexity": "Time O(R * C * 4^L), Space O(L).",
        "edge": "Word length exceeds board total cell count."
      },
      {
        "diff": "H",
        "title": "Palindrome Partitioning",
        "url": "https://leetcode.com/problems/palindrome-partitioning/",
        "problem": "Partition string s such that every substring is a palindrome.",
        "approach": "Backtrack through indices, checking palindrome property before recursing.",
        "java": "public List<List<String>> partition(String s) {\n    List<List<String>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), s, 0);\n    return res;\n}\nprivate void backtrack(List<List<String>> res, List<Integer> curr, String s, int start) {\n    if (start == s.length()) { res.add(new ArrayList<>(curr)); return; }\n    for (int i = start; i < s.length(); i++) {\n        if (isPal(s, start, i)) {\n            curr.add(s.substring(start, i + 1));\n            backtrack(res, curr, s, i + 1);\n            curr.remove(curr.size() - 1);\n        }\n    }\n}\nprivate boolean isPal(String s, int l, int r) {\n    while (l < r) if (s.charAt(l++) != s.charAt(r--)) return false;\n    return true;\n}",
        "python": "def partition(s):\n    res = []\n    def backtrack(start, curr):\n        if start == len(s): res.append(list(curr)); return\n        for end in range(start + 1, len(s) + 1):\n            sub = s[start:end]\n            if sub == sub[::-1]:\n                curr.append(sub)\n                backtrack(end, curr)\n                curr.pop()\n    backtrack(0, [])\n    return res",
        "complexity": "Time O(N * 2^N), Space O(N).",
        "edge": "Single character string."
      },
      {
        "diff": "H",
        "title": "Restore IP Addresses",
        "url": "https://leetcode.com/problems/restore-ip-addresses/",
        "problem": "Form all valid IP addresses from digit string s.",
        "approach": "Backtracking forming 4 segments (each between 0 and 255 with no leading zeros).",
        "java": "public List<String> restoreIpAddresses(String s) {\n    List<String> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), s, 0);\n    return res;\n}\nprivate void backtrack(List<String> res, List<String> curr, String s, int start) {\n    if (curr.size() == 4) {\n        if (start == s.length()) res.add(String.join(\".\", curr));\n        return;\n    }\n    for (int len = 1; len <= 3 && start + len <= s.length(); len++) {\n        String part = s.substring(start, start + len);\n        if ((part.startsWith(\"0\") && len > 1) || Integer.parseInt(part) > 255) continue;\n        curr.add(part);\n        backtrack(res, curr, s, start + len);\n        curr.remove(curr.size() - 1);\n    }\n}",
        "python": "def restore_ip_addresses(s):\n    res = []\n    def backtrack(start, curr):\n        if len(curr) == 4:\n            if start == len(s): res.append(\".\".join(curr))\n            return\n        for length in range(1, 4):\n            if start + length <= len(s):\n                part = s[start:start+length]\n                if (part.startswith('0') and len(part) > 1) or int(part) > 255: continue\n                curr.append(part)\n                backtrack(start + length, curr)\n                curr.pop()\n    backtrack(0, [])\n    return res",
        "complexity": "Time O(3^4) = O(1), Space O(1).",
        "edge": "String length < 4 or > 12."
      }
    ]
  },
  {
    "id": 13,
    "name": "Advanced Data Structures",
    "solved": true,
    "problems": [
      {
        "diff": "M",
        "title": "Word Search II (Trie)",
        "url": "https://leetcode.com/problems/word-search-ii/",
        "problem": "Find all words from dictionary present on 2D board.",
        "approach": "Build Trie from word list + Grid DFS traversal matching Trie nodes.",
        "java": "class TrieNode {\n    TrieNode[] children = new TrieNode[26];\n    String word = null;\n}\npublic List<String> findWords(char[][] board, String[] words) {\n    TrieNode root = new TrieNode();\n    for (String w : words) {\n        TrieNode curr = root;\n        for (char c : w.toCharArray()) {\n            if (curr.children[c - 'a'] == null) curr.children[c - 'a'] = new TrieNode();\n            curr = curr.children[c - 'a'];\n        }\n        curr.word = w;\n    }\n    List<String> res = new ArrayList<>();\n    for (int r = 0; r < board.length; r++) {\n        for (int c = 0; c < board[0].length; c++) {\n            dfs(board, r, c, root, res);\n        }\n    }\n    return res;\n}\nprivate void dfs(char[][] b, int r, int c, TrieNode node, List<String> res) {\n    if (r < 0 || c < 0 || r >= b.length || c >= b[0].length || b[r][c] == '#') return;\n    char ch = b[r][c];\n    if (node.children[ch - 'a'] == null) return;\n    node = node.children[ch - 'a'];\n    if (node.word != null) { res.add(node.word); node.word = null; }\n    b[r][c] = '#';\n    dfs(b, r+1, c, node, res); dfs(b, r-1, c, node, res);\n    dfs(b, r, c+1, node, res); dfs(b, r, c-1, node, res);\n    b[r][c] = ch;\n}",
        "python": "class TrieNode:\n    def __init__(self): self.children = {}; self.word = None\n\ndef find_words(board, words):\n    root = TrieNode()\n    for w in words:\n        curr = root\n        for c in w:\n            curr = curr.children.setdefault(c, TrieNode())\n        curr.word = w\n    rows, cols = len(board), len(board[0])\n    res = []\n    def dfs(r, c, parent):\n        ch = board[r][c]\n        curr = parent.children[ch]\n        if curr.word:\n            res.append(curr.word); curr.word = None\n        board[r][c] = '#'\n        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] in curr.children:\n                dfs(nr, nc, curr)\n        board[r][c] = ch\n    for r in range(rows):\n        for c in range(cols):\n            if board[r][c] in root.children: dfs(r, c, root)\n    return res",
        "complexity": "Time O(R * C * 4^L), Space O(Sum of Word Lengths).",
        "edge": "Duplicate words in board; prefix shared across dictionary."
      },
      {
        "diff": "M",
        "title": "Number of Provinces (Union-Find)",
        "url": "https://leetcode.com/problems/number-of-provinces/",
        "problem": "Find number of connected provinces in adjacency matrix.",
        "approach": "Union-Find with path compression.",
        "java": "public int findCircleNum(int[][] isConnected) {\n    int n = isConnected.length;\n    int[] parent = new int[n];\n    for (int i = 0; i < n; i++) parent[i] = i;\n    int count = n;\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            if (isConnected[i][j] == 1) {\n                int r1 = find(parent, i), r2 = find(parent, j);\n                if (r1 != r2) { parent[r1] = r2; count--; }\n            }\n        }\n    }\n    return count;\n}\nprivate int find(int[] p, int i) {\n    if (p[i] == i) return i;\n    return p[i] = find(p, p[i]);\n}",
        "python": "def find_circle_num(is_connected):\n    n = len(is_connected)\n    parent = list(range(n))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    count = n\n    for i in range(n):\n        for j in range(i + 1, n):\n            if is_connected[i][j] == 1:\n                r1, r2 = find(i), find(j)\n                if r1 != r2:\n                    parent[r1] = r2\n                    count -= 1\n    return count",
        "complexity": "Time O(N^2 * α(N)), Space O(N).",
        "edge": "Entire matrix is 0s (n separate provinces)."
      },
      {
        "diff": "M",
        "title": "Range Sum Query - Mutable (Segment Tree / BIT)",
        "url": "https://leetcode.com/problems/range-sum-query-mutable/",
        "problem": "Update single array elements and query range sums in O(log n).",
        "approach": "Binary Indexed Tree (Fenwick Tree) / Segment Tree.",
        "java": "class NumArray {\n    int[] tree, nums;\n    int n;\n    public NumArray(int[] nums) {\n        this.nums = nums; n = nums.length;\n        tree = new int[n + 1];\n        for (int i = 0; i < n; i++) init(i + 1, nums[i]);\n    }\n    private void init(int i, int val) {\n        while (i <= n) { tree[i] += val; i += i & -i; }\n    }\n    public void update(int index, int val) {\n        int diff = val - nums[index];\n        nums[index] = val;\n        init(index + 1, diff);\n    }\n    private int prefixSum(int i) {\n        int sum = 0;\n        while (i > 0) { sum += tree[i]; i -= i & -i; }\n        return sum;\n    }\n    public int sumRange(int left, int right) {\n        return prefixSum(right + 1) - prefixSum(left);\n    }\n}",
        "python": "class NumArray:\n    def __init__(self, nums):\n        self.n = len(nums)\n        self.nums = list(nums)\n        self.tree = [0] * (self.n + 1)\n        for i, val in enumerate(nums):\n            self._add(i + 1, val)\n\n    def _add(self, i, val):\n        while i <= self.n:\n            self.tree[i] += val\n            i += i & -i\n\n    def update(self, index: int, val: int) -> None:\n        diff = val - self.nums[index]\n        self.nums[index] = val\n        self._add(index + 1, diff)\n\n    def _query(self, i):\n        s = 0\n        while i > 0:\n            s += self.tree[i]\n            i -= i & -i\n        return s\n\n    def sumRange(self, left: int, right: int) -> int:\n        return self._query(right + 1) - self._query(left)",
        "complexity": "Time O(log n) update & sumRange, Space O(n).",
        "edge": "Single element array."
      },
      {
        "diff": "H",
        "title": "All O`one Data Structure",
        "url": "https://leetcode.com/problems/all-oone-data-structure/",
        "problem": "Design data structure supporting inc(key), dec(key), getMaxKey(), getMinKey() in O(1).",
        "approach": "Doubly Linked List of Bucket nodes (storing count & set of keys) + HashMap.",
        "java": "class AllOne {\n    class Bucket {\n        int count; Set<String> keys = new HashSet<>();\n        Bucket prev, next;\n        Bucket(int c) { count = c; }\n    }\n    Bucket head = new Bucket(0), tail = new Bucket(0);\n    Map<String, Bucket> map = new HashMap<>();\n    public AllOne() { head.next = tail; tail.prev = head; }\n    public void inc(String key) {\n        if (map.containsKey(key)) {\n            Bucket b = map.get(key);\n            b.keys.remove(key);\n            Bucket nxt = b.next;\n            if (nxt == tail || nxt.count != b.count + 1) nxt = addAfter(b, new Bucket(b.count + 1));\n            nxt.keys.add(key); map.put(key, nxt);\n            if (b.keys.isEmpty()) remove(b);\n        } else {\n            Bucket first = head.next;\n            if (first == tail || first.count != 1) first = addAfter(head, new Bucket(1));\n            first.keys.add(key); map.put(key, first);\n        }\n    }\n    public void dec(String key) {\n        Bucket b = map.get(key);\n        b.keys.remove(key);\n        if (b.count == 1) map.remove(key);\n        else {\n            Bucket prv = b.prev;\n            if (prv == head || prv.count != b.count - 1) prv = addAfter(b.prev, new Bucket(b.count - 1));\n            prv.keys.add(key); map.put(key, prv);\n        }\n        if (b.keys.isEmpty()) remove(b);\n    }\n    public String getMaxKey() { return tail.prev == head ? \"\" : tail.prev.keys.iterator().next(); }\n    public String getMinKey() { return head.next == tail ? \"\" : head.next.keys.iterator().next(); }\n    private Bucket addAfter(Bucket p, Bucket n) { n.next = p.next; n.prev = p; p.next.prev = n; p.next = n; return n; }\n    private void remove(Bucket b) { b.prev.next = b.next; b.next.prev = b.prev; }\n}",
        "python": "class Bucket:\n    def __init__(self, count):\n        self.count = count; self.keys = set()\n        self.prev = self.next = None\n\nclass AllOne:\n    def __init__(self):\n        self.head, self.tail = Bucket(0), Bucket(0)\n        self.head.next = self.tail; self.tail.prev = self.head\n        self.map = {}\n\n    def inc(self, key: str) -> None:\n        if key in self.map:\n            b = self.map[key]; b.keys.remove(key)\n            nxt = b.next\n            if nxt == self.tail or nxt.count != b.count + 1:\n                nxt = self._add_after(b, Bucket(b.count + 1))\n            nxt.keys.add(key); self.map[key] = nxt\n            if not b.keys: self._remove(b)\n        else:\n            first = self.head.next\n            if first == self.tail or first.count != 1:\n                first = self._add_after(self.head, Bucket(1))\n            first.keys.add(key); self.map[key] = first\n\n    def dec(self, key: str) -> None:\n        b = self.map[key]; b.keys.remove(key)\n        if b.count == 1: del self.map[key]\n        else:\n            prv = b.prev\n            if prv == self.head or prv.count != b.count - 1:\n                prv = self._add_after(b.prev, Bucket(b.count - 1))\n            prv.keys.add(key); self.map[key] = prv\n        if not b.keys: self._remove(b)\n\n    def getMaxKey(self) -> str: return \"\" if self.tail.prev == self.head else next(iter(self.tail.prev.keys))\n    def getMinKey(self) -> str: return \"\" if self.head.next == self.tail else next(iter(self.head.next.keys))\n    def _add_after(self, p, n): n.next = p.next; n.prev = p; p.next.prev = n; p.next = n; return n\n    def _remove(self, b): b.prev.next = b.next; b.next.prev = b.prev",
        "complexity": "Time O(1), Space O(N).",
        "edge": "Empty data structure returns empty string."
      },
      {
        "diff": "H",
        "title": "Find Median from Data Stream",
        "url": "https://leetcode.com/problems/find-median-from-data-stream/",
        "problem": "Continuously compute median from a stream of numbers.",
        "approach": "Two Heaps: Max-Heap for lower half, Min-Heap for upper half.",
        "java": "class MedianFinder {\n    PriorityQueue<Integer> small = new PriorityQueue<>((a, b) -> b - a);\n    PriorityQueue<Integer> large = new PriorityQueue<>();\n\n    public void addNum(int num) {\n        small.add(num);\n        large.add(small.poll());\n        if (small.size() < large.size()) {\n            small.add(large.poll());\n        }\n    }\n    public double findMedian() {\n        return small.size() > large.size() ? small.peek() : (small.peek() + large.peek()) / 2.0;\n    }\n}",
        "python": "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = [] # Max-heap\n        self.large = [] # Min-heap\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.small, -num)\n        heapq.heappush(self.large, -heapq.heappop(self.small))\n        if len(self.small) < len(self.large):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large):\n            return -self.small[0]\n        return (-self.small[0] + self.large[0]) / 2.0",
        "complexity": "Time O(log n) addNum, O(1) findMedian, Space O(n).",
        "edge": "Odd vs Even total count of elements."
      },
      {
        "diff": "H",
        "title": "The Skyline Problem",
        "url": "https://leetcode.com/problems/the-skyline-problem/",
        "problem": "Compute skyline formed by collective 3D building outlines.",
        "approach": "Sweep-Line Algorithm: Process building x-boundaries with a Max-Heap / TreeMap.",
        "java": "public List<List<Integer>> getSkyline(int[][] buildings) {\n    List<int[]> points = new ArrayList<>();\n    for (int[] b : buildings) {\n        points.add(new int[]{b[0], -b[2]});\n        points.add(new int[]{b[1], b[2]});\n    }\n    points.sort((a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);\n    TreeMap<Integer, Integer> heights = new TreeMap<>();\n    heights.put(0, 1);\n    int prevMax = 0;\n    List<List<Integer>> res = new ArrayList<>();\n    for (int[] p : points) {\n        if (p[1] < 0) heights.put(-p[1], heights.getOrDefault(-p[1], 0) + 1);\n        else {\n            int cnt = heights.get(p[1]);\n            if (cnt == 1) heights.remove(p[1]);\n            else heights.put(p[1], cnt - 1);\n        }\n        int currMax = heights.lastKey();\n        if (prevMax != currMax) {\n            res.add(Arrays.asList(p[0], currMax));\n            prevMax = currMax;\n        }\n    }\n    return res;\n}",
        "python": "import heapq\n\ndef get_skyline(buildings):\n    events = []\n    for L, R, H in buildings:\n        events.append((L, -H, R))\n        events.append((R, 0, 0))\n    events.sort()\n    res = [[0, 0]]\n    live = [(0, float('inf'))] # (-height, right)\n    for x, negH, R in events:\n        while live[0][1] <= x:\n            heapq.heappop(live)\n        if negH < 0:\n            heapq.heappush(live, (negH, R))\n        if res[-1][1] != -live[0][0]:\n            res.append([x, -live[0][0]])\n    return res[1:]",
        "complexity": "Time O(n log n), Space O(n).",
        "edge": "Overlapping building edges; identical height buildings."
      }
    ]
  }
];

function CodeBlock({ label, code }) {
  return (
    <div className="mb-3">
      <div className="text-xs font-mono text-slate-500 mb-1 uppercase tracking-wider">{label}</div>
      <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3 overflow-x-auto text-xs leading-relaxed">
        <code className="text-slate-300 font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function ProblemCard({ p }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("java");
  const diff = DIFF_STYLES[p.diff];

  return (
    <div className="border border-slate-800 rounded-lg bg-slate-900 mb-3 overflow-hidden">
      <div className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-800 transition-colors">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 min-w-0 flex-1 text-left"
        >
          {open ? (
            <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-500 flex-shrink-0" />
          )}
          <span className="text-sm text-slate-200 truncate font-medium">{p.title}</span>
        </button>

        <div className="flex items-center gap-3 flex-shrink-0 ml-3">
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 p-1 transition-colors"
              title="Solve on LeetCode"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <span className={`text-xs px-2 py-0.5 rounded ${diff.pill}`}>
            {diff.label}
          </span>
        </div>
      </div>

      {open && (
        <div className="px-4 pb-4 pt-1 border-t border-slate-800">
          {p.problem ? (
            <>
              <p className="text-sm text-slate-400 mb-2">
                <span className="text-slate-300 font-medium">Problem: </span>
                {p.problem}
              </p>
              <p className="text-sm text-slate-400 mb-3">
                <span className="text-slate-300 font-medium">Approach: </span>
                {p.approach}
              </p>

              <div className="flex items-center justify-between mb-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => setLang("java")}
                    className={`text-xs px-3 py-1 rounded border ${
                      lang === "java"
                        ? "bg-teal-950 text-teal-400 border-teal-800"
                        : "bg-slate-900 text-slate-500 border-slate-800"
                    }`}
                  >
                    Java
                  </button>
                  <button
                    onClick={() => setLang("python")}
                    className={`text-xs px-3 py-1 rounded border ${
                      lang === "python"
                        ? "bg-teal-950 text-teal-400 border-teal-800"
                        : "bg-slate-900 text-slate-500 border-slate-800"
                    }`}
                  >
                    Python
                  </button>
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-teal-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Solve on LeetCode</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <CodeBlock label={lang} code={lang === "java" ? p.java : p.python} />

              <p className="text-sm text-slate-400 mb-1">
                <span className="text-slate-300 font-medium">Complexity: </span>
                {p.complexity}
              </p>
              <p className="text-sm text-slate-400">
                <span className="text-slate-300 font-medium">Edge cases: </span>
                {p.edge}
              </p>
            </>
          ) : (
            <div className="flex items-center justify-between py-2">
              <p className="text-sm text-slate-500 italic">
                Full solution not loaded in this browser yet — ask for the next part to fill this in.
              </p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open on LeetCode</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function HackWithInfyPracticeBrowser() {
  const [activeId, setActiveId] = useState(1);
  const active = TOPICS.find((t) => t.id === activeId);
  const solvedCount = TOPICS.filter((t) => t.solved).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col md:flex-row">
      <aside className="md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-800 p-4">
        <div className="flex items-center gap-2 mb-1">
          <Code2 className="w-5 h-5 text-teal-400" />
          <h1 className="text-sm font-semibold text-slate-100">HackWithInfy 2026</h1>
        </div>
        <p className="text-xs text-slate-500 mb-4">Topic-wise practice bank</p>

        <div className="flex items-center gap-2 mb-4 text-xs text-slate-500">
          <ListChecks className="w-4 h-4" />
          <span>
            {solvedCount}/{TOPICS.length} topics with full solutions
          </span>
        </div>

        <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`flex items-center justify-between gap-2 text-left px-3 py-2 rounded-lg text-sm whitespace-nowrap md:whitespace-normal ${
                activeId === t.id
                  ? "bg-teal-950 text-teal-300 border border-teal-800"
                  : "text-slate-400 hover:bg-slate-900 border border-transparent"
              }`}
            >
              <span>
                {t.id}. {t.name}
              </span>
              {t.solved && <Sparkles className="w-3 h-3 text-teal-500 flex-shrink-0" />}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-6 max-w-3xl">
        <div className="flex items-baseline justify-between mb-1">
          <h2 className="text-lg font-semibold text-slate-100">
            {active.id}. {active.name}
          </h2>
          <span className="text-xs text-slate-500">{active.problems.length} problems</span>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          Ordered Easy to Hard — mirrors the real 3-question round difficulty curve.
        </p>

        {active.problems.map((p, i) => (
          <ProblemCard key={i} p={p} />
        ))}
      </main>
    </div>
  );
}