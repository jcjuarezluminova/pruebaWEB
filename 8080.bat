@Echo off

:home
cls

c:
cd\
cd \Projects\luminova-app
@npm run serve -- --port 3000
goto End