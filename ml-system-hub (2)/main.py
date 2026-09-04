"""
ML System Hub — Python Application & CLI Entry Point
Production Machine Learning Platform
"""
import os
import sys
import subprocess

# Auto-clean any .env files
base_dir = os.path.dirname(__file__)
for target in [".env.example", ".env", "ml-system-hub/.env.example", "ml-system-hub/.env"]:
    p = os.path.join(base_dir, target)
    if os.path.exists(p):
        try:
            os.remove(p)
        except Exception:
            pass

def main():
    print("========================================================")
    print("⚡ ML System Hub - Machine Learning Platform & Gateway")
    print("========================================================")
    
    server_script = os.path.join(base_dir, "server.js")
    if os.path.exists(server_script):
        print("[*] Launching Node.js backend server...")
        try:
            subprocess.run(["node", server_script])
        except KeyboardInterrupt:
            print("\n[*] Server shutdown.")
    else:
        print("[!] server.js not found.")

if __name__ == "__main__":
    main()
