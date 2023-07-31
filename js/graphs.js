if (!window.GraphIdol) {
    window.GraphIdol = {};
}

$(function () {
    GraphIdol.populate();
});

GraphIdol.populate = function () {
    var graphContent = document.getElementById('graph-content');

    for (var i = 0; i < canvasdata.length; i++) {
        var canvas = document.createElement('canvas');
        canvas.id = 'canvas-' + i;
        graphContent.appendChild(canvas);

        var theLabel = canvasdata[i].name + ' - ' + canvasdata[i].groupName;
        var theLabels = canvasdata[i].labels;
        var theData = canvasdata[i].data;

        /*new Chart(canvas, {
            type: 'line',
            data: {
                labels: theLabels,
                datasets: [{
                    label: theLabel,
                    data: theData,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });*/
        new Chart(canvas, {
            data: {
                datasets: [{
                    type: 'bar',
                    label: theLabel,
                    data: theData
                }, {
                    type: 'line',
                    label: theLabel,
                    data: theData
                }],
                labels: theLabels
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        graphContent.appendChild(document.createElement('br'));
        graphContent.appendChild(document.createElement('br'));
        graphContent.appendChild(document.createElement('br'));
    }

    /*var canvas = document.createElement('canvas');
    canvas.id = 'first-canvas';

    graphContent.appendChild(canvas);

    new Chart(canvas, {
        type: 'line',
        data: {
          labels: ['27/07/2023', '28/07/2023', '29/07/2023'],
          datasets: [{
            label: 'COUNT',
            data: [12, 19, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });*/

};