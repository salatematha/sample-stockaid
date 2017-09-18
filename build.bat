ng build 
del /s ..\salatematha.github.io\* /q
copy dist\* ..\salatematha.github.io\
git add *
git commit -m "modified source"
git push