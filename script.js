function hitung() {
    let t = parseFloat(document.getElementById("t").value);
    let a0 = parseFloat(document.getElementById("a0").value);
    let at = parseFloat(document.getElementById("at").value);

    // Orde 1
    let k1 = (Math.log(a0 / at)) / t;

    // Orde 2
    let k2 = ((1 / at) - (1 / a0)) / t;

    document.getElementById("hasil").innerHTML =
        "Konstanta laju Orde 1 (k₁): " + k1.toFixed(4) +
        "<br>Konstanta laju Orde 2 (k₂): " + k2.toFixed(4);
}

function hitung() {
  let rows = document.querySelectorAll("#dataTable tr");
  let t = [], A = [];

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].querySelectorAll("input");
    let ti = parseFloat(cells[0].value);
    let ai = parseFloat(cells[1].value);
    if (!isNaN(ti) && !isNaN(ai) && ai > 0) {
      t.push(ti);
      A.push(ai);
    }
  }

  let lnA = A.map(x => Math.log(x));
  let invA = A.map(x => 1 / x);

  let r2_orde1 = r2(t, lnA);
  let r2_orde2 = r2(t, invA);

  let kesimpulan = r2_orde1 > r2_orde2
    ? "Reaksi mengikuti orde 1"
    : "Reaksi mengikuti orde 2";

  document.getElementById("hasil").innerHTML = `
    R² Orde 1 = ${r2_orde1.toFixed(4)} <br>
    R² Orde 2 = ${r2_orde2.toFixed(4)} <br><br>
    <b>${kesimpulan}</b>
  `;

  grafik(t, A);
}

function r2(x, y) {
  let n = x.length;
  let sx=0, sy=0, sxy=0, sx2=0, sy2=0;

  for (let i=0;i<n;i++){
    sx+=x[i]; sy+=y[i];
    sxy+=x[i]*y[i];
    sx2+=x[i]*x[i];
    sy2+=y[i]*y[i];
  }

  let r = (n*sxy - sx*sy) /
          Math.sqrt((n*sx2 - sx*sx)*(n*sy2 - sy*sy));
  return r*r;
}

function grafik(t, A){
  if (window.chart) window.chart.destroy();

  window.chart = new Chart(document.getElementById("grafik"),{
    type: 'line',
    data: {
      labels: t,
      datasets: [{
        label: 'Absorbansi vs Waktu',
        data: A,
        fill: false
      }]
    }
  });
}
