# Changelog

## develop branch (0.8.0)

- Use Hipsum.js for easy filler text. Available in development and production installations.
- Full logging in production, including date and user agent.

## 0.7.9 — 2013-12-03

- Fix repo link for module templates in project overview.

## 0.7.8 — 2013-11-26

- Fix: After one request with authorized IP, auth was permanently disabled because authNeeded boolean was stored in
	parent scope.


## 0.7.7 — 2013-11-14

- Fixed missing dependency to utils.error if inline assets file is not found.
- Better error messages if assets are not found.


## 0.7.6 — 2013-10-28

- Data injected on module call changed context upstream for following calls.
- If static URI prefix was not an empty string it was followed by a double slash in generated CSS.
- If static URI prefix was not an empty string there was no leading slash in rendered HTML.
- When there's a module rendering problem, present a more useful error than the Handlebars default.


## 0.7.5 — 2013-10-20

- Make Handlebars helpers available in Terrific modules.
- Refactored Handlebars helpers to a separate node module.
- Add `log` Handlebars helper, delegating to `console.log`.
- Improved sprites helper selector.


## 0.7.4 — 2013-10-11

- Automatically serve favicon.ico from public folder.
- Load jQuery before inline JS.
- Force Glue to always build sprites when sprite task runs. Get output from Glue if there were errors.


## 0.7.3 — 2013-10-07

- Don't fail when rendering empty module. (With express3-handlebars we can now render empty templates without Handlebars complaining.)


## 0.7.2 — 2013-10-01

- Connector attributes are handled as regular attributes since 0.7.0. Update and clean up tests, documentation and example.
- Show connectors on test output, this results in correct grouping.
- Make sure we don't test modules with identical options multiple times.
- Adds missing sprites helper rule/file, presetting all sprites to inline-block.


## 0.7.1 — 2013-09-25

- Empty accidentally committed config-project.js, it was enabling sprites building which should be off by default.
- Fix asset paths for Windows.


## 0.7.0 — 2013-09-18

- Add option to allow bypassing auth for configurable IP ranges.
- Renamed app_modules to lib.
- Move routes.js from lib to controllers.
- Test grunt tasks: build-external-js, build-external-css, tests now contained in subdirs
- Replace Underscore.js with Lo-Dash. Eliminates need for utils.deepExtend.
- Set any attribute on the Terrific module wrapper.
- Ready to deploy to Heroku using Strongloop.
- Change skins directory name from 'skin' to 'skins'. Can be changed in config.
- Module tests for the current page run in the browser.
- Less files in `reference` folders are included with @import (reference): Only imports what is actually used.


## 0.6.3 — 2013-09-17

- Fix: Nesting of modules was broken.


## 0.6.2 — 2013-09-06

- Remove initial-scale=1.0 from viewport meta, see https://github.com/h5bp/html5-boilerplate/issues/824
- Fix static URI prefix for LessCSS.


## 0.6.1 — 2013-08-11

- Fix path to sprite file.
- Fix #41: Catchall route not handling some non-existing resources
- README now contains links to mentioned tools
- Log node version on startup.
- Give meaningful error when required auth user is not defined.


## 0.6.0 — 2013-08-08

- Start semver versioning the project, there are actual users now.
- 0.6.0 because we have a good code base and powerful features, but I want some space for breaking changes before 1.0.0
