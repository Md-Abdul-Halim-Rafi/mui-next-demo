const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = 
  withCSS(
    withSass({
      enableSvg: true,
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
            },
          },
        });
        config.resolve.extensions = ['.js', '.jsx'];
        return config;
      },
    })
);
