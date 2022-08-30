document.getElementById("chartdiv1").innerHTML = root;

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv1");


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
chart.children.unshift(am5.Label.new(root, {
  text: "Top 5 States With the Most Sightings",
  fontSize: 25,
  fontWeight: "500",
  textAlign: "center",
  x: am5.percent(50),
  centerX: am5.percent(50),
  paddingTop: 0,
  paddingBottom: 0
}));

// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Series
var series = chart.series.push(am5percent.PictorialStackedSeries.new(root, {
  alignLabels: true,
  orientation: "vertical",
  valueField: "value",
  categoryField: "category",
  svgPath: "M502.154,264.319c0-14.069-34.51-26.648-88.832-35.086c-10.495-70.923-79.229-125.878-162.247-125.878   c-83.019,0-151.745,54.961-162.24,125.883C34.518,237.676,0,250.256,0,264.331c0,15.14,39.993,28.576,101.663,36.957   l-32.792,40.739l28.258,26.917c-9.621,3.118-15.8,7.9-15.779,13.252c0.052,9.276,18.616,16.713,41.486,16.603   c22.867-0.108,41.377-7.71,41.338-16.974c-0.04-8.438-15.45-15.338-35.464-16.434l-26.829-25.547l28.348-35.196   c35.845,3.611,77.029,5.669,120.847,5.669c41.818,0,81.22-1.889,115.906-5.199l27.945,34.715l-26.824,25.549   c-20.012,1.088-35.416,7.994-35.458,16.432c-0.046,9.267,18.463,16.877,41.322,16.975c22.874,0.109,41.457-7.325,41.489-16.603   c0.033-5.351-6.156-10.145-15.766-13.252l28.252-26.917l-32.296-40.104C460.053,293.584,502.154,279.86,502.154,264.319z    M114.186,225.774c12.146-55.751,68.895-98.075,136.89-98.075c68.002,0,124.741,42.323,136.89,98.075   c-39.383-4.706-86.37-7.439-136.89-7.439C200.56,218.335,153.572,221.074,114.186,225.774z"
}));

series.labelsContainer.set("width", 100);
series.ticks.template.set("location", 0.6);
root.interfaceColors.set("text", "#27eb00");
root.interfaceColors.set("grid", "#27eb00");

var data = [
  { value: (21926/172107)*100, category: "California"},
  { value: (9942/172107)*100, category: "Florida" },
  { value: (9124/172107)*100, category: "Washington"},
  { value: (8309/172107)*100, category: "Texas"},
  { value: (7444/172107)*100, category: "New York"},
  { value: (115362/172107)*100, category: "other"},
  ];
// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Setting_data

series.data.setAll(data);


// Play initial series animation
// https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
chart.appear(1000, 100);