# Tasks Application

Task management application with decoupled backend/frontend architecture, ready for AWS ECS deployment.

## 🚀 Quick Start

```bash
cd tasks-app
docker compose up -d --build

# Run migrations
docker exec tasks-backend npx sequelize-cli db:migrate
```

**Access:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- Database: localhost:5432

## 📚 Documentation

- **[Project Overview](docs/README.md)** - Architecture and features
- **[Quick Reference](docs/QUICK_REFERENCE.md)** - Common commands
- **[Pipeline Setup](docs/PIPELINE_SETUP.md)** - CI/CD with AWS
- **[Amazon Q Guide](docs/AmazonQ.md)** - AI assistant configuration

## 🏗️ Architecture

```
┌─────────────┐      ┌─────────────┐      ┌──────────────┐
│   Frontend  │─────▶│   Backend   │─────▶│  PostgreSQL  │
│  (React)    │      │  (Node.js)  │      │   Database   │
│  Port 3000  │      │  Port 8080  │      │   Port 5432  │
└─────────────┘      └─────────────┘      └──────────────┘
```

## ✨ Features

- ✅ i18n support (Portuguese/English)
- ✅ Dark mode toggle
- ✅ Task CRUD operations
- ✅ Priority management
- ✅ Responsive design
- ✅ Docker containerized
- ✅ Ready for ECS deployment

## 🛠️ Tech Stack

**Frontend:** React 17, React Router, CSS3  
**Backend:** Node.js 18, Express, Sequelize  
**Database:** PostgreSQL 17  
**DevOps:** Docker, Docker Compose, AWS ECS

## 📁 Project Structure

```
challenge1/
├── docs/                    # Documentation
├── infrastructure/          # AWS infrastructure
│   ├── cloudformation/
│   └── pipeline/
└── tasks-app/              # Application code
    ├── backend/            # Node.js API
    ├── frontend/           # React app
    └── docker-compose.yml
```

## 🔧 Development

See [docs/README.md](docs/README.md) for detailed development instructions.

## 🚢 Deployment

See [docs/PIPELINE_SETUP.md](docs/PIPELINE_SETUP.md) for AWS deployment guide.
