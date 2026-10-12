const form = document.getElementById("builderForm");
    const preview = document.getElementById("pcPreview");

    const colorSelect = document.getElementById("color");

    colorSelect.addEventListener("change", function () {
      const selected = this.value.toLowerCase();
      preview.className = "pc-case " + selected;
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const budget = Number(
        document.getElementById("budget").value
      );

      const purpose =
        document.getElementById("purpose").value;

      const performance =
        document.getElementById("performance").value;

      const color =
        document.getElementById("color").value;

      if (!Number.isFinite(budget) || budget <= 0) {
        alert("Зөв төсвийн дүн оруулна уу.");
        return;
      }

      document.getElementById("outBudget").textContent =
        budget.toLocaleString("mn-MN") + " ₮";

      document.getElementById("outPurpose").textContent =
        purpose;

      document.getElementById("outPerformance").textContent =
        performance;

      document.getElementById("outColor").textContent =
        color;

      document.getElementById("result").style.display =
        "block";

      document.getElementById("result").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
