// Load Google Generative AI library
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@google/generative-ai@0.1.3/dist/index.min.js';
  script.onload = function() {
    //console.log('Google Generative AI library loaded successfully');
  };
  script.onerror = function() {
    console.error('Failed to load Google Generative AI library');
  };
  document.head.appendChild(script);
})();
