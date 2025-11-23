# SenseForge - AI-Powered Career Development Platform

SenseForge is a comprehensive career development platform that leverages AI to provide personalized insights, interview preparation, and professional guidance. Built with Next.js 16, it offers features like industry insights, resume building, cover letter generation, and mock interviews.

## Features

- **AI-Powered Industry Insights**: Get real-time market analysis and salary data for your industry
- **Resume Builder**: Create professional resumes with AI assistance
- **Cover Letter Generator**: Generate tailored cover letters for job applications
- **Mock Interviews**: Practice interviews with AI-powered feedback
- **User Onboarding**: Streamlined profile setup with industry selection
- **Dashboard**: Centralized view of your career progress and insights

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI**: Google Gemini API
- **UI Components**: Radix UI, Shadcn/ui
- **State Management**: React Hook Form, Zod validation

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun
- PostgreSQL database
- Git

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd senseforge
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/senseforge"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Optional: Inngest (for background jobs)
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) Seed the database with initial data
npx prisma db seed
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
senseforge/
├── actions/                 # Server actions
│   ├── user.js             # User-related actions
│   └── dashboard.js        # Dashboard and AI insights
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   │   ├── dashboard/     # Dashboard pages
│   │   ├── onboarding/    # User onboarding
│   │   ├── interview/     # Interview preparation
│   │   └── ai-cover-letter/ # Cover letter generator
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   └── hero.jsx          # Hero section component
├── data/                  # Static data files
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
│   ├── prisma.js         # Prisma client
│   └── utils.js          # Utility functions
├── prisma/                # Database schema and migrations
│   └── schema.prisma     # Prisma schema
└── public/                # Static assets
```

## Usage Guide

### User Onboarding

1. **Sign Up/Login**: Use Clerk authentication to create an account
2. **Complete Profile**: Fill out the onboarding form with:
   - Industry selection
   - Specialization
   - Years of experience
   - Skills
   - Professional bio
3. **AI Insights**: Receive personalized industry insights and salary data

### Dashboard

- View your industry insights and market trends
- Access resume builder and cover letter generator
- Track your career progress

### Interview Preparation

- Practice with AI-powered mock interviews
- Get feedback on your responses
- Review common interview questions

### Resume and Cover Letter

- Use AI assistance to create professional resumes
- Generate tailored cover letters for specific job applications
- Customize templates to match your style

## API Reference

### Server Actions

- `updateUser(data)`: Update user profile and generate industry insights
- `getUserOnboardingStatus()`: Check if user has completed onboarding
- `getIndustryInsights()`: Retrieve industry insights for the user
- `generateAIInsights(industry)`: Generate AI insights for a specific industry

### Database Models

- **User**: User profile information
- **IndustryInsight**: AI-generated industry data
- **Resume**: User resume content
- **CoverLetter**: Generated cover letters
- **Assessment**: Interview assessment results

## Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Quality

- Uses ESLint for code linting
- Follows Next.js best practices
- Implements TypeScript-like patterns with JSDoc

### Database Management

```bash
# View database
npx prisma studio

# Create migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset
```

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check DATABASE_URL in .env file

2. **Clerk Authentication Issues**
   - Verify Clerk keys in environment variables
   - Check Clerk dashboard for correct configuration

3. **Gemini API Errors**
   - Ensure GEMINI_API_KEY is set
   - Check API quota and billing status

4. **Build Errors**
   - Clear .next cache: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact the development team or create an issue in the GitHub repository.
