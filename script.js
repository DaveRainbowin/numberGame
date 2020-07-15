var ordinal = "0";
var factor = "10";
var template = `f<sub>${ordinal}</sub>(${factor})`;
function ordinalUp() {
  let filterOrd = ((/ω\d+/g.test(ordinal) == true && /ω\d+\+/g != true) ? "" : ordinal.match(/\d+$/g));
  let filthOrd = ordinal.match(/ω\+|ω\d+\+|ω|ω\d+/g);
  console.log(filthOrd);
  console.log(ordinal);
  let completeOrd = filthOrd + filterOrd;
  let tempOrd = Number(filterOrd);
  if (filthOrd == null) {
    tempOrd++;
    ordinal = tempOrd.toString();
  } else if (ordinal == filthOrd) {
    ordinal = `${filthOrd}+1`;
    console.log("ordinal == filthOrd");
  } else {
    tempOrd++;
    filterOrd = tempOrd.toString();
    completeOrd = filthOrd + filterOrd;
    ordinal = completeOrd;
  }
  update();
}
function ordinalMax() {
  let beforeMatch = ordinal.match(/ω\d+/g);
  let numMatch = ((beforeMatch != null) ? beforeMatch.match(/d+/g) : "");
  if (Number(ordinal) >= factor) {
    ordinal = "ω";
  } else if (/ω+\d{2,}/g) {
    ordinal = "ω2";
  } else if (/ω\d+\+\d{2,}/g.test(ordinal) == true) {
    ordinal = `ω${numMatch}`;
  }
  update();
}
function update() {
  template = `f<sub>${ordinal}</sub>(${factor})`;
  get("fgh").innerHTML = template;
}
function get(id) {
  return document.getElementById(id);
}