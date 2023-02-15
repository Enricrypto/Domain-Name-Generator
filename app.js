// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const domainName = () => {
    const domain = document.querySelector("#domain-name");
    let print = "";
    let counter = 1;

    pronoun.forEach((pron) => {
      adjective.forEach((adj) => {
        noun.forEach((n) => {
          print += `<div>${counter++}.${pron}${adj}${n}.com</div>`;
        });
      });
    });
    domain.innerHTML = print;
  };
  domainName();
};
