import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

const GaugeChart = () => {
  const chartRef = useRef(null);
  const [value, setValue] = useState(40);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const getOption = (val) => ({
      series: [
        {
          type: "gauge",
          startAngle: 180,
          endAngle: 360,
          min: 0,
          max: 300,
          splitNumber: 3,
          itemStyle: {
            color: "#FFAB91",
          },
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            width: 30,
          },
          axisLine: {
            lineStyle: {
              width: 30,
            },
          },
          axisTick: {
            distance: -45,
            splitNumber: 3,
            lineStyle: {
              width: 0,
              color: "#999",
            },
          },
          splitLine: {
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: "#999",
            },
          },
          axisLabel: {
            distance: -20,
            color: "#999",
            fontSize: 20,
          },
          detail: {
            valueAnimation: true,
            width: "20%",
            lineHeight: 20,
            borderRadius: 3,
            offsetCenter: [0, "-5%"],
            fontSize: 40,
            fontWeight: "normal",
            formatter: "{value} WPM",
            color: "inherit",
          },
          data: [{ value: val }],
        },
      ],
    });

    myChart.setOption(getOption(value));

    return () => {
      myChart.dispose();
    };
  }, [value]);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

const App = () => <GaugeChart />;

export default App;
