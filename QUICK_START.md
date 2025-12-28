# Quick Start Guide

## Backend Setup

1. **Navigate to Backend directory**:

   ```bash
   cd Backend-Api
   ```

2. **Restore dependencies** (if needed):

   ```bash
   dotnet restore
   ```

3. **Run database migrations** (already done):

   ```bash
   dotnet ef database update
   ```

4. **Run the API**:

   ```bash
   dotnet run
   ```

   The API will start on `http://localhost:5000` (or `https://localhost:5001`)
   - Swagger UI: `http://localhost:5000/swagger`

## Frontend Setup

The frontend is already running on `http://localhost:4200`

If you need to restart it:

```bash
cd frontend
npm install  # if needed
ng serve
```

## Testing the Integration

### 1. Register a User (via Swagger or API)

Open Swagger UI at `http://localhost:5000/swagger` and use the `/api/auth/register` endpoint:

```json
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "Admin123"
}
```

### 2. Login

Go to `http://localhost:4200/admin/login` and login with:

- Username: `admin`
- Password: `Admin123`

### 3. Manage Hero Section

After login, go to `http://localhost:4200/admin/hero` to:

- View existing hero section
- Create new hero section
- Update hero section
- Delete hero section

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login (returns JWT token)

### Hero Section (CRUD)

- `GET /api/hero` - Get all hero sections
- `GET /api/hero/{id}` - Get hero section by ID
- `POST /api/hero` - Create hero section (requires JWT token)
- `PUT /api/hero/{id}` - Update hero section (requires JWT token)
- `PATCH /api/hero/{id}` - Partial update (requires JWT token)
- `DELETE /api/hero/{id}` - Delete hero section (requires JWT token)

## Architecture

### Global API Service Pattern

The frontend uses a global `ApiService` that handles all HTTP operations:

```typescript
// In any service
constructor(private apiService: ApiService) {}

// GET
this.apiService.get<Type>('endpoint')

// POST
this.apiService.post<Type>('endpoint', data)

// PUT
this.apiService.put<Type>('endpoint', id, data)

// PATCH
this.apiService.patch<Type>('endpoint', id, data)

// DELETE
this.apiService.delete('endpoint', id)
```

This makes it easy to add more CRUD services for other features.

## What's Implemented

✅ Backend API with JWT authentication
✅ Hero Section CRUD operations (backend)
✅ Global API service (frontend)
✅ Hero Service (frontend)
✅ Updated Auth Service with real API calls
✅ Login component with API integration
✅ Hero Admin component with full CRUD
✅ CORS configuration
✅ Database migrations
✅ Loading states and error handling
✅ Success/error messages

## Next Steps

1. Test the login functionality
2. Test Hero CRUD operations
3. Add similar services for other sections:
   - About
   - Projects
   - Experience
   - Skills
   - Contact
   - Certificates

## Troubleshooting

### Backend not starting?

- Check if port 5000 is already in use
- Check database connection string in `appsettings.json`
- Make sure SQL Server is running

### Frontend can't connect to backend?

- Check CORS configuration in `Program.cs`
- Verify API URL in `api.service.ts` (should be `http://localhost:5000/api`)
- Check browser console for errors

### Database errors?

- Run `dotnet ef database update` again
- Check connection string in `appsettings.json`
- Verify SQL Server is accessible
