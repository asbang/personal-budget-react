import React, { useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import * as d3 from "d3";

function HomePage() {
  var dataSource = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#ffcd56",
          "#ff6384",
          "#36a2eb",
          "#fd6b19",
          "#7ae7c7",
          "#c589e8",
          "#7c3238",
          "#8d99ae",
        ],
      },
    ],
    labels: [],
  };

  function createChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    // <ChartJS type='pie' data={dataSource} />
    var myPieChart = new ChartJS(ctx, {
      type: "pie",
      data: dataSource,
    });
  }

  function getBudget() {
    axios.get("http://localhost:3000/budget").then(function (res) {
      console.log(res);
      for (var i = 0; i < res.data.myBudget.length; i++) {
        dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        dataSource.labels[i] = res.data.myBudget[i].title;
      }
      createChart();
      drawChart(randomData(res.data.myBudget));
      // call d3
    });
  }

  var colors = [
    "#ffcd56",
    "#ff6384",
    "#36a2eb",
    "#fd6b19",
    "#7ae7c7",
    "#c589e8",
    "#7c3238",
    "#8d99ae",
  ];

  function drawChart(data) {
    var svg = d3
      .select("#d3Chart")
      .append("svg")
      .attr("width", 700)
      .attr("height", 600)
      .append("g");
    var width = 750,
      height = 600,
      radius = Math.min(width, height) / 2;
    svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    //createColors(data);

    const arcGenerator = d3.svg.arc().innerRadius(0).outerRadius(radius);

    const pieGenerator = d3.layout
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    // Append arcs
    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colors[i])
      .style("stroke", "#121926")
      .style("stroke-width", "1px");

    // Append text labels
    arc
      .append("text")
      .text((d) => {
        return d.data.label;
      })
      .attr("transform", (d) => "translate(" + arcGenerator.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  }

  function randomData(budgetData) {
    console.log(budgetData);
    // var labels = Object.entries(budgetData);
    return budgetData.map(function (data) {
      return { label: data.title, value: data.budget };
    });
  }

  useEffect(() => {
    getBudget();
  }, []);

  return (
    <main className="center" id="main">
      <div className="page-area">
        <section aria-roledescription="Budget1">
          <article>
            <h1>Stay on track</h1>
            <p>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that!
            </p>
          </article>

          <article>
            <h1>Alerts</h1>
            <p>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget.
            </p>
          </article>
        </section>

        <section aria-roledescription="App Perks">
          <article>
            <h1>Results</h1>
            <p>
              People who stick to a financial plan, budgeting every expense, get
              out of debt faster! Also, they to live happier lives... since they
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </p>
          </article>

          <article>
            <h1>Free</h1>
            <p>
              This app is free!!! And you are the only one holding your data!
            </p>
          </article>
        </section>

        <section aria-roledescription="Budget2">
          <article>
            <h1>Stay on track</h1>
            <p>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that!
            </p>
          </article>

          <article>
            <h1>Alerts</h1>
            <p>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget.
            </p>
          </article>
        </section>

        <article>
          <h1>Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get
            out of debt faster! Also, they to live happier lives... since they
            expend without guilt or fear... because they know it is all good and
            accounted for.
          </p>
        </article>

        <article aria-roledescription="Chart1">
          <h1>Chart1</h1>
          <p>
            <canvas id="myChart" width="400" height="400"></canvas>
          </p>
        </article>

        <article aria-roledescription="Chart2">
          <h1>Chart2</h1>
          <p id="d3Chart"></p>
        </article>
      </div>
    </main>
  );
}

export default HomePage;
