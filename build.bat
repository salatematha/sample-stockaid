ng build 
del /s ..\salatematha.github.io\* /q
dist\* ..\salatematha.github.io\
git add *
git commit -m "modified source"
git push