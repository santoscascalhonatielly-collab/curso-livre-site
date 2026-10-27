const courses = [
  ["Informática essencial", "Tecnologia", 8, "Iniciante"],
  ["Excel do zero ao essencial", "Tecnologia", 12, "Iniciante"],
  ["Programação Python para iniciantes", "Tecnologia", 16, "Iniciante"],
  ["HTML e CSS: seu primeiro site", "Tecnologia", 14, "Iniciante"],
  ["JavaScript na prática", "Tecnologia", 18, "Intermediário"],
  ["Criação de sites com WordPress", "Tecnologia", 10, "Iniciante"],
  ["Análise de dados com Excel", "Tecnologia", 12, "Intermediário"],
  ["Power BI para começar", "Tecnologia", 15, "Iniciante"],
  ["Inteligência artificial generativa", "Tecnologia", 6, "Iniciante"],
  ["Segurança digital no dia a dia", "Tecnologia", 5, "Iniciante"],
  ["Edição de vídeo para redes sociais", "Tecnologia", 11, "Iniciante"],
  ["Design de interfaces com Figma", "Tecnologia", 14, "Intermediário"],
  ["Manutenção de computadores", "Tecnologia", 20, "Iniciante"],
  ["Lógica de programação", "Tecnologia", 10, "Iniciante"],
  ["Fotografia digital: primeiros passos", "Tecnologia", 8, "Iniciante"],
  ["Empreendedorismo do zero", "Negócios", 8, "Iniciante"],
  ["Planejamento financeiro pessoal", "Negócios", 6, "Iniciante"],
  ["Marketing digital essencial", "Negócios", 12, "Iniciante"],
  ["Redes sociais para pequenos negócios", "Negócios", 9, "Iniciante"],
  ["Vendas consultivas", "Negócios", 10, "Intermediário"],
  ["Atendimento ao cliente que fideliza", "Negócios", 7, "Iniciante"],
  ["Gestão de projetos na prática", "Negócios", 12, "Intermediário"],
  ["Liderança de equipes", "Negócios", 9, "Intermediário"],
  ["Gestão do tempo e produtividade", "Negócios", 5, "Iniciante"],
  ["Como precificar seus serviços", "Negócios", 4, "Iniciante"],
  ["E-commerce: da ideia à loja", "Negócios", 12, "Intermediário"],
  ["Fluxo de caixa para iniciantes", "Negócios", 5, "Iniciante"],
  ["Gestão de pequenos negócios", "Negócios", 14, "Intermediário"],
  ["Educação financeira para todos", "Negócios", 6, "Iniciante"],
  ["Design gráfico com Canva", "Criatividade", 8, "Iniciante"],
  ["Crie sua identidade visual", "Criatividade", 10, "Iniciante"],
  ["Ilustração digital para iniciantes", "Criatividade", 14, "Iniciante"],
  ["Escrita criativa", "Criatividade", 8, "Iniciante"],
  ["Produção de podcast", "Criatividade", 9, "Iniciante"],
  ["Fotografia para iniciantes", "Criatividade", 10, "Iniciante"],
  ["Costura criativa", "Criatividade", 12, "Iniciante"],
  ["Lettering: letras com personalidade", "Criatividade", 6, "Iniciante"],
  ["Culinária prática do dia a dia", "Criatividade", 8, "Iniciante"],
  ["Confeitaria para começar", "Criatividade", 12, "Iniciante"],
  ["Decoração de interiores sem mistério", "Criatividade", 9, "Iniciante"],
  ["Artesanato sustentável", "Criatividade", 7, "Iniciante"],
  ["Oratória: fale com confiança", "Comunicação", 8, "Iniciante"],
  ["Comunicação profissional", "Comunicação", 6, "Iniciante"],
  ["Redação empresarial", "Comunicação", 7, "Intermediário"],
  ["Português instrumental", "Comunicação", 10, "Iniciante"],
  ["Comunicação não violenta", "Comunicação", 8, "Iniciante"],
  ["Storytelling para suas ideias", "Comunicação", 5, "Iniciante"],
  ["Libras: primeiros sinais", "Comunicação", 12, "Iniciante"],
  ["Comunicação para redes sociais", "Comunicação", 6, "Iniciante"],
  ["Currículo e entrevistas de emprego", "Comunicação", 4, "Iniciante"],
  ["Primeiros socorros essenciais", "Bem-estar", 6, "Iniciante"],
  ["Alimentação saudável na rotina", "Bem-estar", 5, "Iniciante"],
  ["Meditação para iniciantes", "Bem-estar", 4, "Iniciante"],
  ["Inteligência emocional", "Bem-estar", 8, "Iniciante"],
  ["Ergonomia no trabalho", "Bem-estar", 4, "Iniciante"],
  ["Desenvolvimento infantil", "Bem-estar", 10, "Iniciante"],
  ["Cuidados básicos com idosos", "Bem-estar", 8, "Iniciante"],
  ["Yoga para começar", "Bem-estar", 6, "Iniciante"],
  ["Saúde mental no trabalho", "Bem-estar", 5, "Iniciante"],
  ["Inglês para iniciantes", "Idiomas", 20, "Iniciante"],
  ["Inglês para viagens", "Idiomas", 12, "Iniciante"],
  ["Espanhol básico", "Idiomas", 18, "Iniciante"],
  ["Espanhol para negócios", "Idiomas", 14, "Intermediário"],
  ["Francês para iniciantes", "Idiomas", 20, "Iniciante"],
  ["Italiano básico", "Idiomas", 18, "Iniciante"],
  ["Português para estrangeiros", "Idiomas", 16, "Iniciante"],
  ["Conversação em inglês", "Idiomas", 15, "Intermediário"],
  ["Inglês profissional", "Idiomas", 14, "Intermediário"]
];

