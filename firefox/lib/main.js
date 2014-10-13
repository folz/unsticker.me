"use strict";

var pageMod = require("sdk/page-mod").PageMod({
  include: "*.facebook.com",
  contentStyleFile: require("sdk/self").data.url("contentstyles.css")
});
