if (!self.define) {
    const e = e => {
        "require" !== e && (e += ".js");
        let s = Promise.resolve();
        return i[e] || (s = new Promise((async s => {
            if ("document" in self) {
                const i = document.createElement("script");
                i.src = e, document.head.appendChild(i), i.onload = s
            } else importScripts(e), s()
        }))), s.then((() => {
            if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
            return i[e]
        }))
    }, s = (s, i) => {
        Promise.all(s.map(e)).then((e => i(1 === e.length ? e[0] : e)))
    }, i = {require: Promise.resolve(s)};
    self.define = (s, r, a) => {
        i[s] || (i[s] = Promise.resolve().then((() => {
            let i = {};
            const c = {uri: location.origin + s.slice(1)};
            return Promise.all(r.map((s => {
                switch (s) {
                    case"exports":
                        return i;
                    case"module":
                        return c;
                    default:
                        return e(s)
                }
            }))).then((e => {
                const s = a(...e);
                return i.default || (i.default = s), i
            }))
        })))
    }
}
define("./sw.js", ["./workbox-64bd4571"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "app.js",
        revision: "a7a23285cd4afc01e6e7e4844c006b2e"
    }, {
        url: "assets/bootstrap/css/bootstrap.min.css",
        revision: "ef3ae4200841454dbd0524634afe79d0"
    }, {
        url: "assets/css/Team-Boxed.css",
        revision: "82bbec4cae98efe5fc4bdd3d9d621fc2"
    }, {
        url: "assets/img/apple-touch-icon.png",
        revision: "4c8ac2301525b347d60b45c9aeffa8ef"
    }, {url: "assets/img/favicon_32.png", revision: "47004a089607126b7b79cfcdf4ed1f7a"}, {
        url: "assets/img/garv.jpg",
        revision: "69ce32d6d6c91032bfb720e8e8c12cd5"
    }, {url: "assets/img/liam.png", revision: "9296418a60f98ea34eb9710110365cd3"}, {
        url: "assets/img/natsuki.png",
        revision: "9296418a60f98ea34eb9710110365cd3"
    }, {
        url: "assets/img/NOVA_System_logo.png",
        revision: "03d76f09759b3444a3a7ab6ac50f98b6"
    }, {
        url: "assets/img/nova-app-192x192.png",
        revision: "71a37050a3489903349708ee1778382e"
    }, {
        url: "assets/img/nova-splash-512x512.png",
        revision: "88152756db3c354b6fc482981bcf2030"
    }, {
        url: "assets/js/bs-init.js",
        revision: "02a8f8d0119ea38ce4670281c1438789"
    }, {url: "assets/js/smart-forms.min.js", revision: "5380fc0f37fc9c3d7881f293a06f1f68"}, {
        url: "assets/js/theme.js",
        revision: "aeddb9c3ce5d77b8278c91c07acf30ad"
    }, {url: "contact.html", revision: "0980d226c8a51930d3f981e880046d90"}, {
        url: "google70121f98ab0616e2.html",
        revision: "cd7624145091583bac0a4f5ed3eecd5f"
    }, {url: "index.html", revision: "a92ad448f55566cfe0037fa113400e11"}, {
        url: "manifest.json",
        revision: "43f8c429e4bb13c9c3fc95b589beecb7"
    }, {url: "README.md", revision: "5bd111c34b154dad50240f7f3bbb2cd8"}, {
        url: "sitemap.xml",
        revision: "f6b60a83f37a8eb71919f94353874f97"
    }], {ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]})
}));
//# sourceMappingURL=sw.js.map
