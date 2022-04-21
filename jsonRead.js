//console.log("実行できています");
let reader = new FileReader();

let huga = [];

// ファイル選択画面にてファイルを選択した際の割り込み.
function fileChanged(input) {
    //console.log("ファイルが選択されました");
    huga = [];
    for (let i = 0; i < input.files.length; i++) {
        reader.readAsText(input.files[i], "UTF-8");
        reader.onload = () => {
            console.log(reader.result);
            huga = JSON.parse(reader.result);
            console.log(huga);
            let html = "";
            for (let j = 0; j < huga.length; j++) {
                let htmlParts =
                    '<div class="box">' +
                    '<a href="' +
                    huga[j].url +
                    '" target="_blank">' +
                    '<div class="element">' +
                    '<img src="' +
                    huga[j].image +
                    '">' +
                    '<p class="element-title">' +
                    huga[j].text +
                    "</p>" +
                    "</div>" +
                    "</a>" +
                    "</div>";
                html += htmlParts;
            }
            html = '<div class="main-container">' + html + "</div>";
            // console.log(html);
            document.getElementById("main").innerHTML = html;
        };
    }
}
