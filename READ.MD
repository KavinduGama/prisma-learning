#Make an prostgreSQL server (Or any other relational database)
Docker - docker run --name postgres -e POSTGRES_USER=prisma -e POSTGRES_PASSWORD=prisma -e POSTGRES_DB=prisma_db -p 5432:5432 -d postgres

#Installation Guide
1- npm init -y [package.json]
2- npm i --save-dev prisma typescript ts-node @types/node nodemon
3- make tsconfig.json
    {
    "compilerOptions": {
        "sourceMap": true,
        "outDir": "dist",
        "strict": true,
        "lib": ["ESNext"],
        "esModuleInterop": true
        }
    }
4- npx prisma init --datasource-provider postgresql
5- change ur db url in .env

npx prisma format - to format prisma schema

6- make models 
7- npx prisma migrate dev (Add schemas to db)
8- npm i @prisma/client
9- npx prisma generate (prisma client generate)
9- "devStart" : "nodemon scripts.ts" in scripts
10- npm run devStart 

HAVE FUN