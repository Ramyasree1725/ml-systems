@echo off
echo [*] Cleaning any .env and .env.example files from workspace...
if exist ".env.example" del /f /q ".env.example"
if exist ".env" del /f /q ".env"
if exist "ml-system-hub\.env.example" del /f /q "ml-system-hub\.env.example"
if exist "ml-system-hub\.env" del /f /q "ml-system-hub\.env"
echo [✓] Clean complete! Zero .env files remaining.
pause
