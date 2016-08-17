#sc-investigations

Reusable modules for investigating sites. This repo isn't really useful on its own. Use submodules to "require" this repo elsewhere (workaround for lack of private npm modules).

#api

Each module (a single file) in `./lib` needs to be a function that returns a promise. The promise should resolve some data about a web page. The function's only parameter is a `window` object which can come from the baked in `window` in a browser or from jsdom's `window `implementation.