document.getElementById("event-registration-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      event: document.getElementById("event").value,
  };

  try {
      const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          alert("Registration successful!");
      } else {
          alert("Failed to register.");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
  }
});