      const inputBox = document.querySelector("#input-box");
      const listContainer = document.querySelector("#book-list");
      function addBook() {
        if (inputBox.value === "") {
          alert("you must add a task First!");
        } else {
          let li = document.createElement("li");
          li.innerHTML = inputBox.value;
          listContainer.appendChild(li);
          let span = document.createElement("span");
          span.innerHTML = "X";
          li.appendChild(span);
        }
        inputBox.value = "";
      }
      // const spans = document.querySelector("span");
      listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
          e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
          e.target.parentNode.remove();
          // li.remove();
        }
      });
      // inputBox.addEventListener("keypress", function (e) 

    
