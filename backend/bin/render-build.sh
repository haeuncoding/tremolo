#!/usr/bin/env bash

set -o errexit

npm run build
cd backend
bundle install
rails db:migrate db:seed:replant