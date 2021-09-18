import formatNumber from "@/utils/format-number";
import interpolation from "@/utils/interpolation";
import fmt from 'date-fns/format'

export function getMultiChartOptions(data, type = "line", format = "YYYY-MM-DD HH:mm") {
    if (data.length === 0) return undefined;

    let series = data.map(e => {
        let localOffset = new Date().getTimezoneOffset() / 60;
        let offset = -8 - localOffset;
        // 修改时间格式
        e[0] = e[0].map(item => {
            let date;
            if (typeof item[0] == "string") {
                date = new Date(item[0].replace(new RegExp(/-/gm), "/"));
                date.setHours(date.getHours() + offset);
            } else {
                date = item[0];
            }
            return [date, item[1]];
        });
        let result = {
            name: e[1],
            data: e[0],
            smooth: false,
            showSymbol: false,
            color: e[2]
        };
        //设置图表格式
        if (type === "area") {
            result.type = "line";
            result.name += "增长";
            result.areaStyle = {
                color: e[2] + "33"
            };
        } else {
            result.type = type;
        }
        return result;
    });
    let Chart = {
        legend: {
            selectedMode: "single"
        },
        grid: {
            left: "10px",
            right: "50px",
            top: "30px",
            containLabel: true
        },
        dataZoom: [
            {
                type: "inside",
                filterMode: "weakFilter"
            },
            {
                handleSize: "100%",
                handleStyle: {},
                bottom: "20px"
            }
        ],
        tooltip: {
            trigger: "axis",
            confine: true,
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return fmt(params.value, format);
                    }
                }
            }
        },
        xAxis: {
            type: "time",
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return "日期：" + fmt(params.value, format);
                    }
                }
            }
        },
        yAxis: [
            {
                type: "value",
                min: function (value) {
                    return value.min > 0 && type === "area" ? 0 : value.min;
                },
                axisLabel: {
                    formatter: formatNumber
                }
            }
        ],
        series: series.filter(s => {
            return s.data.length !== 0;
        })
    };
    return Chart;
}
//生成日历热力图数据
export function getUpCalendarOptions(data) {
    data.forEach((e) => {
        e[0] = interpolation(e[0]);
    });
    let series = data.map((e, i) => {
        return {
            name: e[1] + "变化",
            color: e[2],
            type: "heatmap",
            coordinateSystem: "calendar",
            calendarIndex: i,
            data: e[0],
            tooltip: {
                formatter: (params) => {
                    return `${params.seriesName} <br />
          日期：${params.value[0]}  <br />
          数值：${formatNumber(params.value[1])}`;
                },
            },
        };
    });

    let week = new Date().getDay();
    let now = new Date();
    let front = new Date(now - 86400 * 366 * 1000 - (6 - week) * 86400 * 1000);
    if (document.body.offsetWidth < 768) {
        front = new Date(now - 86400 * 58 * 1000 - (6 - week) * 86400 * 1000);
    }
    let cals = data.map(() => {
        now = new Date();
        return {
            type: "continuous",
            right: "35",
            splitLine: {
                show: false,
            },
            itemStyle: {
                color: "#fff",
                borderWidth: 4,
                borderColor: "#fff",
            },
            cellSize: [18, 18],
            range: [front, now],
            yearLabel: {show: false},
            dayLabel: {nameMap: "cn", position: "end", color: "#888", fontSize: 10},
            monthLabel: {nameMap: "cn", color: "#888", fontSize: 10},
        };
    });
    let vms = data.map((e, i) => {
        let max = Math.max.apply(
            Math,
            e[0].map((item) => {
                if (new Date(item[0]) < front) {
                    return 0;
                }
                return item[1];
            })
        );
        let min = Math.min.apply(
            Math,
            e[0].map((item) => {
                if (new Date(item[0]) < front) {
                    return 0;
                }
                return item[1];
            })
        );
        return {
            min: min,
            max: max,
            range: [0, max],
            inRange: {
                color: [e[2]],
                opacity: [0.2, 1],
            },
            outOfRange: {
                color: ["#333"],
                opacity: [0.8, 0.2],
            },
            orient: "horizontal",
            seriesIndex: i,
            left: "center",
            show: false,
            textStyle: {
                color: "#000",
            },
        };
    });
    let option = {
        legend: {
            selectedMode: "single",
        },
        tooltip: {},
        visualMap: vms,
        calendar: cals,
        series: series,
    };

    return option;
}