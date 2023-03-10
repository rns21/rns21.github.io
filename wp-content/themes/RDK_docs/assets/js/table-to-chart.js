// global Chart var
var gChart;
$(document).ready(function () {
    if ($('.charttoTable').length > 0) {
        createChartDom();
        googleChartInit();
        var chartBase = 'PieChart';
        var chartType = 'pie';
        var threeD = false;
        // change chart type on drop-down selection.
        $('.chartWrapper #hChartList li').click(function() {
            chartBase = $(this).attr('data-chartType').toLowerCase().trim();
            chartType = $(this).text().replace(/ /g,"").toLowerCase().trim();
            threeD = $('.chartWrapper input#threeD').is(":checked");
            $('#googleChart').empty();
            drawChart(chartType, threeD);

        });
        // change chart type on toggle od 3D check-box.
        $('.chartWrapper input#threeD').change(function(e){
            $('#googleChart').empty();
            if(this.checked) {
                drawChart(chartType, true);
            } else {
                drawChart(chartType, false);
            }
        });
    }
});

/**
 * Initialize Google Charts
 */
function googleChartInit() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['table', 'corechart', 'annotationchart', 'sankey']});
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
}

/**
 * Generate DOM to display chart in.
 */
function createChartDom() {
    var chartList = {
        "Pie": "PieChart",
        "Donut": "PieChart",
        "Annotation": "AnnotationChart",
        "Line": "LineChart",
        "Area": "AreaChart",
        "Stepped Area": "SteppedAreaChart",
        "Annotation": "AnnotationChart",
        "Scatter": "ScatterChart",
        "Bubble": "BubbleChart",
        "Bar": "bar",
        "Column": "ColumnChart",
        "Candlestick": "CandlestickChart",
        "Waterfall": "CandlestickChart",
        "Sankey": "Sankey",
        "Data Table": "Table",
    }
    $('.charttoTable table').attr('id', 'chartTable');
    $('.charttoTable table#chartTable').hide();
    $('.charttoTable').prepend('<div class="chartWrapper"></div>');
    $('.chartWrapper').append('<div id="googleChart" style="width:100%; height:400px;"></div>');
    $('.chartWrapper').append('<div class="chartListWrapper"></div>');
    $('.chartListWrapper').append('<div class="selchartList"><span class="chartName"></span><span class="chartDrop icon-Dropdown1"></span></div>');
    $('.chartListWrapper').append('<ul id="hChartList" class="chartList chartToggle"></ul>');
    $.each(chartList, function (chartKey, chartType) {
        chartKeyVal = chartKey.replace(/ /g, "").toLowerCase().trim();
        $('#hChartList').append('<li data-chartType="' + chartType.replace(/ /g, "") + '" class="chartList-Item chartItem-' + chartKeyVal + ' ' + chartKeyVal + '">' + chartKey + '</li>');
    });
    $('.chartWrapper .chartListWrapper .selchartList .chartName').text($('#hChartList li').first().text().trim());
    $('.chartWrapper .chartListWrapper').append('<div class="toggleWrap"><input type="checkbox" id="threeD" class="threeD toggleBox" name="threeD" value="1"><label class="threeD" for="threeD">3D</label></div>');
    $('.chartWrapper .chartListWrapper ul#hChartList').hide();
    $('.chartWrapper .chartListWrapper .selchartList').click(function () {
        $(this).siblings('ul#hChartList').slideToggle();
        $(this).siblings('ul#hChartList').toggleClass('opened');
    })
    $('.chartWrapper ul#hChartList li.chartList-Item').click(function () {
        selectedChart = $(this).text().trim();
        $(this).parents('.chartListWrapper').find('.selchartList .chartName').text(selectedChart);
        if ($(this).parents('ul#hChartList').hasClass('opened')) {
            $(this).parents('ul#hChartList').slideUp(400);
            $(this).parents('ul#hChartList').removeClass('opened');
        }
    });
    $(document).mouseup(function (e) {
        var container = $(".chartWrapper .chartListWrapper");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('ul#hChartList').hasClass('opened')) {
                $('ul#hChartList').slideUp(400);
                $('ul#hChartList').removeClass('opened');
            }
        }
    });
}

/**
 * Generate the Chart
 * @param {Type of chary selected} chartType 
 * @param {if 3D} threeD 
 */
function drawChart(chartType,threeD) {
    var vals = Array();

    $("table#chartTable tr").each(function (i, v) {
        vals[i] = Array();
        $(this).children('th,td').each(function (ii, vv) {
            vals[i][ii] = parseInt($(this).text().trim()) || $(this).text().trim();
        });
    })
    // convert 2d array to dataTable and draw
    var data = google.visualization.arrayToDataTable(vals);

    // Optional; add a title and set the width and height of the chart
    var options = {
        title: '',
        backgroundColor: 'transparent',
        is3D: threeD,
        animation: {
            duration: 1200,
            easing: 'out',
            startup: true
        },
        colors: ['#7C9AFC', '#94F98F', '#FF7676', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
        chartArea: {
            left: 50,
            top: 10,
            width: '100%',
            height: '70%'
        },
        legend: {
            position: 'bottom',
            textStyle: {
                fontSize: 12
            }
        },
    };

    var gChart;
    switch(chartType){
        case "donut":
                options.pieHole = 0.4;  
                var gChart = new google.visualization.PieChart(document.getElementById('googleChart'));
            break;
        case "annotation":
                options = {
                    displayAnnotations: true
                };
                var gChart = new google.visualization.AnnotationChart(document.getElementById('googleChart'));
            break;
        case "candlestick":
                var gChart = new google.visualization.CandlestickChart(document.getElementById('googleChart'));
            break;
        case "waterfall":
                options.bar= { groupWidth: '100%' };
                var gChart = new google.visualization.CandlestickChart(document.getElementById('googleChart'));
            break;
        case "bar":
                var gChart = new google.visualization.BarChart(document.getElementById('googleChart'));
            break;
        case "column":
                var gChart = new google.visualization.ColumnChart(document.getElementById('googleChart'));
            break;
        case "line":
                var gChart = new google.visualization.LineChart(document.getElementById('googleChart'));
            break;
        case "area":
                var gChart = new google.visualization.AreaChart(document.getElementById('googleChart'));
            break;
        case "bubble":
                var gChart = new google.visualization.BubbleChart(document.getElementById('googleChart'));
            break;
        case "sankey":
                var gChart = new google.visualization.Sankey(document.getElementById('googleChart'));
            break;
        case "scatter":
                var gChart = new google.visualization.ScatterChart(document.getElementById('googleChart'));
            break;
        case "steppedarea":
                var gChart = new google.visualization.SteppedAreaChart(document.getElementById('googleChart'));
            break;
        case "datatable":
                options = {showRowNumber: true, width: '100%', height: '100%'}
                var gChart = new google.visualization.Table(document.getElementById('googleChart'));
            break;
        default :
            var gChart = new google.visualization.PieChart(document.getElementById('googleChart'));
            break;

    }
    gChart.draw(data, options);

}