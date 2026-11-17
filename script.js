
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

      menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.textContent = "☰";
      });
    });
  }
});


/* THENIX CBU WHATSAPP APPLICATION */

const applicationForm = document.getElementById("applicationForm");

if (applicationForm) {
  applicationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(applicationForm);

    const message = `
*NEW THENIX CBU COACHING APPLICATION*

*STUDENT DETAILS*
Name: ${formData.get("name")}
Age: ${formData.get("age")}
WhatsApp: ${formData.get("phone")}
CBU Student: ${formData.get("studentStatus")}

*COACHING DETAILS*
Package: ${formData.get("package")}
Fitness Level: ${formData.get("level")}
Main Goal: ${formData.get("goal")}
Preferred Arrangement: ${formData.get("mode") || "Not specified"}

*ADDITIONAL INFORMATION*
${formData.get("details") || "None provided"}

-------------------------
THENIX CBU APPLICATION
`;

    const whatsappURL =
      "https://wa.me/260953779241?text=" +
      encodeURIComponent(message);

    window.location.href = whatsappURL;
  });
}

