# ⚡ ML System Hub — Machine Learning Platform & Web Application

A full-stack Machine Learning Systems & Operations platform with interactive Frontend Dashboard and high-performance Backend REST APIs.

---

## 📋 Dependencies

The project relies on standard Node.js and optional Python runtimes:

- **Node.js**: `v16.0.0` or higher (v18 / v20 recommended)
- **npm**: `v8.0.0` or higher
- **Python** (optional for CLI runner): `v3.8` or higher
- **Docker** (optional for containerization): `v20.0` or higher

### Key Project Dependencies
- `express`: `^4.18.2`
- `cors`: `^2.8.5`
- `body-parser`: `^1.20.2`
- `uuid`: `^9.0.0`

---

## 📦 Installation

To install all dependencies, run the following commands:

### Node.js Installation
```bash
# Clone the repository
git clone https://github.com/Ramyasree1725/ml-system-hub.git
cd ml-system-hub

# Install npm dependencies
npm install
```

### Python Virtual Environment Setup (Optional)
```bash
# Setup Python virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate
```

---

## 🔨 Build

To build and verify the project artifacts:

### Standard Build
```bash
npm run build
```

### Makefile Build
```bash
make build
```

### Docker Container Build
```bash
docker build -t ml-system-hub .
```

---

## 🚀 Run

Launch the full-stack platform server using any of the methods below:

### Method 1: npm Start (Recommended)
```bash
npm start
```

### Method 2: Direct Node.js Server Execution
```bash
node server.js
```

### Method 3: Python Launcher
```bash
python main.py
```

### Method 4: 1-Click Launch (Windows)
Double-click `start_website.bat` or `OPEN_WEBSITE.bat` to automatically start the backend server and open the web dashboard in your default browser.

### Method 5: Docker Run
```bash
docker run -p 3001:3001 ml-system-hub
```

📍 **Web Application Dashboard**: [http://localhost:3001](http://localhost:3001)  
📍 **Backend Health API**: [http://localhost:3001/health](http://localhost:3001/health)

---

## 📖 Usage

1. **Dashboard Overview**: Access [http://localhost:3001](http://localhost:3001) to view real-time system metrics, cluster node allocation, and live SLA throughput.
2. **Model Registry**: Inspect deployed machine learning models, promote candidates between Staging and Production, and adjust canary traffic routing sliders.
3. **Real-Time Inference Console**: Execute real-time inferences with custom parameters and inspect the Visual Decision Scorecard and SHAP feature attribution waterfall.
4. **Batch Inference Runner**: Generate 50+ record cohorts, run worker pool scoring, apply manual overrides, and export verified CSV datasets.
5. **Training & Hyperparameter Tuning**: Run training iterations, observe live loss convergence graphs, and watch the real-time neural architecture pipeline diagram.
6. **Data Drift Monitor**: Monitor KS-Test p-values and Population Stability Index (PSI) to detect live distribution shifts.

---

## 🧪 Testing

Execute the test suites and test coverage reporting:

```bash
# Run test suite
npm test

# Run test coverage
npm run test:coverage
```

---

## 📡 Back-End REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Server status and uptime telemetry |
| `GET` | `/api/models` | List all registered models |
| `POST` | `/api/models` | Register a new ML model artifact |
| `DELETE` | `/api/models/:id` | Remove a model from registry |
| `GET` | `/api/features` | Fetch feature groups and schemas |
| `POST` | `/api/features` | Add a new feature group |
| `GET` | `/api/pipelines` | Get pipeline execution DAGs |
| `POST` | `/api/pipelines/:id/trigger` | Trigger an automated pipeline run |
| `POST` | `/api/serving/predict` | Real-time model inference engine |
| `POST` | `/api/serving/batch` | Batch inference processing engine |
| `GET` | `/api/auth/users` | List registered platform team members |
| `POST` | `/api/auth/register` | Register new platform engineer |
