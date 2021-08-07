function leadCollectorCreate() {
  var htmlSections = document.querySelector("main .htmlTemplate");
  var shadowR = htmlSections.shadowRoot;

  var style = document.createElement("style");
  style.innerHTML =
    ".lc-c-alert {" +
    "padding: 15px;" +
    "border: 1px solid transparent;" +
    "display: none" +
    "}" +
    ".lc-c-success-alert {" +
    "display: block;" +
    "border-color: #6db131;" +
    "background-color: #e7eee5;" +
    "color: #6db131;" +
    "border: 0;" +
    "border-radius: 4px;" +
    "margin-top: 12px;" +
    "padding: 25px;" +
    "font-size: 16px;" +
    "line-height: 20px;" +
    "}" +
    ".lc-c-danger-alert {" +
    "display: block;" +
    "border-color: #e20000;" +
    "background-color: #f1d9de;" +
    "color: #e20000;" +
    "border-radius: 4px;" +
    "margin-top: 12px;" +
    "padding: 25px;" +
    "font-size: 16px;" +
    "line-height: 20px;" +
    "}" +
    ".inputValiMessage {" +
    "display: none;" +
    "color: #e20000;" +
    "position: absolute;" +
    "left: 0;" +
    "bottom: -26px;" +
    "font-size: 14px;" +
    "font-family: inherit;" +
    "}" +
    ".inputValiMessage.error {" +
    "display: block;" +
    "}" +
    "#lc-c-input.error {" +
    "border: 1px solid #e20000;" +
    "}" +
    ".pos-relative {" +
    "position: relative;" +
    "}";

  // Get the first script tag
  var ref = shadowR.getElementById("lead-section");

  // Insert our new styles before the first script tag
  ref.parentNode.insertBefore(style, ref);

  var input = document.createElement("input");
  input.setAttribute("type", "hidden");
  input.setAttribute("name", "recaptcha_response");
  input.setAttribute("id", "recaptchaResponse");

  var parent = shadowR.getElementById("leadcollector");
  parent.appendChild(input);

  var inputTel = shadowR.getElementById("lc-c-input");
  var closestElement = inputTel.closest("div");
  closestElement.classList.add("pos-relative");
  inputTel.setAttribute("type", "tel");

  var inputValiMessage = document.createElement("div");
  inputValiMessage.setAttribute("id", "lc-c-vali-message");
  inputValiMessage.setAttribute("class", "inputValiMessage");

  var formMessage = document.createElement("div");
  formMessage.setAttribute("id", "leadcollector-alert");
  formMessage.setAttribute("class", "lc-c-alert");

  parent.appendChild(formMessage);
  closestElement.appendChild(inputValiMessage);
}

function submitUserForm(e) {
  e.preventDefault();

  var htmlSections = document.querySelector("main .htmlTemplate");
  var shadowR = htmlSections.shadowRoot;

  var inputVali = shadowR.getElementById("lc-c-input").value;
  if (inputVali == "") {
    var elementInput = shadowR.getElementById("lc-c-input");
    var element = shadowR.getElementById("lc-c-vali-message");
    element.classList.add("error");
    elementInput.classList.add("error");

    var lang = sessionStorage.getItem("lang") || navigator.language.slice(0, 2);
    if (lang == "cz") {
      var inputMessage = "Toto pole je povinné";
    } else {
      var inputMessage = "This field is required";
    }

    element.innerHTML = inputMessage;

    return false;
  } else {
    var recaptchaToken = shadowR.getElementById("leadcollector").getAttribute("data-recaptcha-token");
    /*
    grecaptcha.ready(function () {
      grecaptcha
        .execute(recaptchaToken, {
          action: "contact",
        })
        .then(function (token) {
          var recaptchaResponse = shadowR.getElementById("recaptchaResponse");
          recaptchaResponse.value = token;
        });
    });
    */
    var restApiKey = shadowR.getElementById("leadcollector").getAttribute("data-api-key");
    var leadTemplateNameRequest = shadowR
      .getElementById("leadcollector")
      .getAttribute("data-leadTemplateNameRequest");
    var leadType = shadowR.getElementById("leadcollector").getAttribute("data-leadType");
    var orderSubType = shadowR.getElementById("leadcollector").getAttribute("data-orderSubType");
    var msisdn = shadowR.getElementById("lc-c-input").value;

    var restApiData = {
      leadTemplateNameRequest: leadTemplateNameRequest,
      leadType: leadType,
      msisdn: msisdn,
      orderSubType: orderSubType,
    };

    var json = JSON.stringify(restApiData);

    // Set up our HTTP request
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://lead-api.t2ebiz.cz.tmo/api/createLeadInternal");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Api-Key", restApiKey);
    // Setup our listener to process completed requests
    xhr.onload = function () {
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        var element = shadowR.getElementById("leadcollector-alert");
        element.classList.add("lc-c-success-alert");

        var form = shadowR.getElementById("leadcollector");
        form.classList.add("lc-is-success");

        var RestAPI = JSON.parse(this.responseText);
        var labelText = RestAPI.label;

        element.innerHTML = labelText;
      } else {
        var element = shadowR.getElementById("leadcollector-alert");
        //element.innerHTML = actualLang.formErrorMessage
        element.classList.add("lc-c-danger-alert");

        var RestAPI = JSON.parse(this.responseText);
        var labelText = RestAPI.label;

        element.innerHTML = labelText;
      }
    };

    // Create and send a GET request
    xhr.send(json);
  }
}

setTimeout(function () {
  leadCollectorCreate();

  var htmlSections = document.querySelector("main .htmlTemplate");
  var shadowR = htmlSections.shadowRoot;

  shadowR.getElementById("btn-lead").addEventListener("click", function (event) {
    submitUserForm(event);

    // Don't follow the link
    event.preventDefault();
  });
});