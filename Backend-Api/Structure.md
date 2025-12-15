# Portfolio API Folder Structure

This document outlines the recommended folder structure for the Portfolio API.

## Directory Tree

```
Backend-Api/
├── Controllers/          # API Endpoints (Controllers)
│   ├── AuthController.cs
│   ├── PortfolioController.cs
│   └── ...
├── Data/                 # Database Context & initial seeding
│   ├── ApplicationDbContext.cs
│   └── Seeder.cs
├── Models/               # Database Entities (The "Tables")
│   ├── ApplicationUser.cs
│   ├── Project.cs
│   ├── Skill.cs
│   └── ContactMessage.cs
├── DTOs/                 # Data Transfer Objects (Input/Output models)
│   ├── Auth/
│   │   ├── RegisterDto.cs
│   │   └── LoginDto.cs
│   └── Portfolio/
│       ├── ProjectCreateDto.cs
│       └── SkillDto.cs
├── Interfaces/           # Interfaces for Services (Dependency Injection)
│   ├── IAuthService.cs
│   └── IPortfolioService.cs
├── Services/             # Business Logic Layer
│   ├── AuthService.cs
│   └── PortfolioService.cs
├── Program.cs            # App Entry Point & Configuration
└── appsettings.json      # Configuration settings
```

## Description of Layers

- **Controllers**: Handle HTTP requests, validate input, call Services, and return responses.
- **Data**: Contains the Entity Framework DbContext and configurations.
- **Models**: Represents the data structure in your database.
- **DTOs**: Objects that carry data between processes (e.g., from Client to Controller) to hide internal database structure.
- **Services**: Contains the business logic. Controllers should be "thin" and delegate logic here.
- **Interfaces**: Defines the contracts for services, essential for Dependency Injection and testing.
