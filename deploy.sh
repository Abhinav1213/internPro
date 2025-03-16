echo "Switching to main branch"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files"
scp -r dist/* root@139.59.28.139:/var/www/skylifeResearch