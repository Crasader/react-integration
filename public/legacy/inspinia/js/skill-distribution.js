
(function () {

    $(document).ready(function () {
        var radarData = {
            labels: ["Project Management", "Software Design", "Database Design", "Dev. PHP", "Dev. J2SE", "Dev. J2EE", "Dev. Android"],
            datasets: [
                {
                    label: "My Second dataset",
                    fillColor: "rgba(26,179,148,0.2)",
                    strokeColor: "rgba(26,179,148,1)",
                    pointColor: "rgba(26,179,148,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [85, 70, 85, 100, 95, 45, 90]
                }
            ]
        };

        var radarOptions = {
            scaleShowLine: true,
            angleShowLineOut: true,
            scaleShowLabels: false,
            scaleBeginAtZero: true,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: true,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
            responsive: true,
        }

        var ctx = document.getElementById("radar-skill-distribution").getContext("2d");
        var myNewChart = new Chart(ctx).Radar(radarData, radarOptions);
    });

})();