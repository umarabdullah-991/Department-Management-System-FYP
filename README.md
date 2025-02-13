
# Department Management System

## Overview

The Department Management System is a web-based application designed to manage various aspects of a department, including student attendance, events, assignments, and more. This system is built using modern web technologies and provides an intuitive interface for users to interact with.

## Features

- **Student Attendance Management**: Track and manage student attendance records.
- **Event Management**: Create and manage events with detailed descriptions and timings.
- **Assignment Management**: Manage assignments with due dates and associated details.
- **Class Management**: Organize and manage classes and their respective subjects and teachers.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm, yarn, pnpm, or bun (package managers)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/department-management-system.git
    cd department-management-system
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup

Ensure you have a PostgreSQL database running.

1. Configure the database connection in the `.env` file.

2. Run the Prisma migrations to set up the database schema:

    ```bash
    npx prisma migrate dev
    ```

3. Seed the database with initial data:

    ```bash
    npx ts-node prisma/seed.ts
    ```

## Project Structure

The project is organized into the following structure:

- `src/`: Contains the source code for the application.
- `app/`: Main application components.
- `components/`: Reusable UI components.
- `lib/`: Utility functions and libraries.
- `prisma/`: Database schema and seed data.
- `public/`: Static assets.
- `next.config.mjs`: Next.js configuration file.
- `tailwind.config.ts`: Tailwind CSS configuration file.
- `tsconfig.json`: TypeScript configuration file.

## Contributors
- [Umar Abdullah](https://github.com/umarabdullah-991)
- [Syed Aman Shah](https://github.com/amanxsyed)

**Contact Us:**

If you have any questions or inquiries, you can reach out to us via email at

- [umarabdullah.work@gmail.com](mailto:umarabdullah.work@gmail.com)
- [amanxsyed@gmail.com](mailto:amanxsyed@gmail.com)

## License

This project is licensed under the MIT License.
