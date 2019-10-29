module.exports = on => {
  on("before:browser:launch", (browser, args) => [
    ...args,
    "--load-extension=extension"
  ]);
};
