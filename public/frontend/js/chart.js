$(window).on('load', function () {
    $('.btn-uplink').trigger('click');
    $('.card.card-charts.chart-pon').fadeOut();
    $('input[type="radio"][name="btn_charts"]').on('change',function(){
        $this=$(this);
        $('.card-charts').each(function(){
            if($(this).prop('class').indexOf($this.prop('id').replace('btn_',''))>-1)
                $(this).fadeIn();
            else
                $(this).fadeOut();
        });
    });
    /*//$('#btn_uplink_01').trigger('click');alert();
    $('input[type="radio"][name="btn_charts_01"]').on('change',function(){
      alert();
        $this=$(this);
        $('.card-charts').each(function(){
            if($(this).prop('class').indexOf($this.prop('id').replace('_01','').replace('_02','').replace('btn_',''))>-1)
                $(this).fadeIn();
            else
                $(this).fadeOut();
        });
    });*/

    'use strict';
    var flatPicker_uplink = $('.flat-picker-uplink'),
        flatPicker_pon = $('.flat-picker-pon'),
        lineAreaChartEx_uplink = $('.line-area-chart-ex-uplink'),
        lineAreaChartEx_pon = $('.line-area-chart-ex-pon');
  
    // Color Variables
    var primaryColorShade = '#836AF9',
      yellowColor = '#ffe800',
      successColorShade = '#28dac6',
      warningColorShade = '#ffe802',
      warningLightColor = '#FDAC34',
      infoColorShade = '#299AFF',
      greyColor = '#4F5D70',
      blueColor = '#2c9aff',
      blueLightColor = '#84D0FF',
      greyLightColor = '#EDF1F4',
      tooltipShadow = 'rgba(0, 0, 0, 0.25)',
      lineChartPrimary = '#666ee8',
      lineChartDanger = '#ff4961',
      labelColor = '#6e6b7b',
      grid_line_color = 'rgba(200, 200, 200, 0.2)'; // RGBA color helps in dark layout
  
    // Detect Dark Layout
    if ($('html').hasClass('dark-layout')) {
      labelColor = '#b4b7bd';
    }
    //Draw rectangle Bar charts with rounded border
    Chart.elements.Rectangle.prototype.draw = function () {
        var ctx = this._chart.ctx;
        var viewVar = this._view;
        var left, right, top, bottom, signX, signY, borderSkipped, radius;
        var borderWidth = viewVar.borderWidth;
        var cornerRadius = 20;
        if (!viewVar.horizontal) {
          left = viewVar.x - viewVar.width / 2;
          right = viewVar.x + viewVar.width / 2;
          top = viewVar.y;
          bottom = viewVar.base;
          signX = 1;
          signY = top > bottom ? 1 : -1;
          borderSkipped = viewVar.borderSkipped || 'bottom';
        } else {
          left = viewVar.base;
          right = viewVar.x;
          top = viewVar.y - viewVar.height / 2;
          bottom = viewVar.y + viewVar.height / 2;
          signX = right > left ? 1 : -1;
          signY = 1;
          borderSkipped = viewVar.borderSkipped || 'left';
        }
    
        if (borderWidth) {
          var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
          borderWidth = borderWidth > barSize ? barSize : borderWidth;
          var halfStroke = borderWidth / 2;
          var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
          var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
          var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
          var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
          if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
          }
          if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
          }
        }
    
        ctx.beginPath();
        ctx.fillStyle = viewVar.backgroundColor;
        ctx.strokeStyle = viewVar.borderColor;
        ctx.lineWidth = borderWidth;
        var corners = [
          [left, bottom],
          [left, top],
          [right, top],
          [right, bottom]
        ];
    
        var borders = ['bottom', 'left', 'top', 'right'];
        var startCorner = borders.indexOf(borderSkipped, 0);
        if (startCorner === -1) {
          startCorner = 0;
        }
    
        function cornerAt(index) {
          return corners[(startCorner + index) % 4];
        }
    
        var corner = cornerAt(0);
        ctx.moveTo(corner[0], corner[1]);
    
        for (var i = 1; i < 4; i++) {
          corner = cornerAt(i);
          var nextCornerId = i + 1;
          if (nextCornerId == 4) {
            nextCornerId = 0;
          }
    
          var nextCorner = cornerAt(nextCornerId);
    
          var width = corners[2][0] - corners[1][0],
            height = corners[0][1] - corners[1][1],
            x = corners[1][0],
            y = corners[1][1];
    
          var radius = cornerRadius;
    
          if (radius > height / 2) {
            radius = height / 2;
          }
          if (radius > width / 2) {
            radius = width / 2;
          }
    
          if (!viewVar.horizontal) {
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
          } else {
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x, y);
          }
        }
    
        ctx.fill();
        if (borderWidth) {
          ctx.stroke();
        }
    };

    //----------------------------------------------------------------------------uplink
    if (flatPicker_uplink.length) {
        var date = new Date();
        flatPicker_uplink.each(function () {
          $(this).flatpickr({
            mode: 'range',
            defaultDate: [date.getFullYear()+'-'+(date.getMonth()+1)+'-01', date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()]
          });
        });
      }
    if (lineAreaChartEx_uplink.length) {
      new Chart(lineAreaChartEx_uplink, {
        type: 'line',
        plugins: [
          // to add spacing between legends and chart
          {
            beforeInit: function (chart) {
              chart.legend.afterFit = function () {
                this.height += 40;
              };
            }
          }
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 25,
              boxWidth: 9
            }
          },
          layout: {
            padding: {
              top: -20,
              bottom: -20,
              left: -20
            }
          },
          tooltips: {
            // Updated default tooltip UI
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 8,
            shadowColor: tooltipShadow,
            backgroundColor: window.colors.solid.white,
            titleFontColor: window.colors.solid.black,
            bodyFontColor: window.colors.solid.black
          },
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: grid_line_color
                },
                scaleLabel: {
                  display: true
                },
                ticks: {
                  fontColor: labelColor
                }
              }
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  color: greyLightColor,
                  zeroLineColor: grid_line_color
                },
                ticks: {
                  stepSize: 1,
                  min: 0,
                  max: 5,
                  fontColor: labelColor,
                  callback: function(value, index, values) {
                    return value?value+'Gbps':'0';
                  }
                },
                scaleLabel: {
                  display: true
                }
              }
            ],
          }
        },
        data: {
          labels: [
            '7/12',
            '8/12',
            '9/12',
            '10/12',
            '11/12',
            '12/12',
            '13/12',
            '14/12',
            '15/12',
            '16/12',
            '17/12',
            '18/12',
            '19/12',
            '20/12',
            ''
          ],
          datasets: [
            {
              label: 'Aggregate Traffic',
              data: [0.25, 0.55, 0.45, 0.75, 0.65, 0.55, 0.70, 0.60, 1, 0.98, 0.90, 1.20, 1.25, 1.40, 1.55],
              lineTension: 0,
              backgroundColor: blueColor,
              pointStyle: 'circle',
              borderColor: 'transparent',
              pointRadius: 0.5,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 5,
              pointBorderColor: 'transparent',
              pointHoverBackgroundColor: blueColor,
              pointHoverBorderColor: window.colors.solid.white
            },
          ]
        }
      });
    }

    //----------------------------------------------------------------------------pon
    if (flatPicker_pon.length) {
      var date = new Date();
      flatPicker_pon.each(function () {
        $(this).flatpickr({
          mode: 'range',
          defaultDate: [date.getFullYear()+'-'+(date.getMonth()+1)+'-01', date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()]
        });
      });
    }
    if (lineAreaChartEx_pon.length) {
      new Chart(lineAreaChartEx_pon, {
        type: 'line',
        plugins: [
          {
            beforeInit: function (chart) {
              chart.legend.afterFit = function () {
                this.height += 40;
              };
            }
          }
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 25,
              boxWidth: 9
            }
          },
          layout: {
            padding: {
              top: -20,
              bottom: -20,
              left: -20
            }
          },
          tooltips: {
            // Updated default tooltip UI
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 8,
            shadowColor: tooltipShadow,
            backgroundColor: window.colors.solid.white,
            titleFontColor: window.colors.solid.black,
            bodyFontColor: window.colors.solid.black
          },
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: grid_line_color
                },
                scaleLabel: {
                  display: true
                },
                ticks: {
                  fontColor: labelColor
                }
              }
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  color: greyLightColor,
                  zeroLineColor: grid_line_color
                },
                ticks: {
                  stepSize: 1,
                  min: 0,
                  max: 5,
                  fontColor: labelColor,
                  callback: function(value, index, values) {
                    return value?value+'Gbps':'0';
                  }
                },
                scaleLabel: {
                  display: true
                }
              }
            ],
          }
        },
        data: {
          labels: [
            '7/12',
            '8/12',
            '9/12',
            '10/12',
            '11/12',
            '12/12',
            '13/12',
            '14/12',
            '15/12',
            '16/12',
            '17/12',
            '18/12',
            '19/12',
            '20/12',
            ''
          ],
          datasets: [
            {
              label: 'Aggregate Traffic',
              data: [0.25, 0.55, 0.45, 0.75, 0.65, 0.55, 0.70, 0.60, 1, 0.98, 0.90, 1.20, 1.25, 1.40, 1.55],
              lineTension: 0,
              backgroundColor: blueColor,
              pointStyle: 'circle',
              borderColor: 'transparent',
              pointRadius: 0.5,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 5,
              pointBorderColor: 'transparent',
              pointHoverBackgroundColor: blueColor,
              pointHoverBorderColor: window.colors.solid.white
            },
          ]
        }
      });
    }
});