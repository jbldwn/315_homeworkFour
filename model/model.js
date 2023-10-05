export function getContent(locationID) {
    console.log("content gotten");
    $.get(`pages/${locationID}.html`, (data) => {
        $("#app").html(data);
    }).fail(() => {
        console.log("no data retrieved");
    })
}