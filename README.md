# JsDocs in combination with Typescript to type check JavaScript.

## How to test

#### 1. npm run type-check

##### \*Useful cmd for husky prior to committing

#### 2. Try removing some jsdocs or TS interfaces to show realtime type checking.

<br />

## Total JS application

<img src="https://miro.medium.com/max/800/1*bxEkHw1xewxOFjmGunb-Cw.png" width="700"/>

<br />
<br />

### JsDocs for type safety & code documentation (Bonus).

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--lBzMLBKJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://i.imgur.com/BL85jL8.png" width="500" />

<br />
<br />

##### Only a small amount of TS needed.

<img src="https://miro.medium.com/max/4000/1*9eMyWLYOqU5aqBtVoFoi3Q.jpeg" width="150"/>

<br />
<br />

#

### What Typescript features are necessary for this in a create-react-app?

1. ./src/react-app-env.d.ts

```ts
/// <reference types="react-scripts" />
```

2. ./tsconfig.json

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "allowJs": true,
    "checkJs": true,
    "jsx": "react-jsx",
    "noEmit": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "preserveSymlinks": true,
    "baseUrl": "src",
    "rootDirs": ["src/components"],
    "strict": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "target": "es5",
    "module": "esnext",
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*"],
  "exclude": ["**/*.test.*"]
}
```

3. Install a few devDependencies & thats it!

`npm i -D typescript @types/react @types/react-dom`

<br />

#

<img src="https://miro.medium.com/max/3180/1*V65PWDs8kUW42QM5ebcYOw.png" width="800">
