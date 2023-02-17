// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = ["com", "net", "us", "io"]

  const domainName = () => {
    const domain = document.querySelector("#domain-name");
    let print = "";
    let counter = 1;

    pronoun.forEach((pron) => {
      adjective.forEach((adj) => {
        noun.forEach((n) => {
          extension.forEach((ext) => {
            print += `<div>${counter++}.${pron}${adj}${n}.${ext}</div>`;
          }); 
        });
      });
    });
    domain.innerHTML = print;
  };
  domainName();
};
