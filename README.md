# Svelte map using MapLibre GL JS

A quick way to start a web map application with Svelte using MapLibre GL JS.

A simple fullscreen map application is used to showcase how to utilize MapTiler maps together with Svelte and MapLibre GL JS for your Svelte app.

Following example from [`maptiler`](https://github.com/maptiler/svelte-template-maplibre-gl-js).

## Step-by-step tutorial - How to display a map in Svelte using MapLibre GL JS

Documentation: [How to display a map in Svelte using MapLibre GL JS](https://docs.maptiler.com/svelte/maplibre-gl-js/how-to-use-maplibre-gl-js/?utm_medium=referral&utm_source=github&utm_campaign=2022-05%20%7C%20js%20frameworks%20%7C%20svelte)

## Build With

* [Svelte](https://svelte.dev/)
* [MapLibre GL JS](https://maplibre.org/)
* [MapTiler](https://www.maptiler.com/)

This project was generated with ```npx degit sveltejs/template my-svelte-project```

## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Create an app

Clone the repo to create a new Svelte project. Run in your command-line:

```
  git clone https://github.com/maptiler/svelte-template-maplibre-gl-js.git my-svelte-map
```

Navigate to the newly created project folder **my-svelte-map**

```
  cd my-svelte-map
```

Install the NPM packages dependencies. Run in your command-line:

```
  npm install
```

<p align="right">(<a href="#top">back to top</a>)</p>

### API KEY

Rename or copy the `.env.example` file to `.env`

```
  cp .env.example .env
```

Open the `.env` file, :warning: you will need to replace **YOUR_MAPTILER_API_KEY** with your own MapTiler API key.

Your MapTiler account access key is on your MapTiler [Cloud](https://cloud.maptiler.com/account/keys/) account page. 

:information_source: If you don't have an API KEY, you can create it for free at https://www.maptiler.com/cloud/

### Run

To start your local environment, run: 

```
  npm run dev
``` 

You will find your app on address http://localhost:5000/.

Now you should see the app in your browser.

<p align="right">(<a href="#top">back to top</a>)</p>

### Build

To build for production, run: 
```
  npm run build
``` 

### gh-pages

To deploy the app to the gh-pages branch, run:
```
  node gh-pages.js
```

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Instead of using or developing a custom map component you can use the [svelte-maps](https://github.com/ONSvisual/svelte-maps).

Checkout to [Get started with Svelte and MapLibre GL JS](https://github.com/maptiler/get-started-svelte-maplibre-gl-js) repo to use de svelte-maps component.

<p align="right">(<a href="#top">back to top</a>)</p>

