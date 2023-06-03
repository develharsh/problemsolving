git status
sleep 3
git add -A
git status
sleep 3
git commit -m "$1"
sleep 3
git push origin golang
sleep 1
git checkout master
sleep 1
git merge golang
sleep 1
git push origin master
sleep 1
git checkout golang