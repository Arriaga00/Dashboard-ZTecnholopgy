import ReactApexChart from "react-apexcharts";

const GraficaHome = () => {
  const chartData = {
    series: [
      {
        name: "Cotizaciones",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "ventas",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo",
        ],
      },
    },
  };

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
          width={600}
        />
      </div>
    </>
  );
};

export default GraficaHome;
