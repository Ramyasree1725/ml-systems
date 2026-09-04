@echo off
title ML System Hub - Web Server & Localhost
echo ========================================================
echo        STARTING ML SYSTEM HUB LOCALHOST SERVER
echo ========================================================
echo.
echo Launching server on http://localhost:3001 ...
echo.

start "" http://localhost:3001

node src\server.js

pause
