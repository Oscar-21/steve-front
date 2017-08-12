#!/bin/bash
npm run build
cd build
cp asset-manifest.json /home/ubuntu/steve-backend/public/asset-manifest.json
cp favicon.ico /home/ubuntu/steve-backend/public/favicon.ico
cp manifest.json  /home/ubuntu/steve-backend/public/manifest.json
cp index.html  /home/ubuntu/steve-backend/public/index.html
cp service-worker.js /home/ubuntu/steve-backend/public/service-worker.js
rm -rf /home/ubuntu/steve-backend/public/static
cp -r static /home/ubuntu/steve-backend/public/static
