/** this file is generated from `yarn dev-utils sassdoc` and should not be updated manually */
import { PackageSassDoc } from "utils/sassdoc";

const sassdoc: PackageSassDoc = {
  functions: {
    "rmd-tooltip-theme": {
      name: "rmd-tooltip-theme",
      description:
        "This function is used to quickly get one of the tooltip's theme values. This is really just for the `rmd-tooltip-theme` mixin to provide some validation that a correct style key is used, but might be useful in other cases.",
      source: "packages/tooltip/src/_functions.scss#L16-L22",
      requires: [
        {
          name: "rmd-theme-get-var-value",
          type: "function",
          packageName: "theme",
        },
        {
          name: "rmd-tooltip-theme-values",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code: "@function rmd-tooltip-theme($theme-style) { … }",
      sourceCode:
        "@function rmd-tooltip-theme($theme-style) {\n  @return rmd-theme-get-var-value(\n    $theme-style,\n    $rmd-tooltip-theme-values,\n    tooltip\n  );\n}\n",
      type: "function",
      parameters: [
        {
          type: "String",
          name: "theme-style",
          description:
            "One of the `$rmd-tooltip-theme-values` map keys to get a value for.",
        },
      ],
      returns: {
        type: "Color|String|Number",
        description: "one of the tooltip's theme values.",
      },
    },
    "rmd-tooltip-theme-var": {
      name: "rmd-tooltip-theme-var",
      description:
        "This function is used to get one of the tooltip's theme variables as a CSS Variable to be applied as a style attribute. By default, the CSS Variable will have a fallback of the current `$rmd-tooltip-theme-values`\n\nThis function is used to create a CSS Variable declaration with an optional fallback value if the CSS Variable has not been declared somehow.",
      source: "packages/tooltip/src/_functions.scss#L37-L44",
      usedBy: [
        {
          name: "rmd-tooltip-dense-theme",
          type: "mixin",
          packageName: "tooltip",
        },
        { name: "rmd-tooltip", type: "mixin", packageName: "tooltip" },
      ],
      requires: [
        { name: "rmd-theme-get-var", type: "function", packageName: "theme" },
        {
          name: "rmd-tooltip-theme-values",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code:
        "@function rmd-tooltip-theme-var($theme-style, $fallback: null) { … }",
      sourceCode:
        "@function rmd-tooltip-theme-var($theme-style, $fallback: null) {\n  @return rmd-theme-get-var(\n    $theme-style,\n    $rmd-tooltip-theme-values,\n    tooltip,\n    $fallback\n  );\n}\n",
      type: "function",
      parameters: [
        {
          type: "String",
          name: "theme-style",
          description:
            "One of the `$rmd-tooltip-theme-values` map keys to set a value for.",
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
        description: "one of the tooltip's theme values as a css variable.",
      },
    },
    "rmd-tooltip-position-to-property": {
      name: "rmd-tooltip-position-to-property",
      description:
        "A small util that will rename the `above` and `below` positions of the tooltip to `top` and `bottom` to be used for applying styles.",
      source: "packages/tooltip/src/_functions.scss#L52-L66",
      requires: [
        { name: "rmd-utils-validate", type: "function", packageName: "utils" },
        {
          name: "rmd-tooltip-position-values",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code: "@function rmd-tooltip-position-to-property($position) { … }",
      sourceCode:
        "@function rmd-tooltip-position-to-property($position) {\n  $position: rmd-utils-validate(\n    $rmd-tooltip-position-values,\n    $position,\n    'tooltip position'\n  );\n\n  @if $position == 'below' {\n    @return 'bottom';\n  } @else if $position == 'above' {\n    @return 'top';\n  }\n\n  @return $position;\n}\n",
      type: "function",
      parameters: [
        {
          type: "String",
          name: "position",
          description: "the position to change.",
        },
      ],
      returns: {
        type: "String",
        description: "the position as a valid style name.",
      },
    },
    "rmd-tooltip-inverse-position": {
      name: "rmd-tooltip-inverse-position",
      description:
        "A small util for inversing the position. This is just used for generating the default styles.",
      source: "packages/tooltip/src/_functions.scss#L74-L90",
      requires: [
        { name: "rmd-utils-validate", type: "function", packageName: "utils" },
        {
          name: "rmd-tooltip-position-values",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code: "@function rmd-tooltip-inverse-position($position) { … }",
      sourceCode:
        "@function rmd-tooltip-inverse-position($position) {\n  $position: rmd-utils-validate(\n    $rmd-tooltip-position-values,\n    $position,\n    'tooltip position'\n  );\n\n  @if $position == 'left' {\n    @return 'right';\n  } @else if $position == 'right' {\n    @return 'left';\n  } @else if $position == 'below' {\n    @return 'above';\n  }\n\n  @return 'below';\n}\n",
      type: "function",
      parameters: [
        {
          type: "String",
          name: "position",
          description: "One of the `$rmd-tooltip-position-values` strings",
        },
      ],
      returns: { type: "String", description: "the position inversed." },
    },
  },
  mixins: {
    "rmd-tooltip-theme": {
      name: "rmd-tooltip-theme",
      description:
        "Creates the styles for one of the tooltip's theme values. This is mostly going to be an internal helper mixin util.",
      source: "packages/tooltip/src/_mixins.scss#L22-L29",
      usedBy: [
        { name: "rmd-tooltip-base", type: "mixin", packageName: "tooltip" },
        {
          name: "rmd-tooltip-line-wrap",
          type: "mixin",
          packageName: "tooltip",
        },
      ],
      requires: [
        {
          name: "rmd-theme-apply-rmd-var",
          type: "mixin",
          packageName: "theme",
        },
        {
          name: "rmd-tooltip-theme-values",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code:
        "@mixin rmd-tooltip-theme($property, $theme-style, $fallback: null) { … }",
      sourceCode:
        "@mixin rmd-tooltip-theme($property, $theme-style, $fallback: null) {\n  @include rmd-theme-apply-rmd-var(\n    $property,\n    $theme-style,\n    $rmd-tooltip-theme-values,\n    tooltip\n  );\n}\n",
      type: "mixin",
      parameters: [
        {
          type: "String",
          name: "property",
          description:
            "The property to set a `rmd-tooltip-theme-values` value to.",
        },
        {
          type: "String",
          name: "theme-style",
          description:
            "One of the keys of `rmd-tooltip-theme-values` to extract a value from.",
        },
        {
          type: "Color|String|Number",
          name: "fallback",
          default: "null",
          description:
            "A fallback value to use if the css variable isn't set somehow. This will default to automatically retrieving the default value from the `rmd-tooltip-theme-values` map when `null`.",
        },
      ],
    },
    "rmd-tooltip-theme-update-var": {
      name: "rmd-tooltip-theme-update-var",
      description:
        "Updates one of the tooltip's theme variables with the new value for the section of your app.",
      source: "packages/tooltip/src/_mixins.scss#L37-L44",
      usedBy: [
        {
          name: "rmd-tooltip-dense-theme",
          type: "mixin",
          packageName: "tooltip",
        },
      ],
      requires: [
        {
          name: "rmd-theme-update-rmd-var",
          type: "mixin",
          packageName: "theme",
        },
        {
          name: "rmd-tooltip-theme-values",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code: "@mixin rmd-tooltip-theme-update-var($theme-style, $value) { … }",
      sourceCode:
        "@mixin rmd-tooltip-theme-update-var($theme-style, $value) {\n  @include rmd-theme-update-rmd-var(\n    $value,\n    $theme-style,\n    $rmd-tooltip-theme-values,\n    tooltip\n  );\n}\n",
      type: "mixin",
      parameters: [
        {
          type: "String",
          name: "theme-style",
          description:
            "The tooltip theme style type to update. This should be one of the `$rmd-tooltip-theme-values` keys.",
        },
        {
          type: "Color|String|Number",
          name: "value",
          description: "The new value to use.",
        },
      ],
    },
    "rmd-tooltip-base": {
      name: "rmd-tooltip-base",
      description: "Creates the base styles for a tooltip.\n",
      source: "packages/tooltip/src/_mixins.scss#L47-L69",
      usedBy: [{ name: "rmd-tooltip", type: "mixin", packageName: "tooltip" }],
      requires: [
        {
          name: "rmd-typography-base",
          type: "mixin",
          packageName: "typography",
        },
        {
          name: "rmd-typography-value",
          type: "mixin",
          packageName: "typography",
        },
        { name: "rmd-tooltip-theme", type: "mixin", packageName: "tooltip" },
        {
          name: "rmd-tooltip-border-radius",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code: "@mixin rmd-tooltip-base { … }",
      sourceCode:
        "@mixin rmd-tooltip-base {\n  @include rmd-typography-base;\n  @include rmd-typography-value(body-1, letter-spacing);\n  @include rmd-tooltip-theme(background-color);\n  @include rmd-tooltip-theme(color);\n  @include rmd-tooltip-theme(font-size);\n  @include rmd-tooltip-theme(line-height);\n  @include rmd-tooltip-theme(min-height);\n  @include rmd-tooltip-theme(max-width);\n  @include rmd-tooltip-theme(padding-left, horizontal-padding);\n  @include rmd-tooltip-theme(padding-right, horizontal-padding);\n  @include rmd-tooltip-theme(z-index);\n\n  align-items: center;\n  border-radius: $rmd-tooltip-border-radius;\n  display: flex;\n  opacity: 0;\n  pointer-events: none;\n  position: fixed;\n  text-transform: none;\n  user-select: none;\n  white-space: nowrap;\n}\n",
      type: "mixin",
    },
    "rmd-tooltip-line-wrap": {
      name: "rmd-tooltip-line-wrap",
      description: "Creates the base styles to allow line-wrapping tooltips.\n",
      source: "packages/tooltip/src/_mixins.scss#L72-L77",
      usedBy: [{ name: "rmd-tooltip", type: "mixin", packageName: "tooltip" }],
      requires: [
        { name: "rmd-tooltip-theme", type: "mixin", packageName: "tooltip" },
      ],
      packageName: "tooltip",
      code: "@mixin rmd-tooltip-line-wrap { … }",
      sourceCode:
        "@mixin rmd-tooltip-line-wrap {\n  @include rmd-tooltip-theme(padding-bottom, vertical-padding);\n  @include rmd-tooltip-theme(padding-top, vertical-padding);\n\n  white-space: normal;\n}\n",
      type: "mixin",
    },
    "rmd-tooltip-dense-theme": {
      name: "rmd-tooltip-dense-theme",
      description: "Creates the dense tooltip style overrides.\n",
      source: "packages/tooltip/src/_mixins.scss#L80-L105",
      usedBy: [
        { name: "rmd-tooltip", type: "mixin", packageName: "tooltip" },
        { name: "rmd-utils-dense", type: "mixin", packageName: "utils" },
      ],
      requires: [
        {
          name: "rmd-tooltip-theme-update-var",
          type: "mixin",
          packageName: "tooltip",
        },
        {
          name: "rmd-tooltip-theme-var",
          type: "function",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code: "@mixin rmd-tooltip-dense-theme { … }",
      sourceCode:
        "@mixin rmd-tooltip-dense-theme {\n  @include rmd-tooltip-theme-update-var(\n    font-size,\n    rmd-tooltip-theme-var(dense-font-size)\n  );\n  @include rmd-tooltip-theme-update-var(\n    line-height,\n    rmd-tooltip-theme-var(dense-line-height)\n  );\n  @include rmd-tooltip-theme-update-var(\n    min-height,\n    rmd-tooltip-theme-var(dense-min-height)\n  );\n  @include rmd-tooltip-theme-update-var(\n    horizontal-padding,\n    rmd-tooltip-theme-var(dense-horizontal-padding)\n  );\n  @include rmd-tooltip-theme-update-var(\n    vertical-padding,\n    rmd-tooltip-theme-var(dense-vertical-padding)\n  );\n  @include rmd-tooltip-theme-update-var(\n    spacing,\n    rmd-tooltip-theme-var(dense-spacing)\n  );\n}\n",
      type: "mixin",
    },
    "rmd-tooltip": {
      name: "rmd-tooltip",
      description:
        "Creates all the styles for a tooltip element. This should be used within a css class.\n",
      source: "packages/tooltip/src/_mixins.scss#L109-L161",
      usedBy: [
        { name: "react-md-tooltip", type: "mixin", packageName: "tooltip" },
      ],
      requires: [
        { name: "rmd-tooltip-base", type: "mixin", packageName: "tooltip" },
        {
          name: "rmd-tooltip-line-wrap",
          type: "mixin",
          packageName: "tooltip",
        },
        {
          name: "rmd-tooltip-dense-theme",
          type: "mixin",
          packageName: "tooltip",
        },
        { name: "rmd-transition", type: "mixin", packageName: "transition" },
        {
          name: "rmd-utils-negate-var",
          type: "function",
          packageName: "utils",
        },
        {
          name: "rmd-tooltip-theme-var",
          type: "function",
          packageName: "tooltip",
        },
        {
          name: "rmd-tooltip-enter-duration",
          type: "variable",
          packageName: "tooltip",
        },
        {
          name: "rmd-tooltip-exit-duration",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code: "@mixin rmd-tooltip { … }",
      sourceCode:
        "@mixin rmd-tooltip {\n  @include rmd-tooltip-base;\n\n  &--line-wrap {\n    @include rmd-tooltip-line-wrap;\n  }\n\n  &--dense {\n    @include rmd-tooltip-dense-theme;\n  }\n\n  &--above {\n    transform: translateY(\n      rmd-utils-negate-var(rmd-tooltip-theme-var(transition-distance))\n    );\n  }\n\n  &--below {\n    transform: translateY(rmd-tooltip-theme-var(transition-distance));\n  }\n\n  &--left {\n    transform: translateX(\n      rmd-utils-negate-var(rmd-tooltip-theme-var(transition-distance))\n    );\n  }\n\n  &--right {\n    transform: translateX(rmd-tooltip-theme-var(transition-distance));\n  }\n\n  &--visible {\n    opacity: 1;\n    transform: none;\n  }\n\n  &--enter {\n    @include rmd-transition(deceleration);\n\n    transition: opacity $rmd-tooltip-enter-duration,\n      transform $rmd-tooltip-enter-duration * 2;\n  }\n\n  &--exit {\n    @include rmd-transition(acceleration);\n\n    transition-duration: $rmd-tooltip-exit-duration;\n  }\n\n  &--exit-active {\n    opacity: 0;\n  }\n}\n",
      type: "mixin",
    },
    "react-md-tooltip": {
      name: "react-md-tooltip",
      description:
        "Creates all the styles and theme for the tooltip package.\n",
      source: "packages/tooltip/src/_mixins.scss#L164-L170",
      usedBy: [{ name: "react-md-utils", type: "mixin", packageName: "utils" }],
      requires: [
        {
          name: "rmd-theme-create-root-theme",
          type: "mixin",
          packageName: "theme",
        },
        { name: "rmd-tooltip", type: "mixin", packageName: "tooltip" },
        {
          name: "rmd-tooltip-theme-values",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      code: "@mixin react-md-tooltip { … }",
      sourceCode:
        "@mixin react-md-tooltip {\n  @include rmd-theme-create-root-theme($rmd-tooltip-theme-values, tooltip);\n\n  .rmd-tooltip {\n    @include rmd-tooltip;\n  }\n}\n",
      type: "mixin",
    },
  },
  variables: {
    "rmd-tooltip-background-color": {
      name: "rmd-tooltip-background-color",
      description: "The background color to use for tooltips.\n",
      source: "packages/tooltip/src/_variables.scss#L13",
      packageName: "tooltip",
      type: "Color",
      value: "#616161",
      overridable: true,
    },
    "rmd-tooltip-color": {
      name: "rmd-tooltip-color",
      description:
        "The text color to use for tooltips. By default, this will inherit the primary text colors for a dark or light background color of the tooltip.",
      source: "packages/tooltip/src/_variables.scss#L20-L24",
      requires: [
        { name: "rmd-theme-tone", type: "function", packageName: "theme" },
      ],
      packageName: "tooltip",
      type: "Color",
      value:
        "if(\n  rmd-theme-tone($rmd-tooltip-background-color) == light,\n  rmd-theme-var(text-primary-on-light),\n  rmd-theme-var(text-primary-on-dark)\n)",
      compiled: "var(--rmd-theme-text-primary-on-dark, #d9d9d9)",
      overridable: true,
    },
    "rmd-tooltip-max-width": {
      name: "rmd-tooltip-max-width",
      description: "The max width to apply to tooltips.\n",
      source: "packages/tooltip/src/_variables.scss#L28",
      packageName: "tooltip",
      type: "Number",
      value: "15rem",
      overridable: true,
    },
    "rmd-tooltip-enter-duration": {
      name: "rmd-tooltip-enter-duration",
      description:
        "The enter transition time for the tooltip to enter or to exit.",
      source: "packages/tooltip/src/_variables.scss#L34",
      usedBy: [{ name: "rmd-tooltip", type: "mixin", packageName: "tooltip" }],
      requires: [
        {
          name: "rmd-transition-standard-time",
          type: "variable",
          packageName: "transition",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "$rmd-transition-standard-time",
      compiled: "0.15s",
      overridable: true,
    },
    "rmd-tooltip-exit-duration": {
      name: "rmd-tooltip-exit-duration",
      description:
        "The exit transition time for the tooltip to enter or to exit.",
      source: "packages/tooltip/src/_variables.scss#L40",
      usedBy: [{ name: "rmd-tooltip", type: "mixin", packageName: "tooltip" }],
      requires: [
        {
          name: "rmd-transition-standard-time",
          type: "variable",
          packageName: "transition",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "$rmd-transition-standard-time",
      compiled: "0.15s",
      overridable: true,
    },
    "rmd-tooltip-z-index": {
      name: "rmd-tooltip-z-index",
      description: "The z-index to use for tooltips when they are visible.",
      source: "packages/tooltip/src/_variables.scss#L46",
      requires: [
        {
          name: "rmd-utils-temporary-element-z-index",
          type: "variable",
          packageName: "utils",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "$rmd-utils-temporary-element-z-index + 20",
      compiled: "50",
      overridable: true,
    },
    "rmd-tooltip-font-size": {
      name: "rmd-tooltip-font-size",
      description: "The font size to use for tooltips",
      source: "packages/tooltip/src/_variables.scss#L52",
      see: [
        {
          name: "rmd-tooltip-dense-font-size",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "1rem",
      overridable: true,
    },
    "rmd-tooltip-line-height": {
      name: "rmd-tooltip-line-height",
      description: "The default line-height to use for tooltips.\n",
      source: "packages/tooltip/src/_variables.scss#L56",
      packageName: "tooltip",
      type: "Number",
      value: "1.5rem",
      overridable: true,
    },
    "rmd-tooltip-min-height": {
      name: "rmd-tooltip-min-height",
      description:
        "The min height to use for tooltips. This allows the tooltips to grow in height automatically based on line wrapping. You will need to add additional padding in these cases though.",
      source: "packages/tooltip/src/_variables.scss#L64",
      see: [
        {
          name: "rmd-tooltip-dense-min-height",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "2rem",
      overridable: true,
    },
    "rmd-tooltip-horizontal-padding": {
      name: "rmd-tooltip-horizontal-padding",
      description: "The left and right padding to apply to tooltips.",
      source: "packages/tooltip/src/_variables.scss#L70",
      see: [
        {
          name: "rmd-tooltip-dense-horizontal-padding",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "1rem",
      overridable: true,
    },
    "rmd-tooltip-line-wrap-vertical-padding": {
      name: "rmd-tooltip-line-wrap-vertical-padding",
      description:
        "The top and bottom padding to apply to tooltips when line wrapping is enabled.",
      source: "packages/tooltip/src/_variables.scss#L77",
      see: [
        {
          name: "rmd-tooltip-dense-line-wrap-vertical-padding",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "0.5625rem",
      overridable: true,
    },
    "rmd-tooltip-spacing": {
      name: "rmd-tooltip-spacing",
      description:
        "The amount of spacing to place between the tooltip and the tooltip's container element.",
      source: "packages/tooltip/src/_variables.scss#L84",
      see: [
        {
          name: "rmd-tooltip-dense-spacing",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "1.5rem",
      overridable: true,
    },
    "rmd-tooltip-dense-font-size": {
      name: "rmd-tooltip-dense-font-size",
      description: "The font size to use for dense tooltips.\n",
      source: "packages/tooltip/src/_variables.scss#L88",
      packageName: "tooltip",
      type: "Number",
      value: "0.625rem",
      overridable: true,
    },
    "rmd-tooltip-dense-line-height": {
      name: "rmd-tooltip-dense-line-height",
      description: "The line height to use for dense tooltips.\n",
      source: "packages/tooltip/src/_variables.scss#L92",
      packageName: "tooltip",
      type: "Number",
      value: "0.825rem",
      overridable: true,
    },
    "rmd-tooltip-dense-min-height": {
      name: "rmd-tooltip-dense-min-height",
      description:
        "The min-height to use for dense tooltips. This allows the tooltips to grow in height automatically based on line wrapping. You will need to add additional padding in these cases though.",
      source: "packages/tooltip/src/_variables.scss#L100",
      see: [
        {
          name: "rmd-tooltip-min-height",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "1.375rem",
      overridable: true,
    },
    "rmd-tooltip-dense-horizontal-padding": {
      name: "rmd-tooltip-dense-horizontal-padding",
      description: "The left and right padding to use for dense tooltips\n",
      source: "packages/tooltip/src/_variables.scss#L104",
      packageName: "tooltip",
      type: "Number",
      value: "0.5rem",
      overridable: true,
    },
    "rmd-tooltip-dense-line-wrap-vertical-padding": {
      name: "rmd-tooltip-dense-line-wrap-vertical-padding",
      description:
        "The top and bottom padding to apply to dense tooltips when line wrapping is enabled.",
      source: "packages/tooltip/src/_variables.scss#L111",
      see: [
        {
          name: "rmd-tooltip-line-wrap-vertical-padding",
          type: "variable",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "0.375rem",
      overridable: true,
    },
    "rmd-tooltip-dense-spacing": {
      name: "rmd-tooltip-dense-spacing",
      description:
        "The amount of spacing to place between the dense tooltip and the tooltip's container element.\n",
      source: "packages/tooltip/src/_variables.scss#L116",
      packageName: "tooltip",
      type: "Number",
      value: "0.875rem",
      overridable: true,
    },
    "rmd-tooltip-border-radius": {
      name: "rmd-tooltip-border-radius",
      description: "The border radius to apply to tooltips\n",
      source: "packages/tooltip/src/_variables.scss#L120",
      usedBy: [
        { name: "rmd-tooltip-base", type: "mixin", packageName: "tooltip" },
      ],
      packageName: "tooltip",
      type: "Number",
      value: "0.25rem",
      overridable: true,
    },
    "rmd-tooltip-transition-distance": {
      name: "rmd-tooltip-transition-distance",
      description:
        "The distance that the tooltip should animate from the tooltip's control element.\n",
      source: "packages/tooltip/src/_variables.scss#L125",
      packageName: "tooltip",
      type: "Number",
      value: "0.5rem",
      overridable: true,
    },
    "rmd-tooltip-position-values": {
      name: "rmd-tooltip-position-values",
      description:
        "This is really just for internal use and a ncie way to loop over the four positions when creating styles.\n",
      source: "packages/tooltip/src/_variables.scss#L130",
      usedBy: [
        {
          name: "rmd-tooltip-position-to-property",
          type: "function",
          packageName: "tooltip",
        },
        {
          name: "rmd-tooltip-inverse-position",
          type: "function",
          packageName: "tooltip",
        },
      ],
      packageName: "tooltip",
      type: "List",
      value: "above below left right",
      overridable: false,
    },
    "rmd-tooltip-theme-values": {
      name: "rmd-tooltip-theme-values",
      description:
        'A Map of all the "themeable" parts of the overlay package. Every key in this map will be used to create a css variable to dynamically update the values of the icon as needed.\n',
      source: "packages/tooltip/src/_variables.scss#L136-L154",
      usedBy: [
        { name: "rmd-tooltip-theme", type: "function", packageName: "tooltip" },
        {
          name: "rmd-tooltip-theme-var",
          type: "function",
          packageName: "tooltip",
        },
        { name: "rmd-tooltip-theme", type: "mixin", packageName: "tooltip" },
        {
          name: "rmd-tooltip-theme-update-var",
          type: "mixin",
          packageName: "tooltip",
        },
        { name: "react-md-tooltip", type: "mixin", packageName: "tooltip" },
      ],
      packageName: "tooltip",
      type: "Map",
      value:
        "(\n  background-color: $rmd-tooltip-background-color,\n  color: $rmd-tooltip-color,\n  transition-distance: $rmd-tooltip-transition-distance,\n  z-index: $rmd-tooltip-z-index,\n  spacing: $rmd-tooltip-spacing,\n  min-height: $rmd-tooltip-min-height,\n  max-width: $rmd-tooltip-max-width,\n  font-size: $rmd-tooltip-font-size,\n  line-height: $rmd-tooltip-line-height,\n  horizontal-padding: $rmd-tooltip-horizontal-padding,\n  vertical-padding: $rmd-tooltip-line-wrap-vertical-padding,\n  dense-spacing: $rmd-tooltip-dense-spacing,\n  dense-min-height: $rmd-tooltip-dense-min-height,\n  dense-font-size: $rmd-tooltip-dense-font-size,\n  dense-line-height: $rmd-tooltip-dense-line-height,\n  dense-horizontal-padding: $rmd-tooltip-dense-horizontal-padding,\n  dense-vertical-padding: $rmd-tooltip-dense-line-wrap-vertical-padding,\n)",
      compiled:
        "(\n  background-color: #616161,\n  color: var(--rmd-theme-text-primary-on-dark, #d9d9d9),\n  transition-distance: 0.5rem,\n  z-index: 50,\n  spacing: 1.5rem,\n  min-height: 2rem,\n  max-width: 15rem,\n  font-size: 1rem,\n  line-height: 1.5rem,\n  horizontal-padding: 1rem,\n  vertical-padding: 0.5625rem,\n  dense-spacing: 0.875rem,\n  dense-min-height: 1.375rem,\n  dense-font-size: 0.625rem,\n  dense-line-height: 0.825rem,\n  dense-horizontal-padding: 0.5rem,\n  dense-vertical-padding: 0.375rem,\n)",
      overridable: false,
    },
  },
};

export default sassdoc;
