const rulesDocument = document.querySelector("#rules-document");
const rulesToc = document.querySelector("#rules-toc");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const renderInline = (value) =>
  escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^\*])\*([^\*]+)\*(?!\*)/g, "$1<em>$2</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");

const slugCounts = new Map();

const slugify = (value) => {
  const base =
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "section";
  const count = slugCounts.get(base) || 0;
  slugCounts.set(base, count + 1);
  return count ? `${base}-${count + 1}` : base;
};

const closeList = (state, html) => {
  if (!state.list) return;
  html.push(`</${state.list}>`);
  state.list = null;
};

const parseMarkdown = (markdown) => {
  const html = [];
  const toc = [];
  const state = { list: null };

  markdown.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      closeList(state, html);
      return;
    }

    if (/^-{3,}$/.test(line)) {
      closeList(state, html);
      html.push("<hr />");
      return;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      closeList(state, html);
      const level = heading[1].length;
      const text = heading[2];
      const id = slugify(text);

      if (level >= 2) {
        toc.push({ id, level, text });
      }

      html.push(`<h${level} id="${id}">${renderInline(text)}</h${level}>`);
      return;
    }

    const unordered = line.match(/^-\s+(.+)$/);
    if (unordered) {
      if (state.list !== "ul") {
        closeList(state, html);
        state.list = "ul";
        html.push("<ul>");
      }
      html.push(`<li>${renderInline(unordered[1])}</li>`);
      return;
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      if (state.list !== "ol") {
        closeList(state, html);
        state.list = "ol";
        html.push("<ol>");
      }
      html.push(`<li>${renderInline(ordered[1])}</li>`);
      return;
    }

    closeList(state, html);
    html.push(`<p>${renderInline(line)}</p>`);
  });

  closeList(state, html);

  return { html: html.join("\n"), toc };
};

const renderRules = async () => {
  try {
    const response = await fetch(`COMMANDER_THE_FLAG_RULES.md?v=${Date.now()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Rules document returned ${response.status}`);
    }

    const markdown = await response.text();
    const parsed = parseMarkdown(markdown);

    rulesDocument.innerHTML = parsed.html;
    rulesToc.innerHTML = parsed.toc
      .map(
        (item) =>
          `<a class="toc-level-${item.level}" href="#${item.id}">${escapeHtml(item.text)}</a>`,
      )
      .join("");
  } catch (error) {
    rulesDocument.innerHTML = `
      <h2>Rules failed to load</h2>
      <p>
        The styled rules page could not load the Markdown source. You can still open the
        <a href="COMMANDER_THE_FLAG_RULES.md">Markdown rules</a> directly.
      </p>
    `;
    rulesToc.innerHTML = '<a href="COMMANDER_THE_FLAG_RULES.md">Open Markdown Rules</a>';
    console.error(error);
  }
};

renderRules();
