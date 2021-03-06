var suite = require('./kasperle').suite();

suite.run('/', function(test, waitFor) {

    waitFor(function() {
        return suite.exists('#splash-overlay.hide');
    });

    test('Click on featured app', function() {
        suite.press('#featured ol li a:last-child');
    });

    waitFor(function() {
        return suite.exists('.slider li:first-child .screenshot img');
    });

    test('Test preview image exists and click it.', function(assert) {
        assert.selectorExists('.slider li:first-child .screenshot img');
        suite.press('.slider li:first-child .screenshot img');
    });

    waitFor(function() {
        return suite.exists('#lightbox.show');
    });

    test('Test lightbox is opened', function(assert) {
        assert.selectorExists('#lightbox.show', 'Lightbox is visible');
        suite.capture('detail_lightbox.png');
        suite.back();
    });

    waitFor(function() {
        return !suite.visible('#lightbox');
    });

    test('Test lightbox is closed', function(assert) {
        assert.invisible('#lightbox', 'Lightbox should be invisible');
    });
});
