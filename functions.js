'use strict';

// Add all extracted JavaScript functions here

// Example
document.addEventListener('DOMContentLoaded', () => {
  console.log('SafeMeadow loaded');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js');
  });
}
