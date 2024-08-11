# TypeScript Path Alias Demo

This TypeScript demo project demonstrates the use of path aliases to simplify module import paths in a Node.js application. The project is configured to support development with live reload and production builds.

## Features

- Use of TypeScript path aliases for clean import statements.
- Configured scripts for building, starting, and development.
- Simple utility functions to determine the application's mode (development or production).

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine. This project has been tested with the following versions:
- Node.js: 14.x or higher

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/linus-rudbeck/ts-path-alias-demo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ts-path-alias-demo
   ```

3. Install the required packages:

   ```bash
   npm install
   ```

### Usage

- To build the project, run:

  ```bash
  npm run build
  ```

  This command compiles TypeScript files to JavaScript in the `dist/` directory and resolves path aliases.

- To start the application, use:

  ```bash
  npm start
  ```

  This will run the built JavaScript file from the `dist/` directory.

- For development, you can use the live-reload feature:

  ```bash
  npm run dev
  ```

  This command will start the TypeScript Node.js application and watch for any changes, reloading automatically.

## Project Structure

- `src/`: Contains the source files for the application.
  - `app.ts`: The main application file.
  - `utils/`: Utility functions to determine the running mode of the application.
- `dist/`: Contains the compiled output files from TypeScript.
- `tsconfig.json`: TypeScript configuration file with path alias settings.
- `package.json`: Node.js manifest file with metadata and scripts for the project.

## Contributing

Feel free to fork the repository, make changes, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
