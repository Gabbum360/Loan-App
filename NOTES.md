## Initialize prisma
npx prisma init --datasource-provider postgresql

## Migrate the schema
npx prisma migrate dev --name init

## add the following lines to tsoa.json file when needed...
{
  "entryFile": "src/app.ts",
  "noImplicitAdditionalProperties": "throw-on-extras",
  "spec": {
    "outputDirectory": "public",
    "specVersion": 3
  }
}

## include the following lines to script in package.json file when needed...
"start": "node build/index.js",
    "predev": "npm run swagger",
    "prebuild": "npm run swagger",
    "build": "tsc",
    "development": "concurrently \"nodemon\" \"nodemon -x tsoa spec\"",
    "swagger": "tsoa spec"
