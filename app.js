(() => {
  const { worlds, projects } = window.ROOM129_CONTENT;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const worldList = document.querySelector("#world-list");
  const categoryNav = document.querySelector("#category-nav");
  const archiveGrid = document.querySelector("#archive-grid");
  const archiveFilters = document.querySelector("#archive-filters");
  const archiveSearch = document.querySelector("#archive-search");
  const dialog = document.querySelector("#project-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const journey = document.querySelector(".journey");
  let selectedFilter = "all";
  let activeWorld = -1;
  let scrollQueued = false;

  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const makeImage = (project, className = "project-image") => {
    const image = make("img", className);
    image.src = project.image;
    image.alt = project.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      image.classList.add("image-unavailable");
      image.alt = `${project.title} — replaceable sample image`;
    }, { once: true });
    return image;
  };

  const projectCard = (project, compact = false) => {
    const button = make("button", `project-card${compact ? " compact-card" : ""}`);
    button.type = "button";
    button.dataset.project = project.id;
    button.setAttribute("aria-label", `Open ${project.title}, ${project.type}`);
    const imageWrap = make("span", "project-art");
    imageWrap.append(makeImage(project));
    const marker = make("span", "art-marker mono", `${project.year} / ${project.type}`);
    imageWrap.append(marker);
    const details = make("span", "project-meta");
    const title = make("span", "project-title", project.title);
    const line = make("span", "project-subtitle mono", `${project.world} · ${project.year}`);
    details.append(title, line);
    const arrow = make("span", "card-arrow", "↗");
    arrow.setAttribute("aria-hidden", "true");
    button.append(imageWrap, details, arrow);
    return button;
  };

  worlds.forEach((world, index) => {
    const navLink = make("a", "category-link");
    navLink.href = `#${world.id}`;
    navLink.dataset.world = world.id;
    navLink.setAttribute("aria-label", `${world.number}, ${world.name}: ${world.short}`);
    const number = make("span", "category-number mono", world.number);
    const label = make("span", "category-label", world.name);
    const arrow = make("span", "category-arrow", "↗");
    arrow.setAttribute("aria-hidden", "true");
    navLink.append(number, label, arrow);
    categoryNav.append(navLink);

    const section = make("section", `world world-${world.id}`);
    section.id = world.id;
    section.dataset.world = world.id;
    section.dataset.index = String(index);
    section.setAttribute("aria-labelledby", `${world.id}-title`);
    const intro = make("div", "world-intro");
    const kicker = make("p", "eyebrow mono", `${world.number} / ${world.short.toUpperCase()}`);
    const title = make("h2", "world-title", world.name);
    title.id = `${world.id}-title`;
    const deck = make("p", "world-deck", world.deck);
    const description = make("p", "world-description", world.description);
    const note = make("p", "world-note mono", world.note);
    intro.append(kicker, title, deck, description, note);

    const gallery = make("div", "world-gallery");
    const related = projects.filter((project) => project.world === world.id);
    related.forEach((project) => gallery.append(projectCard(project, true)));
    const indexNote = make("span", "world-index mono", `ROOM 129 — ${world.number} / 06`);
    gallery.append(indexNote);
    section.append(intro, gallery);
    worldList.append(section);
  });

  document.querySelector("#header-count").textContent = String(projects.length).padStart(2, "0");
  document.querySelector("#archive-total").textContent = `${String(projects.length).padStart(2, "0")} ENTRIES`;

  const filters = [{ id: "all", name: "ALL WORK" }, ...worlds.map((world) => ({ id: world.id, name: world.short.toUpperCase() }))];
  filters.forEach((filter) => {
    const button = make("button", "filter-button", filter.name);
    button.type = "button";
    button.dataset.filter = filter.id;
    button.setAttribute("aria-pressed", String(filter.id === selectedFilter));
    archiveFilters.append(button);
  });

  const renderArchive = () => {
    const query = archiveSearch.value.trim().toLocaleLowerCase();
    const visible = projects.filter((project) => {
      const matchesFilter = selectedFilter === "all" || project.world === selectedFilter;
      const world = worlds.find((item) => item.id === project.world);
      const searchable = [project.title, project.type, project.year, project.description, ...project.tags, world.name, world.short].join(" ").toLocaleLowerCase();
      return matchesFilter && searchable.includes(query);
    });
    archiveGrid.replaceChildren(...visible.map((project) => projectCard(project)));
    document.querySelector("#empty-state").hidden = visible.length > 0;
    document.querySelector("#results-note").textContent = `${String(visible.length).padStart(2, "0")} ${visible.length === 1 ? "ENTRY" : "ENTRIES"} FOUND`;
  };

  const openProject = (projectId) => {
    const project = projects.find((item) => item.id === projectId);
    if (!project) return;
    const world = worlds.find((item) => item.id === project.world);
    dialogContent.replaceChildren();
    const imageWrap = make("div", "dialog-art");
    imageWrap.append(makeImage(project, "dialog-image"));
    const body = make("div", "dialog-copy");
    const dialogTitle = make("h2", "", project.title);
    dialogTitle.id = "dialog-title";
    body.append(
      make("p", "eyebrow mono", `${world.number} / ${world.name} / ${project.year}`),
      dialogTitle,
      make("p", "dialog-type", project.type),
      make("p", "dialog-description", project.description)
    );
    const tags = make("ul", "tag-list");
    tags.setAttribute("aria-label", "Project tags");
    project.tags.forEach((tag) => tags.append(make("li", "mono", tag)));
    body.append(tags);
    const categoryLink = make("a", "text-link", `MORE FROM ${world.short.toUpperCase()} ↗`);
    categoryLink.href = `#${world.id}`;
    categoryLink.addEventListener("click", () => dialog.close());
    body.append(categoryLink);
    dialogContent.append(imageWrap, body);
    dialog.showModal();
  };

  const setActiveWorld = (index) => {
    if (index < 0 || index >= worlds.length || index === activeWorld) return;
    activeWorld = index;
    const world = worlds[index];
    document.querySelector("#now-playing").textContent = world.name;
    document.querySelector("#track-counter").textContent = `${world.number} / 06`;
    document.querySelectorAll(".category-link").forEach((link, linkIndex) => {
      if (linkIndex === index) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    journey.dataset.active = world.id;
  };

  const updateScrollState = () => {
    scrollQueued = false;
    const viewportCenter = window.innerHeight * 0.5;
    let nearestIndex = -1;
    let nearestDistance = Infinity;
    document.querySelectorAll(".world").forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const center = rect.top + Math.min(rect.height, window.innerHeight) / 2;
      const distance = Math.abs(center - viewportCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    const journeyRect = journey.getBoundingClientRect();
    const inJourney = journeyRect.top < window.innerHeight * 0.55 && journeyRect.bottom > window.innerHeight * 0.45;
    if (inJourney) {
      setActiveWorld(nearestIndex);
      if (!reducedMotion.matches) {
        const progress = Math.max(0, window.scrollY - journey.offsetTop) / Math.max(window.innerHeight, 1);
        document.querySelector("#dock-record").style.setProperty("--record-rotation", `${progress * 360}deg`);
      }
    } else if (journeyRect.bottom <= window.innerHeight * 0.45) {
      const activePage = ["contact", "archive", "about"].find((id) => {
        const rect = document.getElementById(id).getBoundingClientRect();
        return rect.top < viewportCenter && rect.bottom > viewportCenter;
      });
      if (activePage) document.querySelector("#now-playing").textContent = activePage === "about" ? "A PERSON OF MANY TABS" : activePage.toUpperCase();
    } else if (window.scrollY < journey.offsetTop) {
      document.querySelector("#now-playing").textContent = "THE VIEWFINDER";
      if (!reducedMotion.matches) document.querySelector("#dock-record").style.setProperty("--record-rotation", "0deg");
    }
  };

  const queueScrollState = () => {
    if (scrollQueued) return;
    scrollQueued = true;
    window.requestAnimationFrame(updateScrollState);
  };

  archiveSearch.addEventListener("input", renderArchive);
  archiveFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    selectedFilter = button.dataset.filter;
    archiveFilters.querySelectorAll("[data-filter]").forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
    renderArchive();
  });
  document.addEventListener("click", (event) => {
    const projectButton = event.target.closest("[data-project]");
    if (projectButton) openProject(projectButton.dataset.project);
    const randomButton = event.target.closest(".random-button");
    if (randomButton) {
      const project = projects[Math.floor(Math.random() * projects.length)];
      openProject(project.id);
    }
  });

  document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) dialog.close();
  });

  document.querySelector("#contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const subject = encodeURIComponent(`A note from ${values.get("name")}`);
    const body = encodeURIComponent(`${values.get("message")}\n\nReply to: ${values.get("email")}`);
    document.querySelector("#form-hint").textContent = "Your email app should open with this note ready to send.";
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  });

  const cursor = document.querySelector("#cursor");
  if (window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
    document.addEventListener("pointermove", (event) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    }, { passive: true });
    document.addEventListener("pointerover", (event) => {
      cursor.classList.toggle("cursor-hover", Boolean(event.target.closest("a, button, input, textarea")));
    });
  } else {
    cursor.hidden = true;
  }

  renderArchive();
  window.addEventListener("scroll", queueScrollState, { passive: true });
  window.addEventListener("resize", queueScrollState, { passive: true });
  reducedMotion.addEventListener("change", queueScrollState);
  updateScrollState();
})();
