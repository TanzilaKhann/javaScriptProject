var row = "";

//function to get the filled form details and validating and appending the new enrolled student
function studentDetails(form) {
  var validate = validateForm(form);
  if (validate == true) {
    let skillVal = [];
    let name = form.name.value;
    let email = form.email.value;
    let website = form.website.value;
    let imglink = form.imgLink.value;
    let gender = form.gender.value;
    let skills = form.elements["Skills"];

    for (var checkbox of skills) {
      if (checkbox.checked) {
        skillVal.push(checkbox.value);
      }
    }

    addStudent(name, email, website, imglink, gender, skillVal);
    form.reset();
  }
}

//function to check wheather the gender and skills fields are checked or not
function validateForm(form) {
  let x = form.elements["gender"].value;
  let skills = form.elements["Skills"];
  let flag = 0;

  for (var checkbox of skills) {
    if (checkbox.checked) {
      flag++;
    }
  }
  if (x == "") {
    alert("gender must be filled out");
    return false;
  } else if (flag <= 0) {
    alert("Skills must be filled out");
    return false;
  } else return true;
}

//function to append the new student in the table
function addStudent(name, email, website, imglink, gender, skillVal) {
  var table = document.getElementById("tbody");
  row +=
    "<tr class=' fade-in'>" +
    "<td class='tableRight '>" +
    "<div class='stuDetail'>" +
    " <span ><strong>" +
    name +
    "</strong></span>" +
    " <span class='capital'>" +
    gender +
    "</span>" +
    "<span>" +
    email +
    "</span>" +
    "<a href='" +
    website +
    "' class='stuWebLink'  target='_blank'>" +
    website +
    "</a>" +
    "<span >" +
    skillVal +
    "</span>" +
    "</div>" +
    " </td>" +
    "<td class='tableLeft '>" +
    " <img src='" +
    imglink +
    "' alt='Student image' class='imgFluid'>" +
    " </td>" +
    " </tr>";
  table.innerHTML = row;
}
