var d = document;

function supports_html5_storage() {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
    return false;
  }
}

d.addEventListener("DOMContentLoaded", function () {
  var savedContent = localStorage.getItem("notepadcontent");
  if (savedContent != null) {
    d.getElementById("notepad").value = savedContent;
  }

  d.getElementById("notepad").onkeyup = function () {
    var data = d.getElementById("notepad").value;
    localStorage.setItem("notepadcontent", data);
  };
});
