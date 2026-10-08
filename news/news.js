(() => {
  const list = document.getElementById("news-list");
  if (!list || !Array.isArray(window.NEWS_ITEMS)) return;

  const items = window.NEWS_ITEMS.filter(item => item.category === "SONOMA")
    .slice().sort((a, b) => b.date.localeCompare(a.date));
  const fragment = document.createDocumentFragment();
  for (const item of items) {
    const article = document.createElement("article");
    article.className = "card";
    article.id = item.id;
    const date = document.createElement("p");
    date.className = "meta";
    const time = document.createElement("time");
    time.dateTime = item.date;
    time.textContent = `${item.displayDate.month} ${item.displayDate.year}`;
    date.append(time);
    const heading = document.createElement("h2");
    heading.id = `${item.id}-title`;
    heading.textContent = item.title;
    article.setAttribute("aria-labelledby", heading.id);
    article.append(date, heading);

    const paragraphs = window.NEWS_ARTICLES?.[item.id];
    const articleParagraphs = paragraphs?.length ? paragraphs : [item.summary];
    for (const text of articleParagraphs) {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      article.append(paragraph);

    }
    const links = document.createElement("div");
    links.className = "button-row";
    for (const link of item.links || []) {
      const anchor = document.createElement("a");
      anchor.className = "button";
      let url;
      try { url = new URL(link.url); } catch { continue; }
      if (url.protocol !== "https:") continue;
      anchor.href = url.href;
      anchor.textContent = link.label;
      links.append(anchor);
    }
    article.append(links);
    fragment.append(article);
  }
  if (!items.length) {
    const empty = document.createElement("p");
    empty.textContent = "No forecast news is available yet.";
    fragment.append(empty);
  }
  list.replaceChildren(fragment);
})();
