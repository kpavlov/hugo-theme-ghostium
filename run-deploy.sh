#!/usr/bin/env bash

npm i
npm run clean
npm run build

./deploy.sh