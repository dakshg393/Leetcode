class Solution {
public:
    bool isPalindrome(string s) {
        int length = s.length();
        int start = 0;
        int end= length-1;

        while(start< end){

            while(start<end && !isalnum(s[end])) end--;
            while(start<end  && !isalnum(s[start])) start++;
            if(tolower(s[start]) != tolower(s[end])){
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
};