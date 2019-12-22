const config = {
  ".*{js,ts,tsx}": ["eslint --fix", "prettier --write", "git add"],
  ".*{md,json,js,ts,tsx}": ["prettier --write", "git add"],
  "*.{png,jpeg,jpg,gif}": ["imagemin-lint-staged", "git add"],
  "*.svg": filenames =>
    filenames.map(
      filename => `svgo --config .svgo.yml --input ${filename} && git add .`
    )
};

module.exports = config;
