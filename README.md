# Welcome to Wish-Weaver-test app built with React!

React-Router: A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started
```
Clone the repository:
git clone https://github.com/FrankLucky1/wish_weaver_test.git
cd wish_weaver_test
```

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm

To build and run using Docker:

```bash
# For npm
docker build -t wish-weaver .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway [in use]

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

### Note for Deployment

If you're deploying to railway add this rule to your vite.config.js
server: {
    allowedHosts:["wishweavertest-production.up.railway.app"]
  }

### ESLint Configuration

Located in .eslintrc.config.json:

This ensures that console.log statements cause the build to fail.

To check for linting errors, run:

```bash
npm run lint
```

### GitHub Actions CI/CD

The GitHub Actions workflow is located in .github/workflows/ci.yml

CI Workflow
This workflow:
✅ Runs ESLint to check for errors
✅ Builds the React application
✅ Fails if console.log is present

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.


### Contributing

Fork the repository:

Create a new feature branch:
git checkout -b feature-[branch-name]

Commit changes & push:
git push origin feature-[branch-name]

Open a Pull Request to be merged with staging:

once all tests have been passed and recommended, it would be merged to main for deployment


---

Built with ❤️ using React Router.
