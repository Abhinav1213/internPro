echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* -i "C:\Users\abhin\.ssh\skylink" root@167.71.229.65:/var/www/167.71.229.65/


echo "Done!"