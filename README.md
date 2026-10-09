# Mini E-Commerce

A full-stack e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- Product listing and details
- Shopping cart functionality
- Order management
- RESTful API backend

## Project Structure
This project contains both the frontend (React) and backend (Express) in a single repository:
- `/frontend` - React application built with Create React App
- `/backend` - Express API and MongoDB models

## Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JKarthikeyan-1108/mini-ecommerce.git
   cd mini-ecommerce
   ```

2. **Install all dependencies** (Frontend & Backend)
   ```bash
   npm run build
   ```
   *(This script will install both frontend and backend dependencies)*

3. **Start the application**
   ```bash
   npm run dev
   ```
   This will start both the backend server (on port 8000) and the React frontend concurrently.

## Deployment to Render

This project is configured to be deployed as a single web service on [Render](https://render.com/). The backend will serve the static built React frontend.

1. Connect this GitHub repository to your Render account.
2. Create a new **Web Service**.
3. Render will automatically detect the `render.yaml` configuration in the root folder.
4. Go to the Environment variables section on Render and set:
   - `DB_URL`: Your MongoDB connection string (e.g., from MongoDB Atlas)
5. Deploy!

*Render will automatically run `npm run build` to build the frontend, and `npm run prod` to start the Node.js server serving both the API and the static React files.*
