# Next.js Dashboard with Google Authentication

## Hello, My name is Manoj Kumar 

A modern dashboard application built with Next.js 14, featuring Google OAuth authentication.

## Overview

This project is a dashboard interface that uses:
- Next.js 14 with App Router
- NextAuth.js for Google OAuth authentication
- Tailwind CSS for styling
- Shadcn UI for component library
- React Context
- Typescript

## Prerequisites

- Node.js 18.17 or later
- A Google Cloud Platform account
- Google OAuth 2.0 Client credentials

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/Iamsidar07/pizzahut-dashboard.git
cd pizzahut-dashboard
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment variables:
   Create a `.env.local` file in the root directory with:
```bash
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
AUTH_SECRET=your_random_secret_key
```

4. Set up Google OAuth:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one
   - Enable Google OAuth API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
   - Copy the Client ID and Client Secret to your `.env.local` file

5. Start the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Third-party Libraries

- `next-auth`: Authentication for Next.js
- `tailwindcss`: Utility-first CSS framework
- `shadcn/ui`: Reusable components built with Radix UI and Tailwind
- `@tanstack/react-table`: For the table

## Challenges & Solutions

- **OAuth Implementation**: Implemented secure Google authentication flow using NextAuth.js
- **Environment Variables**: Carefully managed sensitive credentials using `.env.local`
- **TypeScript Integration**: Ensured type safety throughout the application
- **User State Persistence**: Resolved navbar user information update issues after logout by implementing a custom AuthContext wrapper:
  - Created AuthContext to track `isLoggedIn` state and `updateLoginStatus` function
  - Wrapped the SessionProvider's children with AuthContextProvider
  - Used the context to properly update UI state during logout operations

## Assumptions

- Users have a Google account for authentication
- Application runs in a modern web browser that supports ES6+
- Development environment has Node.js 18.17 or later installed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details