require.config({
  baseUrl: '/js/lib',
  paths: {
    // Use paths so we don't need to use gnarly require paths
    // in the modules.
    jquery: 'jquery-2.0.3.min',
    styleguide: '../styleguide/styleguide',
  },
});

define('main', ['styleguide'], function() {
  // Nothing to see here - just yet.
});
