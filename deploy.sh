echo "Switching to main branch"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files"
scp -r build/* root@139.59.28.139:/var/www/skylifeResearch