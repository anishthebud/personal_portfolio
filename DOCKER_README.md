# Docker Setup for Personal Portfolio

This project includes Docker configuration for both frontend and backend services.

## Prerequisites

- Docker installed on your system
- Docker Compose installed

## Quick Start

### 1. Build and run both services
```bash
docker-compose up --build
```

This will:
- Build the frontend React app and serve it on port 3000
- Build the backend Node.js server and run it on port 3001
- Create a network for service communication

### 2. Access your application
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Individual Service Commands

### Frontend Only
```bash
# Build frontend image
docker build -t portfolio-frontend .

# Run frontend container
docker run -p 3000:3000 portfolio-frontend
```

### Backend Only
```bash
# Build backend image
cd server
docker build -t portfolio-backend .

# Run backend container
docker run -p 3001:3001 portfolio-backend
```

## Development Mode

For development with hot reloading:

```bash
# Frontend development (with volume mounting)
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules portfolio-frontend npm start

# Backend development (with volume mounting)
cd server
docker run -p 3001:3001 -v $(pwd):/app -v /app/node_modules portfolio-backend npm run dev
```

## Environment Variables

Make sure to create a `.env` file in the `server/` directory with your configuration:

```env
NODE_ENV=production
PORT=3001
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
```

## Stopping Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Stop and remove images
docker-compose down --rmi all
```

## Troubleshooting

### Port Conflicts
If ports 3000 or 3001 are already in use, modify the `docker-compose.yml` file:

```yaml
ports:
  - "8080:3000"  # Change 3000 to 8080
```

### Build Issues
- Clear Docker cache: `docker system prune -a`
- Rebuild without cache: `docker-compose build --no-cache`

### Permission Issues
On Linux/Mac, you might need to run Docker commands with `sudo` or add your user to the docker group.

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in your environment
2. Ensure all environment variables are properly set
3. Consider using Docker secrets for sensitive data
4. Set up proper logging and monitoring
5. Configure reverse proxy (nginx) for SSL termination

## Key Changes Made

### Frontend Dockerfile
- **Multi-stage build**: Node.js for building, Nginx for serving
- **Port 3000**: Changed from port 80 for better accessibility
- **Build optimization**: Install all dependencies, build, then prune dev dependencies

### Nginx Configuration
- **Port 3000**: Configured to listen on port 3000
- **React Router support**: Handles client-side routing properly
- **Security headers**: Added comprehensive security headers
- **Gzip compression**: Optimized for performance

### Docker Compose
- **Port mapping**: Frontend (3000), Backend (3001)
- **Network**: Custom network for service communication
- **Volume mounting**: Development-friendly volume mounting for backend
