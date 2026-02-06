#!/bin/bash
# GitHub 사용자명: joo1367-rgb

USERNAME="joo1367-rgb"
git remote set-url origin "https://github.com/${USERNAME}/Jautja_Goo.git"
echo "Remote를 https://github.com/${USERNAME}/Jautja_Goo.git 로 설정했습니다."
npm run deploy
echo ""
echo "배포 완료!"
echo "사이트 URL: https://${USERNAME}.github.io/Jautja_Goo/"
