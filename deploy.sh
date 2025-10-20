#!/usr/bin/env sh

# abort on errors
set -e

# build
echo "Building project..."
npm run build

# navigate into the build output directory
echo "Entering dist..."
cd dist

# place .nojekyll to bypass Jekyll processing
echo "Creating .nojekyll..."
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

echo "Initializing git..."
git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
echo "Pushing to GitHub..."
git push -f https://github.com:luisg210/portfolio.git gh-pages

echo "cd -"
cd -