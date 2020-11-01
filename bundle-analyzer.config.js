module.exports = {
    files: [
        {
          test: "*.js",
          maxSize: "1250 kB",
          compression: "none"
        },
        {
          test: "*.br",
          maxSize: "310 kB",
          compression: "brotli"
        }
      ]
  }