const categoryImages = {
  Tecnologia: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  Negócios: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
  Criatividade: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
  Comunicação: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80",
  "Bem-estar": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
  Idiomas: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80"
};

const categoryDescriptions = {
  Tecnologia: "Desenvolva habilidades digitais e transforme ideias em soluções práticas.",
  Negócios: "Ferramentas e estratégias para tirar planos do papel e crescer com confiança.",
  Criatividade: "Explore novas formas de criar, expressar e dar vida às suas ideias.",
  Comunicação: "Expresse suas ideias com clareza e construa conexões mais fortes.",
  "Bem-estar": "Conhecimentos para cuidar melhor de você e de quem está ao seu redor.",
  Idiomas: "Amplie seus horizontes e descubra novas formas de se comunicar."
};

const grid = document.querySelector("#course-grid");
const filters = document.querySelector("#category-filters");
const searchInput = document.querySelector("#course-search");
const sortSelect = document.querySelector("#course-sort");
const savedFilterButton = document.querySelector("#saved-filter");
const dialog = document.querySelector("#course-dialog");
const toast = document.querySelector("#toast");
const categories = ["Todas", ...new Set(courses.map((course) => course[1]))];
const savedCourses = new Set(JSON.parse(localStorage.getItem("viva-livre-saved") || "[]"));
let selectedCategory = "Todas";
let showSavedOnly = false;
let activeCourse = null;
let toastTimeout;

function renderFilters() {
  filters.innerHTML = categories.map((category) => `
    <button class="filter-chip" type="button" data-category="${category}" aria-pressed="${category === selectedCategory}">${category}</button>
  `).join("");
}

function visibleCourses() {
  const search = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  let result = courses.filter(([name, category]) => {
    const matchesCategory = selectedCategory === "Todas" || category === selectedCategory;
    const matchesSearch = `${name} ${category}`.toLocaleLowerCase("pt-BR").includes(search);
    const matchesSaved = !showSavedOnly || savedCourses.has(name);
    return matchesCategory && matchesSearch && matchesSaved;
  });

  if (sortSelect.value === "az") result = result.toSorted((a, b) => a[0].localeCompare(b[0], "pt-BR"));
  if (sortSelect.value === "hours") result = result.toSorted((a, b) => a[2] - b[2] || a[0].localeCompare(b[0], "pt-BR"));
  return result;
}

