
const container = document.getElementById('container');

const chartOptions = {
    layout: {
        textColor: 'white',
        background: { type: 'solid', color: 'black' },
    },
    rightPriceScale: {
        scaleMargins: {
            top: 0.4,
            bottom: 0.15,
        },
    },
    crosshair: {
        horzLine: { visible: false, labelVisible: false },
    },
    grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
    },
    height: 700,
};

const chart = LightweightCharts.createChart(container, chartOptions);

const areaSeries = chart.addAreaSeries({
    topColor: '#05613D',                          // 🌱 Darker green at the top
    bottomColor: 'rgba(5, 97, 61, 0.05)',         // Same green, but very transparent at bottom
    lineColor: '#03432B',                         // 🟢 Even darker line for contrast
    lineWidth: 2,
  });
  
  

const dayData = [
    { time: '2019-05-01', value: 26.02 },
    { time: '2019-05-02', value: 25.97 },
    { time: '2019-05-03', value: 26.02 },
    { time: '2019-05-06', value: 26.03 },
    { time: '2019-05-07', value: 26.04 },
    { time: '2019-05-08', value: 26.05 },
    { time: '2019-05-09', value: 26.05 },
    { time: '2019-05-10', value: 26.08 },
    { time: '2019-05-13', value: 26.05 },
    { time: '2019-05-14', value: 26.01 },
];

areaSeries.setData(dayData);

// Legend
const legend = document.createElement('div');
legend.style = 'position: absolute; left: 12px; top: 12px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 18px; font-weight: 300; color: white;';
container.appendChild(legend);

const formatPrice = price => (Math.round(price * 100) / 100).toFixed(2);
const setTooltipHtml = (name, date, price) => {
    legend.innerHTML = `<div style="font-size: 24px; margin: 4px 0px;">${name}</div><div style="font-size: 22px; margin: 4px 0px;">${price}</div><div>${date}</div>`;
};

const symbolName = 'AEROSPACE';
const updateLegend = param => {
    const valid = param && param.time && param.point.x >= 0 && param.point.y >= 0;
    const bar = valid ? param.seriesData.get(areaSeries) : areaSeries.dataByIndex(Number.MAX_SAFE_INTEGER, -1);
    const price = bar.value ?? bar.close;
    setTooltipHtml(symbolName, bar.time, formatPrice(price));
};

chart.subscribeCrosshairMove(updateLegend);
updateLegend();

let lastTime = new Date('2019-05-14');
const getNextDate = () => {
    lastTime.setDate(lastTime.getDate() + 1);
    return lastTime.toISOString().split('T')[0];
};

let value = 26.01;
setInterval(() => {
    value += (Math.random() - 0.5) * 0.1;
    const newPoint = { time: getNextDate(), value: Number(value.toFixed(2)) };
    areaSeries.update(newPoint);
    chart.timeScale().scrollToRealTime();
}, 320);

chart.timeScale().fitContent();
