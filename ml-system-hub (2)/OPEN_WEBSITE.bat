@echo off
title ML System Hub - Launcher

:: Auto-remove any .env and .env.example files
if exist ".env.example" del /f /q ".env.example"
if exist ".env" del /f /q ".env"
if exist "ml-system-hub\.env.example" del /f /q "ml-system-hub\.env.example"
if exist "ml-system-hub\.env" del /f /q "ml-system-hub\.env"

echo Launching ML System Hub...
start http://localhost:3001
node server.js
