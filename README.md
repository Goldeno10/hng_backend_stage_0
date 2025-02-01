# HNG Backend Stage 0 - Express API

## Overview

This is a simple Express.js API created for the **HNG Backend Stage 0 Task**. It provides a single endpoint (`/`) that returns the developer's email, GitHub profile, and the current time in **ISO 8601 format**.

## Features

- Returns the developer's email.
- Returns the current time dynamically in **ISO 8601** format.
- Provides a link to the developer's GitHub profile.
- CORS-enabled for accessibility from any origin.

## Technologies Used

- **Node.js** - Runtime environment.
- **Express.js** - Web framework for handling HTTP requests.
- **TypeScript** - Ensures type safety and clean code structure.

## Installation & Setup

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine.

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/Goldeno10/hng_backend_stage_0
   ```
2. Navigate to the project directory:
   ```sh
   cd hng-backend-stage-0
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Compile TypeScript files:
   ```sh
   npm run build
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoint

### GET /

Returns a JSON response containing:

- **email** - Developer's email address.
- **currentTime** - Current server time in **ISO 8601 format**.
- **github** - Link to the developer's GitHub profile.

#### Sample Response

```json
{
  "email": "ibrahimmuhammad271@gmail.com",
  "currentTime": "2025-02-01T12:34:56.789Z",
  "github": "https://github.com/Goldeno10/hng_backend_stage_0"
}
```

## Deployment

To deploy this project on **Vercel**, follow these steps:

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the project:
   ```sh
   vercel
   ```
3. To force a production deployment:
   ```sh
   vercel --prod
   ```

## License

This project is open-source and available under the **MIT License**.

## Author

- **Muhammad Ibrahim**  
  [GitHub](https://github.com/Goldeno10)  
  [Email](mailto:ibrahimmuhammad271@gmail.com)
