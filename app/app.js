import { getContent } from "../model/model.js";
function initListeners() {
    console.log("listeners added");
    $(".modalAction").on("click", (e) => {
        console.log("Modal interacted");
        $("#modal").toggle();
    })
}

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if (!pageID) {
        pageID = "home"
    }

    getContent(pageID);
}

function readySite() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    readySite();
    initListeners();
});