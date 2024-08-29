# Dockerfile

# Node.js 14 이미지를 베이스 이미지로 사용
FROM node:14

# 애플리케이션 디렉터리 생성
WORKDIR /usr/src/app

# 애플리케이션 파일 복사
COPY app.js .

# Node.js 애플리케이션 실행
CMD ["node", "app.js"]

# 컨테이너가 노출할 포트
EXPOSE 3000