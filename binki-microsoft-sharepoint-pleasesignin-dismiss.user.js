// ==UserScript==
// @name binki-microsoft-sharepoint-pleasesignin-dismiss
// @version 1.0.0
// @match https://*.sharepoint.com/*
// @require https://github.com/binki/binki-userscript-on-query-selector/raw/6a5df240b70b2f393dd738791c931258ebf5984f/binki-userscript-on-query-selector.js
// ==/UserScript==

const signInButtonTexts = [
  'Sign In',
  'サインイン',
];

binkiOnQuerySelector('div[role=alertdialog]', dialog => {
  const primaryButtonTextContent = dialog.querySelector('button.ms-Button--primary').textContent;
  if (signInButtonTexts.indexOf(primaryButtonTextContent) !== -1) {
    dialog.querySelector('button.ms-Dialog-button--close').click();
  } else {
  }
});
