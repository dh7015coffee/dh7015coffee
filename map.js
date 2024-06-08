// 示例JavaScript代码
document.addEventListener('DOMContentLoaded', function () {
    // 页面加载完毕后的逻辑
});


/**
* ---------------------------------------
* This demo was created using amCharts 5.
*
* For more information visit:
* https://www.amcharts.com/
*
* Documentation is available at:
* https://www.amcharts.com/docs/v5/
* ---------------------------------------
*/

// Create root and chart
var root = am5.Root.new("chartdiv", {
    tooltipContainerBounds: {
        top: 10,
        // right: 50,
        right: 0,
        bottom: 50,
        left: 50
    }
});

// Set themes
root.setThemes([
    am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
    am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoNaturalEarth1()
    })
);

// Create polygon series
var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
    })
);

var polygonSeries_v2 = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        include: ["ET", "RW", "ID", "VN", "BR", "CO", "CN", "TW", "KE", "MW", "HT", "PE", "CG", "IN", "TZ", "HN", "BO", "ZM", "GT", "TH", "US", "BI", "UG", "VE", "PH", "JM", "MX", "PG", "YE", "PA", "NI"]

    })
);

polygonSeries.mapPolygons.template.setAll({
    // tooltipHTML: "<div style='background:#000'>{name}</div>",
    templateField: "polygonSettings",
    interactive: false, // Disable interaction
    fill: am5.color(0xDDDDDD), // Grey color
});

polygonSeries_v2.mapPolygons.template.setAll({
    tooltipHTML: `<div 
                style='border: 1px solid rgba(242,242,242,1); 
                border-radius:5px; 
                width: 200px; 
                background:#FFF; 
                padding: 0px 0px 20px 20px;
                text-align: justify'>{brief}</div>`,
    templateField: "polygonSettings",
    // interactive: true, // Disable interaction
    fill: am5.color(0xFF8C42), // Grey color
    callbk: () => { }
});

// polygonSeries_v2.mapPolygons.template.events.on("click", function (ev) {
//     console.log("Clicked on", ev.target.dataItem.get("id"));
// });

polygonSeries_v2.mapPolygons.template.events.on("click", function (ev) {
    console.log("Clicked on", ev.target.dataItem.get("id"));

    // Set modal content dynamically based on clicked polygon
    var countryId = ev.target.dataItem.get("id");
    var content = ""; // Customize this as needed
    countries.map((ele) => {
        if (ele.id == countryId) {
            content = ele.img
        }
    })
    modalBody = document.getElementsByClassName('modal-body')

    modalBody[0].innerHTML = `<img src="${content}"></img>`
    // Open the modal using jQuery
    $('#infoModal').modal('show');
});


// polygonSeries_v2.mapPolygons.template.states.create("hover", {
//     fill: am5.color(0xffffff),
// });

polygonSeries_v2.data.setAll([{
    id: "ET",
    brief: `<div class='map-tips-container'>
            <h4>Ethiopia</h4>
            <p>Africa</p>
            </div>`, detail: "??",
    polygonSettings: {
        fill: am5.color(0xFF8C42),
        interactive: true
    },
}, {
    id: "RW",
    brief: `<div class='map-tips-container'>
            <h4>Rwanda</h4>
            <p>Africa</p>
            </div>`,
    detail: "??",
    polygonSettings: {
        fill: am5.color(0xFF8C42),
        interactive: true,
    }
}, {
    id: "ID",
    brief: `<div class='map-tips-container'>
            <h4>Indonesia</h4>
            <p>Asia</p>
            </div>`,
    detail: "??",
    polygonSettings: {
        fill: am5.color(0xFF8C42),
        interactive: true,
    },
}, {
    id: "VN",
    brief: `<div class='map-tips-container'>
            <h4>Vietnam</h4>
            <p>Asia</p>
            </div>`,
    detail: "??",
    polygonSettings: {
        fill: am5.color(0xFF8C42),
        interactive: true,
    },
}, {
    id: "BR",
    brief: `<div class='map-tips-container'>
            <h4>Brazil</h4>
            <p>America</p>
            </div>`,
    detail: "??",
    polygonSettings: {
        fill: am5.color(0xFF8C42),
        interactive: true,
    },
}, {
    id: "CO",
    brief: `<div class='map-tips-container'>
            <h4>Colombia</h4>
            </p>America</p>
            </div>`,
    detail: "??",
    polygonSettings: {
        fill: am5.color(0xFF8C42),
        interactive: true,
    },
}, {
    id: "CN",
    brief: `<div class='map-tips-container'>
            <h4>China</h4>
            </p>Asia</p>
            </div>`,
    detail: "??",
    polygonSettings: {
        fill: am5.color(0xFF8C42),
        interactive: true,
    },
}, {
    id: "TW",
    brief: `<div class='map-tips-container'>
            <h4>China</h4>
            </p>Asia</p>
            </div>`,
    detail: "??",
    polygonSettings: {
        fill: am5.color(0xFF8C42),
        interactive: false,
    },
}, { id: "KE", brief: `<div class='map-tips-container'><h4>Kenya</h4><p>Africa</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "MW", brief: `<div class='map-tips-container'><h4>Malawi</h4><p>Africa</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "HT", brief: `<div class='map-tips-container'><h4>Haiti</h4><p>Americas</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "PE", brief: `<div class='map-tips-container'><h4>Peru</h4><p>Americas</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "CG", brief: `<div class='map-tips-container'><h5>Republic of Congo</h5><p>Africa</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "IN", brief: `<div class='map-tips-container'><h4>India</h4><p>Asia</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "TZ", brief: `<div class='map-tips-container'><h4>Tanzania</h4><p>Africa</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "HN", brief: `<div class='map-tips-container'><h4>Honduras</h4><p>Americas</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "BO", brief: `<div class='map-tips-container'><h4>Bolivia</h4><p>Americas</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "ZM", brief: `<div class='map-tips-container'><h4>Zambia</h4><p>Africa</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "GT", brief: `<div class='map-tips-container'><h4>Guatemala</h4><p>Americas</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "TH", brief: `<div class='map-tips-container'><h4>Thailand</h4><p>Asia</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "US", brief: `<div class='map-tips-container'><h4>United States</h4><p>Americas</p></any>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "BI", brief: `<div class='map-tips-container'><h4>Burundi</h4><p>Africa</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "UG", brief: `<div class='map-tips-container'><h4>Uganda</h4><p>Africa</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "VE", brief: `<div class='map-tips-container'><h4>Venezuela</h4><p>Americas</p></wrap>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "PH", brief: `<div class='map-tips-container'><h4>Philippines</h4><p>Asia</wrap>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "JM", brief: `<div class='map-tips-container'><h4>Jamaica</h4><p>Americas</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "MX", brief: `<div class='map-tips-container'><h4>Mexico</h4><p>Americas</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "PG", brief: `<div class='map-tips-container'><h5>Papua New Guinea</h5><p>Oceania</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "YE", brief: `<div class='map-tips-container'><h4>Yemen</h4><p>Asia</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "PA", brief: `<div class='map-tips-container'><h4>Panama</h4><p>Americas</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } },
{ id: "NI", brief: `<dic class='map-tips-container'><h4>Nicaragua</h4><p>Americas</p></div>`, detail: "??", polygonSettings: { fill: am5.color(0xFF8C42), interactive: true } }
])

