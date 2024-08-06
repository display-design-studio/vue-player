<script setup>
import MinimalPlayer from './components/MinimalPlayer/index.vue'
import Player from './components/Player/index.vue'
import FullPlayer from './components/FullPlayer/index.vue'
</script>

<template>
  <main class="app">
    <h1>Vue Player</h1>
    <div class="container relative">
      <MinimalPlayer />
      <a href="" target="_blank" rel="noopener noreferrer">Example code</a>
    </div>
    <div class="container relative">
      <Player />
      <a href="" target="_blank" rel="noopener noreferrer">Example code</a>
    </div>
    <div class="container relative">
      <FullPlayer />
      <a href="" target="_blank" rel="noopener noreferrer">Example code</a>
    </div>
    <a href="https://display.design/" target="_blank" rel="noopener noreferrer">
      <span class="display-cube"></span>
    </a>
  </main>
</template>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.display-cube {
  display: block;
  width: 20px;
  height: 20px;
  background-color: black;
}

html {
  ::-webkit-scrollbar {
    display: none;
  }

  body {
    overscroll-behavior: none;
    font-family: sans-serif;
    text-transform: uppercase;

    h1 {
      font-size: 40px;
    }

    p,
    a {
      font-size: 15px;
    }

    a {
      text-decoration: none;
      color: #000;
      width: fit-content;

      &:hover {
        color: #1400FF;
      }
    }
  }
}


.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding-block: 60px;
  padding-inline: 10px;
}

.container {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1024px) {
    width: 100%;
  }
}
</style>