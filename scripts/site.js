//Site Javascript
window.addEventListener("DOMContentLoaded", function() {
    
    var form = document.getElementById("contact-form");
    var button = document.getElementById("btnSubmit");
    var status = document.getElementsByClassName("messages")[0];
    
    function success() {
      form.reset();
      button.style = "display: none ";
      $(status).addClass("alert alert-success");
      status.innerHTML = "Thanks. Your message has been submitted!";
    }

    function error() {
        $(status).addClass("alert alert-danger");
      status.innerHTML = "Oops! There was a problem submitting your message.";
    }

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }