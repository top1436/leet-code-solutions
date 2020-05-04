import java.util.HashSet;
import java.util.Set;

class Solution {
  public int lengthOfLongestSubstring(String s) {
    int max = 0, front = 0, rear = 0;
    int size = s.length();
    Set<Character> set = new HashSet<>(); // 중복 체크
    while (front < size && rear < size) {
      if (!set.contains(s.charAt(front))) {
        set.add(s.charAt(front++));
        max = Math.max(max, set.size());
        continue;
      }

      // 중복
      set.remove(s.charAt(rear++));
    }
    return max;
  }
}

