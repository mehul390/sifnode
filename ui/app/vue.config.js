module.exports = {
  publicPath: "./",
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Sifchain";
      return args;
    });
  },
  css: {
    extract: {
      filename: "app.css",
    },
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/scss/typography.scss";
            @import "@/scss/variables.scss";
            @import "@/scss/mixins.scss";
          `,
      },
    },
  },
};
