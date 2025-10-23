const listItems = document.querySelectorAll("#vocab li");
listItems.forEach(function(li) {
  const text = li.textContent;
  const parts = text.split(/–|:/);
  const first = parts[0].trim();
  const rest = parts[1] ? " – " + parts[1].trim() : "";
  li.innerHTML = "<strong>" + first + "</strong>" + rest;
});