const createField = document.getElementById("create-field");

function itemTemplate(item) {
  return `<li
        class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text">${item.reja}</span>
        <div>
          <button data_id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
            Ozgartirish
          </button>
          <button data_id="${item._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
        </div>
      </li>`;
}

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Try again!");
    });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure you want to delete it?")) {
      const data_id = e.target.getAttribute("data_id");
      axios
        .post("/delete-item", { id: data_id })
        .then((response) => {
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please try again!");
        });
    }
  }

  if (e.target.classList.contains("edit-me")) {
    //Step 1
    let userInput = prompt(
      "Rejani ozgartiring",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      //Step 2
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data_id"),
          new_input: userInput,
        })
        //Step 5
        .then((response) => {
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          if (err) {
            console.log("Try again to edit!");
          }
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  if (confirm("Are you sure you want to delete all?")) {
    axios
      .post("/delete-all", { delete_all: true })
      .then((response) => {
        document.location.reload();
      })
      .catch((err) => {
        if (err) {
          console.log("Try again to delete all!");
        }
      });
  }
});
