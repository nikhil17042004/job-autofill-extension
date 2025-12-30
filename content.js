// Data to autofill (can be customized later)
const userData = {
  name: "Nikhil Chaurasiya",
  email: "nikhil@example.com",
  phone: "9876543210",
  skills: "JavaScript, Node.js, Express, REST APIs"
};

// Listen for message from popup
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "AUTOFILL_FORM") {
    autofillForm();
  }
});

function autofillForm() {
  // Get all input and textarea fields
  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach((field) => {
    const fieldName = field.name.toLowerCase();
    const fieldId = field.id.toLowerCase();
    const placeholder = (field.placeholder || "").toLowerCase();

    // Full Name
    if (
      fieldName.includes("name") ||
      fieldId.includes("name") ||
      placeholder.includes("name")
    ) {
      field.value = userData.name;
    }

    // Email
    if (
      field.type === "email" ||
      fieldName.includes("email") ||
      fieldId.includes("email")
    ) {
      field.value = userData.email;
    }

    // Phone Number
    if (
      field.type === "tel" ||
      fieldName.includes("phone") ||
      fieldId.includes("phone")
    ) {
      field.value = userData.phone;
    }

    // Skills 
    if (
      fieldName.includes("skill") ||
      fieldName.includes("experience") ||
      placeholder.includes("skill") ||
      placeholder.includes("experience")
    ) {
      field.value = userData.skills;
    }
  });
}
