!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(n.El={})}(this,function(n){function e(n){return!!n&&"object"==typeof n&&!Array.isArray(n)}function t(n){return!!n&&"object"==typeof n&&Array.isArray(n)}function r(n){return"string"==typeof n}function o(n){return n instanceof Function}function i(n){return n instanceof Element}n.el=function(n){for(var c=[],f=arguments.length-1;f-- >0;)c[f]=arguments[f+1];var u,a=document.createElement(n);return c.forEach(function(n){e(n)&&!t(n)&&Object.keys(n).forEach(function(i){u=n[i],"on"==i&&t(u)&&r(u[0])&&o(u[1])?a.addEventListener(u[0],u[1]):"on"==i&&e(u)?Object.keys(u).forEach(function(n){o(u[n])&&a.addEventListener(n,u[n])}):"innerText"==i&&r(u)?a.innerText=u:"dataset"!=i&&"style"!=i||!e(u)?"class"==i&&t(u)?u.forEach(function(n){return a.classList.add(n)}):a.setAttribute(i,n[i]):Object.keys(u).forEach(function(n){a[i][n]=u[n]})}),t(n)&&n.forEach(function(n){i(n)&&a.appendChild(n)}),i(n)&&a.appendChild(n),n instanceof Promise?n.then(s):s(n)}),a;function s(e){!function(n){return r(n)&&/(<([^>]+)>)/i.test(n)}(e)&&"style"!==n?r(e)&&(a.innerText=e):a.innerHTML=e}}});
//# sourceMappingURL=el.umd.js.map