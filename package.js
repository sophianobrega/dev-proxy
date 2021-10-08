Package.describe({
    name:          'sophia:dev-proxy',
    version:       '0.0.9',
    summary:       'Proxy your REST api calls to a web server running on the same machine, but another port.',
    git:           'https://github.com/pbastowski/dev-proxy',
    documentation: 'README.md'
});

var npmDeps = {
    "http-proxy": "1.18.1",
};

Npm.depends(npmDeps);

Package.onUse(function (api) {
    api.versionsFrom('1.3');
    api.use('webapp', 'server');
    api.addFiles('server/proxy.js', 'server');
    api.export(['DevProxy'], 'server');
});
