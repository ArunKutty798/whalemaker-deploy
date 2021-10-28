module.exports = {
  reactStrictMode: true,
  externals: [
    (function () {
      var IGNORES = ["electron"];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })(),
  ],
};
