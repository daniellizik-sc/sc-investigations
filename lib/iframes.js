module.exports = (window) => new Promise((resolve, reject) => {
  const iframes = [].slice.call(window.document.querySelectorAll('iframe')).map(f => f.src);
  resolve(iframes);
});