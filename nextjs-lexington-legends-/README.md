# Lexington Legends Website

This is the official website for the Lexington Legends baseball team, built with [Next.js](https://nextjs.org) and [Sanity CMS](https://sanity.io).

## Features

- Responsive design for all device sizes
- Home page with team information and upcoming games
- Game schedule page with filtering options
- Individual game detail pages
- Content management through Sanity CMS

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm 9.6.0 or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/lexington-legends.git
cd lexington-legends
```

2. Install dependencies for the Next.js frontend:

```bash
cd nextjs-lexington-legends-
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the Next.js project directory with the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

### Setting up Sanity Studio

1. Navigate to the Sanity Studio directory:

```bash
cd ../studio-lexington-legends-
```

2. Install dependencies:

```bash
npm install
```

3. Start the Sanity Studio development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) to access Sanity Studio.

## Content Structure

### Game Schema

The game schema includes the following fields:

- **opponent**: Name of the opposing team
- **date**: Date of the game
- **time**: Time of the game
- **location**: Home or Away
- **locationImage**: Image of the stadium
- **ticketsUrl**: Link to purchase tickets (for home games)
- **result**: Game result information (status, scores)
- **slug**: Auto-generated URL slug

## Deployment

### Next.js Frontend

The easiest way to deploy the Next.js frontend is to use [Vercel](https://vercel.com).

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project in Vercel.
3. Add the environment variables.
4. Deploy.

### Sanity Studio

To deploy Sanity Studio:

```bash
cd studio-lexington-legends-
npm run deploy
```

This will deploy the studio to a Sanity-hosted URL.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Sanity CMS](https://sanity.io) - Headless content management system

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is prohibited.