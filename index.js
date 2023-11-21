let userForm = document.getElementById("user-form");
const retrieveEntries = () => {
  let entries = localStorage.getItem("user-entries");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
};
let userEntries = retrieveEntries();

const displayEntries = () => {
  const entries = retrieveEntries();
  const tableEntries = entries
    .map((entry) => {
      const namecell = `<td>${entry.name}</td>`;
      const emailcell = `<td>${entry.email}</td>`;
      const passwordcell = `<td>${entry.pass}</td>`;
      const dobcell = `<td>${entry.dob}</td>`;
      const acceptedTermsAndConditionscell = `<td>${entry.acceptedTermsAndConditions}</td>`;

      const row = `<tr>${namecell} ${emailcell} ${passwordcell} ${dobcell} ${acceptedTermsAndConditionscell}</tr>`;
      return row;
    })
    .join("\n");
  const table = ` <table class="table"><tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>bod</th>
    <th>accepted terms</th>
    </tr>${tableEntries}</table>`;

  let details = document.getElementById("user-entries");
  details.innerHTML = table;
};

const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndConditions =
    document.getElementById("condition").checked;
  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTermsAndConditions,
  };

  userEntries.push(entry);

  localStorage.setItem("user-entries", JSON.stringify(userEntries));
  displayEntries();
};
userForm.addEventListener("submit", saveUserForm);
displayEntries();

const email = document.getElementById("email");
email.addEventListener("input", () => validate(email));
function validate(element) {
  if (element.validity.typeMismatch) {
    element.setCustomValidity("email in incorrect format");
    element.reportValidity();
  } else element.setCustomValidity("");
}
