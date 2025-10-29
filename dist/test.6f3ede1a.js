// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"liEQ4":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c705c0fb6f3ede1a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"it0tU":[function(require,module,exports,__globalThis) {
let { fixBySelector, fixImgFile } = require("2b227b258f152a65");
window.onload = function() {
    fixBySelector('#iosphoto');
};
document.getElementById('fileinput').onchange = function(evt) {
    let file = evt.target.files[0];
    console.log(file);
    fixImgFile(file, {
        maxWidth: 500
    }).then((res)=>{
        console.log(res);
        document.getElementById('iosphoto').src = res;
    });
};

},{"2b227b258f152a65":"lVCid"}],"lVCid":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fixBySelector", ()=>fixBySelector);
parcelHelpers.export(exports, "fixImgFile", ()=>fixImgFile);
var _exifr = require("exifr");
var _exifrDefault = parcelHelpers.interopDefault(_exifr);
const getURLBase64 = function(url) {
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function() {
            if (this.status === 200) {
                let blob = this.response;
                let fileReader = new FileReader();
                fileReader.onloadend = function(e) {
                    let result = e.target.result;
                    resolve(result);
                };
                fileReader.readAsDataURL(blob);
            }
        };
        xhr.onerror = function(err) {
            reject(err);
        };
        xhr.send();
    });
};
const getOri = function(file) {
    return new Promise((resolve)=>{
        (0, _exifrDefault.default).parse(file).then((e)=>{
            resolve(e?.Orientation);
        });
    });
};
const imgToCanvas = function(img, orientation) {
    const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), targetWidth = img.targetWidth || img.width, targetHeight = img.targetHeight || img.height;
    if (orientation === 6) {
        canvas.width = targetHeight;
        canvas.height = targetWidth;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(Math.PI / 180 * 90);
        ctx.drawImage(img, -targetWidth / 2, -targetHeight / 2, canvas.height, canvas.width);
    } else {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    return new Promise((resolve)=>{
        resolve(canvas);
    });
};
const fixBySelector = function(selector) {
    const fixImg = function(img) {
        if (!img.dataset.iosfixed) getOri(img).then((orientation)=>{
            if (orientation == 6) imgToCanvas(img, orientation).then((canvas)=>{
                try {
                    img.src = canvas.toDataURL();
                    img.dataset.iosfixed = true;
                } catch (e) {
                    getURLBase64(img.src).then((base64)=>{
                        img.onload = function() {
                            if (!img.dataset.iosfixed) imgToCanvas(img, orientation).then((canvas)=>{
                                img.src = canvas.toDataURL();
                                img.dataset.iosfixed = true;
                            });
                        };
                        img.src = base64;
                    });
                }
            });
        });
    };
    let imgs = document.querySelectorAll(selector);
    if (imgs.length) for(let i = 0; i < imgs.length; i++){
        let img = imgs[i];
        if (img.tagName.toLowerCase() === 'img') {
            img.crossOrigin = "Anonymous";
            if (img.complete) fixImg(img);
            else img.onload = function() {
                fixImg(img);
            };
        }
    }
    else console.log('fixer WARN no files:' + selector);
};
const computeSize = function(originWidth, originHeight, maxWidth, maxHeight) {
    let targetWidth = originWidth, targetHeight = originHeight;
    const setWidth = function() {
        targetWidth = maxWidth;
        targetHeight = Math.round(maxWidth * (originHeight / originWidth));
    }, setHeight = function() {
        targetHeight = maxHeight;
        targetWidth = Math.round(maxHeight * (originWidth / originHeight));
    };
    if (maxWidth && maxHeight) //限定区间
    {
        if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) // 更宽
            setWidth();
            else // 更高
            setHeight();
        }
    } else if (maxWidth) //限定宽度
    setWidth();
    else if (maxHeight) //限定高度
    setHeight();
    return {
        width: targetWidth,
        height: targetHeight
    };
};
const fixImgFile = function(file, option) {
    const opt = Object.assign({
        maxWidth: null,
        maxHeight: null,
        ratio: 2,
        outType: 'base64' // base64 | blob
    }, option || {});
    return new Promise((resolve, reject)=>{
        if (file.type.indexOf('image/') === 0) getOri(file).then((orientation)=>{
            let oReader = new FileReader();
            oReader.onload = function(e) {
                let base64 = e.target.result;
                let img = document.createElement('img');
                img.onload = function() {
                    if (opt.maxWidth || opt.maxHeight) {
                        let compressSize;
                        if (orientation === 6) {
                            compressSize = computeSize(img.height, img.width, opt.maxWidth, opt.maxHeight);
                            img.targetWidth = compressSize.height;
                            img.targetHeight = compressSize.width;
                        } else {
                            compressSize = computeSize(img.width, img.height, opt.maxWidth, opt.maxHeight);
                            img.targetWidth = compressSize.width;
                            img.targetHeight = compressSize.height;
                        }
                    }
                    imgToCanvas(img, orientation).then((canvas)=>{
                        if (opt.outType === 'blob') canvas.toBlob(resolve, 'image/jpeg', opt.ratio);
                        else resolve(canvas.toDataURL('image/jpeg', opt.ratio));
                    });
                };
                img.src = base64;
            };
            oReader.readAsDataURL(file);
        }).catch((err)=>{
            reject(err);
        });
        else reject("\u975E\u56FE\u7247\u6587\u4EF6\u4E0D\u652F\u6301\u538B\u7F29");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","exifr":"FX0Vp"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"FX0Vp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Exifr", ()=>te);
parcelHelpers.export(exports, "Options", ()=>q);
parcelHelpers.export(exports, "allFormatters", ()=>X);
parcelHelpers.export(exports, "chunkedProps", ()=>G);
parcelHelpers.export(exports, "createDictionary", ()=>U);
parcelHelpers.export(exports, "extendDictionary", ()=>F);
parcelHelpers.export(exports, "fetchUrlAsArrayBuffer", ()=>M);
parcelHelpers.export(exports, "fileParsers", ()=>w);
parcelHelpers.export(exports, "fileReaders", ()=>A);
parcelHelpers.export(exports, "gps", ()=>Se);
parcelHelpers.export(exports, "gpsOnlyOptions", ()=>me);
parcelHelpers.export(exports, "inheritables", ()=>K);
parcelHelpers.export(exports, "orientation", ()=>Pe);
parcelHelpers.export(exports, "orientationOnlyOptions", ()=>Ie);
parcelHelpers.export(exports, "otherSegments", ()=>V);
parcelHelpers.export(exports, "parse", ()=>ie);
parcelHelpers.export(exports, "readBlobAsArrayBuffer", ()=>R);
parcelHelpers.export(exports, "rotateCanvas", ()=>we);
parcelHelpers.export(exports, "rotateCss", ()=>Te);
parcelHelpers.export(exports, "rotation", ()=>Ae);
parcelHelpers.export(exports, "rotations", ()=>ke);
parcelHelpers.export(exports, "segmentParsers", ()=>T);
parcelHelpers.export(exports, "segments", ()=>z);
parcelHelpers.export(exports, "segmentsAndBlocks", ()=>j);
parcelHelpers.export(exports, "sidecar", ()=>st);
parcelHelpers.export(exports, "tagKeys", ()=>E);
parcelHelpers.export(exports, "tagRevivers", ()=>N);
parcelHelpers.export(exports, "tagValues", ()=>B);
parcelHelpers.export(exports, "thumbnail", ()=>ye);
parcelHelpers.export(exports, "thumbnailOnlyOptions", ()=>Ce);
parcelHelpers.export(exports, "thumbnailUrl", ()=>be);
parcelHelpers.export(exports, "tiffBlocks", ()=>H);
parcelHelpers.export(exports, "tiffExtractables", ()=>W);
var global = arguments[3];
var Buffer = require("b495d01d94ca3930").Buffer;
var e = "undefined" != typeof self ? self : global;
const t = "undefined" != typeof navigator, i = t && "undefined" == typeof HTMLImageElement, n = (typeof global, false), s = e.Buffer, r = e.BigInt, a = !!s, o = (e)=>e;
function l(e, t = o) {
    if (n) try {
        return Promise.resolve(t(require(e)));
    } catch (t) {
        console.warn(`Couldn't load ${e}`);
    }
}
let h = e.fetch;
const u = (e)=>h = e;
if (!e.fetch) {
    const e = l("http", (e)=>e), t = l("https", (e)=>e), i = (n, { headers: s } = {})=>new Promise(async (r, a)=>{
            let { port: o, hostname: l, pathname: h, protocol: u, search: c } = new URL(n);
            const f = {
                method: "GET",
                hostname: l,
                path: encodeURI(h) + c,
                headers: s
            };
            "" !== o && (f.port = Number(o));
            const d = ("https:" === u ? await t : await e).request(f, (e)=>{
                if (301 === e.statusCode || 302 === e.statusCode) {
                    let t = new URL(e.headers.location, n).toString();
                    return i(t, {
                        headers: s
                    }).then(r).catch(a);
                }
                r({
                    status: e.statusCode,
                    arrayBuffer: ()=>new Promise((t)=>{
                            let i = [];
                            e.on("data", (e)=>i.push(e)), e.on("end", ()=>t(Buffer.concat(i)));
                        })
                });
            });
            d.on("error", a), d.end();
        });
    u(i);
}
function c(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}
const f = (e)=>p(e) ? void 0 : e, d = (e)=>void 0 !== e;
function p(e) {
    return void 0 === e || (e instanceof Map ? 0 === e.size : 0 === Object.values(e).filter(d).length);
}
function g(e) {
    let t = new Error(e);
    throw delete t.stack, t;
}
function m(e) {
    return "" === (e = (function(e) {
        for(; e.endsWith("\0");)e = e.slice(0, -1);
        return e;
    })(e).trim()) ? void 0 : e;
}
function S(e) {
    let t = function(e) {
        let t = 0;
        return e.ifd0.enabled && (t += 1024), e.exif.enabled && (t += 2048), e.makerNote && (t += 2048), e.userComment && (t += 1024), e.gps.enabled && (t += 512), e.interop.enabled && (t += 100), e.ifd1.enabled && (t += 1024), t + 2048;
    }(e);
    return e.jfif.enabled && (t += 50), e.xmp.enabled && (t += 2e4), e.iptc.enabled && (t += 14e3), e.icc.enabled && (t += 6e3), t;
}
const C = (e)=>String.fromCharCode.apply(null, e), y = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
function b(e) {
    return y ? y.decode(e) : a ? Buffer.from(e).toString("utf8") : decodeURIComponent(escape(C(e)));
}
class I {
    static from(e, t) {
        return e instanceof this && e.le === t ? e : new I(e, void 0, void 0, t);
    }
    constructor(e, t = 0, i, n){
        if ("boolean" == typeof n && (this.le = n), Array.isArray(e) && (e = new Uint8Array(e)), 0 === e) this.byteOffset = 0, this.byteLength = 0;
        else if (e instanceof ArrayBuffer) {
            void 0 === i && (i = e.byteLength - t);
            let n = new DataView(e, t, i);
            this._swapDataView(n);
        } else if (e instanceof Uint8Array || e instanceof DataView || e instanceof I) {
            void 0 === i && (i = e.byteLength - t), (t += e.byteOffset) + i > e.byteOffset + e.byteLength && g("Creating view outside of available memory in ArrayBuffer");
            let n = new DataView(e.buffer, t, i);
            this._swapDataView(n);
        } else if ("number" == typeof e) {
            let t = new DataView(new ArrayBuffer(e));
            this._swapDataView(t);
        } else g("Invalid input argument for BufferView: " + e);
    }
    _swapArrayBuffer(e) {
        this._swapDataView(new DataView(e));
    }
    _swapBuffer(e) {
        this._swapDataView(new DataView(e.buffer, e.byteOffset, e.byteLength));
    }
    _swapDataView(e) {
        this.dataView = e, this.buffer = e.buffer, this.byteOffset = e.byteOffset, this.byteLength = e.byteLength;
    }
    _lengthToEnd(e) {
        return this.byteLength - e;
    }
    set(e, t, i = I) {
        return e instanceof DataView || e instanceof I ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array || g("BufferView.set(): Invalid data argument."), this.toUint8().set(e, t), new i(this, t, e.byteLength);
    }
    subarray(e, t) {
        return t = t || this._lengthToEnd(e), new I(this, e, t);
    }
    toUint8() {
        return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
    }
    getUint8Array(e, t) {
        return new Uint8Array(this.buffer, this.byteOffset + e, t);
    }
    getString(e = 0, t = this.byteLength) {
        return b(this.getUint8Array(e, t));
    }
    getLatin1String(e = 0, t = this.byteLength) {
        let i = this.getUint8Array(e, t);
        return C(i);
    }
    getUnicodeString(e = 0, t = this.byteLength) {
        const i = [];
        for(let n = 0; n < t && e + n < this.byteLength; n += 2)i.push(this.getUint16(e + n));
        return C(i);
    }
    getInt8(e) {
        return this.dataView.getInt8(e);
    }
    getUint8(e) {
        return this.dataView.getUint8(e);
    }
    getInt16(e, t = this.le) {
        return this.dataView.getInt16(e, t);
    }
    getInt32(e, t = this.le) {
        return this.dataView.getInt32(e, t);
    }
    getUint16(e, t = this.le) {
        return this.dataView.getUint16(e, t);
    }
    getUint32(e, t = this.le) {
        return this.dataView.getUint32(e, t);
    }
    getFloat32(e, t = this.le) {
        return this.dataView.getFloat32(e, t);
    }
    getFloat64(e, t = this.le) {
        return this.dataView.getFloat64(e, t);
    }
    getFloat(e, t = this.le) {
        return this.dataView.getFloat32(e, t);
    }
    getDouble(e, t = this.le) {
        return this.dataView.getFloat64(e, t);
    }
    getUintBytes(e, t, i) {
        switch(t){
            case 1:
                return this.getUint8(e, i);
            case 2:
                return this.getUint16(e, i);
            case 4:
                return this.getUint32(e, i);
            case 8:
                return this.getUint64 && this.getUint64(e, i);
        }
    }
    getUint(e, t, i) {
        switch(t){
            case 8:
                return this.getUint8(e, i);
            case 16:
                return this.getUint16(e, i);
            case 32:
                return this.getUint32(e, i);
            case 64:
                return this.getUint64 && this.getUint64(e, i);
        }
    }
    toString(e) {
        return this.dataView.toString(e, this.constructor.name);
    }
    ensureChunk() {}
}
function P(e, t) {
    g(`${e} '${t}' was not loaded, try using full build of exifr.`);
}
class k extends Map {
    constructor(e){
        super(), this.kind = e;
    }
    get(e, t) {
        return this.has(e) || P(this.kind, e), t && (e in t || function(e, t) {
            g(`Unknown ${e} '${t}'.`);
        }(this.kind, e), t[e].enabled || P(this.kind, e)), super.get(e);
    }
    keyList() {
        return Array.from(this.keys());
    }
}
var w = new k("file parser"), T = new k("segment parser"), A = new k("file reader");
function D(e, n) {
    return "string" == typeof e ? O(e, n) : t && !i && e instanceof HTMLImageElement ? O(e.src, n) : e instanceof Uint8Array || e instanceof ArrayBuffer || e instanceof DataView ? new I(e) : t && e instanceof Blob ? x(e, n, "blob", R) : void g("Invalid input argument");
}
function O(e, i) {
    var s;
    return (s = e).startsWith("data:") || s.length > 1e4 ? v(e, i, "base64") : n && e.includes("://") ? x(e, i, "url", M) : n ? v(e, i, "fs") : t ? x(e, i, "url", M) : void g("Invalid input argument");
}
async function x(e, t, i, n) {
    return A.has(i) ? v(e, t, i) : n ? async function(e, t) {
        let i = await t(e);
        return new I(i);
    }(e, n) : void g(`Parser ${i} is not loaded`);
}
async function v(e, t, i) {
    let n = new (A.get(i))(e, t);
    return await n.read(), n;
}
const M = (e)=>h(e).then((e)=>e.arrayBuffer()), R = (e)=>new Promise((t, i)=>{
        let n = new FileReader;
        n.onloadend = ()=>t(n.result || new ArrayBuffer), n.onerror = i, n.readAsArrayBuffer(e);
    });
class L extends Map {
    get tagKeys() {
        return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
    }
    get tagValues() {
        return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
    }
}
function U(e, t, i) {
    let n = new L;
    for (let [e, t] of i)n.set(e, t);
    if (Array.isArray(t)) for (let i of t)e.set(i, n);
    else e.set(t, n);
    return n;
}
function F(e, t, i) {
    let n, s = e.get(t);
    for (n of i)s.set(n[0], n[1]);
}
const E = new Map, B = new Map, N = new Map, G = [
    "chunked",
    "firstChunkSize",
    "firstChunkSizeNode",
    "firstChunkSizeBrowser",
    "chunkSize",
    "chunkLimit"
], V = [
    "jfif",
    "xmp",
    "icc",
    "iptc",
    "ihdr"
], z = [
    "tiff",
    ...V
], H = [
    "ifd0",
    "ifd1",
    "exif",
    "gps",
    "interop"
], j = [
    ...z,
    ...H
], W = [
    "makerNote",
    "userComment"
], K = [
    "translateKeys",
    "translateValues",
    "reviveValues",
    "multiSegment"
], X = [
    ...K,
    "sanitize",
    "mergeOutput",
    "silentErrors"
];
class _ {
    get translate() {
        return this.translateKeys || this.translateValues || this.reviveValues;
    }
}
class Y extends _ {
    get needed() {
        return this.enabled || this.deps.size > 0;
    }
    constructor(e, t, i, n){
        if (super(), c(this, "enabled", !1), c(this, "skip", new Set), c(this, "pick", new Set), c(this, "deps", new Set), c(this, "translateKeys", !1), c(this, "translateValues", !1), c(this, "reviveValues", !1), this.key = e, this.enabled = t, this.parse = this.enabled, this.applyInheritables(n), this.canBeFiltered = H.includes(e), this.canBeFiltered && (this.dict = E.get(e)), void 0 !== i) {
            if (Array.isArray(i)) this.parse = this.enabled = !0, this.canBeFiltered && i.length > 0 && this.translateTagSet(i, this.pick);
            else if ("object" == typeof i) {
                if (this.enabled = !0, this.parse = !1 !== i.parse, this.canBeFiltered) {
                    let { pick: e, skip: t } = i;
                    e && e.length > 0 && this.translateTagSet(e, this.pick), t && t.length > 0 && this.translateTagSet(t, this.skip);
                }
                this.applyInheritables(i);
            } else !0 === i || !1 === i ? this.parse = this.enabled = i : g(`Invalid options argument: ${i}`);
        }
    }
    applyInheritables(e) {
        let t, i;
        for (t of K)i = e[t], void 0 !== i && (this[t] = i);
    }
    translateTagSet(e, t) {
        if (this.dict) {
            let i, n, { tagKeys: s, tagValues: r } = this.dict;
            for (i of e)"string" == typeof i ? (n = r.indexOf(i), -1 === n && (n = s.indexOf(Number(i))), -1 !== n && t.add(Number(s[n]))) : t.add(i);
        } else for (let i of e)t.add(i);
    }
    finalizeFilters() {
        !this.enabled && this.deps.size > 0 ? (this.enabled = !0, ee(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && ee(this.pick, this.deps);
    }
}
var $ = {
    jfif: !1,
    tiff: !0,
    xmp: !1,
    icc: !1,
    iptc: !1,
    ifd0: !0,
    ifd1: !1,
    exif: !0,
    gps: !0,
    interop: !1,
    ihdr: void 0,
    makerNote: !1,
    userComment: !1,
    multiSegment: !1,
    skip: [],
    pick: [],
    translateKeys: !0,
    translateValues: !0,
    reviveValues: !0,
    sanitize: !0,
    mergeOutput: !0,
    silentErrors: !0,
    chunked: !0,
    firstChunkSize: void 0,
    firstChunkSizeNode: 512,
    firstChunkSizeBrowser: 65536,
    chunkSize: 65536,
    chunkLimit: 5
}, J = new Map;
class q extends _ {
    static useCached(e) {
        let t = J.get(e);
        return void 0 !== t || (t = new this(e), J.set(e, t)), t;
    }
    constructor(e){
        super(), !0 === e ? this.setupFromTrue() : void 0 === e ? this.setupFromUndefined() : Array.isArray(e) ? this.setupFromArray(e) : "object" == typeof e ? this.setupFromObject(e) : g(`Invalid options argument ${e}`), void 0 === this.firstChunkSize && (this.firstChunkSize = t ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
    }
    setupFromUndefined() {
        let e;
        for (e of G)this[e] = $[e];
        for (e of X)this[e] = $[e];
        for (e of W)this[e] = $[e];
        for (e of j)this[e] = new Y(e, $[e], void 0, this);
    }
    setupFromTrue() {
        let e;
        for (e of G)this[e] = $[e];
        for (e of X)this[e] = $[e];
        for (e of W)this[e] = !0;
        for (e of j)this[e] = new Y(e, !0, void 0, this);
    }
    setupFromArray(e) {
        let t;
        for (t of G)this[t] = $[t];
        for (t of X)this[t] = $[t];
        for (t of W)this[t] = $[t];
        for (t of j)this[t] = new Y(t, !1, void 0, this);
        this.setupGlobalFilters(e, void 0, H);
    }
    setupFromObject(e) {
        let t;
        for (t of (H.ifd0 = H.ifd0 || H.image, H.ifd1 = H.ifd1 || H.thumbnail, Object.assign(this, e), G))this[t] = Z(e[t], $[t]);
        for (t of X)this[t] = Z(e[t], $[t]);
        for (t of W)this[t] = Z(e[t], $[t]);
        for (t of z)this[t] = new Y(t, $[t], e[t], this);
        for (t of H)this[t] = new Y(t, $[t], e[t], this.tiff);
        this.setupGlobalFilters(e.pick, e.skip, H, j), !0 === e.tiff ? this.batchEnableWithBool(H, !0) : !1 === e.tiff ? this.batchEnableWithUserValue(H, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, H) : "object" == typeof e.tiff && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, H);
    }
    batchEnableWithBool(e, t) {
        for (let i of e)this[i].enabled = t;
    }
    batchEnableWithUserValue(e, t) {
        for (let i of e){
            let e = t[i];
            this[i].enabled = !1 !== e && void 0 !== e;
        }
    }
    setupGlobalFilters(e, t, i, n = i) {
        if (e && e.length) {
            for (let e of n)this[e].enabled = !1;
            let t = Q(e, i);
            for (let [e, i] of t)ee(this[e].pick, i), this[e].enabled = !0;
        } else if (t && t.length) {
            let e = Q(t, i);
            for (let [t, i] of e)ee(this[t].skip, i);
        }
    }
    filterNestedSegmentTags() {
        let { ifd0: e, exif: t, xmp: i, iptc: n, icc: s } = this;
        this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), i.enabled || e.skip.add(700), n.enabled || e.skip.add(33723), s.enabled || e.skip.add(34675);
    }
    traverseTiffDependencyTree() {
        let { ifd0: e, exif: t, gps: i, interop: n } = this;
        n.needed && (t.deps.add(40965), e.deps.add(40965)), t.needed && e.deps.add(34665), i.needed && e.deps.add(34853), this.tiff.enabled = H.some((e)=>!0 === this[e].enabled) || this.makerNote || this.userComment;
        for (let e of H)this[e].finalizeFilters();
    }
    get onlyTiff() {
        return !V.map((e)=>this[e].enabled).some((e)=>!0 === e) && this.tiff.enabled;
    }
    checkLoadedPlugins() {
        for (let e of z)this[e].enabled && !T.has(e) && P("segment parser", e);
    }
}
function Q(e, t) {
    let i, n, s, r, a = [];
    for (s of t){
        for (r of (i = E.get(s), n = [], i))(e.includes(r[0]) || e.includes(r[1])) && n.push(r[0]);
        n.length && a.push([
            s,
            n
        ]);
    }
    return a;
}
function Z(e, t) {
    return void 0 !== e ? e : void 0 !== t ? t : void 0;
}
function ee(e, t) {
    for (let i of t)e.add(i);
}
c(q, "default", $);
class te {
    constructor(e){
        c(this, "parsers", {}), c(this, "output", {}), c(this, "errors", []), c(this, "pushToErrors", (e)=>this.errors.push(e)), this.options = q.useCached(e);
    }
    async read(e) {
        this.file = await D(e, this.options);
    }
    setup() {
        if (this.fileParser) return;
        let { file: e } = this, t = e.getUint16(0);
        for (let [i, n] of w)if (n.canHandle(e, t)) return this.fileParser = new n(this.options, this.file, this.parsers), e[i] = !0;
        this.file.close && this.file.close(), g("Unknown file format");
    }
    async parse() {
        let { output: e, errors: t } = this;
        return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t.length > 0 && (e.errors = t), f(e);
    }
    async executeParsers() {
        let { output: e } = this;
        await this.fileParser.parse();
        let t = Object.values(this.parsers).map(async (t)=>{
            let i = await t.parse();
            t.assignToOutput(e, i);
        });
        this.options.silentErrors && (t = t.map((e)=>e.catch(this.pushToErrors))), await Promise.all(t);
    }
    async extractThumbnail() {
        this.setup();
        let { options: e, file: t } = this, i = T.get("tiff", e);
        var n;
        if (t.tiff ? n = {
            start: 0,
            type: "tiff"
        } : t.jpeg && (n = await this.fileParser.getOrFindSegment("tiff")), void 0 === n) return;
        let s = await this.fileParser.ensureSegmentChunk(n), r = this.parsers.tiff = new i(s, e, t), a = await r.extractThumbnail();
        return t.close && t.close(), a;
    }
}
async function ie(e, t) {
    let i = new te(t);
    return await i.read(e), i.parse();
}
var ne = Object.freeze({
    __proto__: null,
    parse: ie,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q
});
class se {
    constructor(e, t, i){
        c(this, "errors", []), c(this, "ensureSegmentChunk", async (e)=>{
            let t = e.start, i = e.size || 65536;
            if (this.file.chunked) {
                if (this.file.available(t, i)) e.chunk = this.file.subarray(t, i);
                else try {
                    e.chunk = await this.file.readChunk(t, i);
                } catch (t) {
                    g(`Couldn't read segment: ${JSON.stringify(e)}. ${t.message}`);
                }
            } else this.file.byteLength > t + i ? e.chunk = this.file.subarray(t, i) : void 0 === e.size ? e.chunk = this.file.subarray(t) : g("Segment unreachable: " + JSON.stringify(e));
            return e.chunk;
        }), this.extendOptions && this.extendOptions(e), this.options = e, this.file = t, this.parsers = i;
    }
    injectSegment(e, t) {
        this.options[e].enabled && this.createParser(e, t);
    }
    createParser(e, t) {
        let i = new (T.get(e))(t, this.options, this.file);
        return this.parsers[e] = i;
    }
    createParsers(e) {
        for (let t of e){
            let { type: e, chunk: i } = t, n = this.options[e];
            if (n && n.enabled) {
                let t = this.parsers[e];
                t && t.append || t || this.createParser(e, i);
            }
        }
    }
    async readSegments(e) {
        let t = e.map(this.ensureSegmentChunk);
        await Promise.all(t);
    }
}
class re {
    static findPosition(e, t) {
        let i = e.getUint16(t + 2) + 2, n = "function" == typeof this.headerLength ? this.headerLength(e, t, i) : this.headerLength, s = t + n, r = i - n;
        return {
            offset: t,
            length: i,
            headerLength: n,
            start: s,
            size: r,
            end: s + r
        };
    }
    static parse(e, t = {}) {
        return new this(e, new q({
            [this.type]: t
        }), e).parse();
    }
    normalizeInput(e) {
        return e instanceof I ? e : new I(e);
    }
    constructor(e, t = {}, i){
        c(this, "errors", []), c(this, "raw", new Map), c(this, "handleError", (e)=>{
            if (!this.options.silentErrors) throw e;
            this.errors.push(e.message);
        }), this.chunk = this.normalizeInput(e), this.file = i, this.type = this.constructor.type, this.globalOptions = this.options = t, this.localOptions = t[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
    }
    translate() {
        this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
    }
    get output() {
        return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
    }
    translateBlock(e, t) {
        let i = N.get(t), n = B.get(t), s = E.get(t), r = this.options[t], a = r.reviveValues && !!i, o = r.translateValues && !!n, l = r.translateKeys && !!s, h = {};
        for (let [t, r] of e)a && i.has(t) ? r = i.get(t)(r) : o && n.has(t) && (r = this.translateValue(r, n.get(t))), l && s.has(t) && (t = s.get(t) || t), h[t] = r;
        return h;
    }
    translateValue(e, t) {
        return t[e] || t.DEFAULT || e;
    }
    assignToOutput(e, t) {
        this.assignObjectToOutput(e, this.constructor.type, t);
    }
    assignObjectToOutput(e, t, i) {
        if (this.globalOptions.mergeOutput) return Object.assign(e, i);
        e[t] ? Object.assign(e[t], i) : e[t] = i;
    }
}
c(re, "headerLength", 4), c(re, "type", void 0), c(re, "multiSegment", !1), c(re, "canHandle", ()=>!1);
function ae(e) {
    return 192 === e || 194 === e || 196 === e || 219 === e || 221 === e || 218 === e || 254 === e;
}
function oe(e) {
    return e >= 224 && e <= 239;
}
function le(e, t, i) {
    for (let [n, s] of T)if (s.canHandle(e, t, i)) return n;
}
class he extends se {
    constructor(...e){
        super(...e), c(this, "appSegments", []), c(this, "jpegSegments", []), c(this, "unknownSegments", []);
    }
    static canHandle(e, t) {
        return 65496 === t;
    }
    async parse() {
        await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
    }
    setupSegmentFinderArgs(e) {
        !0 === e ? (this.findAll = !0, this.wanted = new Set(T.keyList())) : (e = void 0 === e ? T.keyList().filter((e)=>this.options[e].enabled) : e.filter((e)=>this.options[e].enabled && T.has(e)), this.findAll = !1, this.remaining = new Set(e), this.wanted = new Set(e)), this.unfinishedMultiSegment = !1;
    }
    async findAppSegments(e = 0, t) {
        this.setupSegmentFinderArgs(t);
        let { file: i, findAll: n, wanted: s, remaining: r } = this;
        if (!n && this.file.chunked && (n = Array.from(s).some((e)=>{
            let t = T.get(e), i = this.options[e];
            return t.multiSegment && i.multiSegment;
        }), n && await this.file.readWhole()), e = this.findAppSegmentsInRange(e, i.byteLength), !this.options.onlyTiff && i.chunked) {
            let t = !1;
            for(; r.size > 0 && !t && (i.canReadNextChunk || this.unfinishedMultiSegment);){
                let { nextChunkOffset: n } = i, s = this.appSegments.some((e)=>!this.file.available(e.offset || e.start, e.length || e.size));
                if (t = e > n && !s ? !await i.readNextChunk(e) : !await i.readNextChunk(n), void 0 === (e = this.findAppSegmentsInRange(e, i.byteLength))) return;
            }
        }
    }
    findAppSegmentsInRange(e, t) {
        t -= 2;
        let i, n, s, r, a, o, { file: l, findAll: h, wanted: u, remaining: c, options: f } = this;
        for(; e < t; e++)if (255 === l.getUint8(e)) {
            if (i = l.getUint8(e + 1), oe(i)) {
                if (n = l.getUint16(e + 2), s = le(l, e, n), s && u.has(s) && (r = T.get(s), a = r.findPosition(l, e), o = f[s], a.type = s, this.appSegments.push(a), !h && (r.multiSegment && o.multiSegment ? (this.unfinishedMultiSegment = a.chunkNumber < a.chunkCount, this.unfinishedMultiSegment || c.delete(s)) : c.delete(s), 0 === c.size))) break;
                f.recordUnknownSegments && (a = re.findPosition(l, e), a.marker = i, this.unknownSegments.push(a)), e += n + 1;
            } else if (ae(i)) {
                if (n = l.getUint16(e + 2), 218 === i && !1 !== f.stopAfterSos) return;
                f.recordJpegSegments && this.jpegSegments.push({
                    offset: e,
                    length: n,
                    marker: i
                }), e += n + 1;
            }
        }
        return e;
    }
    mergeMultiSegments() {
        if (!this.appSegments.some((e)=>e.multiSegment)) return;
        let e = function(e, t) {
            let i, n, s, r = new Map;
            for(let a = 0; a < e.length; a++)i = e[a], n = i[t], r.has(n) ? s = r.get(n) : r.set(n, s = []), s.push(i);
            return Array.from(r);
        }(this.appSegments, "type");
        this.mergedAppSegments = e.map(([e, t])=>{
            let i = T.get(e, this.options);
            if (i.handleMultiSegments) return {
                type: e,
                chunk: i.handleMultiSegments(t)
            };
            return t[0];
        });
    }
    getSegment(e) {
        return this.appSegments.find((t)=>t.type === e);
    }
    async getOrFindSegment(e) {
        let t = this.getSegment(e);
        return void 0 === t && (await this.findAppSegments(0, [
            e
        ]), t = this.getSegment(e)), t;
    }
}
c(he, "type", "jpeg"), w.set("jpeg", he);
const ue = [
    void 0,
    1,
    1,
    2,
    4,
    8,
    1,
    1,
    2,
    4,
    8,
    4,
    8,
    4
];
class ce extends re {
    parseHeader() {
        var e = this.chunk.getUint16();
        18761 === e ? this.le = !0 : 19789 === e && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0;
    }
    parseTags(e, t, i = new Map) {
        let { pick: n, skip: s } = this.options[t];
        n = new Set(n);
        let r = n.size > 0, a = 0 === s.size, o = this.chunk.getUint16(e);
        e += 2;
        for(let l = 0; l < o; l++){
            let o = this.chunk.getUint16(e);
            if (r) {
                if (n.has(o) && (i.set(o, this.parseTag(e, o, t)), n.delete(o), 0 === n.size)) break;
            } else !a && s.has(o) || i.set(o, this.parseTag(e, o, t));
            e += 12;
        }
        return i;
    }
    parseTag(e, t, i) {
        let { chunk: n } = this, s = n.getUint16(e + 2), r = n.getUint32(e + 4), a = ue[s];
        if (a * r <= 4 ? e += 8 : e = n.getUint32(e + 8), (s < 1 || s > 13) && g(`Invalid TIFF value type. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${s}, offset ${e}`), e > n.byteLength && g(`Invalid TIFF value offset. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${s}, offset ${e} is outside of chunk size ${n.byteLength}`), 1 === s) return n.getUint8Array(e, r);
        if (2 === s) return m(n.getString(e, r));
        if (7 === s) return n.getUint8Array(e, r);
        if (1 === r) return this.parseTagValue(s, e);
        {
            let t = new (function(e) {
                switch(e){
                    case 1:
                        return Uint8Array;
                    case 3:
                        return Uint16Array;
                    case 4:
                        return Uint32Array;
                    case 5:
                        return Array;
                    case 6:
                        return Int8Array;
                    case 8:
                        return Int16Array;
                    case 9:
                        return Int32Array;
                    case 10:
                        return Array;
                    case 11:
                        return Float32Array;
                    case 12:
                        return Float64Array;
                    default:
                        return Array;
                }
            }(s))(r), i = a;
            for(let n = 0; n < r; n++)t[n] = this.parseTagValue(s, e), e += i;
            return t;
        }
    }
    parseTagValue(e, t) {
        let { chunk: i } = this;
        switch(e){
            case 1:
                return i.getUint8(t);
            case 3:
                return i.getUint16(t);
            case 4:
                return i.getUint32(t);
            case 5:
                return i.getUint32(t) / i.getUint32(t + 4);
            case 6:
                return i.getInt8(t);
            case 8:
                return i.getInt16(t);
            case 9:
                return i.getInt32(t);
            case 10:
                return i.getInt32(t) / i.getInt32(t + 4);
            case 11:
                return i.getFloat(t);
            case 12:
                return i.getDouble(t);
            case 13:
                return i.getUint32(t);
            default:
                g(`Invalid tiff type ${e}`);
        }
    }
}
class fe extends ce {
    static canHandle(e, t) {
        return 225 === e.getUint8(t + 1) && 1165519206 === e.getUint32(t + 4) && 0 === e.getUint16(t + 8);
    }
    async parse() {
        this.parseHeader();
        let { options: e } = this;
        return e.ifd0.enabled && await this.parseIfd0Block(), e.exif.enabled && await this.safeParse("parseExifBlock"), e.gps.enabled && await this.safeParse("parseGpsBlock"), e.interop.enabled && await this.safeParse("parseInteropBlock"), e.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
    }
    safeParse(e) {
        let t = this[e]();
        return void 0 !== t.catch && (t = t.catch(this.handleError)), t;
    }
    findIfd0Offset() {
        void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
    }
    findIfd1Offset() {
        if (void 0 === this.ifd1Offset) {
            this.findIfd0Offset();
            let e = this.chunk.getUint16(this.ifd0Offset), t = this.ifd0Offset + 2 + 12 * e;
            this.ifd1Offset = this.chunk.getUint32(t);
        }
    }
    parseBlock(e, t) {
        let i = new Map;
        return this[t] = i, this.parseTags(e, t, i), i;
    }
    async parseIfd0Block() {
        if (this.ifd0) return;
        let { file: e } = this;
        this.findIfd0Offset(), this.ifd0Offset < 8 && g("Malformed EXIF data"), !e.chunked && this.ifd0Offset > e.byteLength && g(`IFD0 offset points to outside of file.\nthis.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`), e.tiff && await e.ensureChunk(this.ifd0Offset, S(this.options));
        let t = this.parseBlock(this.ifd0Offset, "ifd0");
        return 0 !== t.size ? (this.exifOffset = t.get(34665), this.interopOffset = t.get(40965), this.gpsOffset = t.get(34853), this.xmp = t.get(700), this.iptc = t.get(33723), this.icc = t.get(34675), this.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t) : void 0;
    }
    async parseExifBlock() {
        if (this.exif) return;
        if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.exifOffset) return;
        this.file.tiff && await this.file.ensureChunk(this.exifOffset, S(this.options));
        let e = this.parseBlock(this.exifOffset, "exif");
        return this.interopOffset || (this.interopOffset = e.get(40965)), this.makerNote = e.get(37500), this.userComment = e.get(37510), this.options.sanitize && (e.delete(40965), e.delete(37500), e.delete(37510)), this.unpack(e, 41728), this.unpack(e, 41729), e;
    }
    unpack(e, t) {
        let i = e.get(t);
        i && 1 === i.length && e.set(t, i[0]);
    }
    async parseGpsBlock() {
        if (this.gps) return;
        if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.gpsOffset) return;
        let e = this.parseBlock(this.gpsOffset, "gps");
        return e && e.has(2) && e.has(4) && (e.set("latitude", de(...e.get(2), e.get(1))), e.set("longitude", de(...e.get(4), e.get(3)))), e;
    }
    async parseInteropBlock() {
        if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), void 0 !== this.interopOffset || this.exif || await this.parseExifBlock(), void 0 !== this.interopOffset)) return this.parseBlock(this.interopOffset, "interop");
    }
    async parseThumbnailBlock(e = !1) {
        if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = !0), this.ifd1;
    }
    async extractThumbnail() {
        if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(!0), void 0 === this.ifd1) return;
        let e = this.ifd1.get(513), t = this.ifd1.get(514);
        return this.chunk.getUint8Array(e, t);
    }
    get image() {
        return this.ifd0;
    }
    get thumbnail() {
        return this.ifd1;
    }
    createOutput() {
        let e, t, i, n = {};
        for (t of H)if (e = this[t], !p(e)) {
            if (i = this.canTranslate ? this.translateBlock(e, t) : Object.fromEntries(e), this.options.mergeOutput) {
                if ("ifd1" === t) continue;
                Object.assign(n, i);
            } else n[t] = i;
        }
        return this.makerNote && (n.makerNote = this.makerNote), this.userComment && (n.userComment = this.userComment), n;
    }
    assignToOutput(e, t) {
        if (this.globalOptions.mergeOutput) Object.assign(e, t);
        else for (let [i, n] of Object.entries(t))this.assignObjectToOutput(e, i, n);
    }
}
function de(e, t, i, n) {
    var s = e + t / 60 + i / 3600;
    return "S" !== n && "W" !== n || (s *= -1), s;
}
c(fe, "type", "tiff"), c(fe, "headerLength", 10), T.set("tiff", fe);
var pe = Object.freeze({
    __proto__: null,
    default: ne,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q,
    parse: ie
});
const ge = {
    ifd0: !1,
    ifd1: !1,
    exif: !1,
    gps: !1,
    interop: !1,
    sanitize: !1,
    reviveValues: !0,
    translateKeys: !1,
    translateValues: !1,
    mergeOutput: !1
}, me = Object.assign({}, ge, {
    firstChunkSize: 4e4,
    gps: [
        1,
        2,
        3,
        4
    ]
});
async function Se(e) {
    let t = new te(me);
    await t.read(e);
    let i = await t.parse();
    if (i && i.gps) {
        let { latitude: e, longitude: t } = i.gps;
        return {
            latitude: e,
            longitude: t
        };
    }
}
const Ce = Object.assign({}, ge, {
    tiff: !1,
    ifd1: !0,
    mergeOutput: !1
});
async function ye(e) {
    let t = new te(Ce);
    await t.read(e);
    let i = await t.extractThumbnail();
    return i && a ? s.from(i) : i;
}
async function be(e) {
    let t = await this.thumbnail(e);
    if (void 0 !== t) {
        let e = new Blob([
            t
        ]);
        return URL.createObjectURL(e);
    }
}
const Ie = Object.assign({}, ge, {
    firstChunkSize: 4e4,
    ifd0: [
        274
    ]
});
async function Pe(e) {
    let t = new te(Ie);
    await t.read(e);
    let i = await t.parse();
    if (i && i.ifd0) return i.ifd0[274];
}
const ke = Object.freeze({
    1: {
        dimensionSwapped: !1,
        scaleX: 1,
        scaleY: 1,
        deg: 0,
        rad: 0
    },
    2: {
        dimensionSwapped: !1,
        scaleX: -1,
        scaleY: 1,
        deg: 0,
        rad: 0
    },
    3: {
        dimensionSwapped: !1,
        scaleX: 1,
        scaleY: 1,
        deg: 180,
        rad: 180 * Math.PI / 180
    },
    4: {
        dimensionSwapped: !1,
        scaleX: -1,
        scaleY: 1,
        deg: 180,
        rad: 180 * Math.PI / 180
    },
    5: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: -1,
        deg: 90,
        rad: 90 * Math.PI / 180
    },
    6: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: 1,
        deg: 90,
        rad: 90 * Math.PI / 180
    },
    7: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: -1,
        deg: 270,
        rad: 270 * Math.PI / 180
    },
    8: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: 1,
        deg: 270,
        rad: 270 * Math.PI / 180
    }
});
let we = !0, Te = !0;
if ("object" == typeof navigator) {
    let e = navigator.userAgent;
    if (e.includes("iPad") || e.includes("iPhone")) {
        let t = e.match(/OS (\d+)_(\d+)/);
        if (t) {
            let [, e, i] = t, n = Number(e) + .1 * Number(i);
            we = n < 13.4, Te = !1;
        }
    } else if (e.includes("OS X 10")) {
        let [, t] = e.match(/OS X 10[_.](\d+)/);
        we = Te = Number(t) < 15;
    }
    if (e.includes("Chrome/")) {
        let [, t] = e.match(/Chrome\/(\d+)/);
        we = Te = Number(t) < 81;
    } else if (e.includes("Firefox/")) {
        let [, t] = e.match(/Firefox\/(\d+)/);
        we = Te = Number(t) < 77;
    }
}
async function Ae(e) {
    let t = await Pe(e);
    return Object.assign({
        canvas: we,
        css: Te
    }, ke[t]);
}
class De extends I {
    constructor(...e){
        super(...e), c(this, "ranges", new Oe), 0 !== this.byteLength && this.ranges.add(0, this.byteLength);
    }
    _tryExtend(e, t, i) {
        if (0 === e && 0 === this.byteLength && i) {
            let e = new DataView(i.buffer || i, i.byteOffset, i.byteLength);
            this._swapDataView(e);
        } else {
            let i = e + t;
            if (i > this.byteLength) {
                let { dataView: e } = this._extend(i);
                this._swapDataView(e);
            }
        }
    }
    _extend(e) {
        let t;
        t = a ? s.allocUnsafe(e) : new Uint8Array(e);
        let i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return t.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), {
            uintView: t,
            dataView: i
        };
    }
    subarray(e, t, i = !1) {
        return t = t || this._lengthToEnd(e), i && this._tryExtend(e, t), this.ranges.add(e, t), super.subarray(e, t);
    }
    set(e, t, i = !1) {
        i && this._tryExtend(t, e.byteLength, e);
        let n = super.set(e, t);
        return this.ranges.add(t, n.byteLength), n;
    }
    async ensureChunk(e, t) {
        this.chunked && (this.ranges.available(e, t) || await this.readChunk(e, t));
    }
    available(e, t) {
        return this.ranges.available(e, t);
    }
}
class Oe {
    constructor(){
        c(this, "list", []);
    }
    get length() {
        return this.list.length;
    }
    add(e, t, i = 0) {
        let n = e + t, s = this.list.filter((t)=>xe(e, t.offset, n) || xe(e, t.end, n));
        if (s.length > 0) {
            e = Math.min(e, ...s.map((e)=>e.offset)), n = Math.max(n, ...s.map((e)=>e.end)), t = n - e;
            let i = s.shift();
            i.offset = e, i.length = t, i.end = n, this.list = this.list.filter((e)=>!s.includes(e));
        } else this.list.push({
            offset: e,
            length: t,
            end: n
        });
    }
    available(e, t) {
        let i = e + t;
        return this.list.some((t)=>t.offset <= e && i <= t.end);
    }
}
function xe(e, t, i) {
    return e <= t && t <= i;
}
class ve extends De {
    constructor(e, t){
        super(0), c(this, "chunksRead", 0), this.input = e, this.options = t;
    }
    async readWhole() {
        this.chunked = !1, await this.readChunk(this.nextChunkOffset);
    }
    async readChunked() {
        this.chunked = !0, await this.readChunk(0, this.options.firstChunkSize);
    }
    async readNextChunk(e = this.nextChunkOffset) {
        if (this.fullyRead) return this.chunksRead++, !1;
        let t = this.options.chunkSize, i = await this.readChunk(e, t);
        return !!i && i.byteLength === t;
    }
    async readChunk(e, t) {
        if (this.chunksRead++, 0 !== (t = this.safeWrapAddress(e, t))) return this._readChunk(e, t);
    }
    safeWrapAddress(e, t) {
        return void 0 !== this.size && e + t > this.size ? Math.max(0, this.size - e) : t;
    }
    get nextChunkOffset() {
        if (0 !== this.ranges.list.length) return this.ranges.list[0].length;
    }
    get canReadNextChunk() {
        return this.chunksRead < this.options.chunkLimit;
    }
    get fullyRead() {
        return void 0 !== this.size && this.nextChunkOffset === this.size;
    }
    read() {
        return this.options.chunked ? this.readChunked() : this.readWhole();
    }
    close() {}
}
A.set("blob", class extends ve {
    async readWhole() {
        this.chunked = !1;
        let e = await R(this.input);
        this._swapArrayBuffer(e);
    }
    readChunked() {
        return this.chunked = !0, this.size = this.input.size, super.readChunked();
    }
    async _readChunk(e, t) {
        let i = t ? e + t : void 0, n = this.input.slice(e, i), s = await R(n);
        return this.set(s, e, !0);
    }
});
var Me = Object.freeze({
    __proto__: null,
    default: pe,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q,
    parse: ie,
    gpsOnlyOptions: me,
    gps: Se,
    thumbnailOnlyOptions: Ce,
    thumbnail: ye,
    thumbnailUrl: be,
    orientationOnlyOptions: Ie,
    orientation: Pe,
    rotations: ke,
    get rotateCanvas () {
        return we;
    },
    get rotateCss () {
        return Te;
    },
    rotation: Ae
});
A.set("url", class extends ve {
    async readWhole() {
        this.chunked = !1;
        let e = await M(this.input);
        e instanceof ArrayBuffer ? this._swapArrayBuffer(e) : e instanceof Uint8Array && this._swapBuffer(e);
    }
    async _readChunk(e, t) {
        let i = t ? e + t - 1 : void 0, n = this.options.httpHeaders || {};
        (e || i) && (n.range = `bytes=${[
            e,
            i
        ].join("-")}`);
        let s = await h(this.input, {
            headers: n
        }), r = await s.arrayBuffer(), a = r.byteLength;
        if (416 !== s.status) return a !== t && (this.size = e + a), this.set(r, e, !0);
    }
});
I.prototype.getUint64 = function(e) {
    let t = this.getUint32(e), i = this.getUint32(e + 4);
    return t < 1048575 ? t << 32 | i : (console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."), r(t) << r(32) | r(i));
};
class Re extends se {
    parseBoxes(e = 0) {
        let t = [];
        for(; e < this.file.byteLength - 4;){
            let i = this.parseBoxHead(e);
            if (t.push(i), 0 === i.length) break;
            e += i.length;
        }
        return t;
    }
    parseSubBoxes(e) {
        e.boxes = this.parseBoxes(e.start);
    }
    findBox(e, t) {
        return void 0 === e.boxes && this.parseSubBoxes(e), e.boxes.find((e)=>e.kind === t);
    }
    parseBoxHead(e) {
        let t = this.file.getUint32(e), i = this.file.getString(e + 4, 4), n = e + 8;
        return 1 === t && (t = this.file.getUint64(e + 8), n += 8), {
            offset: e,
            length: t,
            kind: i,
            start: n
        };
    }
    parseBoxFullHead(e) {
        if (void 0 !== e.version) return;
        let t = this.file.getUint32(e.start);
        e.version = t >> 24, e.start += 4;
    }
}
class Le extends Re {
    static canHandle(e, t) {
        if (0 !== t) return !1;
        let i = e.getUint16(2);
        if (i > 50) return !1;
        let n = 16, s = [];
        for(; n < i;)s.push(e.getString(n, 4)), n += 4;
        return s.includes(this.type);
    }
    async parse() {
        let e = this.file.getUint32(0), t = this.parseBoxHead(e);
        for(; "meta" !== t.kind;)e += t.length, await this.file.ensureChunk(e, 16), t = this.parseBoxHead(e);
        await this.file.ensureChunk(t.offset, t.length), this.parseBoxFullHead(t), this.parseSubBoxes(t), this.options.icc.enabled && await this.findIcc(t), this.options.tiff.enabled && await this.findExif(t);
    }
    async registerSegment(e, t, i) {
        await this.file.ensureChunk(t, i);
        let n = this.file.subarray(t, i);
        this.createParser(e, n);
    }
    async findIcc(e) {
        let t = this.findBox(e, "iprp");
        if (void 0 === t) return;
        let i = this.findBox(t, "ipco");
        if (void 0 === i) return;
        let n = this.findBox(i, "colr");
        void 0 !== n && await this.registerSegment("icc", n.offset + 12, n.length);
    }
    async findExif(e) {
        let t = this.findBox(e, "iinf");
        if (void 0 === t) return;
        let i = this.findBox(e, "iloc");
        if (void 0 === i) return;
        let n = this.findExifLocIdInIinf(t), s = this.findExtentInIloc(i, n);
        if (void 0 === s) return;
        let [r, a] = s;
        await this.file.ensureChunk(r, a);
        let o = 4 + this.file.getUint32(r);
        r += o, a -= o, await this.registerSegment("tiff", r, a);
    }
    findExifLocIdInIinf(e) {
        this.parseBoxFullHead(e);
        let t, i, n, s, r = e.start, a = this.file.getUint16(r);
        for(r += 2; a--;){
            if (t = this.parseBoxHead(r), this.parseBoxFullHead(t), i = t.start, t.version >= 2 && (n = 3 === t.version ? 4 : 2, s = this.file.getString(i + n + 2, 4), "Exif" === s)) return this.file.getUintBytes(i, n);
            r += t.length;
        }
    }
    get8bits(e) {
        let t = this.file.getUint8(e);
        return [
            t >> 4,
            15 & t
        ];
    }
    findExtentInIloc(e, t) {
        this.parseBoxFullHead(e);
        let i = e.start, [n, s] = this.get8bits(i++), [r, a] = this.get8bits(i++), o = 2 === e.version ? 4 : 2, l = 1 === e.version || 2 === e.version ? 2 : 0, h = a + n + s, u = 2 === e.version ? 4 : 2, c = this.file.getUintBytes(i, u);
        for(i += u; c--;){
            let e = this.file.getUintBytes(i, o);
            i += o + l + 2 + r;
            let u = this.file.getUint16(i);
            if (i += 2, e === t) return u > 1 && console.warn("ILOC box has more than one extent but we're only processing one\nPlease create an issue at https://github.com/MikeKovarik/exifr with this file"), [
                this.file.getUintBytes(i + a, n),
                this.file.getUintBytes(i + a + n, s)
            ];
            i += u * h;
        }
    }
}
class Ue extends Le {
}
c(Ue, "type", "heic");
class Fe extends Le {
}
c(Fe, "type", "avif"), w.set("heic", Ue), w.set("avif", Fe), U(E, [
    "ifd0",
    "ifd1"
], [
    [
        256,
        "ImageWidth"
    ],
    [
        257,
        "ImageHeight"
    ],
    [
        258,
        "BitsPerSample"
    ],
    [
        259,
        "Compression"
    ],
    [
        262,
        "PhotometricInterpretation"
    ],
    [
        270,
        "ImageDescription"
    ],
    [
        271,
        "Make"
    ],
    [
        272,
        "Model"
    ],
    [
        273,
        "StripOffsets"
    ],
    [
        274,
        "Orientation"
    ],
    [
        277,
        "SamplesPerPixel"
    ],
    [
        278,
        "RowsPerStrip"
    ],
    [
        279,
        "StripByteCounts"
    ],
    [
        282,
        "XResolution"
    ],
    [
        283,
        "YResolution"
    ],
    [
        284,
        "PlanarConfiguration"
    ],
    [
        296,
        "ResolutionUnit"
    ],
    [
        301,
        "TransferFunction"
    ],
    [
        305,
        "Software"
    ],
    [
        306,
        "ModifyDate"
    ],
    [
        315,
        "Artist"
    ],
    [
        316,
        "HostComputer"
    ],
    [
        317,
        "Predictor"
    ],
    [
        318,
        "WhitePoint"
    ],
    [
        319,
        "PrimaryChromaticities"
    ],
    [
        513,
        "ThumbnailOffset"
    ],
    [
        514,
        "ThumbnailLength"
    ],
    [
        529,
        "YCbCrCoefficients"
    ],
    [
        530,
        "YCbCrSubSampling"
    ],
    [
        531,
        "YCbCrPositioning"
    ],
    [
        532,
        "ReferenceBlackWhite"
    ],
    [
        700,
        "ApplicationNotes"
    ],
    [
        33432,
        "Copyright"
    ],
    [
        33723,
        "IPTC"
    ],
    [
        34665,
        "ExifIFD"
    ],
    [
        34675,
        "ICC"
    ],
    [
        34853,
        "GpsIFD"
    ],
    [
        330,
        "SubIFD"
    ],
    [
        40965,
        "InteropIFD"
    ],
    [
        40091,
        "XPTitle"
    ],
    [
        40092,
        "XPComment"
    ],
    [
        40093,
        "XPAuthor"
    ],
    [
        40094,
        "XPKeywords"
    ],
    [
        40095,
        "XPSubject"
    ]
]), U(E, "exif", [
    [
        33434,
        "ExposureTime"
    ],
    [
        33437,
        "FNumber"
    ],
    [
        34850,
        "ExposureProgram"
    ],
    [
        34852,
        "SpectralSensitivity"
    ],
    [
        34855,
        "ISO"
    ],
    [
        34858,
        "TimeZoneOffset"
    ],
    [
        34859,
        "SelfTimerMode"
    ],
    [
        34864,
        "SensitivityType"
    ],
    [
        34865,
        "StandardOutputSensitivity"
    ],
    [
        34866,
        "RecommendedExposureIndex"
    ],
    [
        34867,
        "ISOSpeed"
    ],
    [
        34868,
        "ISOSpeedLatitudeyyy"
    ],
    [
        34869,
        "ISOSpeedLatitudezzz"
    ],
    [
        36864,
        "ExifVersion"
    ],
    [
        36867,
        "DateTimeOriginal"
    ],
    [
        36868,
        "CreateDate"
    ],
    [
        36873,
        "GooglePlusUploadCode"
    ],
    [
        36880,
        "OffsetTime"
    ],
    [
        36881,
        "OffsetTimeOriginal"
    ],
    [
        36882,
        "OffsetTimeDigitized"
    ],
    [
        37121,
        "ComponentsConfiguration"
    ],
    [
        37122,
        "CompressedBitsPerPixel"
    ],
    [
        37377,
        "ShutterSpeedValue"
    ],
    [
        37378,
        "ApertureValue"
    ],
    [
        37379,
        "BrightnessValue"
    ],
    [
        37380,
        "ExposureCompensation"
    ],
    [
        37381,
        "MaxApertureValue"
    ],
    [
        37382,
        "SubjectDistance"
    ],
    [
        37383,
        "MeteringMode"
    ],
    [
        37384,
        "LightSource"
    ],
    [
        37385,
        "Flash"
    ],
    [
        37386,
        "FocalLength"
    ],
    [
        37393,
        "ImageNumber"
    ],
    [
        37394,
        "SecurityClassification"
    ],
    [
        37395,
        "ImageHistory"
    ],
    [
        37396,
        "SubjectArea"
    ],
    [
        37500,
        "MakerNote"
    ],
    [
        37510,
        "UserComment"
    ],
    [
        37520,
        "SubSecTime"
    ],
    [
        37521,
        "SubSecTimeOriginal"
    ],
    [
        37522,
        "SubSecTimeDigitized"
    ],
    [
        37888,
        "AmbientTemperature"
    ],
    [
        37889,
        "Humidity"
    ],
    [
        37890,
        "Pressure"
    ],
    [
        37891,
        "WaterDepth"
    ],
    [
        37892,
        "Acceleration"
    ],
    [
        37893,
        "CameraElevationAngle"
    ],
    [
        40960,
        "FlashpixVersion"
    ],
    [
        40961,
        "ColorSpace"
    ],
    [
        40962,
        "ExifImageWidth"
    ],
    [
        40963,
        "ExifImageHeight"
    ],
    [
        40964,
        "RelatedSoundFile"
    ],
    [
        41483,
        "FlashEnergy"
    ],
    [
        41486,
        "FocalPlaneXResolution"
    ],
    [
        41487,
        "FocalPlaneYResolution"
    ],
    [
        41488,
        "FocalPlaneResolutionUnit"
    ],
    [
        41492,
        "SubjectLocation"
    ],
    [
        41493,
        "ExposureIndex"
    ],
    [
        41495,
        "SensingMethod"
    ],
    [
        41728,
        "FileSource"
    ],
    [
        41729,
        "SceneType"
    ],
    [
        41730,
        "CFAPattern"
    ],
    [
        41985,
        "CustomRendered"
    ],
    [
        41986,
        "ExposureMode"
    ],
    [
        41987,
        "WhiteBalance"
    ],
    [
        41988,
        "DigitalZoomRatio"
    ],
    [
        41989,
        "FocalLengthIn35mmFormat"
    ],
    [
        41990,
        "SceneCaptureType"
    ],
    [
        41991,
        "GainControl"
    ],
    [
        41992,
        "Contrast"
    ],
    [
        41993,
        "Saturation"
    ],
    [
        41994,
        "Sharpness"
    ],
    [
        41996,
        "SubjectDistanceRange"
    ],
    [
        42016,
        "ImageUniqueID"
    ],
    [
        42032,
        "OwnerName"
    ],
    [
        42033,
        "SerialNumber"
    ],
    [
        42034,
        "LensInfo"
    ],
    [
        42035,
        "LensMake"
    ],
    [
        42036,
        "LensModel"
    ],
    [
        42037,
        "LensSerialNumber"
    ],
    [
        42080,
        "CompositeImage"
    ],
    [
        42081,
        "CompositeImageCount"
    ],
    [
        42082,
        "CompositeImageExposureTimes"
    ],
    [
        42240,
        "Gamma"
    ],
    [
        59932,
        "Padding"
    ],
    [
        59933,
        "OffsetSchema"
    ],
    [
        65e3,
        "OwnerName"
    ],
    [
        65001,
        "SerialNumber"
    ],
    [
        65002,
        "Lens"
    ],
    [
        65100,
        "RawFile"
    ],
    [
        65101,
        "Converter"
    ],
    [
        65102,
        "WhiteBalance"
    ],
    [
        65105,
        "Exposure"
    ],
    [
        65106,
        "Shadows"
    ],
    [
        65107,
        "Brightness"
    ],
    [
        65108,
        "Contrast"
    ],
    [
        65109,
        "Saturation"
    ],
    [
        65110,
        "Sharpness"
    ],
    [
        65111,
        "Smoothness"
    ],
    [
        65112,
        "MoireFilter"
    ],
    [
        40965,
        "InteropIFD"
    ]
]), U(E, "gps", [
    [
        0,
        "GPSVersionID"
    ],
    [
        1,
        "GPSLatitudeRef"
    ],
    [
        2,
        "GPSLatitude"
    ],
    [
        3,
        "GPSLongitudeRef"
    ],
    [
        4,
        "GPSLongitude"
    ],
    [
        5,
        "GPSAltitudeRef"
    ],
    [
        6,
        "GPSAltitude"
    ],
    [
        7,
        "GPSTimeStamp"
    ],
    [
        8,
        "GPSSatellites"
    ],
    [
        9,
        "GPSStatus"
    ],
    [
        10,
        "GPSMeasureMode"
    ],
    [
        11,
        "GPSDOP"
    ],
    [
        12,
        "GPSSpeedRef"
    ],
    [
        13,
        "GPSSpeed"
    ],
    [
        14,
        "GPSTrackRef"
    ],
    [
        15,
        "GPSTrack"
    ],
    [
        16,
        "GPSImgDirectionRef"
    ],
    [
        17,
        "GPSImgDirection"
    ],
    [
        18,
        "GPSMapDatum"
    ],
    [
        19,
        "GPSDestLatitudeRef"
    ],
    [
        20,
        "GPSDestLatitude"
    ],
    [
        21,
        "GPSDestLongitudeRef"
    ],
    [
        22,
        "GPSDestLongitude"
    ],
    [
        23,
        "GPSDestBearingRef"
    ],
    [
        24,
        "GPSDestBearing"
    ],
    [
        25,
        "GPSDestDistanceRef"
    ],
    [
        26,
        "GPSDestDistance"
    ],
    [
        27,
        "GPSProcessingMethod"
    ],
    [
        28,
        "GPSAreaInformation"
    ],
    [
        29,
        "GPSDateStamp"
    ],
    [
        30,
        "GPSDifferential"
    ],
    [
        31,
        "GPSHPositioningError"
    ]
]), U(B, [
    "ifd0",
    "ifd1"
], [
    [
        274,
        {
            1: "Horizontal (normal)",
            2: "Mirror horizontal",
            3: "Rotate 180",
            4: "Mirror vertical",
            5: "Mirror horizontal and rotate 270 CW",
            6: "Rotate 90 CW",
            7: "Mirror horizontal and rotate 90 CW",
            8: "Rotate 270 CW"
        }
    ],
    [
        296,
        {
            1: "None",
            2: "inches",
            3: "cm"
        }
    ]
]);
let Ee = U(B, "exif", [
    [
        34850,
        {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        }
    ],
    [
        37121,
        {
            0: "-",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    ],
    [
        37383,
        {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        }
    ],
    [
        37384,
        {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        }
    ],
    [
        37385,
        {
            0: "Flash did not fire",
            1: "Flash fired",
            5: "Strobe return light not detected",
            7: "Strobe return light detected",
            9: "Flash fired, compulsory flash mode",
            13: "Flash fired, compulsory flash mode, return light not detected",
            15: "Flash fired, compulsory flash mode, return light detected",
            16: "Flash did not fire, compulsory flash mode",
            24: "Flash did not fire, auto mode",
            25: "Flash fired, auto mode",
            29: "Flash fired, auto mode, return light not detected",
            31: "Flash fired, auto mode, return light detected",
            32: "No flash function",
            65: "Flash fired, red-eye reduction mode",
            69: "Flash fired, red-eye reduction mode, return light not detected",
            71: "Flash fired, red-eye reduction mode, return light detected",
            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            89: "Flash fired, auto mode, red-eye reduction mode",
            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        }
    ],
    [
        41495,
        {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        }
    ],
    [
        41728,
        {
            1: "Film Scanner",
            2: "Reflection Print Scanner",
            3: "Digital Camera"
        }
    ],
    [
        41729,
        {
            1: "Directly photographed"
        }
    ],
    [
        41985,
        {
            0: "Normal",
            1: "Custom",
            2: "HDR (no original saved)",
            3: "HDR (original saved)",
            4: "Original (for HDR)",
            6: "Panorama",
            7: "Portrait HDR",
            8: "Portrait"
        }
    ],
    [
        41986,
        {
            0: "Auto",
            1: "Manual",
            2: "Auto bracket"
        }
    ],
    [
        41987,
        {
            0: "Auto",
            1: "Manual"
        }
    ],
    [
        41990,
        {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night",
            4: "Other"
        }
    ],
    [
        41991,
        {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        }
    ],
    [
        41996,
        {
            0: "Unknown",
            1: "Macro",
            2: "Close",
            3: "Distant"
        }
    ],
    [
        42080,
        {
            0: "Unknown",
            1: "Not a Composite Image",
            2: "General Composite Image",
            3: "Composite Image Captured While Shooting"
        }
    ]
]);
const Be = {
    1: "No absolute unit of measurement",
    2: "Inch",
    3: "Centimeter"
};
Ee.set(37392, Be), Ee.set(41488, Be);
const Ne = {
    0: "Normal",
    1: "Low",
    2: "High"
};
function Ge(e) {
    return "object" == typeof e && void 0 !== e.length ? e[0] : e;
}
function Ve(e) {
    let t = Array.from(e).slice(1);
    return t[1] > 15 && (t = t.map((e)=>String.fromCharCode(e))), "0" !== t[2] && 0 !== t[2] || t.pop(), t.join(".");
}
function ze(e) {
    if ("string" == typeof e) {
        var [t, i, n, s, r, a] = e.trim().split(/[-: ]/g).map(Number), o = new Date(t, i - 1, n);
        return Number.isNaN(s) || Number.isNaN(r) || Number.isNaN(a) || (o.setHours(s), o.setMinutes(r), o.setSeconds(a)), Number.isNaN(+o) ? e : o;
    }
}
function He(e) {
    if ("string" == typeof e) return e;
    let t = [];
    if (0 === e[1] && 0 === e[e.length - 1]) for(let i = 0; i < e.length; i += 2)t.push(je(e[i + 1], e[i]));
    else for(let i = 0; i < e.length; i += 2)t.push(je(e[i], e[i + 1]));
    return m(String.fromCodePoint(...t));
}
function je(e, t) {
    return e << 8 | t;
}
Ee.set(41992, Ne), Ee.set(41993, Ne), Ee.set(41994, Ne), U(N, [
    "ifd0",
    "ifd1"
], [
    [
        50827,
        function(e) {
            return "string" != typeof e ? b(e) : e;
        }
    ],
    [
        306,
        ze
    ],
    [
        40091,
        He
    ],
    [
        40092,
        He
    ],
    [
        40093,
        He
    ],
    [
        40094,
        He
    ],
    [
        40095,
        He
    ]
]), U(N, "exif", [
    [
        40960,
        Ve
    ],
    [
        36864,
        Ve
    ],
    [
        36867,
        ze
    ],
    [
        36868,
        ze
    ],
    [
        40962,
        Ge
    ],
    [
        40963,
        Ge
    ]
]), U(N, "gps", [
    [
        0,
        (e)=>Array.from(e).join(".")
    ],
    [
        7,
        (e)=>Array.from(e).join(":")
    ]
]);
class We extends re {
    static canHandle(e, t) {
        return 225 === e.getUint8(t + 1) && 1752462448 === e.getUint32(t + 4) && "http://ns.adobe.com/" === e.getString(t + 4, 20);
    }
    static headerLength(e, t) {
        return "http://ns.adobe.com/xmp/extension/" === e.getString(t + 4, 34) ? 79 : 33;
    }
    static findPosition(e, t) {
        let i = super.findPosition(e, t);
        return i.multiSegment = i.extended = 79 === i.headerLength, i.multiSegment ? (i.chunkCount = e.getUint8(t + 72), i.chunkNumber = e.getUint8(t + 76), 0 !== e.getUint8(t + 77) && i.chunkNumber++) : (i.chunkCount = 1 / 0, i.chunkNumber = -1), i;
    }
    static handleMultiSegments(e) {
        return e.map((e)=>e.chunk.getString()).join("");
    }
    normalizeInput(e) {
        return "string" == typeof e ? e : I.from(e).getString();
    }
    parse(e = this.chunk) {
        if (!this.localOptions.parse) return e;
        e = function(e) {
            let t = {}, i = {};
            for (let e of Ze)t[e] = [], i[e] = 0;
            return e.replace(et, (e, n, s)=>{
                if ("<" === n) {
                    let n = ++i[s];
                    return t[s].push(n), `${e}#${n}`;
                }
                return `${e}#${t[s].pop()}`;
            });
        }(e);
        let t = Xe.findAll(e, "rdf", "Description");
        0 === t.length && t.push(new Xe("rdf", "Description", void 0, e));
        let i, n = {};
        for (let e of t)for (let t of e.properties)i = Je(t.ns, n), _e(t, i);
        return function(e) {
            let t;
            for(let i in e)t = e[i] = f(e[i]), void 0 === t && delete e[i];
            return f(e);
        }(n);
    }
    assignToOutput(e, t) {
        if (this.localOptions.parse) for (let [i, n] of Object.entries(t))switch(i){
            case "tiff":
                this.assignObjectToOutput(e, "ifd0", n);
                break;
            case "exif":
                this.assignObjectToOutput(e, "exif", n);
                break;
            case "xmlns":
                break;
            default:
                this.assignObjectToOutput(e, i, n);
        }
        else e.xmp = t;
    }
}
c(We, "type", "xmp"), c(We, "multiSegment", !0), T.set("xmp", We);
class Ke {
    static findAll(e) {
        return qe(e, /([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(Ke.unpackMatch);
    }
    static unpackMatch(e) {
        let t = e[1], i = e[2], n = e[3].slice(1, -1);
        return n = Qe(n), new Ke(t, i, n);
    }
    constructor(e, t, i){
        this.ns = e, this.name = t, this.value = i;
    }
    serialize() {
        return this.value;
    }
}
class Xe {
    static findAll(e, t, i) {
        if (void 0 !== t || void 0 !== i) {
            t = t || "[\\w\\d-]+", i = i || "[\\w\\d-]+";
            var n = new RegExp(`<(${t}):(${i})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`, "gm");
        } else n = /<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;
        return qe(e, n).map(Xe.unpackMatch);
    }
    static unpackMatch(e) {
        let t = e[1], i = e[2], n = e[4], s = e[8];
        return new Xe(t, i, n, s);
    }
    constructor(e, t, i, n){
        this.ns = e, this.name = t, this.attrString = i, this.innerXml = n, this.attrs = Ke.findAll(i), this.children = Xe.findAll(n), this.value = 0 === this.children.length ? Qe(n) : void 0, this.properties = [
            ...this.attrs,
            ...this.children
        ];
    }
    get isPrimitive() {
        return void 0 !== this.value && 0 === this.attrs.length && 0 === this.children.length;
    }
    get isListContainer() {
        return 1 === this.children.length && this.children[0].isList;
    }
    get isList() {
        let { ns: e, name: t } = this;
        return "rdf" === e && ("Seq" === t || "Bag" === t || "Alt" === t);
    }
    get isListItem() {
        return "rdf" === this.ns && "li" === this.name;
    }
    serialize() {
        if (0 === this.properties.length && void 0 === this.value) return;
        if (this.isPrimitive) return this.value;
        if (this.isListContainer) return this.children[0].serialize();
        if (this.isList) return $e(this.children.map(Ye));
        if (this.isListItem && 1 === this.children.length && 0 === this.attrs.length) return this.children[0].serialize();
        let e = {};
        for (let t of this.properties)_e(t, e);
        return void 0 !== this.value && (e.value = this.value), f(e);
    }
}
function _e(e, t) {
    let i = e.serialize();
    void 0 !== i && (t[e.name] = i);
}
var Ye = (e)=>e.serialize(), $e = (e)=>1 === e.length ? e[0] : e, Je = (e, t)=>t[e] ? t[e] : t[e] = {};
function qe(e, t) {
    let i, n = [];
    if (!e) return n;
    for(; null !== (i = t.exec(e));)n.push(i);
    return n;
}
function Qe(e) {
    if (function(e) {
        return null == e || "null" === e || "undefined" === e || "" === e || "" === e.trim();
    }(e)) return;
    let t = Number(e);
    if (!Number.isNaN(t)) return t;
    let i = e.toLowerCase();
    return "true" === i || "false" !== i && e.trim();
}
const Ze = [
    "rdf:li",
    "rdf:Seq",
    "rdf:Bag",
    "rdf:Alt",
    "rdf:Description"
], et = new RegExp(`(<|\\/)(${Ze.join("|")})`, "g");
var tt = Object.freeze({
    __proto__: null,
    default: Me,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q,
    parse: ie,
    gpsOnlyOptions: me,
    gps: Se,
    thumbnailOnlyOptions: Ce,
    thumbnail: ye,
    thumbnailUrl: be,
    orientationOnlyOptions: Ie,
    orientation: Pe,
    rotations: ke,
    get rotateCanvas () {
        return we;
    },
    get rotateCss () {
        return Te;
    },
    rotation: Ae
});
const it = [
    "xmp",
    "icc",
    "iptc",
    "tiff"
], nt = ()=>{};
async function st(e, t, i) {
    let n = new q(t);
    n.chunked = !1, void 0 === i && "string" == typeof e && (i = function(e) {
        let t = e.toLowerCase().split(".").pop();
        if (function(e) {
            return "exif" === e || "tiff" === e || "tif" === e;
        }(t)) return "tiff";
        if (it.includes(t)) return t;
    }(e));
    let s = await D(e, n);
    if (i) {
        if (it.includes(i)) return rt(i, s, n);
        g("Invalid segment type");
    } else {
        if (function(e) {
            let t = e.getString(0, 50).trim();
            return t.includes("<?xpacket") || t.includes("<x:");
        }(s)) return rt("xmp", s, n);
        for (let [e] of T){
            if (!it.includes(e)) continue;
            let t = await rt(e, s, n).catch(nt);
            if (t) return t;
        }
        g("Unknown file format");
    }
}
async function rt(e, t, i) {
    let n = i[e];
    return n.enabled = !0, n.parse = !0, T.get(e).parse(t, n);
}
let at = l("fs", (e)=>e.promises);
A.set("fs", class extends ve {
    async readWhole() {
        this.chunked = !1, this.fs = await at;
        let e = await this.fs.readFile(this.input);
        this._swapBuffer(e);
    }
    async readChunked() {
        this.chunked = !0, this.fs = await at, await this.open(), await this.readChunk(0, this.options.firstChunkSize);
    }
    async open() {
        void 0 === this.fh && (this.fh = await this.fs.open(this.input, "r"), this.size = (await this.fh.stat(this.input)).size);
    }
    async _readChunk(e, t) {
        void 0 === this.fh && await this.open(), e + t > this.size && (t = this.size - e);
        var i = this.subarray(e, t, !0);
        return await this.fh.read(i.dataView, 0, t, e), i;
    }
    async close() {
        if (this.fh) {
            let e = this.fh;
            this.fh = void 0, await e.close();
        }
    }
});
A.set("base64", class extends ve {
    constructor(...e){
        super(...e), this.input = this.input.replace(/^data:([^;]+);base64,/gim, ""), this.size = this.input.length / 4 * 3, this.input.endsWith("==") ? this.size -= 2 : this.input.endsWith("=") && (this.size -= 1);
    }
    async _readChunk(e, t) {
        let i, n, r = this.input;
        void 0 === e ? (e = 0, i = 0, n = 0) : (i = 4 * Math.floor(e / 3), n = e - i / 4 * 3), void 0 === t && (t = this.size);
        let o = e + t, l = i + 4 * Math.ceil(o / 3);
        r = r.slice(i, l);
        let h = Math.min(t, this.size - e);
        if (a) {
            let t = s.from(r, "base64").slice(n, n + h);
            return this.set(t, e, !0);
        }
        {
            let t = this.subarray(e, h, !0), i = atob(r), s = t.toUint8();
            for(let e = 0; e < h; e++)s[e] = i.charCodeAt(n + e);
            return t;
        }
    }
});
class ot extends se {
    static canHandle(e, t) {
        return 18761 === t || 19789 === t;
    }
    extendOptions(e) {
        let { ifd0: t, xmp: i, iptc: n, icc: s } = e;
        i.enabled && t.deps.add(700), n.enabled && t.deps.add(33723), s.enabled && t.deps.add(34675), t.finalizeFilters();
    }
    async parse() {
        let { tiff: e, xmp: t, iptc: i, icc: n } = this.options;
        if (e.enabled || t.enabled || i.enabled || n.enabled) {
            let e = Math.max(S(this.options), this.options.chunkSize);
            await this.file.ensureChunk(0, e), this.createParser("tiff", this.file), this.parsers.tiff.parseHeader(), await this.parsers.tiff.parseIfd0Block(), this.adaptTiffPropAsSegment("xmp"), this.adaptTiffPropAsSegment("iptc"), this.adaptTiffPropAsSegment("icc");
        }
    }
    adaptTiffPropAsSegment(e) {
        if (this.parsers.tiff[e]) {
            let t = this.parsers.tiff[e];
            this.injectSegment(e, t);
        }
    }
}
c(ot, "type", "tiff"), w.set("tiff", ot);
let lt = l("zlib");
const ht = [
    "ihdr",
    "iccp",
    "text",
    "itxt",
    "exif"
];
class ut extends se {
    constructor(...e){
        super(...e), c(this, "catchError", (e)=>this.errors.push(e)), c(this, "metaChunks", []), c(this, "unknownChunks", []);
    }
    static canHandle(e, t) {
        return 35152 === t && 2303741511 === e.getUint32(0) && 218765834 === e.getUint32(4);
    }
    async parse() {
        let { file: e } = this;
        await this.findPngChunksInRange(8, e.byteLength), await this.readSegments(this.metaChunks), this.findIhdr(), this.parseTextChunks(), await this.findExif().catch(this.catchError), await this.findXmp().catch(this.catchError), await this.findIcc().catch(this.catchError);
    }
    async findPngChunksInRange(e, t) {
        let { file: i } = this;
        for(; e < t;){
            let t = i.getUint32(e), n = i.getUint32(e + 4), s = i.getString(e + 4, 4).toLowerCase(), r = t + 4 + 4 + 4, a = {
                type: s,
                offset: e,
                length: r,
                start: e + 4 + 4,
                size: t,
                marker: n
            };
            ht.includes(s) ? this.metaChunks.push(a) : this.unknownChunks.push(a), e += r;
        }
    }
    parseTextChunks() {
        let e = this.metaChunks.filter((e)=>"text" === e.type);
        for (let t of e){
            let [e, i] = this.file.getString(t.start, t.size).split("\0");
            this.injectKeyValToIhdr(e, i);
        }
    }
    injectKeyValToIhdr(e, t) {
        let i = this.parsers.ihdr;
        i && i.raw.set(e, t);
    }
    findIhdr() {
        let e = this.metaChunks.find((e)=>"ihdr" === e.type);
        e && !1 !== this.options.ihdr.enabled && this.createParser("ihdr", e.chunk);
    }
    async findExif() {
        let e = this.metaChunks.find((e)=>"exif" === e.type);
        e && this.injectSegment("tiff", e.chunk);
    }
    async findXmp() {
        let e = this.metaChunks.filter((e)=>"itxt" === e.type);
        for (let t of e)"XML:com.adobe.xmp" === t.chunk.getString(0, 17) && this.injectSegment("xmp", t.chunk);
    }
    async findIcc() {
        let e = this.metaChunks.find((e)=>"iccp" === e.type);
        if (!e) return;
        let { chunk: t } = e, i = t.getUint8Array(0, 81), s = 0;
        for(; s < 80 && 0 !== i[s];)s++;
        let r = s + 2, a = t.getString(0, s);
        if (this.injectKeyValToIhdr("ProfileName", a), n) {
            let e = await lt, i = t.getUint8Array(r);
            i = e.inflateSync(i), this.injectSegment("icc", i);
        }
    }
}
c(ut, "type", "png"), w.set("png", ut), U(E, "interop", [
    [
        1,
        "InteropIndex"
    ],
    [
        2,
        "InteropVersion"
    ],
    [
        4096,
        "RelatedImageFileFormat"
    ],
    [
        4097,
        "RelatedImageWidth"
    ],
    [
        4098,
        "RelatedImageHeight"
    ]
]), F(E, "ifd0", [
    [
        11,
        "ProcessingSoftware"
    ],
    [
        254,
        "SubfileType"
    ],
    [
        255,
        "OldSubfileType"
    ],
    [
        263,
        "Thresholding"
    ],
    [
        264,
        "CellWidth"
    ],
    [
        265,
        "CellLength"
    ],
    [
        266,
        "FillOrder"
    ],
    [
        269,
        "DocumentName"
    ],
    [
        280,
        "MinSampleValue"
    ],
    [
        281,
        "MaxSampleValue"
    ],
    [
        285,
        "PageName"
    ],
    [
        286,
        "XPosition"
    ],
    [
        287,
        "YPosition"
    ],
    [
        290,
        "GrayResponseUnit"
    ],
    [
        297,
        "PageNumber"
    ],
    [
        321,
        "HalftoneHints"
    ],
    [
        322,
        "TileWidth"
    ],
    [
        323,
        "TileLength"
    ],
    [
        332,
        "InkSet"
    ],
    [
        337,
        "TargetPrinter"
    ],
    [
        18246,
        "Rating"
    ],
    [
        18249,
        "RatingPercent"
    ],
    [
        33550,
        "PixelScale"
    ],
    [
        34264,
        "ModelTransform"
    ],
    [
        34377,
        "PhotoshopSettings"
    ],
    [
        50706,
        "DNGVersion"
    ],
    [
        50707,
        "DNGBackwardVersion"
    ],
    [
        50708,
        "UniqueCameraModel"
    ],
    [
        50709,
        "LocalizedCameraModel"
    ],
    [
        50736,
        "DNGLensInfo"
    ],
    [
        50739,
        "ShadowScale"
    ],
    [
        50740,
        "DNGPrivateData"
    ],
    [
        33920,
        "IntergraphMatrix"
    ],
    [
        33922,
        "ModelTiePoint"
    ],
    [
        34118,
        "SEMInfo"
    ],
    [
        34735,
        "GeoTiffDirectory"
    ],
    [
        34736,
        "GeoTiffDoubleParams"
    ],
    [
        34737,
        "GeoTiffAsciiParams"
    ],
    [
        50341,
        "PrintIM"
    ],
    [
        50721,
        "ColorMatrix1"
    ],
    [
        50722,
        "ColorMatrix2"
    ],
    [
        50723,
        "CameraCalibration1"
    ],
    [
        50724,
        "CameraCalibration2"
    ],
    [
        50725,
        "ReductionMatrix1"
    ],
    [
        50726,
        "ReductionMatrix2"
    ],
    [
        50727,
        "AnalogBalance"
    ],
    [
        50728,
        "AsShotNeutral"
    ],
    [
        50729,
        "AsShotWhiteXY"
    ],
    [
        50730,
        "BaselineExposure"
    ],
    [
        50731,
        "BaselineNoise"
    ],
    [
        50732,
        "BaselineSharpness"
    ],
    [
        50734,
        "LinearResponseLimit"
    ],
    [
        50735,
        "CameraSerialNumber"
    ],
    [
        50741,
        "MakerNoteSafety"
    ],
    [
        50778,
        "CalibrationIlluminant1"
    ],
    [
        50779,
        "CalibrationIlluminant2"
    ],
    [
        50781,
        "RawDataUniqueID"
    ],
    [
        50827,
        "OriginalRawFileName"
    ],
    [
        50828,
        "OriginalRawFileData"
    ],
    [
        50831,
        "AsShotICCProfile"
    ],
    [
        50832,
        "AsShotPreProfileMatrix"
    ],
    [
        50833,
        "CurrentICCProfile"
    ],
    [
        50834,
        "CurrentPreProfileMatrix"
    ],
    [
        50879,
        "ColorimetricReference"
    ],
    [
        50885,
        "SRawType"
    ],
    [
        50898,
        "PanasonicTitle"
    ],
    [
        50899,
        "PanasonicTitle2"
    ],
    [
        50931,
        "CameraCalibrationSig"
    ],
    [
        50932,
        "ProfileCalibrationSig"
    ],
    [
        50933,
        "ProfileIFD"
    ],
    [
        50934,
        "AsShotProfileName"
    ],
    [
        50936,
        "ProfileName"
    ],
    [
        50937,
        "ProfileHueSatMapDims"
    ],
    [
        50938,
        "ProfileHueSatMapData1"
    ],
    [
        50939,
        "ProfileHueSatMapData2"
    ],
    [
        50940,
        "ProfileToneCurve"
    ],
    [
        50941,
        "ProfileEmbedPolicy"
    ],
    [
        50942,
        "ProfileCopyright"
    ],
    [
        50964,
        "ForwardMatrix1"
    ],
    [
        50965,
        "ForwardMatrix2"
    ],
    [
        50966,
        "PreviewApplicationName"
    ],
    [
        50967,
        "PreviewApplicationVersion"
    ],
    [
        50968,
        "PreviewSettingsName"
    ],
    [
        50969,
        "PreviewSettingsDigest"
    ],
    [
        50970,
        "PreviewColorSpace"
    ],
    [
        50971,
        "PreviewDateTime"
    ],
    [
        50972,
        "RawImageDigest"
    ],
    [
        50973,
        "OriginalRawFileDigest"
    ],
    [
        50981,
        "ProfileLookTableDims"
    ],
    [
        50982,
        "ProfileLookTableData"
    ],
    [
        51043,
        "TimeCodes"
    ],
    [
        51044,
        "FrameRate"
    ],
    [
        51058,
        "TStop"
    ],
    [
        51081,
        "ReelName"
    ],
    [
        51089,
        "OriginalDefaultFinalSize"
    ],
    [
        51090,
        "OriginalBestQualitySize"
    ],
    [
        51091,
        "OriginalDefaultCropSize"
    ],
    [
        51105,
        "CameraLabel"
    ],
    [
        51107,
        "ProfileHueSatMapEncoding"
    ],
    [
        51108,
        "ProfileLookTableEncoding"
    ],
    [
        51109,
        "BaselineExposureOffset"
    ],
    [
        51110,
        "DefaultBlackRender"
    ],
    [
        51111,
        "NewRawImageDigest"
    ],
    [
        51112,
        "RawToPreviewGain"
    ]
]);
let ct = [
    [
        273,
        "StripOffsets"
    ],
    [
        279,
        "StripByteCounts"
    ],
    [
        288,
        "FreeOffsets"
    ],
    [
        289,
        "FreeByteCounts"
    ],
    [
        291,
        "GrayResponseCurve"
    ],
    [
        292,
        "T4Options"
    ],
    [
        293,
        "T6Options"
    ],
    [
        300,
        "ColorResponseUnit"
    ],
    [
        320,
        "ColorMap"
    ],
    [
        324,
        "TileOffsets"
    ],
    [
        325,
        "TileByteCounts"
    ],
    [
        326,
        "BadFaxLines"
    ],
    [
        327,
        "CleanFaxData"
    ],
    [
        328,
        "ConsecutiveBadFaxLines"
    ],
    [
        330,
        "SubIFD"
    ],
    [
        333,
        "InkNames"
    ],
    [
        334,
        "NumberofInks"
    ],
    [
        336,
        "DotRange"
    ],
    [
        338,
        "ExtraSamples"
    ],
    [
        339,
        "SampleFormat"
    ],
    [
        340,
        "SMinSampleValue"
    ],
    [
        341,
        "SMaxSampleValue"
    ],
    [
        342,
        "TransferRange"
    ],
    [
        343,
        "ClipPath"
    ],
    [
        344,
        "XClipPathUnits"
    ],
    [
        345,
        "YClipPathUnits"
    ],
    [
        346,
        "Indexed"
    ],
    [
        347,
        "JPEGTables"
    ],
    [
        351,
        "OPIProxy"
    ],
    [
        400,
        "GlobalParametersIFD"
    ],
    [
        401,
        "ProfileType"
    ],
    [
        402,
        "FaxProfile"
    ],
    [
        403,
        "CodingMethods"
    ],
    [
        404,
        "VersionYear"
    ],
    [
        405,
        "ModeNumber"
    ],
    [
        433,
        "Decode"
    ],
    [
        434,
        "DefaultImageColor"
    ],
    [
        435,
        "T82Options"
    ],
    [
        437,
        "JPEGTables"
    ],
    [
        512,
        "JPEGProc"
    ],
    [
        515,
        "JPEGRestartInterval"
    ],
    [
        517,
        "JPEGLosslessPredictors"
    ],
    [
        518,
        "JPEGPointTransforms"
    ],
    [
        519,
        "JPEGQTables"
    ],
    [
        520,
        "JPEGDCTables"
    ],
    [
        521,
        "JPEGACTables"
    ],
    [
        559,
        "StripRowCounts"
    ],
    [
        999,
        "USPTOMiscellaneous"
    ],
    [
        18247,
        "XP_DIP_XML"
    ],
    [
        18248,
        "StitchInfo"
    ],
    [
        28672,
        "SonyRawFileType"
    ],
    [
        28688,
        "SonyToneCurve"
    ],
    [
        28721,
        "VignettingCorrection"
    ],
    [
        28722,
        "VignettingCorrParams"
    ],
    [
        28724,
        "ChromaticAberrationCorrection"
    ],
    [
        28725,
        "ChromaticAberrationCorrParams"
    ],
    [
        28726,
        "DistortionCorrection"
    ],
    [
        28727,
        "DistortionCorrParams"
    ],
    [
        29895,
        "SonyCropTopLeft"
    ],
    [
        29896,
        "SonyCropSize"
    ],
    [
        32781,
        "ImageID"
    ],
    [
        32931,
        "WangTag1"
    ],
    [
        32932,
        "WangAnnotation"
    ],
    [
        32933,
        "WangTag3"
    ],
    [
        32934,
        "WangTag4"
    ],
    [
        32953,
        "ImageReferencePoints"
    ],
    [
        32954,
        "RegionXformTackPoint"
    ],
    [
        32955,
        "WarpQuadrilateral"
    ],
    [
        32956,
        "AffineTransformMat"
    ],
    [
        32995,
        "Matteing"
    ],
    [
        32996,
        "DataType"
    ],
    [
        32997,
        "ImageDepth"
    ],
    [
        32998,
        "TileDepth"
    ],
    [
        33300,
        "ImageFullWidth"
    ],
    [
        33301,
        "ImageFullHeight"
    ],
    [
        33302,
        "TextureFormat"
    ],
    [
        33303,
        "WrapModes"
    ],
    [
        33304,
        "FovCot"
    ],
    [
        33305,
        "MatrixWorldToScreen"
    ],
    [
        33306,
        "MatrixWorldToCamera"
    ],
    [
        33405,
        "Model2"
    ],
    [
        33421,
        "CFARepeatPatternDim"
    ],
    [
        33422,
        "CFAPattern2"
    ],
    [
        33423,
        "BatteryLevel"
    ],
    [
        33424,
        "KodakIFD"
    ],
    [
        33445,
        "MDFileTag"
    ],
    [
        33446,
        "MDScalePixel"
    ],
    [
        33447,
        "MDColorTable"
    ],
    [
        33448,
        "MDLabName"
    ],
    [
        33449,
        "MDSampleInfo"
    ],
    [
        33450,
        "MDPrepDate"
    ],
    [
        33451,
        "MDPrepTime"
    ],
    [
        33452,
        "MDFileUnits"
    ],
    [
        33589,
        "AdventScale"
    ],
    [
        33590,
        "AdventRevision"
    ],
    [
        33628,
        "UIC1Tag"
    ],
    [
        33629,
        "UIC2Tag"
    ],
    [
        33630,
        "UIC3Tag"
    ],
    [
        33631,
        "UIC4Tag"
    ],
    [
        33918,
        "IntergraphPacketData"
    ],
    [
        33919,
        "IntergraphFlagRegisters"
    ],
    [
        33921,
        "INGRReserved"
    ],
    [
        34016,
        "Site"
    ],
    [
        34017,
        "ColorSequence"
    ],
    [
        34018,
        "IT8Header"
    ],
    [
        34019,
        "RasterPadding"
    ],
    [
        34020,
        "BitsPerRunLength"
    ],
    [
        34021,
        "BitsPerExtendedRunLength"
    ],
    [
        34022,
        "ColorTable"
    ],
    [
        34023,
        "ImageColorIndicator"
    ],
    [
        34024,
        "BackgroundColorIndicator"
    ],
    [
        34025,
        "ImageColorValue"
    ],
    [
        34026,
        "BackgroundColorValue"
    ],
    [
        34027,
        "PixelIntensityRange"
    ],
    [
        34028,
        "TransparencyIndicator"
    ],
    [
        34029,
        "ColorCharacterization"
    ],
    [
        34030,
        "HCUsage"
    ],
    [
        34031,
        "TrapIndicator"
    ],
    [
        34032,
        "CMYKEquivalent"
    ],
    [
        34152,
        "AFCP_IPTC"
    ],
    [
        34232,
        "PixelMagicJBIGOptions"
    ],
    [
        34263,
        "JPLCartoIFD"
    ],
    [
        34306,
        "WB_GRGBLevels"
    ],
    [
        34310,
        "LeafData"
    ],
    [
        34687,
        "TIFF_FXExtensions"
    ],
    [
        34688,
        "MultiProfiles"
    ],
    [
        34689,
        "SharedData"
    ],
    [
        34690,
        "T88Options"
    ],
    [
        34732,
        "ImageLayer"
    ],
    [
        34750,
        "JBIGOptions"
    ],
    [
        34856,
        "Opto-ElectricConvFactor"
    ],
    [
        34857,
        "Interlace"
    ],
    [
        34908,
        "FaxRecvParams"
    ],
    [
        34909,
        "FaxSubAddress"
    ],
    [
        34910,
        "FaxRecvTime"
    ],
    [
        34929,
        "FedexEDR"
    ],
    [
        34954,
        "LeafSubIFD"
    ],
    [
        37387,
        "FlashEnergy"
    ],
    [
        37388,
        "SpatialFrequencyResponse"
    ],
    [
        37389,
        "Noise"
    ],
    [
        37390,
        "FocalPlaneXResolution"
    ],
    [
        37391,
        "FocalPlaneYResolution"
    ],
    [
        37392,
        "FocalPlaneResolutionUnit"
    ],
    [
        37397,
        "ExposureIndex"
    ],
    [
        37398,
        "TIFF-EPStandardID"
    ],
    [
        37399,
        "SensingMethod"
    ],
    [
        37434,
        "CIP3DataFile"
    ],
    [
        37435,
        "CIP3Sheet"
    ],
    [
        37436,
        "CIP3Side"
    ],
    [
        37439,
        "StoNits"
    ],
    [
        37679,
        "MSDocumentText"
    ],
    [
        37680,
        "MSPropertySetStorage"
    ],
    [
        37681,
        "MSDocumentTextPosition"
    ],
    [
        37724,
        "ImageSourceData"
    ],
    [
        40965,
        "InteropIFD"
    ],
    [
        40976,
        "SamsungRawPointersOffset"
    ],
    [
        40977,
        "SamsungRawPointersLength"
    ],
    [
        41217,
        "SamsungRawByteOrder"
    ],
    [
        41218,
        "SamsungRawUnknown"
    ],
    [
        41484,
        "SpatialFrequencyResponse"
    ],
    [
        41485,
        "Noise"
    ],
    [
        41489,
        "ImageNumber"
    ],
    [
        41490,
        "SecurityClassification"
    ],
    [
        41491,
        "ImageHistory"
    ],
    [
        41494,
        "TIFF-EPStandardID"
    ],
    [
        41995,
        "DeviceSettingDescription"
    ],
    [
        42112,
        "GDALMetadata"
    ],
    [
        42113,
        "GDALNoData"
    ],
    [
        44992,
        "ExpandSoftware"
    ],
    [
        44993,
        "ExpandLens"
    ],
    [
        44994,
        "ExpandFilm"
    ],
    [
        44995,
        "ExpandFilterLens"
    ],
    [
        44996,
        "ExpandScanner"
    ],
    [
        44997,
        "ExpandFlashLamp"
    ],
    [
        46275,
        "HasselbladRawImage"
    ],
    [
        48129,
        "PixelFormat"
    ],
    [
        48130,
        "Transformation"
    ],
    [
        48131,
        "Uncompressed"
    ],
    [
        48132,
        "ImageType"
    ],
    [
        48256,
        "ImageWidth"
    ],
    [
        48257,
        "ImageHeight"
    ],
    [
        48258,
        "WidthResolution"
    ],
    [
        48259,
        "HeightResolution"
    ],
    [
        48320,
        "ImageOffset"
    ],
    [
        48321,
        "ImageByteCount"
    ],
    [
        48322,
        "AlphaOffset"
    ],
    [
        48323,
        "AlphaByteCount"
    ],
    [
        48324,
        "ImageDataDiscard"
    ],
    [
        48325,
        "AlphaDataDiscard"
    ],
    [
        50215,
        "OceScanjobDesc"
    ],
    [
        50216,
        "OceApplicationSelector"
    ],
    [
        50217,
        "OceIDNumber"
    ],
    [
        50218,
        "OceImageLogic"
    ],
    [
        50255,
        "Annotations"
    ],
    [
        50459,
        "HasselbladExif"
    ],
    [
        50547,
        "OriginalFileName"
    ],
    [
        50560,
        "USPTOOriginalContentType"
    ],
    [
        50656,
        "CR2CFAPattern"
    ],
    [
        50710,
        "CFAPlaneColor"
    ],
    [
        50711,
        "CFALayout"
    ],
    [
        50712,
        "LinearizationTable"
    ],
    [
        50713,
        "BlackLevelRepeatDim"
    ],
    [
        50714,
        "BlackLevel"
    ],
    [
        50715,
        "BlackLevelDeltaH"
    ],
    [
        50716,
        "BlackLevelDeltaV"
    ],
    [
        50717,
        "WhiteLevel"
    ],
    [
        50718,
        "DefaultScale"
    ],
    [
        50719,
        "DefaultCropOrigin"
    ],
    [
        50720,
        "DefaultCropSize"
    ],
    [
        50733,
        "BayerGreenSplit"
    ],
    [
        50737,
        "ChromaBlurRadius"
    ],
    [
        50738,
        "AntiAliasStrength"
    ],
    [
        50752,
        "RawImageSegmentation"
    ],
    [
        50780,
        "BestQualityScale"
    ],
    [
        50784,
        "AliasLayerMetadata"
    ],
    [
        50829,
        "ActiveArea"
    ],
    [
        50830,
        "MaskedAreas"
    ],
    [
        50935,
        "NoiseReductionApplied"
    ],
    [
        50974,
        "SubTileBlockSize"
    ],
    [
        50975,
        "RowInterleaveFactor"
    ],
    [
        51008,
        "OpcodeList1"
    ],
    [
        51009,
        "OpcodeList2"
    ],
    [
        51022,
        "OpcodeList3"
    ],
    [
        51041,
        "NoiseProfile"
    ],
    [
        51114,
        "CacheVersion"
    ],
    [
        51125,
        "DefaultUserCrop"
    ],
    [
        51157,
        "NikonNEFInfo"
    ],
    [
        65024,
        "KdcIFD"
    ]
];
F(E, "ifd0", ct), F(E, "exif", ct), U(B, "gps", [
    [
        23,
        {
            M: "Magnetic North",
            T: "True North"
        }
    ],
    [
        25,
        {
            K: "Kilometers",
            M: "Miles",
            N: "Nautical Miles"
        }
    ]
]);
class ft extends re {
    static canHandle(e, t) {
        return 224 === e.getUint8(t + 1) && 1246120262 === e.getUint32(t + 4) && 0 === e.getUint8(t + 8);
    }
    parse() {
        return this.parseTags(), this.translate(), this.output;
    }
    parseTags() {
        this.raw = new Map([
            [
                0,
                this.chunk.getUint16(0)
            ],
            [
                2,
                this.chunk.getUint8(2)
            ],
            [
                3,
                this.chunk.getUint16(3)
            ],
            [
                5,
                this.chunk.getUint16(5)
            ],
            [
                7,
                this.chunk.getUint8(7)
            ],
            [
                8,
                this.chunk.getUint8(8)
            ]
        ]);
    }
}
c(ft, "type", "jfif"), c(ft, "headerLength", 9), T.set("jfif", ft), U(E, "jfif", [
    [
        0,
        "JFIFVersion"
    ],
    [
        2,
        "ResolutionUnit"
    ],
    [
        3,
        "XResolution"
    ],
    [
        5,
        "YResolution"
    ],
    [
        7,
        "ThumbnailWidth"
    ],
    [
        8,
        "ThumbnailHeight"
    ]
]);
class dt extends re {
    parse() {
        return this.parseTags(), this.translate(), this.output;
    }
    parseTags() {
        this.raw = new Map([
            [
                0,
                this.chunk.getUint32(0)
            ],
            [
                4,
                this.chunk.getUint32(4)
            ],
            [
                8,
                this.chunk.getUint8(8)
            ],
            [
                9,
                this.chunk.getUint8(9)
            ],
            [
                10,
                this.chunk.getUint8(10)
            ],
            [
                11,
                this.chunk.getUint8(11)
            ],
            [
                12,
                this.chunk.getUint8(12)
            ],
            ...Array.from(this.raw)
        ]);
    }
}
c(dt, "type", "ihdr"), T.set("ihdr", dt), U(E, "ihdr", [
    [
        0,
        "ImageWidth"
    ],
    [
        4,
        "ImageHeight"
    ],
    [
        8,
        "BitDepth"
    ],
    [
        9,
        "ColorType"
    ],
    [
        10,
        "Compression"
    ],
    [
        11,
        "Filter"
    ],
    [
        12,
        "Interlace"
    ]
]), U(B, "ihdr", [
    [
        9,
        {
            0: "Grayscale",
            2: "RGB",
            3: "Palette",
            4: "Grayscale with Alpha",
            6: "RGB with Alpha",
            DEFAULT: "Unknown"
        }
    ],
    [
        10,
        {
            0: "Deflate/Inflate",
            DEFAULT: "Unknown"
        }
    ],
    [
        11,
        {
            0: "Adaptive",
            DEFAULT: "Unknown"
        }
    ],
    [
        12,
        {
            0: "Noninterlaced",
            1: "Adam7 Interlace",
            DEFAULT: "Unknown"
        }
    ]
]);
class pt extends re {
    static canHandle(e, t) {
        return 226 === e.getUint8(t + 1) && 1229144927 === e.getUint32(t + 4);
    }
    static findPosition(e, t) {
        let i = super.findPosition(e, t);
        return i.chunkNumber = e.getUint8(t + 16), i.chunkCount = e.getUint8(t + 17), i.multiSegment = i.chunkCount > 1, i;
    }
    static handleMultiSegments(e) {
        return function(e) {
            let t = function(e) {
                let t = e[0].constructor, i = 0;
                for (let t of e)i += t.length;
                let n = new t(i), s = 0;
                for (let t of e)n.set(t, s), s += t.length;
                return n;
            }(e.map((e)=>e.chunk.toUint8()));
            return new I(t);
        }(e);
    }
    parse() {
        return this.raw = new Map, this.parseHeader(), this.parseTags(), this.translate(), this.output;
    }
    parseHeader() {
        let { raw: e } = this;
        this.chunk.byteLength < 84 && g("ICC header is too short");
        for (let [t, i] of Object.entries(gt)){
            t = parseInt(t, 10);
            let n = i(this.chunk, t);
            "\0\0\0\0" !== n && e.set(t, n);
        }
    }
    parseTags() {
        let e, t, i, n, s, { raw: r } = this, a = this.chunk.getUint32(128), o = 132, l = this.chunk.byteLength;
        for(; a--;){
            if (e = this.chunk.getString(o, 4), t = this.chunk.getUint32(o + 4), i = this.chunk.getUint32(o + 8), n = this.chunk.getString(t, 4), t + i > l) return void console.warn("reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.");
            s = this.parseTag(n, t, i), void 0 !== s && "\0\0\0\0" !== s && r.set(e, s), o += 12;
        }
    }
    parseTag(e, t, i) {
        switch(e){
            case "desc":
                return this.parseDesc(t);
            case "mluc":
                return this.parseMluc(t);
            case "text":
                return this.parseText(t, i);
            case "sig ":
                return this.parseSig(t);
        }
        if (!(t + i > this.chunk.byteLength)) return this.chunk.getUint8Array(t, i);
    }
    parseDesc(e) {
        let t = this.chunk.getUint32(e + 8) - 1;
        return m(this.chunk.getString(e + 12, t));
    }
    parseText(e, t) {
        return m(this.chunk.getString(e + 8, t - 8));
    }
    parseSig(e) {
        return m(this.chunk.getString(e + 8, 4));
    }
    parseMluc(e) {
        let { chunk: t } = this, i = t.getUint32(e + 8), n = t.getUint32(e + 12), s = e + 16, r = [];
        for(let a = 0; a < i; a++){
            let i = t.getString(s + 0, 2), a = t.getString(s + 2, 2), o = t.getUint32(s + 4), l = t.getUint32(s + 8) + e, h = m(t.getUnicodeString(l, o));
            r.push({
                lang: i,
                country: a,
                text: h
            }), s += n;
        }
        return 1 === i ? r[0].text : r;
    }
    translateValue(e, t) {
        return "string" == typeof e ? t[e] || t[e.toLowerCase()] || e : t[e] || e;
    }
}
c(pt, "type", "icc"), c(pt, "multiSegment", !0), c(pt, "headerLength", 18);
const gt = {
    4: mt,
    8: function(e, t) {
        return [
            e.getUint8(t),
            e.getUint8(t + 1) >> 4,
            e.getUint8(t + 1) % 16
        ].map((e)=>e.toString(10)).join(".");
    },
    12: mt,
    16: mt,
    20: mt,
    24: function(e, t) {
        const i = e.getUint16(t), n = e.getUint16(t + 2) - 1, s = e.getUint16(t + 4), r = e.getUint16(t + 6), a = e.getUint16(t + 8), o = e.getUint16(t + 10);
        return new Date(Date.UTC(i, n, s, r, a, o));
    },
    36: mt,
    40: mt,
    48: mt,
    52: mt,
    64: (e, t)=>e.getUint32(t),
    80: mt
};
function mt(e, t) {
    return m(e.getString(t, 4));
}
T.set("icc", pt), U(E, "icc", [
    [
        4,
        "ProfileCMMType"
    ],
    [
        8,
        "ProfileVersion"
    ],
    [
        12,
        "ProfileClass"
    ],
    [
        16,
        "ColorSpaceData"
    ],
    [
        20,
        "ProfileConnectionSpace"
    ],
    [
        24,
        "ProfileDateTime"
    ],
    [
        36,
        "ProfileFileSignature"
    ],
    [
        40,
        "PrimaryPlatform"
    ],
    [
        44,
        "CMMFlags"
    ],
    [
        48,
        "DeviceManufacturer"
    ],
    [
        52,
        "DeviceModel"
    ],
    [
        56,
        "DeviceAttributes"
    ],
    [
        64,
        "RenderingIntent"
    ],
    [
        68,
        "ConnectionSpaceIlluminant"
    ],
    [
        80,
        "ProfileCreator"
    ],
    [
        84,
        "ProfileID"
    ],
    [
        "Header",
        "ProfileHeader"
    ],
    [
        "MS00",
        "WCSProfiles"
    ],
    [
        "bTRC",
        "BlueTRC"
    ],
    [
        "bXYZ",
        "BlueMatrixColumn"
    ],
    [
        "bfd",
        "UCRBG"
    ],
    [
        "bkpt",
        "MediaBlackPoint"
    ],
    [
        "calt",
        "CalibrationDateTime"
    ],
    [
        "chad",
        "ChromaticAdaptation"
    ],
    [
        "chrm",
        "Chromaticity"
    ],
    [
        "ciis",
        "ColorimetricIntentImageState"
    ],
    [
        "clot",
        "ColorantTableOut"
    ],
    [
        "clro",
        "ColorantOrder"
    ],
    [
        "clrt",
        "ColorantTable"
    ],
    [
        "cprt",
        "ProfileCopyright"
    ],
    [
        "crdi",
        "CRDInfo"
    ],
    [
        "desc",
        "ProfileDescription"
    ],
    [
        "devs",
        "DeviceSettings"
    ],
    [
        "dmdd",
        "DeviceModelDesc"
    ],
    [
        "dmnd",
        "DeviceMfgDesc"
    ],
    [
        "dscm",
        "ProfileDescriptionML"
    ],
    [
        "fpce",
        "FocalPlaneColorimetryEstimates"
    ],
    [
        "gTRC",
        "GreenTRC"
    ],
    [
        "gXYZ",
        "GreenMatrixColumn"
    ],
    [
        "gamt",
        "Gamut"
    ],
    [
        "kTRC",
        "GrayTRC"
    ],
    [
        "lumi",
        "Luminance"
    ],
    [
        "meas",
        "Measurement"
    ],
    [
        "meta",
        "Metadata"
    ],
    [
        "mmod",
        "MakeAndModel"
    ],
    [
        "ncl2",
        "NamedColor2"
    ],
    [
        "ncol",
        "NamedColor"
    ],
    [
        "ndin",
        "NativeDisplayInfo"
    ],
    [
        "pre0",
        "Preview0"
    ],
    [
        "pre1",
        "Preview1"
    ],
    [
        "pre2",
        "Preview2"
    ],
    [
        "ps2i",
        "PS2RenderingIntent"
    ],
    [
        "ps2s",
        "PostScript2CSA"
    ],
    [
        "psd0",
        "PostScript2CRD0"
    ],
    [
        "psd1",
        "PostScript2CRD1"
    ],
    [
        "psd2",
        "PostScript2CRD2"
    ],
    [
        "psd3",
        "PostScript2CRD3"
    ],
    [
        "pseq",
        "ProfileSequenceDesc"
    ],
    [
        "psid",
        "ProfileSequenceIdentifier"
    ],
    [
        "psvm",
        "PS2CRDVMSize"
    ],
    [
        "rTRC",
        "RedTRC"
    ],
    [
        "rXYZ",
        "RedMatrixColumn"
    ],
    [
        "resp",
        "OutputResponse"
    ],
    [
        "rhoc",
        "ReflectionHardcopyOrigColorimetry"
    ],
    [
        "rig0",
        "PerceptualRenderingIntentGamut"
    ],
    [
        "rig2",
        "SaturationRenderingIntentGamut"
    ],
    [
        "rpoc",
        "ReflectionPrintOutputColorimetry"
    ],
    [
        "sape",
        "SceneAppearanceEstimates"
    ],
    [
        "scoe",
        "SceneColorimetryEstimates"
    ],
    [
        "scrd",
        "ScreeningDesc"
    ],
    [
        "scrn",
        "Screening"
    ],
    [
        "targ",
        "CharTarget"
    ],
    [
        "tech",
        "Technology"
    ],
    [
        "vcgt",
        "VideoCardGamma"
    ],
    [
        "view",
        "ViewingConditions"
    ],
    [
        "vued",
        "ViewingCondDesc"
    ],
    [
        "wtpt",
        "MediaWhitePoint"
    ]
]);
const St = {
    "4d2p": "Erdt Systems",
    AAMA: "Aamazing Technologies",
    ACER: "Acer",
    ACLT: "Acolyte Color Research",
    ACTI: "Actix Sytems",
    ADAR: "Adara Technology",
    ADBE: "Adobe",
    ADI: "ADI Systems",
    AGFA: "Agfa Graphics",
    ALMD: "Alps Electric",
    ALPS: "Alps Electric",
    ALWN: "Alwan Color Expertise",
    AMTI: "Amiable Technologies",
    AOC: "AOC International",
    APAG: "Apago",
    APPL: "Apple Computer",
    AST: "AST",
    "AT&T": "AT&T",
    BAEL: "BARBIERI electronic",
    BRCO: "Barco NV",
    BRKP: "Breakpoint",
    BROT: "Brother",
    BULL: "Bull",
    BUS: "Bus Computer Systems",
    "C-IT": "C-Itoh",
    CAMR: "Intel",
    CANO: "Canon",
    CARR: "Carroll Touch",
    CASI: "Casio",
    CBUS: "Colorbus PL",
    CEL: "Crossfield",
    CELx: "Crossfield",
    CGS: "CGS Publishing Technologies International",
    CHM: "Rochester Robotics",
    CIGL: "Colour Imaging Group, London",
    CITI: "Citizen",
    CL00: "Candela",
    CLIQ: "Color IQ",
    CMCO: "Chromaco",
    CMiX: "CHROMiX",
    COLO: "Colorgraphic Communications",
    COMP: "Compaq",
    COMp: "Compeq/Focus Technology",
    CONR: "Conrac Display Products",
    CORD: "Cordata Technologies",
    CPQ: "Compaq",
    CPRO: "ColorPro",
    CRN: "Cornerstone",
    CTX: "CTX International",
    CVIS: "ColorVision",
    CWC: "Fujitsu Laboratories",
    DARI: "Darius Technology",
    DATA: "Dataproducts",
    DCP: "Dry Creek Photo",
    DCRC: "Digital Contents Resource Center, Chung-Ang University",
    DELL: "Dell Computer",
    DIC: "Dainippon Ink and Chemicals",
    DICO: "Diconix",
    DIGI: "Digital",
    "DL&C": "Digital Light & Color",
    DPLG: "Doppelganger",
    DS: "Dainippon Screen",
    DSOL: "DOOSOL",
    DUPN: "DuPont",
    EPSO: "Epson",
    ESKO: "Esko-Graphics",
    ETRI: "Electronics and Telecommunications Research Institute",
    EVER: "Everex Systems",
    EXAC: "ExactCODE",
    Eizo: "Eizo",
    FALC: "Falco Data Products",
    FF: "Fuji Photo Film",
    FFEI: "FujiFilm Electronic Imaging",
    FNRD: "Fnord Software",
    FORA: "Fora",
    FORE: "Forefront Technology",
    FP: "Fujitsu",
    FPA: "WayTech Development",
    FUJI: "Fujitsu",
    FX: "Fuji Xerox",
    GCC: "GCC Technologies",
    GGSL: "Global Graphics Software",
    GMB: "Gretagmacbeth",
    GMG: "GMG",
    GOLD: "GoldStar Technology",
    GOOG: "Google",
    GPRT: "Giantprint",
    GTMB: "Gretagmacbeth",
    GVC: "WayTech Development",
    GW2K: "Sony",
    HCI: "HCI",
    HDM: "Heidelberger Druckmaschinen",
    HERM: "Hermes",
    HITA: "Hitachi America",
    HP: "Hewlett-Packard",
    HTC: "Hitachi",
    HiTi: "HiTi Digital",
    IBM: "IBM",
    IDNT: "Scitex",
    IEC: "Hewlett-Packard",
    IIYA: "Iiyama North America",
    IKEG: "Ikegami Electronics",
    IMAG: "Image Systems",
    IMI: "Ingram Micro",
    INTC: "Intel",
    INTL: "N/A (INTL)",
    INTR: "Intra Electronics",
    IOCO: "Iocomm International Technology",
    IPS: "InfoPrint Solutions Company",
    IRIS: "Scitex",
    ISL: "Ichikawa Soft Laboratory",
    ITNL: "N/A (ITNL)",
    IVM: "IVM",
    IWAT: "Iwatsu Electric",
    Idnt: "Scitex",
    Inca: "Inca Digital Printers",
    Iris: "Scitex",
    JPEG: "Joint Photographic Experts Group",
    JSFT: "Jetsoft Development",
    JVC: "JVC Information Products",
    KART: "Scitex",
    KFC: "KFC Computek Components",
    KLH: "KLH Computers",
    KMHD: "Konica Minolta",
    KNCA: "Konica",
    KODA: "Kodak",
    KYOC: "Kyocera",
    Kart: "Scitex",
    LCAG: "Leica",
    LCCD: "Leeds Colour",
    LDAK: "Left Dakota",
    LEAD: "Leading Technology",
    LEXM: "Lexmark International",
    LINK: "Link Computer",
    LINO: "Linotronic",
    LITE: "Lite-On",
    Leaf: "Leaf",
    Lino: "Linotronic",
    MAGC: "Mag Computronic",
    MAGI: "MAG Innovision",
    MANN: "Mannesmann",
    MICN: "Micron Technology",
    MICR: "Microtek",
    MICV: "Microvitec",
    MINO: "Minolta",
    MITS: "Mitsubishi Electronics America",
    MITs: "Mitsuba",
    MNLT: "Minolta",
    MODG: "Modgraph",
    MONI: "Monitronix",
    MONS: "Monaco Systems",
    MORS: "Morse Technology",
    MOTI: "Motive Systems",
    MSFT: "Microsoft",
    MUTO: "MUTOH INDUSTRIES",
    Mits: "Mitsubishi Electric",
    NANA: "NANAO",
    NEC: "NEC",
    NEXP: "NexPress Solutions",
    NISS: "Nissei Sangyo America",
    NKON: "Nikon",
    NONE: "none",
    OCE: "Oce Technologies",
    OCEC: "OceColor",
    OKI: "Oki",
    OKID: "Okidata",
    OKIP: "Okidata",
    OLIV: "Olivetti",
    OLYM: "Olympus",
    ONYX: "Onyx Graphics",
    OPTI: "Optiquest",
    PACK: "Packard Bell",
    PANA: "Matsushita Electric Industrial",
    PANT: "Pantone",
    PBN: "Packard Bell",
    PFU: "PFU",
    PHIL: "Philips Consumer Electronics",
    PNTX: "HOYA",
    POne: "Phase One A/S",
    PREM: "Premier Computer Innovations",
    PRIN: "Princeton Graphic Systems",
    PRIP: "Princeton Publishing Labs",
    QLUX: "Hong Kong",
    QMS: "QMS",
    QPCD: "QPcard AB",
    QUAD: "QuadLaser",
    QUME: "Qume",
    RADI: "Radius",
    RDDx: "Integrated Color Solutions",
    RDG: "Roland DG",
    REDM: "REDMS Group",
    RELI: "Relisys",
    RGMS: "Rolf Gierling Multitools",
    RICO: "Ricoh",
    RNLD: "Edmund Ronald",
    ROYA: "Royal",
    RPC: "Ricoh Printing Systems",
    RTL: "Royal Information Electronics",
    SAMP: "Sampo",
    SAMS: "Samsung",
    SANT: "Jaime Santana Pomares",
    SCIT: "Scitex",
    SCRN: "Dainippon Screen",
    SDP: "Scitex",
    SEC: "Samsung",
    SEIK: "Seiko Instruments",
    SEIk: "Seikosha",
    SGUY: "ScanGuy.com",
    SHAR: "Sharp Laboratories",
    SICC: "International Color Consortium",
    SONY: "Sony",
    SPCL: "SpectraCal",
    STAR: "Star",
    STC: "Sampo Technology",
    Scit: "Scitex",
    Sdp: "Scitex",
    Sony: "Sony",
    TALO: "Talon Technology",
    TAND: "Tandy",
    TATU: "Tatung",
    TAXA: "TAXAN America",
    TDS: "Tokyo Denshi Sekei",
    TECO: "TECO Information Systems",
    TEGR: "Tegra",
    TEKT: "Tektronix",
    TI: "Texas Instruments",
    TMKR: "TypeMaker",
    TOSB: "Toshiba",
    TOSH: "Toshiba",
    TOTK: "TOTOKU ELECTRIC",
    TRIU: "Triumph",
    TSBT: "Toshiba",
    TTX: "TTX Computer Products",
    TVM: "TVM Professional Monitor",
    TW: "TW Casper",
    ULSX: "Ulead Systems",
    UNIS: "Unisys",
    UTZF: "Utz Fehlau & Sohn",
    VARI: "Varityper",
    VIEW: "Viewsonic",
    VISL: "Visual communication",
    VIVO: "Vivo Mobile Communication",
    WANG: "Wang",
    WLBR: "Wilbur Imaging",
    WTG2: "Ware To Go",
    WYSE: "WYSE Technology",
    XERX: "Xerox",
    XRIT: "X-Rite",
    ZRAN: "Zoran",
    Zebr: "Zebra Technologies",
    appl: "Apple Computer",
    bICC: "basICColor",
    berg: "bergdesign",
    ceyd: "Integrated Color Solutions",
    clsp: "MacDermid ColorSpan",
    ds: "Dainippon Screen",
    dupn: "DuPont",
    ffei: "FujiFilm Electronic Imaging",
    flux: "FluxData",
    iris: "Scitex",
    kart: "Scitex",
    lcms: "Little CMS",
    lino: "Linotronic",
    none: "none",
    ob4d: "Erdt Systems",
    obic: "Medigraph",
    quby: "Qubyx Sarl",
    scit: "Scitex",
    scrn: "Dainippon Screen",
    sdp: "Scitex",
    siwi: "SIWI GRAFIKA",
    yxym: "YxyMaster"
}, Ct = {
    scnr: "Scanner",
    mntr: "Monitor",
    prtr: "Printer",
    link: "Device Link",
    abst: "Abstract",
    spac: "Color Space Conversion Profile",
    nmcl: "Named Color",
    cenc: "ColorEncodingSpace profile",
    mid: "MultiplexIdentification profile",
    mlnk: "MultiplexLink profile",
    mvis: "MultiplexVisualization profile",
    nkpf: "Nikon Input Device Profile (NON-STANDARD!)"
};
U(B, "icc", [
    [
        4,
        St
    ],
    [
        12,
        Ct
    ],
    [
        40,
        Object.assign({}, St, Ct)
    ],
    [
        48,
        St
    ],
    [
        80,
        St
    ],
    [
        64,
        {
            0: "Perceptual",
            1: "Relative Colorimetric",
            2: "Saturation",
            3: "Absolute Colorimetric"
        }
    ],
    [
        "tech",
        {
            amd: "Active Matrix Display",
            crt: "Cathode Ray Tube Display",
            kpcd: "Photo CD",
            pmd: "Passive Matrix Display",
            dcam: "Digital Camera",
            dcpj: "Digital Cinema Projector",
            dmpc: "Digital Motion Picture Camera",
            dsub: "Dye Sublimation Printer",
            epho: "Electrophotographic Printer",
            esta: "Electrostatic Printer",
            flex: "Flexography",
            fprn: "Film Writer",
            fscn: "Film Scanner",
            grav: "Gravure",
            ijet: "Ink Jet Printer",
            imgs: "Photo Image Setter",
            mpfr: "Motion Picture Film Recorder",
            mpfs: "Motion Picture Film Scanner",
            offs: "Offset Lithography",
            pjtv: "Projection Television",
            rpho: "Photographic Paper Printer",
            rscn: "Reflective Scanner",
            silk: "Silkscreen",
            twax: "Thermal Wax Printer",
            vidc: "Video Camera",
            vidm: "Video Monitor"
        }
    ]
]);
class yt extends re {
    static canHandle(e, t, i) {
        return 237 === e.getUint8(t + 1) && "Photoshop" === e.getString(t + 4, 9) && void 0 !== this.containsIptc8bim(e, t, i);
    }
    static headerLength(e, t, i) {
        let n, s = this.containsIptc8bim(e, t, i);
        if (void 0 !== s) return n = e.getUint8(t + s + 7), n % 2 != 0 && (n += 1), 0 === n && (n = 4), s + 8 + n;
    }
    static containsIptc8bim(e, t, i) {
        for(let n = 0; n < i; n++)if (this.isIptcSegmentHead(e, t + n)) return n;
    }
    static isIptcSegmentHead(e, t) {
        return 56 === e.getUint8(t) && 943868237 === e.getUint32(t) && 1028 === e.getUint16(t + 4);
    }
    parse() {
        let { raw: e } = this, t = this.chunk.byteLength - 1, i = !1;
        for(let n = 0; n < t; n++)if (28 === this.chunk.getUint8(n) && 2 === this.chunk.getUint8(n + 1)) {
            i = !0;
            let t = this.chunk.getUint16(n + 3), s = this.chunk.getUint8(n + 2), r = this.chunk.getLatin1String(n + 5, t);
            e.set(s, this.pluralizeValue(e.get(s), r)), n += 4 + t;
        } else if (i) break;
        return this.translate(), this.output;
    }
    pluralizeValue(e, t) {
        return void 0 !== e ? e instanceof Array ? (e.push(t), e) : [
            e,
            t
        ] : t;
    }
}
c(yt, "type", "iptc"), c(yt, "translateValues", !1), c(yt, "reviveValues", !1), T.set("iptc", yt), U(E, "iptc", [
    [
        0,
        "ApplicationRecordVersion"
    ],
    [
        3,
        "ObjectTypeReference"
    ],
    [
        4,
        "ObjectAttributeReference"
    ],
    [
        5,
        "ObjectName"
    ],
    [
        7,
        "EditStatus"
    ],
    [
        8,
        "EditorialUpdate"
    ],
    [
        10,
        "Urgency"
    ],
    [
        12,
        "SubjectReference"
    ],
    [
        15,
        "Category"
    ],
    [
        20,
        "SupplementalCategories"
    ],
    [
        22,
        "FixtureIdentifier"
    ],
    [
        25,
        "Keywords"
    ],
    [
        26,
        "ContentLocationCode"
    ],
    [
        27,
        "ContentLocationName"
    ],
    [
        30,
        "ReleaseDate"
    ],
    [
        35,
        "ReleaseTime"
    ],
    [
        37,
        "ExpirationDate"
    ],
    [
        38,
        "ExpirationTime"
    ],
    [
        40,
        "SpecialInstructions"
    ],
    [
        42,
        "ActionAdvised"
    ],
    [
        45,
        "ReferenceService"
    ],
    [
        47,
        "ReferenceDate"
    ],
    [
        50,
        "ReferenceNumber"
    ],
    [
        55,
        "DateCreated"
    ],
    [
        60,
        "TimeCreated"
    ],
    [
        62,
        "DigitalCreationDate"
    ],
    [
        63,
        "DigitalCreationTime"
    ],
    [
        65,
        "OriginatingProgram"
    ],
    [
        70,
        "ProgramVersion"
    ],
    [
        75,
        "ObjectCycle"
    ],
    [
        80,
        "Byline"
    ],
    [
        85,
        "BylineTitle"
    ],
    [
        90,
        "City"
    ],
    [
        92,
        "Sublocation"
    ],
    [
        95,
        "State"
    ],
    [
        100,
        "CountryCode"
    ],
    [
        101,
        "Country"
    ],
    [
        103,
        "OriginalTransmissionReference"
    ],
    [
        105,
        "Headline"
    ],
    [
        110,
        "Credit"
    ],
    [
        115,
        "Source"
    ],
    [
        116,
        "CopyrightNotice"
    ],
    [
        118,
        "Contact"
    ],
    [
        120,
        "Caption"
    ],
    [
        121,
        "LocalCaption"
    ],
    [
        122,
        "Writer"
    ],
    [
        125,
        "RasterizedCaption"
    ],
    [
        130,
        "ImageType"
    ],
    [
        131,
        "ImageOrientation"
    ],
    [
        135,
        "LanguageIdentifier"
    ],
    [
        150,
        "AudioType"
    ],
    [
        151,
        "AudioSamplingRate"
    ],
    [
        152,
        "AudioSamplingResolution"
    ],
    [
        153,
        "AudioDuration"
    ],
    [
        154,
        "AudioOutcue"
    ],
    [
        184,
        "JobID"
    ],
    [
        185,
        "MasterDocumentID"
    ],
    [
        186,
        "ShortDocumentID"
    ],
    [
        187,
        "UniqueDocumentID"
    ],
    [
        188,
        "OwnerID"
    ],
    [
        200,
        "ObjectPreviewFileFormat"
    ],
    [
        201,
        "ObjectPreviewFileVersion"
    ],
    [
        202,
        "ObjectPreviewData"
    ],
    [
        221,
        "Prefs"
    ],
    [
        225,
        "ClassifyState"
    ],
    [
        228,
        "SimilarityIndex"
    ],
    [
        230,
        "DocumentNotes"
    ],
    [
        231,
        "DocumentHistory"
    ],
    [
        232,
        "ExifCameraInfo"
    ],
    [
        255,
        "CatalogSets"
    ]
]), U(B, "iptc", [
    [
        10,
        {
            0: "0 (reserved)",
            1: "1 (most urgent)",
            2: "2",
            3: "3",
            4: "4",
            5: "5 (normal urgency)",
            6: "6",
            7: "7",
            8: "8 (least urgent)",
            9: "9 (user-defined priority)"
        }
    ],
    [
        75,
        {
            a: "Morning",
            b: "Both Morning and Evening",
            p: "Evening"
        }
    ],
    [
        131,
        {
            L: "Landscape",
            P: "Portrait",
            S: "Square"
        }
    ]
]);
exports.default = tt;

},{"b495d01d94ca3930":"bCaf4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bCaf4":[function(require,module,exports,__globalThis) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"9c62938f1dccc73c":"9I2RJ","aceacb6a4531a9d2":"geXY6"}],"9I2RJ":[function(require,module,exports,__globalThis) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

},{}],"geXY6":[function(require,module,exports,__globalThis) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}]},["liEQ4","it0tU"], "it0tU", "parcelRequire9dae", {})

//# sourceMappingURL=test.6f3ede1a.js.map
