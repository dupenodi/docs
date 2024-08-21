# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Build the Docusaurus static files
RUN npm run build

# Install serve globally to serve the static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run your app on port 3001
CMD ["serve", "-s", "build", "-l", "3001"]
