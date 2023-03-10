## Standard Template to start building angular project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

```bash
ng new Hackathon-Frontend --defaults
npx browserslist
yarn install
npm install -D tailwindcss postcss
npm install autoprefixer@10.4.5 --save-exact
npx tailwind init
npm i -D stylelint-config-standard
npm install --save sweetalert2
ng add @angular/material
npm install kutty --save
npm install tw-elements
npm install -D @tailwindcss/typography
npm install flowbite-angular
npm install flowbite
npm audit fix --force
```

#### To check bundle size

```bash
npm install -g webpack-bundle-analyzer
ng build --stats-json
webpack-bundle-analyzer dist/hackathon-frontend/stats.json
```

#### To check code quality

```bash
ng lint
```

#### Building project

```bash
ng build
npm build
```

#### Running project

```bash
ng serve -o
npm start
```

#### More Optimizing for serve

```bash
npm install -g gzipper
ng build
gzipper compress ./src ./dist
```

Then above command will generate `dist` folder, which will be deployed to server


#### How i built:

```bash
ng g c components\page-not-found --skip-tests
ng g c components\faq-section --skip-tests 
ng g c components\team-section --skip-tests
```

#### Dockerize
```bash
docker build -t <image_name> -f Dockerfile .
docker run -p 80:80 <image_name> 
```
#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


<h4>Currently Supported Browser for this application</h4>

```bash
and_chr 110
and_ff 110  
and_qq 13.1 
and_uc 13.4 
android 109 
chrome 110  
chrome 109  
chrome 108  
edge 110    
edge 109    
firefox 110 
firefox 109 
firefox 102 
ios_saf 16.3
ios_saf 16.2
ios_saf 16.1
ios_saf 16.0
ios_saf 15.6
ios_saf 14.5-14.8
kaios 3.0-3.1
kaios 2.5
op_mini all
op_mob 73
opera 95
opera 94
safari 16.3
safari 16.2
safari 15.6
samsung 20
samsung 19.0
```

