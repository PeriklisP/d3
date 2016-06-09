export var name = "d3";
export var version = "6.1.1";
export var description = "Data-Driven Documents";
export var keywords = ["dom","visualization","svg","animation","canvas"];
export var homepage = "https://d3js.org";
export var license = "BSD-3-Clause";
export var author = {"name":"Mike Bostock","url":"https://bost.ocks.org/mike"};
export var main = "dist/_d3.node.js";
export var unpkg = "dist/_d3.min.js";
export var jsdelivr = "dist/_d3.min.js";
export var module = "index.js";
export var repository = {"type":"git","url":"https://github.com/d3/d3.git"};
export var files = ["dist/**/*.js","index.js"];
export var scripts = {"pretest":"rimraf dist && mkdir dist && json2module package.json > dist/package.js && rollup -c","test":"tape 'test/**/*-test.js'","prepublishOnly":"yarn test","postpublish":"git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v${npm_package_version%%.*}.js && cp ../d3/dist/_d3.min.js d3.v${npm_package_version%%.*}.min.js && git add d3.v${npm_package_version%%.*}.js d3.v${npm_package_version%%.*}.min.js && git commit -m \"d3 ${npm_package_version}\" && git push && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js"};
export var devDependencies = {"json2module":"0.0","rimraf":"3","rollup":"2","rollup-plugin-ascii":"0.0","rollup-plugin-node-resolve":"5","rollup-plugin-terser":"7","tape":"4","tape-await":"0.1"};
export var dependencies = {"d3-array":"2","d3-axis":"2","d3-brush":"2","d3-chord":"2","d3-color":"2","d3-contour":"2","d3-delaunay":"5","d3-dispatch":"2","d3-drag":"2","d3-dsv":"2","d3-ease":"2","d3-fetch":"2","d3-force":"2","d3-format":"2","d3-geo":"2","d3-hierarchy":"2","d3-interpolate":"2","d3-path":"2","d3-polygon":"2","d3-quadtree":"2","d3-random":"2","d3-scale":"3","d3-scale-chromatic":"2","d3-selection":"2","d3-shape":"2","d3-time":"2","d3-time-format":"3","d3-timer":"2","d3-transition":"2","d3-zoom":"2"};
