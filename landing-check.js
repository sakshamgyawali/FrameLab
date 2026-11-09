
    const root = document.documentElement;
    const themeButton = document.querySelector("#themeToggle");
    const mobileMenuButton = document.querySelector("#menuToggle");
    const navigationLinks = document.querySelector("#navLinks");
    const comparison = document.querySelector("#comparison");
    const comparisonRange = document.querySelector("#comparisonRange");
    const comparisonBefore = document.querySelector("#comparisonBefore");
    let themeIsSetByUser = false;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    function setTheme(theme) {
      root.dataset.theme = theme;
      const isDark = theme === "dark";
      themeButton.textContent = isDark ? "☀" : "☾";
      themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      document.querySelector('meta[name="theme-color"]').content = isDark ? "#1c1b19" : "#f8f6f2";
    }

    setTheme(systemTheme.matches ? "dark" : "light");
    systemTheme.addEventListener("change", (event) => {
      if (!themeIsSetByUser) setTheme(event.matches ? "dark" : "light");
    });
    themeButton.addEventListener("click", () => {
      themeIsSetByUser = true;
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });

    mobileMenuButton.addEventListener("click", () => {
      const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";
      mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
      mobileMenuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      mobileMenuButton.textContent = isOpen ? "☰" : "×";
      navigationLinks.classList.toggle("is-open", !isOpen);
    });
    navigationLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuButton.setAttribute("aria-expanded", "false");
        mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
        mobileMenuButton.textContent = "☰";
        navigationLinks.classList.remove("is-open");
      });
    });

    function updateComparison(value) {
      comparison.style.setProperty("--split", `${value}%`);
      comparisonBefore.querySelector("img").style.width = `${comparison.clientWidth}px`;
    }
    comparisonRange.addEventListener("input", () => updateComparison(comparisonRange.value));
    window.addEventListener("resize", () => updateComparison(comparisonRange.value), { passive: true });
    updateComparison(comparisonRange.value);

    const revealSections = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08 });
      revealSections.forEach((section) => revealObserver.observe(section));
    } else {
      revealSections.forEach((section) => section.classList.add("is-visible"));
    }
  
