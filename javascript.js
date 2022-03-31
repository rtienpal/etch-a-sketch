let grid = document.querySelector("#grid");

let c1r1 = document.createElement("div");
grid.appendChild(c1r1);
c1r1.textContent = "hello!";
c1r1.style.cssText =
  "background-color:white;border:1px;border-style:solid;width:20px;height:20px;";
console.log(c1r1);

let c2r1 = document.createElement("div");
grid.appendChild(c2r1);

let c3r1 = document.createElement("div");
grid.appendChild(c3r1);

let c4r1 = document.createElement("div");
grid.appendChild(c4r1);

c1r1.style.cssText =
  "background-color:white;border:1px;border-style:solid;width:20px;height:20px;";
c2r1.style.cssText =
  "background-color:white;border:1px;border-style:solid;width:20px;height:20px;";
c3r1.style.cssText =
  "background-color:white;border:1px;border-style:solid;width:20px;height:20px;";
c4r1.style.cssText =
  "background-color:white;border:1px;border-style:solid;width:20px;height:20px;";

/*

c1r1.style.backgroundColor = "white";
c1r2.style.backgroundColor = "white";
c1r3.style.backgroundColor = "white";
c1r4.style.backgroundColor = "white";
c1r1.style.width = "20px;"
c1r1.style.height = "20px;"
c1r2.style.width = "20px;"
c1r2.style.height = "20px;"
c1r3.style.width = "20px;"
c1r3.style.height = "20px;"
c1r1.style.width = "20px;"
c1r1.style.height = "20px;"
c1r1.style.display = "block";
c1r1.style.boxSizing = "border-box";
c1r1.style.borderStyle = "solid";
c1r1.style.border = "1px";

*/
