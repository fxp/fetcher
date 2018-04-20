const download = require("download")
const fs = require("fs")
const path = require("path")

var URL_BASE = "http://cop.d.appchina.com/McDonald/cooperation?partner=alibaba&usage=app&appid=";

// var id = "2";
// var output_dir = "/Users/xiaopingfeng/Projects/fetcher/";
// var output_filename = id + ".apk";

var id = undefined;
var output_dir = undefined;
var output_filename = undefined;

// TODO do some logging

if (!module.parent) {
    id = process.argv[2];
    output_dir = process.argv[3];
    output_filename = id + ".apk";
    download(URL_BASE + id, output_dir, {filename: output_filename})
        .then(function () {
            console.log("downloaded", output_dir, id);
        }, function (err) {
            console.error(err.message)
        })
} else {
    module.exports = {
      download: function(id, output_dir){
        output_filename = id + ".apk";
        return download(URL_BASE + id, output_dir, {filename: output_filename})
      }
    }
}
