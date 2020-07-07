function validateName() {
  var name = document.myform1.name.value;
  if (name == null || name == '') {
    document.getElementById("nameValidationMessage").innerText = "Name can't be blank";
  } else {
    document.getElementById("nameValidationMessage").innerText = "";
  }
}

function validateEmail() {
  var email = document.myform1.email.value;
  var atposition = email.indexOf('@');
  var dotposition = email.lastIndexOf('.');
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    document.getElementById("emailValidationMessage").innerText = "Please enter a valid e-mail address";
  } else {
    document.getElementById("emailValidationMessage").innerText = "";
  }
}

function validatePhone() {
  var phoneInput = document.myform1.phone.value;
  if (isNaN(phoneInput) || phoneInput.length != 10) {
    document.getElementById("phoneValidationMessage").innerText = "Not a valid number";
  } else {
    document.getElementById("phoneValidationMessage").innerText = "";
  }
}

function searchTable() {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName('tr');

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td');
    for (j = 0; j < td.length; j++) {
      if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        found = true;
      }
    }
    if (found) {
      tr[i].style.display = '';
      found = false;
    } else {
      tr[i].style.display = 'none';
    }
  }
}
