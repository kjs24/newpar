function removeSubstring(input, startIndex, length) {
  // removeSubstring 함수의 내용은 이전과 동일

  const before = input.substring(0, startIndex);
  const after = input.substring(startIndex + length);

  return before + after;
}

var i = 0;
var j = 0;
var k = 0;
var str = "2313000";
var password = "2313";
var temp = str;

// 실행 시간 측정 시작
var startTime = performance.now();

for (i = 0; i < str.length; i++) {
  temp = removeSubstring(temp, i, 1);
  console.log(temp);
  console.log(i);
  
  if (password === temp) {
    document.getElementsByName('id')[0].value = "aaa";
    document.getElementsByName('password')[0].value = temp;
    document.querySelector('form').submit();
  }
  
  temp = str;

  for (j = 0; j < str.length; j++) {
    if (i !== j) {
      temp = removeSubstring(temp, i, 1);
      
      if (i < j) {
        temp = removeSubstring(temp, j - 1, 1);
      } else {
        temp = removeSubstring(temp, j, 1);
      }
      
      console.log(temp);
      console.log(i, j);
      
      if (password === temp) {
        document.getElementsByName('id')[0].value = "aaa";
        document.getElementsByName('password')[0].value = temp;
        document.querySelector('form').submit();
      }
      
      temp = str;

      for (k = 0; k < str.length; k++) {
        if (i !== j && j !== k) {
          temp = removeSubstring(temp, i, 1);
          
          if (i < j) {
            temp = removeSubstring(temp, j - 1, 1);
          } else {
            temp = removeSubstring(temp, j, 1);
          }
          
          if (k < i && k < j) {
            temp = removeSubstring(temp, k, 1);
          } else if (k > j && k > i) {
            temp = removeSubstring(temp, k - 2, 1);
          } else {
            temp = removeSubstring(temp, k - 1, 1);
          }
          
          console.log(temp);
          console.log(i, j, k);
          
          if (password === temp) {
            document.getElementsByName('id')[0].value = "aaa";
            document.getElementsByName('password')[0].value = temp;
            document.querySelector('form').submit();
          }
          
          temp = str;
        }
      }
    }
  }
}

// 실행 시간 측정 종료
var endTime = performance.now();

// 실행 시간 계산
var executionTime = endTime - startTime;

console.log("Execution Time: " + executionTime + " milliseconds");
접기
230716_022346.txt
3KB
김준수 — 2023.07.16. 오전 5:34
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdlib.h>
확장
brute2.c
2KB
김하진 — 2023.07.16. 오전 6:14
filename = input("파일이름: ")
hash_value = input("해시값: ")

with open(filename, "r") as file:
    for line in file:
        temp_pass, temp_hash = line.strip().split(":")
        
        if temp_hash == hash_value:
            print(f"{hash_value}에 대응하는 비밀번호 {temp_pass}")
            break
        
        print(f"{temp_pass} {temp_hash}")
MEE6
봇
 — 2023.07.16. 오전 6:14
GG @김하진, you just advanced to level 3!
김하진 — 2023.07.16. 오전 6:28
import time

filename = input("파일이름: ")
hash_value = input("해시값: ")

start_time = time.time()  # 시작 시간 기록

with open(filename, "r") as file:
    for line in file:
        temp_pass, temp_hash = line.strip().split(":")
        
        if temp_hash == hash_value:
            print(f"{hash_value}에 대응하는 비밀번호 {temp_pass}")
            break
        
        print(f"{temp_pass} {temp_hash}")

end_time = time.time()  # 종료 시간 기록
execution_time = end_time - start_time

print(f"실행 시간: {execution_time:.5f}초")
