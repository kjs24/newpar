import time

filename = input("파일이름: ")
hash_value = input("해시값: ") 
i=0
start_time = time.time()  # 시작 시간 기록
check=0
with open(filename, "r") as file:
    for line in file:
        temp_pass, temp_hash = line.strip().split(":")
        i=i+1
        if temp_hash == hash_value:
            print(f"{hash_value}에 대응하는 비밀번호 {temp_pass}")
            check=1
            break

        if(i%1000 == 0):
            print(f"{temp_pass} {temp_hash}")



end_time = time.time()  # 종료 시간 기록 
execution_time = end_time - start_time
if(check==1):
    print("fail bruteforce\n")
print(f"run time: {execution_time:.5f}sec")
