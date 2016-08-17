module.exports = (window) => new Promise((resolve, reject) => {
  const iframes = [...window.document.querySelectorAll('iframe')].map(f => f.src);
  resolve(iframes);
});