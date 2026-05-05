# Numapetstore

Premium DTC pet store for Panama.

## Structure

```txt
frontend/   Next.js App Router storefront
backend/    FastAPI orders/tracking API
docs/       Product, CRO, architecture and deployment docs
```

## Local Frontend

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## Local Backend

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
$env:DATABASE_URL="postgres://numapetstore:numapetstore@127.0.0.1:5432/numapetstore?sslmode=disable"
fastapi dev app/main.py
```

Backend health: `http://localhost:8000/api/health`.

## Production

Frontend domain: `https://numapet.store`

Backend domain: `https://api.numapet.store`

EasyPanel backend database:

```txt
postgres://numapetstore:numapetstore@numapetstore_database:5432/numapetstore?sslmode=disable
```

Copy env examples:

- `frontend/.env.example`
- `backend/.env.example`
