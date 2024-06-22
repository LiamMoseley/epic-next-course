# Epic Next.js Tutorial: Building a Real-Life Project

Welcome to the Epic Next.js application! This project is based on the following tutorial (https://strapi.io/blog/epic-next-js-14-tutorial-learn-next-js-by-building-a-real-life-project-part-1-2) to help learn Next.js and Strapi by building a real-world application. This README will guide you through the setup and development process, summarizing the key steps from the tutorial.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Development Workflow](#development-workflow)
6. [Features Implemented](#features-implemented)
7. [Running the Project](#running-the-project)
8. [Learn More](#learn-more)
9. [Contributing](#contributing)

## Introduction

This tutorial will take you through the process of creating a fully functional application using Next.js and Strapi.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>= 14.x)
- npm or yarn
- Git

## Getting Started

Follow these steps to set up your project:

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup Strapi Backend**:

   Navigate to the Strapi folder:

   ```bash
   cd strapi-backend
   ```

   Install Strapi dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

   Start Strapi in development mode:

   ```bash
   npm run develop
   # or
   yarn develop
   ```

4. **Setup Next.js Frontend**:
   Navigate to the Next.js folder:
   ```bash
   cd ../nextjs-frontend
   ```
   Install Next.js dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Project Structure

The project consists of two main parts:

- **Strapi Backend**: A headless CMS used to manage content.
- **Next.js Frontend**: A React framework for building server-side rendered applications.

```
project-root/
│
├── strapi-backend/     # Strapi CMS backend
└── nextjs-frontend/    # Next.js frontend application
```

## Development Workflow

### Backend (Strapi)

Start the Strapi server:

```bash
npm run develop
# or
yarn develop
```

Access the Strapi admin panel at `http://localhost:1337/admin`.

### Frontend (Next.js)

Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

Access the frontend at `http://localhost:3000`.

## Features Implemented

1. **Content Management**:

   - Create and manage content using Strapi.
   - Set up custom content types and relationships.

2. **Data Fetching**:

   - Fetch data from Strapi using Next.js API routes.
   - Implement static site generation (SSG) and server-side rendering (SSR).

3. **User Authentication**:

   - Set up user authentication with Strapi and integrate it into the Next.js frontend.

4. **Dynamic Routing**:
   - Implement dynamic routes in Next.js based on the data from Strapi.

## Running the Project

To run the project in development mode, use the following commands:

1. **Start Strapi Backend**:

   ```bash
   cd strapi-backend
   npm run develop
   # or
   yarn develop
   ```

2. **Start Next.js Frontend**:
   ```bash
   cd ../nextjs-frontend
   npm run dev
   # or
   yarn dev
   ```

## Learn More

For a detailed step-by-step guide, visit the [tutorial on Strapi's blog](https://strapi.io/blog/epic-next-js-14-tutorial-learn-next-js-by-building-a-real-life-project-part-1-2).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or additions.
