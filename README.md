# Hodlinfo Backend
A node application that serves REST APIs for accessing crypto currency data.

## Table of Contents
+ [General Info](#general-info)
+ [Technologies](#technologies)
+ [Setup](#setup)
+ [Demo](#demo)
+ [Sources](#sources)

## General Info
A simple server with only one endpoint i.e. '/', which serves crypto currency data. The api from this app is utilized by a frontend project that fetches the data and create the frontend.

## Technologoes
+ Node
+ Express
+ MongoDB
+ Mongoose

## Setup
To run this project locally
```
# clone this repository
git clone https://github.com/Tanishka-2000/hodlinfo_api.git

# Go into the repository
cd hodlinfo_api

# Install dependencies
npm install

```
You need to add one environment variable to run this project
1. MONGODB_URL - Its value must be equal to your database URL (either local or cloud database).

Once they are added
```
# Start your project
npm start
```
## Demo
1. The api is live on [https://hodlinfo-api.onrender.com](https://hodlinfo-api.onrender.com).
2. The frontend is live on [https://tanishka-2000.github.io/hodfinfo_frontend/](https://tanishka-2000.github.io/hodfinfo_frontend/)

## Sources
1. The crypto data is originally fetched from [https://api.wazirx.com/api/v2/tickers](https://api.wazirx.com/api/v2/tickers)
2. The frontend which utilizes the data is inspired by [https://hodlinfo.com/](https://hodlinfo.com/).