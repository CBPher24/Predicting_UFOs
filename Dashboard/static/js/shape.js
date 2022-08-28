var root = am5.Root.new("chartdiv2");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/
var chart = root.container.children.push(am5percent.SlicedChart.new(root, {
  layout: root.verticalLayout
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Series
var series = chart.series.push(am5percent.PyramidSeries.new(root, {
  orientation: "vertical",
  valueField: "value",
  categoryField: "category"
}));

var data = [
    { value: (37018/172107)*100, category: "light"},
    { value: (17977/172107)*100, category: "circle" },
    { value: (16974/172107)*100, category: "triangle"},
    { value: (13307/172107)*100, category: "fireball"},
    { value: (11613/172107)*100, category: "sphere"},
    { value: (75218/172107*100), category: "other"},
    ];

series.data.setAll(data);

// Play initial series animation
// https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
series.appear();


// Create legend
// https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  marginTop: 15,
  marginBottom: 15
}));

legend.data.setAll(am5.array.copy(series.dataItems).reverse());


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);