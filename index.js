'use strict';

const app           = require( 'app' );
const BrowserWindow = require( 'browser-window' );



require( 'electron-debug' )();
require( 'crash-reporter' ).start();


app.on( 'ready', () => {
  const win = new BrowserWindow( {
    'title'           : app.getName(),
    'width'           : 1000,
    'height'          : 800,
    'min-width'       : 400,
    'min-height'      : 200,
    'web-preferences' : {
      'node-integration' : false
    }
  } );

  win.loadUrl( 'https://login.loopline-systems.com' );

  win.on( 'closed', app.quit );
} );


