# Basic Boiler
Run webpack development server w/ hot-reloading
```
npm run dev
```

Run tests
```
npm run test
```

Build for production
```
npm run build
```

## Assumptions
You can use either SCSS which is located in the `assets/style` folder or place css directly into your javascript folder and require it for your react component classnames. 

I've found the speed at with sass recompiles and reloads(~500ms) the css a lot quicker than webpack hot reloading(~2-5sec) the css module. 

Choose your poison...

## Todos:
- [ ] Add react router
- [ ] Basic tests