var pointSeries = chart.series.push(
    am5map.MapPointSeries.new(root, {
        polygonIdField: "country",
    })
);

pointSeries.data.setAll([
    { country: "ET", name: "Ethiopia" },
    { country: "RW", name: "Rwanda" },
    { country: "ID", name: "Indonesia" },
    { country: "VN", name: "Vietnam" },
    { country: "BR", name: "Brazil" },
    { country: "CO", name: "Colombia" },
    { country: "CN", name: "China" },
    { country: "KE", name: "Kenya" },
    { country: "MW", name: "Malawi" },
    { country: "HT", name: "Haiti" },
    { country: "PE", name: "Peru" },
    { country: "CG", name: "Republic of Congo" },
    { country: "IN", name: "India" },
    { country: "TZ", name: "Tanzania" },
    { country: "HN", name: "Honduras" },
    { country: "BO", name: "Bolivia" },
    { country: "ZM", name: "Zambia" },
    { country: "GT", name: "Guatemala" },
    { country: "TH", name: "Thailand" },
    { country: "US", name: "United States" },
    { country: "BI", name: "Burundi" },
    { country: "UG", name: "Uganda" },
    { country: "VE", name: "Venezuela" },
    { country: "PH", name: "Philippines" },
    { country: "JM", name: "Jamaica" },
    { country: "MX", name: "Mexico" },
    { country: "PG", name: "Papua New Guinea" },
    { country: "YE", name: "Yemen" },
    { country: "PA", name: "Panama" },
    { country: "NI", name: "Nicaragua" }
]);

var countries = [{
    id: "ET",
    img: "./img/ET.png"
}, {
    id: "RW",
    img: "./img/RW.png"
}, {
    id: "ID",
    img: "./img/ID.png"
}, {
    id: "VN",
    img: "./img/VN.png"
}, {
    id: "BR",
    img: "./img/BR.png"
}, {
    id: "CO",
    img: "./img/CO.png"
}, {
    id: "CN",
    img: "./img/CN.png"
}, {
    id: "KE",
    img: "./img/KE.png"
}, {
    id: "MW",
    img: "./img/MW.png"
}, {
    id: "HT",
    img: "./img/HT.png"
}, {
    id: "PE",
    img: "./img/PE.png"
}, {
    id: "CG",
    img: "./img/CG.png"
}, {
    id: "IN",
    img: "./img/IN.png"
}, {
    id: "TZ",
    img: "./img/TZ.png"
}, {
    id: "HN",
    img: "./img/HN.png"
}, {
    id: "BO",
    img: "./img/BO.png"
}, {
    id: "ZM",
    img: "./img/ZM.png"
}, {
    id: "GT",
    img: "./img/GT.png"
}, {
    id: "TH",
    img: "./img/TH.png"
}, {
    id: "US",
    img: "./img/US.png"
}, {
    id: "BI",
    img: "./img/BI.png"
}, {
    id: "UG",
    img: "./img/UG.png"
}, {
    id: "VE",
    img: "./img/VE.png"
}, {
    id: "PH",
    img: "./img/PH.png"
}, {
    id: "JM",
    img: "./img/JM.png"
}, {
    id: "MX",
    img: "./img/MX.png"
}, {
    id: "PG",
    img: "./img/PG.png"
}, {
    id: "YE",
    img: "./img/YE.png"
}, {
    id: "PA",
    img: "./img/PA.png"
}, {
    id: "NI",
    img: "./img/NI.png"
}, {
    id: "TW",
    img: "./img/CN.png"
}];

// pointSeries.bullets.push(function () {
//     return am5.Bullet.new(root, {
//         sprite: am5.Label.new(root, {
//             centerX: am5.p50,
//             centerY: am5.p50,
//             html: `<div onclick='test()'><h2 id='{name}'>{name}</h2></div>`,
//             populateText: true
//         })
//     });
// });

function test() {
    console.log('param')
}
