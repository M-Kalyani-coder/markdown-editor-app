const markdownInput = document.getElementById("markdown");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
  const markdownText = markdownInput.value;
  preview.innerHTML = marked.parse(markdownText);
});
