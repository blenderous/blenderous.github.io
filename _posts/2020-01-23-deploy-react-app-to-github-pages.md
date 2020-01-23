## Deploy React App to Github Pages
The following steps lead you to make a react app on github pages:
### Step 1
  Open your package.json and add a homepage field for your project:
  ```
  "homepage": "https://myusername.github.io/my-app",
  ```
### Step 2: Install `gh-pages` and add deploy to scripts in package.json
  Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.
  To publish it at https://myusername.github.io/my-app, run:
  ```
  npm install --save gh-pages
  ```
  Alternatively you may use yarn:
  ```
  yarn add gh-pages
  ```
  Add the following scripts in your package.json:
  ```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
      "start": "react-scripts start",
      "build": "react-scripts build",
  ```
  The predeploy script will run automatically before deploy is run.
  
  Run the command in project folder, with the URL of your repository on GitHub.
  ```
    git remote add origin https://github.com/username/my-app
  ```
### Step 3: Deploy the site by running npm run deploy
  ```
  npm run deploy
  ```
### Step 4: For a project page, ensure your project’s settings use gh-pages
  Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:
