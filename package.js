Package.describe({
  name: 'mozfet:materialize-icons',
  summary: 'Reactive Materialize Icons with tooltips.',
  version: '1.1.7',
  git: 'https://github.com/mozfet/meteor-autoform-materialize-icons.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.4');
  api.use([
    'templating',
    'blaze',
    'underscore',
    'ostrio:flow-router-extra'
  ], 'client');
  api.use('ecmascript');
  api.addFiles([
    'index.js'
  ], 'client');
});
