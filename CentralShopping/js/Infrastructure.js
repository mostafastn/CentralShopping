function readTextFileJS(file, callback) {


    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
};

function readTextFile(file, callback) {
    
    $.getJSON(file, function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<li id='" + val.zipcode + "'>" + val.name + "(" + val.zipcode + ")</li>");
        });
        callback(items)
    });
};



//usage:
function loadMenuJS(callback) {

    readTextFileJS("../Menu/Menu.json", function (text) {

        var data = JSON.parse(text);
        callback(data);
    });


};

function loadMenu(callback) {
    
    var file = '../Menu/Menu.json';
    readTextFile(file, function (text) {
        callback(text);
    });


};