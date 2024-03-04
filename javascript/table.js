
  document.addEventListener("DOMContentLoaded", function() {
    shuffleTableRows();
  });

  function shuffleTableRows() {
    var table = document.getElementById("dynamic-table");
    var tbody = table.getElementsByTagName("tbody")[0];
    var rows = Array.from(tbody.getElementsByTagName("tr"));

    for (var i = rows.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      tbody.insertBefore(rows[j], rows[i]);
    }
  }
