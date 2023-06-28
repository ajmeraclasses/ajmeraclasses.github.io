@echo "Publishing Website"
@echo off
call ng build --base-href ./
cd docs
copy index.html 404.html
cd ..
call git add .
call git commit -m %1
call git push