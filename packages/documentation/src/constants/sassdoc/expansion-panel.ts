/** this file is generated from `yarn dev-utils sassdoc` and should not be updated manually */
import { PackageSassDoc } from "utils/sassdoc";

const sassdoc: PackageSassDoc = {
  functions: {
    "rmd-expansion-panel-theme": {
      name: "rmd-expansion-panel-theme",
      description:
        "This function is used to quickly get one of the expansion-panel's theme values. This is really just for the `rmd-expansion-panel-theme` mixin to provide some validation that a correct style key is used, but might be useful in other cases.",
      source: "packages/expansion-panel/src/_functions.scss#L16-L22",
      requires: [
        {
          name: "rmd-theme-get-var-value",
          type: "function",
          packageName: "theme",
        },
        {
          name: "rmd-expansion-panel-theme-values",
          type: "variable",
          packageName: "expansion-panel",
        },
      ],
      packageName: "expansion-panel",
      code: "@function rmd-expansion-panel-theme($theme-style) { … }",
      sourceCode:
        "@function rmd-expansion-panel-theme($theme-style) {\n  @return rmd-theme-get-var-value(\n    $theme-style,\n    $rmd-expansion-panel-theme-values,\n    expansion-panel\n  );\n}\n",
      type: "function",
      parameters: [
        {
          type: "String",
          name: "theme-style",
          description:
            "One of the `$rmd-expansion-panel-theme-values` map keys to get a value for.",
        },
      ],
      returns: {
        type: "Color|String|Number",
        description: "one of the expansion-panel's theme values.",
      },
    },
    "rmd-expansion-panel-theme-var": {
      name: "rmd-expansion-panel-theme-var",
      description:
        "This function is used to get one of the expansion-panel's theme variables as a CSS Variable to be applied as a style attribute. By default, the CSS Variable will have a fallback of the current `$rmd-expansion-panel-theme-values`\n\nThis function is used to create a CSS Variable declaration with an optional fallback value if the CSS Variable has not been declared somehow.",
      source: "packages/expansion-panel/src/_functions.scss#L39-L46",
      requires: [
        { name: "rmd-theme-get-var", type: "function", packageName: "theme" },
        {
          name: "rmd-expansion-panel-theme-values",
          type: "variable",
          packageName: "expansion-panel",
        },
      ],
      packageName: "expansion-panel",
      code:
        "@function rmd-expansion-panel-theme-var($theme-style, $fallback: null) { … }",
      sourceCode:
        "@function rmd-expansion-panel-theme-var($theme-style, $fallback: null) {\n  @return rmd-theme-get-var(\n    $theme-style,\n    $rmd-expansion-panel-theme-values,\n    expansion-panel,\n    $fallback\n  );\n}\n",
      type: "function",
      parameters: [
        {
          type: "String",
          name: "theme-style",
          description:
            "One of the `$rmd-expansion-panel-theme-values` map keys to set a value for.",
        },
        {
          type: "Color|String|Number",
          name: "fallback",
          default: "null",
          description:
            "An optional fallback color to apply. This is set to `null` by default and not used since the link's theme variables should always exist.",
        },
      ],
      returns: {
        type: "String",
        description:
          "one of the expansion-panel's theme values as a css\nvariable.",
      },
    },
  },
  mixins: {
    "rmd-expansion-panel-theme": {
      name: "rmd-expansion-panel-theme",
      description:
        "Creates the styles for one of the expansion-panel's theme values. This is mostly going to be an internal helper mixin util.",
      source: "packages/expansion-panel/src/_mixins.scss#L22-L33",
      usedBy: [
        {
          name: "rmd-expansion-panel",
          type: "mixin",
          packageName: "expansion-panel",
        },
      ],
      requires: [
        {
          name: "rmd-theme-apply-rmd-var",
          type: "mixin",
          packageName: "theme",
        },
        {
          name: "rmd-expansion-panel-theme-values",
          type: "variable",
          packageName: "expansion-panel",
        },
      ],
      packageName: "expansion-panel",
      code:
        "@mixin rmd-expansion-panel-theme($property, $theme-style, $fallback: null) { … }",
      sourceCode:
        "@mixin rmd-expansion-panel-theme($property, $theme-style, $fallback: null) {\n  @include rmd-theme-apply-rmd-var(\n    $property,\n    $theme-style,\n    $rmd-expansion-panel-theme-values,\n    expansion-panel\n  );\n}\n",
      type: "mixin",
      parameters: [
        {
          type: "String",
          name: "property",
          description:
            "The property to set a `rmd-expansion-panel-theme-values` value to.",
        },
        {
          type: "String",
          name: "theme-style",
          description:
            "One of the keys of `rmd-expansion-panel-theme-values` to extract a value from.",
        },
        {
          type: "Color|String|Number",
          name: "fallback",
          default: "null",
          description:
            "A fallback value to use if the css variable isn't set somehow. This will default to automatically retrieving the default value from the `rmd-expansion-panel-theme-values` map when `null`.",
        },
      ],
    },
    "rmd-expansion-panel-theme-update-var": {
      name: "rmd-expansion-panel-theme-update-var",
      description:
        "Updates one of the expansion-panel's theme variables with the new value for the section of your app.",
      source: "packages/expansion-panel/src/_mixins.scss#L41-L48",
      requires: [
        {
          name: "rmd-theme-update-rmd-var",
          type: "mixin",
          packageName: "theme",
        },
        {
          name: "rmd-expansion-panel-theme-values",
          type: "variable",
          packageName: "expansion-panel",
        },
      ],
      packageName: "expansion-panel",
      code:
        "@mixin rmd-expansion-panel-theme-update-var($theme-style, $value) { … }",
      sourceCode:
        "@mixin rmd-expansion-panel-theme-update-var($theme-style, $value) {\n  @include rmd-theme-update-rmd-var(\n    $value,\n    $theme-style,\n    $rmd-expansion-panel-theme-values,\n    expansion-panel\n  );\n}\n",
      type: "mixin",
      parameters: [
        {
          type: "String",
          name: "theme-style",
          description:
            "The expansion-panel theme style type to update. This should be one of the `$rmd-expansion-panel-theme-values` keys.",
        },
        {
          type: "Color|String|Number",
          name: "value",
          description: "The new value to use.",
        },
      ],
    },
    "rmd-expansion-panel": {
      name: "rmd-expansion-panel",
      description:
        "Creates the styles for the expansion panel and all the child elements.\n",
      source: "packages/expansion-panel/src/_mixins.scss#L52-L82",
      usedBy: [
        {
          name: "react-md-expansion-panel",
          type: "mixin",
          packageName: "expansion-panel",
        },
      ],
      requires: [
        {
          name: "rmd-expansion-panel-theme",
          type: "mixin",
          packageName: "expansion-panel",
        },
        { name: "rmd-typography", type: "mixin", packageName: "typography" },
      ],
      packageName: "expansion-panel",
      code: "@mixin rmd-expansion-panel { … }",
      sourceCode:
        "@mixin rmd-expansion-panel {\n  &--margin-top {\n    @include rmd-expansion-panel-theme(margin-top, spacing);\n  }\n\n  &__header {\n    @include rmd-typography(subtitle-1);\n    @include rmd-expansion-panel-theme(padding, padding);\n\n    align-items: center;\n    color: inherit;\n    width: 100%;\n  }\n\n  &__icon {\n    @include rmd-utils-rtl {\n      @include rmd-expansion-panel-theme(padding-right, icon-spacing);\n\n      margin-left: 0;\n      margin-right: auto;\n      padding-left: 0;\n    }\n    @include rmd-expansion-panel-theme(padding-left, icon-spacing);\n\n    // flexing (💪) makes it align nicer with text content\n    align-items: center;\n    display: inline-flex;\n    justify-content: center;\n    margin-left: auto;\n  }\n}\n",
      type: "mixin",
    },
    "react-md-expansion-panel": {
      name: "react-md-expansion-panel",
      description:
        "Creates all the styles for the expansion-panel package as well as the root css variable theme.\n",
      source: "packages/expansion-panel/src/_mixins.scss#L86-L95",
      usedBy: [{ name: "react-md-utils", type: "mixin", packageName: "utils" }],
      requires: [
        {
          name: "rmd-theme-create-root-theme",
          type: "mixin",
          packageName: "theme",
        },
        {
          name: "rmd-expansion-panel",
          type: "mixin",
          packageName: "expansion-panel",
        },
        {
          name: "rmd-expansion-panel-theme-values",
          type: "variable",
          packageName: "expansion-panel",
        },
      ],
      packageName: "expansion-panel",
      code: "@mixin react-md-expansion-panel { … }",
      sourceCode:
        "@mixin react-md-expansion-panel {\n  @include rmd-theme-create-root-theme(\n    $rmd-expansion-panel-theme-values,\n    expansion-panel\n  );\n\n  .rmd-expansion-panel {\n    @include rmd-expansion-panel;\n  }\n}\n",
      type: "mixin",
    },
  },
  variables: {
    "rmd-expansion-panel-spacing": {
      name: "rmd-expansion-panel-spacing",
      description:
        "The amount of spacing to use between panels when multiple are used together.\nThis gets applied as a `margin-top` value.\n",
      source: "packages/expansion-panel/src/_variables.scss#L12",
      packageName: "expansion-panel",
      type: "Number",
      value: "1rem",
      overridable: true,
    },
    "rmd-expansion-panel-header-padding": {
      name: "rmd-expansion-panel-header-padding",
      description:
        "The amount of padding to use for the header element within the expansion panel.\n",
      source: "packages/expansion-panel/src/_variables.scss#L17",
      packageName: "expansion-panel",
      type: "Number",
      value: "1rem",
      overridable: true,
    },
    "rmd-expansion-panel-expander-icon-spacing": {
      name: "rmd-expansion-panel-expander-icon-spacing",
      description:
        "The spacing to use for the expansion panel's expander icon. This is applied as `padding-left` on the icon's containing `<span>`.",
      source: "packages/expansion-panel/src/_variables.scss#L24",
      requires: [
        {
          name: "rmd-icon-spacing-with-text",
          type: "variable",
          packageName: "icon",
        },
      ],
      packageName: "expansion-panel",
      type: "Number",
      value: "$rmd-icon-spacing-with-text",
      compiled: "0.5rem",
      overridable: true,
    },
    "rmd-expansion-panel-theme-values": {
      name: "rmd-expansion-panel-theme-values",
      description:
        'A Map of all the "themeable" parts of the expansion-panel package. Every key in this map will be used to create a css variable to dynamically update the values of the icon as needed.\n\nNote: these variables feel useless to me. probably won\'t configure these\n',
      source: "packages/expansion-panel/src/_variables.scss#L32-L36",
      usedBy: [
        {
          name: "rmd-expansion-panel-theme",
          type: "function",
          packageName: "expansion-panel",
        },
        {
          name: "rmd-expansion-panel-theme-var",
          type: "function",
          packageName: "expansion-panel",
        },
        {
          name: "rmd-expansion-panel-theme",
          type: "mixin",
          packageName: "expansion-panel",
        },
        {
          name: "rmd-expansion-panel-theme-update-var",
          type: "mixin",
          packageName: "expansion-panel",
        },
        {
          name: "react-md-expansion-panel",
          type: "mixin",
          packageName: "expansion-panel",
        },
      ],
      packageName: "expansion-panel",
      type: "Map",
      value:
        "(\n  spacing: $rmd-expansion-panel-spacing,\n  padding: $rmd-expansion-panel-header-padding,\n  icon-spacing: $rmd-expansion-panel-expander-icon-spacing,\n)",
      compiled:
        "(\n  spacing: 1rem,\n  padding: 1rem,\n  icon-spacing: 0.5rem,\n)",
      overridable: true,
    },
  },
};

export default sassdoc;
