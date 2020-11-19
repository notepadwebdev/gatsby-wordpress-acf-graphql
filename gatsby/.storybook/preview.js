import "../src/scss/site.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
global.__PATH_PREFIX__ = "";
global.__BASE_PATH__ = ""; // See https://github.com/gatsbyjs/gatsby/issues/10668#issuecomment-639014099

