function n(n){for(var i=[],f=arguments.length-1;f-- >0;)i[f]=arguments[f+1];var a,u=document.createElement(n);return i.forEach(function(n){t(n)&&!e(n)&&Object.keys(n).forEach(function(c){a=n[c],"on"==c&&e(a)&&r(a[0])&&o(a[1])?u.addEventListener(a[0],a[1]):"on"==c&&t(a)?Object.keys(a).forEach(function(n){o(a[n])&&u.addEventListener(n,a[n])}):"innerText"==c&&r(a)?u.innerText=a:"dataset"!=c&&"style"!=c||!t(a)?"class"==c&&e(a)?a.forEach(function(n){return u.classList.add(n)}):u.setAttribute(c,n[c]):Object.keys(a).forEach(function(n){u[c][n]=a[n]})}),e(n)&&n.forEach(function(n){c(n)&&u.appendChild(n)}),c(n)&&u.appendChild(n),n instanceof Promise?n.then(s):s(n)}),u;function s(t){!function(n){return r(n)&&/(<([^>]+)>)/i.test(n)}(t)&&"style"!==n?r(t)&&(u.innerText=t):u.innerHTML=t}}function t(n){return!!n&&"object"==typeof n&&!Array.isArray(n)}function e(n){return!!n&&"object"==typeof n&&Array.isArray(n)}function r(n){return"string"==typeof n}function o(n){return n instanceof Function}function c(n){return n instanceof Element}export{n as el};
//# sourceMappingURL=el.mjs.map
