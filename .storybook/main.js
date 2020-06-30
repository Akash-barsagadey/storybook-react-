module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-notes/register",
    "@storybook/addon-backgrounds/register",
    "./.storybook/design-addon/register.js",
  ],
};
