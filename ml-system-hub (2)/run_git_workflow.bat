@echo off
setlocal
echo ======================================================
echo    ML System Hub - Git Clean & GitHub Automation
echo ======================================================
echo.

:: 1. Remove from git cache
git rm --cached -r -f "*.env*" 2>nul
git rm --cached -f .env.example 2>nul
git rm --cached -f ml-system-hub\.env.example 2>nul
git rm --cached -f .env 2>nul
git rm --cached -f ml-system-hub\.env 2>nul

:: 2. Delete local files
if exist ".env.example" del /f /q ".env.example"
if exist ".env" del /f /q ".env"
if exist "ml-system-hub\.env.example" del /f /q "ml-system-hub\.env.example"
if exist "ml-system-hub\.env" del /f /q "ml-system-hub\.env"

:: 3. Run PowerShell automation
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0push_and_merge.ps1"

echo.
pause
