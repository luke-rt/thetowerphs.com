# `thetowerphs.com` Source Code

## Development
Hi! This project was built with the Remix.run framework, and it may look intimidating because of the amount of files, but if you're familiar with web development it shouldn't be too difficult to learn.

### File heirarchy
There are only a couple important files that might need changing:
- Any files in the app/ directory
- Any assets(images, fonts, etc) in the public/ directory
- Stylesheets in the styles/ directory

I'll quickly explain what each file does
`app/root.tsx` is the root module, so stuff like the navigation bar, top banner, and other things that won't change no matter what page you're on will go there
`routes/*` are different pages, any folder is a new route in the URL, ie thetowerphs.com/newfe, and any file beginning with $ is a dynamic path, so one that is changed at runtime
`lib/*` are the library files for stuff like querying from MongoDB
`components/*` are common React components used in different pages, ie Button

Any other files not listed probably won't need to be changed ever

### Getting started
Clone this directory locally and run `yarn`. Be sure you have yarn installed globally with `npm i -g yarn`

`yarn dev` creates an unoptomized dev server at `localhost:3000` where any file changes automatically reload the webpage

To deploy the website, run
```
git add .
git commit -m "My commit message that you can change to explain what this change is"
git push
```

Netlify will then automatically deploy this website to thetowerphs.com
