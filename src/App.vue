<template>
  <div id="app" class="h100v">
    <div class="bg h100v">
      <div class="box h100v">
        <div class="row h100v">
          <leftpanel/>
          <contentdata/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftpanel from "./components/LeftPanel.vue";
import contentdata from "./components/contentdata.vue";

export default {
  name: "app",
  components: {
    leftpanel,
    contentdata
  }
};
</script>

<style>
@charset "utf-8";
* {
  -webkit-overflow-scrolling: touch;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body,
html {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
body {
  line-height: 1;
}
*,
:after,
:before {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  transition: 0.3s all ease-in-out;
}
a,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
abbr[data-original-title],
abbr[title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}
address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
form {
  margin: 0;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body {
  -webkit-text-size-adjust: none;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
img {
  vertical-align: middle;
  border-style: none;
}
svg {
  overflow: hidden;
  vertical-align: middle;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="date"],
input[type="datetime-local"],
input[type="month"],
input[type="time"] {
  -webkit-appearance: listbox;
}
textarea {
  overflow: auto;
  resize: vertical;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
.small,
small {
  font-size: 80%;
  font-weight: 400;
}
.clear {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
.clearfix:after,
.clearfix:before {
  display: table;
  content: "";
  line-height: 0;
}
.clearfix:after {
  clear: both;
}
.left {
  float: left;
}
.right {
  float: right;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
}
.fixed {
  position: fixed;
}
.d-none,
.hide,
[hidden] {
  display: none !important;
}
.d-block {
  display: block;
}
.d-flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.d-grid {
  display: -ms-grid;
  display: grid;
}
.d-inline {
  display: inline;
}
.no-link {
  text-decoration: none !important;
}
.no-feel {
  cursor: default;
}
.f-light {
  font-weight: 300;
  font-weight: lighter;
}
.f-reg {
  font-weight: 400;
  font-weight: 400;
}
.f-semibold {
  font-weight: 500;
}
.f-bold,
b,
strong {
  font-weight: 700;
  font-weight: 700;
}
.f-bolder {
  font-weight: bolder;
  font-weight: 900;
}
.fxs {
  font-size: 0.95rem;
}
.fs {
  font-size: 1rem;
}
.fm {
  font-size: 1.2rem;
}
.fl {
  font-size: 1.5rem;
}
.fxl {
  font-size: 2rem;
}
.img-maxbox {
  max-width: 100%;
  height: auto;
}
.img-box {
  width: 100%;
  height: auto;
}
.ml-auto,
.mx-auto,
.obj-center {
  margin-left: auto;
}
.mr-auto,
.mx-auto,
.obj-center {
  margin-right: auto;
}
.p-mx-auto {
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
/*! Main Box Wrapper */
.box,
.box-max {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
/*! Grid Row */
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
.col,
[class*="col-"] {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
}
.col-auto {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}
.h100v {
  min-height: 100vh;
}
.right_panel {
  max-width: 300px;
  background-color: #fff;
  box-shadow: 0 0 20px -5px #999;
}
.bg {
  background-color: #e8eaf5;
}
.flex-column {
  flex-direction: column;
}
.justify-equally {
  justify-content: space-evenly;
}
.s-block {
  padding-top: 5px;
  display: block;
}
</style>
