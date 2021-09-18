import Vue from 'vue'

Vue.prototype.zipPic = function (url) {
    if (url === undefined) {
        return url;
    }
    url = url.replace("http:", "");
    var subUrl = url.split("bfs/");
    if (subUrl.length < 2) {
        return url;
    }
    var c = subUrl[1].split("/")[0];
    var t = url.split(".")[3];
    var postfix = "";
    if (c === "face" && t === "jpg") {
        postfix = `@80w_80h.jpg`;
    } else if (c === "archive") {
        postfix = "@160w_100h.jpg";
    }
    return `${url}${postfix}`;
}