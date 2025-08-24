# Personal Portfolio Backend Server

This is the backend server for the personal portfolio website with Supabase database integration.

## Features

- Express.js server with RESTful API
- Supabase database connection with real-time capabilities
- CRUD operations for portfolio items
- Environment-based configuration
- Security middleware (Helmet, CORS)
- Logging with Morgan
- Error handling and validation
- Row Level Security (RLS) support

## Prerequisites

- Node.js (v14 or higher)
- Supabase account and project
- npm or yarn package manager

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Supabase Setup

1. **Create a Supabase account** at [supabase.com](https://supabase.com)
2. **Create a new project** in your Supabase dashboard
3. **Get your project credentials**:
   - Go to Settings → API
   - Copy your Project URL and anon/public key
4. **Run the schema** in the Supabase SQL Editor:
   - Go to SQL Editor in your Supabase dashboard
   - Copy and paste the contents of `db/schema.sql`
   - Run the script

### 3. Environment Configuration

1. **Copy the environment file**:
   ```bash
   cp env.example .env
   ```

2. **Edit `.env`** with your Supabase credentials:
   ```env
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   PORT=5000
   NODE_ENV=development
   ```

### 4. Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Supabase connection test

### Portfolio Items
- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio/:id` - Get portfolio item by ID
- `POST /api/portfolio` - Create new portfolio item
- `PUT /api/portfolio/:id` - Update portfolio item
- `DELETE /api/portfolio/:id` - Delete portfolio item
- `GET /api/portfolio/category/:category` - Get items by category

## Database Schema

The `portfolio_items` table includes:
- `id` - Primary key (BIGSERIAL)
- `title` - Item title
- `description` - Item description
- `category` - Item category (Education, Projects, etc.)
- `image_url` - Image URL
- `link_url` - External link URL
- `technologies` - Array of technologies used
- `created_at` - Creation timestamp with timezone
- `updated_at` - Last update timestamp with timezone

## Supabase Features

- **Row Level Security (RLS)** - Built-in security policies
- **Real-time subscriptions** - Live updates (can be implemented in frontend)
- **Built-in authentication** - User management system
- **Auto-generated APIs** - REST and GraphQL endpoints
- **Database backups** - Automatic daily backups

## Frontend Integration

To connect your React frontend to this backend:

1. **Update your frontend API calls** to use the backend endpoints
2. **Set up environment variables** in your React app for the API base URL
3. **Handle CORS** (already configured in the backend)

Example frontend API call:
```typescript
const fetchPortfolioItems = async () => {
  const response = await fetch('http://localhost:5000/api/portfolio');
  const data = await response.json();
  return data.data;
};
```

## Security Features

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Row Level Security** - Database-level access control
- **Input validation** - Basic request validation
- **Error handling** - Secure error responses

## Development

- **Nodemon** for auto-reload during development
- **Morgan** for HTTP request logging
- **Environment-based configuration**
- **Supabase client** for efficient database operations

## Troubleshooting

### Supabase Connection Issues
1. Check your Supabase project is active
2. Verify credentials in `.env` file
3. Ensure the `portfolio_items` table exists
4. Check RLS policies are properly configured

### Port Already in Use
Change the `PORT` in your `.env` file or kill the process using the port.

### CORS Issues
The backend is configured to allow all origins in development. For production, update the CORS configuration in `server.js`.

### RLS Policy Issues
If you encounter permission errors, check that your RLS policies allow the operations you're trying to perform. The default policy allows all operations for both authenticated and anonymous users.

