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
