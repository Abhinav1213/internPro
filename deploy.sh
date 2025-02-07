echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server ..."
scp -r build/* root@167.71.229.65:/var/www/167.71.229.65/

echo "Done!"