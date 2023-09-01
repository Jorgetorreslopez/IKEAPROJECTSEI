## Steps

**Install Gulp Globally**
```bash
npm i -g gulp-cli
```

**Start the dev server**
```bash
npm run dev
```
### or
```bash
yarn dev
```

**Start the dev server with proxy**
```bash
npm run proxy
```

**Build files for production**
```bash
yarn build
```
### or

```bash
npm run build
```

**Deploy for production script**
```bash
npm start
```
### or
```bash
yarn start
```

I've updated the DEV branch in my Github with MONGODB Connection functionality. Once you pull the updated changes you should be able to Connect to your DB after doing the following:
Run NPM I
Run NPM I morgan
Update Your .ENV file with your own connection string (Remember to change the name of your collection in the Connection String)
run NPM RUN START