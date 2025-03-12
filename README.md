# Carbon Project

A NestJS-based application for managing and tracking carbon reduction projects.

## Description

This application provides a platform for managing carbon reduction projects and tracking their progress.

## Features

- Carbon project management
- RESTful API endpoints

## Prerequisites

- Node.js (v16 or higher)
- npm
- Git

## Installation

1. Clone the repository:

```bash
git clone https://github.com/luongngocsontung/qatalyst-backend.git
cd carbon-project
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Environment Setup:
   - Copy the `.env.example` file to `.env`
   - Update the environment variables as needed

```bash
cp .env.example .env
```

Required environment variables:

- `PORT`: Application port (default: 3000)
- `FRONTEND_URL`: URL of the frontend application

## Running the Application

### Development

```bash
# Run in development mode with hot-reload
npm run start:dev
```

### Production

```bash
# Build the application
npm run build

# Start the production server
npm run start:prod
```

## Project Structure

```
src/
├── config/             # Configuration module and settings
├── models/            # Data models and interfaces
├── repositories/      # Data access layer
├── carbon/           # Carbon module features
└── main.ts          # Application entry point
```
