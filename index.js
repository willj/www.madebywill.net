"use strict";

const noodle = require("willj-noodle");

const settings = {
    siteTitle: "madebywill",
    removeFileExtFromUrls: true,
    useDateInPostUrls: true,
    postsPerPage: 10,
    postsPermalink: "index.html",
    siteBaseUrl: "http://www.madebywill.net/"
};

noodle(settings);