## Rena.to

Source code is on `src` branch . The `master` brancg only reflect builded files.

### Development

Install dependencies
```
yarn
```

Run `dev` script
```
yarn dev
```

### Deploy

Run `full-deploy` script
```
yarn full-deploy
```
It will:
1. Run lint (eslint)
2. Run build (next buld)
3. Run export (next export)
4. Run gh-pages (put out folder to master branch)

### Blog

*Blog Post*  
Every blog post is an mdx file inside `src/pages/blog/[name-of-post]/index.mdx`.  
Things related to the post (like images or components) will inside the same folder.
