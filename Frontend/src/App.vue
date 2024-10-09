<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

/* Fonts */

@font-face {
  font-family: kalameh;
  font-style: normal;
  font-weight: 900;
  src: url("./assets/fonts/kalameh/_Woff/KalamehWeb-Black.woff") format("woff");
}
@font-face {
  font-family: kalameh;
  font-style: normal;
  font-weight: bold;
  src: url("./assets/fonts/kalameh/_Woff/KalamehWeb-Bold.woff") format("woff");
}

@font-face {
  font-family: kalameh;
  font-style: normal;
  font-weight: normal;
  src: url("./assets/fonts/kalameh/_Woff/KalamehWeb-Regular.woff")
    format("woff");
}
@font-face {
  font-family: kalameh;
  font-style: normal;
  font-weight: 900;
  src: url("./assets/fonts/kalameh/_Woff/KalamehWeb\(FaNum\)-Black.woff")
    format("woff");
}
@font-face {
  font-family: kalameh;
  font-style: normal;
  font-weight: bold;
  src: url("./assets/fonts/kalameh/_Woff/KalamehWeb\(FaNum\)-Bold.woff")
    format("woff");
}
@font-face {
  font-family: kalameh;
  font-style: normal;
  font-weight: normal;
  src: url("./assets/fonts/kalameh/_Woff/KalamehWeb\(FaNum\)-Regular.woff")
    format("woff");
}

/* CSS reset */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.5;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  outline: none;
}

img {
  border-style: none;
  vertical-align: middle;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Variables */
:root {
  --light-cyan: #b3ecf1;
  --main-cyan: #1fbdd2;
  --dark-cyan: #004b55;
  --hard-cyan: #003840;
  --dark: #001315;
}

/* Utilites Class */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: kalameh;

}

body {
  overflow-x: hidden;

}

.pointer {
  cursor: pointer;
}
</style>
