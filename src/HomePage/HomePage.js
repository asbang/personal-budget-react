import React from 'react';

function HomePage() {
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
        <h3></h3>
      </article>
    </div>
  </main>
  );
}

export default HomePage;