function renderCourses() {
  const result = visibleCourses();
  document.querySelector("#results-count").textContent = `${result.length} ${result.length === 1 ? "curso" : "cursos"}`;
  document.querySelector("#saved-count").textContent = savedCourses.size;
  document.querySelector("#course-total").textContent = courses.length;
  document.querySelector("#empty-state").hidden = result.length > 0;
  grid.hidden = result.length === 0;

  grid.innerHTML = result.map(([name, category, hours, level], index) => `
    <article class="course-card" style="animation-delay:${Math.min(index % 8, 7) * 35}ms">
      <div class="card-image" style="background-image:url('${categoryImages[category]}')">
        <span class="category-label">${category}</span>
        <button class="save-button" type="button" data-save="${name}" aria-label="${savedCourses.has(name) ? "Remover" : "Salvar"} ${name}" aria-pressed="${savedCourses.has(name)}">${savedCourses.has(name) ? "★" : "☆"}</button>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${hours} horas</span><span>${level}</span></div>
        <h3>${name}</h3>
        <p>${categoryDescriptions[category]}</p>
        <button class="card-link" type="button" data-details="${name}">Conhecer o curso <span aria-hidden="true">→</span></button>
      </div>
    </article>
  `).join("");
}

function saveList() {
  localStorage.setItem("viva-livre-saved", JSON.stringify([...savedCourses]));
  renderCourses();
}

function announce(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

function openCourse(name) {
  const course = courses.find(([courseName]) => courseName === name);
  if (!course) return;
  const [courseName, category, hours, level] = course;
  activeCourse = courseName;
  document.querySelector("#dialog-title").textContent = courseName;
  document.querySelector("#dialog-category").textContent = category.toUpperCase();
  document.querySelector("#dialog-description").textContent = categoryDescriptions[category];
  document.querySelector("#dialog-level").textContent = level;
  document.querySelector("#dialog-hours").textContent = `${hours} horas de conteúdo`;
  document.querySelector("#dialog-image").style.backgroundImage = `url('${categoryImages[category]}')`;
  updateDialogSaveButton();
  dialog.showModal();
}

function updateDialogSaveButton() {
  const isSaved = savedCourses.has(activeCourse);
  document.querySelector("#dialog-save").innerHTML = `${isSaved ? "Remover da minha lista" : "Adicionar à minha lista"} <span aria-hidden="true">${isSaved ? "★" : "☆"}</span>`;
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  filters.querySelectorAll(".filter-chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip === button)));
  renderCourses();
});

grid.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const name = saveButton.dataset.save;
    if (savedCourses.has(name)) savedCourses.delete(name);
    else savedCourses.add(name);
    saveList();
    if (activeCourse === name && dialog.open) updateDialogSaveButton();
    return;
  }
  const detailsButton = event.target.closest("[data-details]");
  if (detailsButton) openCourse(detailsButton.dataset.details);
});

searchInput.addEventListener("input", renderCourses);
sortSelect.addEventListener("change", renderCourses);
savedFilterButton.addEventListener("click", () => {
  showSavedOnly = !showSavedOnly;
  savedFilterButton.setAttribute("aria-pressed", String(showSavedOnly));
  renderCourses();
});
document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  selectedCategory = "Todas";
  showSavedOnly = false;
  savedFilterButton.setAttribute("aria-pressed", "false");
  filters.querySelectorAll(".filter-chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.category === "Todas")));
  renderCourses();
});
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#dialog-save").addEventListener("click", () => {
  if (!activeCourse) return;
  if (savedCourses.has(activeCourse)) savedCourses.delete(activeCourse);
  else savedCourses.add(activeCourse);
  saveList();
  updateDialogSaveButton();
  announce(savedCourses.has(activeCourse) ? "Curso adicionado à sua lista." : "Curso removido da sua lista.");
});
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

renderFilters();
renderCourses();