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

function hitung(){
  let text = document.getElementById("data").value;
  let rows = text.trim().split("\n").slice(1);
  let t=[], C=[];
  rows.forEach(r=>{
    let [x,y]=r.split(",");
    t.push(Number(x));
    C.push(Number(y));
  });
  console.log(t, C);
}

