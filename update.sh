#!/bin/bash

# Fetch latest changes from the repository.
echo "Fetching latest changes..."
git pull


# Re-build the application
echo "Building the application"
npm run build

# Copy static assets to standalone directory
cp -r .next/static .next/standalone/.next/
cp -r public .next/standalone/

# Restart the systemd service.
echo "Restarting systemd service..."
sudo systemctl restart CloudVault.service

sleep 2
echo "Updated CloudVault succesfully!"
