function post (){
  // console.log("イベント発火");
  const form = document.getElementById("form");
  form.addEventListener("submit", () => {
    console.log("イベント発火");
  });
};

window.addEventListener('turbo:load', post);