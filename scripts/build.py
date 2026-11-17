#!/usr/bin/env python3
"""Build the static survey pages from content.py and docs/systems-data.js.

Writes docs/index.html (English) and docs/zh/index.html (Chinese). Every piece of
text is in the HTML; docs/app.js only adds filtering, collapsing, and copy.
Usage: python3 scripts/build.py   (from the repository root)
"""
import json
import html
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
from content import *  # noqa: E402,F401

DOCS = ROOT / "docs"
e = lambda s: html.escape(str(s), quote=True)

raw = (DOCS / "systems-data.js").read_text(encoding="utf-8")
DATA = json.loads(raw[raw.index("{"): raw.rindex("}") + 1])
SYSTEMS = DATA["systems"]
GROUPS = ["anchor", "coding", "runtime", "persistent", "workplace"]
ORDER = ["E", "T", "C", "S", "L", "V"]
LETTER = {"Full": "F", "Partial": "P", "Absent": "A", "Unverified": "U"}
CLS = {"Full": "full", "Partial": "partial", "Absent": "absent", "Unverified": "unverified"}

BIBTEX = f"""@article{{meng2026agentharness,
  title     = {{{TITLE}}},
  author    = {{Meng, Qianyu and Wang, Yanan and Chen, Liyi and Li, Yihang and
               Wu, Wei and Jiang, Wenyuan and Wang, Qimeng and
               Lu, Chengqiang and Gao, Yan and Wu, Yi and Hu, Yao}},
  year      = {{2026}},
  doi       = {{{DOI}}},
  url       = {{{PREPRINT}}},
  publisher = {{Preprints}}
}}"""


def figure(t, stem, alt, cap, base, cls="wide-figure", eager=False):
    w, h = FIG[stem]
    load = 'fetchpriority="high"' if eager else 'loading="lazy" decoding="async"'
    return (f'<figure class="{cls} p2-figure"><a href="{base}assets/{stem}.png" title="{e(t["open_full"])}">'
            f'<picture><source srcset="{base}assets/{stem}.webp" type="image/webp">'
            f'<img src="{base}assets/{stem}.png" width="{w}" height="{h}" {load} alt="{e(alt)}"></picture></a>'
            f'<figcaption>{e(cap)}</figcaption></figure>')


def system_rows(t):
    out = []
    for g in GROUPS:
        members = [s for s in SYSTEMS if s["category"] == g]
        out.append(f'<tr class="system-group-row" data-group="{g}"><th colspan="8" scope="colgroup">'
                   f'<button type="button" class="system-group-toggle" data-group="{g}" aria-expanded="true">'
                   f'<span aria-hidden="true">−</span> {e(t["categories"][g])} <small>{len(members)}</small></button></th></tr>')
        for i, s in enumerate(members):
            comps = {c["id"]: c for c in s["components"]}
            rid = f"evidence-{g}-{i}"
            cells = "".join(
                f'<td class="rating-cell"><span class="rating-dot {CLS[comps[k]["rating"]]}" title="{e(t["comp_names"][k])}: {e(t["ratings"][comps[k]["rating"]])}">'
                f'{LETTER[comps[k]["rating"]]}</span></td>' for k in ORDER)
            ratings = " ".join(sorted({c["rating"] for c in s["components"]}))
            details = "".join(
                f'<div class="evidence-item"><strong>{k} · {e(t["comp_names"][k])}</strong><span>{e(t["ratings"][comps[k]["rating"]])}</span>'
                f'<span class="confidence">{e(t["confidence"].get(comps[k]["confidence"], comps[k]["confidence"]))} · '
                f'{e(t["evidence_types"].get(comps[k]["evidenceType"], comps[k]["evidenceType"]))}<br>'
                f'{e(t["version"])}: {e(comps[k]["version"])} · {e(t["accessed"])} {e(s["accessDate"])}</span>'
                f'<a href="{e(comps[k]["source"])}" rel="noopener">{e(t["source"])}</a></div>' for k in ORDER)
            out.append(
                f'<tr class="data-row" data-group="{g}" data-name="{e(s["name"].lower())}" data-ratings="{ratings}">'
                f'<th scope="row" class="system-name">{e(s["name"])}</th>{cells}'
                f'<td><button class="evidence-toggle" type="button" aria-expanded="false" aria-controls="{rid}" '
                f'data-show="{e(t["show_ev"])}" data-hide="{e(t["hide_ev"])}">{e(t["show_ev"])}</button></td></tr>'
                f'<tr class="evidence-row" id="{rid}" data-group="{g}" hidden><td colspan="8"><div class="evidence-list">{details}</div></td></tr>')
    return "".join(out)


def head(t, base, url, alt_url):
    authors_meta = "".join(
        f'<meta name="citation_author" content="{e(l)}, {e(f)}">' +
        "".join(f'<meta name="citation_author_institution" content="{e(AFFILIATIONS[a])}">' for a in aff.split(","))
        for f, l, aff, _ in AUTHORS)
    ld = {
        "@context": "https://schema.org", "@type": "ScholarlyArticle",
        "headline": TITLE, "name": TITLE, "abstract": " ".join(EN["overview"]).replace("<em>", "").replace("</em>", "").replace('<span class="math">', "").replace("</span>", ""),
        "author": [{"@type": "Person", "name": f"{f} {l}", "affiliation": [{"@type": "Organization", "name": AFFILIATIONS[a]} for a in aff.split(",")]} for f, l, aff, _ in AUTHORS],
        "datePublished": DATE_PUBLISHED, "dateModified": DATE_MODIFIED,
        "publisher": {"@type": "Organization", "name": "Preprints.org"},
        "identifier": {"@type": "PropertyValue", "propertyID": "DOI", "value": DOI},
        "url": SITE, "sameAs": [DOI_URL, PREPRINT, REPO, HF],
        "image": SITE + "assets/architecture_p2_clean.png",
        "keywords": ["agent harness", "LLM agents", "large language model agents", "survey", "ETCSLV", "agent runtime", "harness engineering", "agent evaluation"],
        "inLanguage": "en", "isAccessibleForFree": True,
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "mainEntityOfPage": {"@type": "WebPage", "@id": url},
    }
    page_title = t.get("page_title", TITLE)
    return f"""<!doctype html>
<html lang="{t['lang']}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(page_title)}</title>
<meta name="description" content="{e(t['description'])}">
<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="en" href="{SITE}">
<link rel="alternate" hreflang="zh-CN" href="{SITE}zh/">
<link rel="alternate" hreflang="x-default" href="{SITE}">
<meta name="theme-color" content="#ffffff">
<meta name="citation_title" content="{e(TITLE)}">
{authors_meta}
<meta name="citation_publication_date" content="{DATE_PUBLISHED.replace('-', '/')}">
<meta name="citation_online_date" content="{DATE_PUBLISHED.replace('-', '/')}">
<meta name="citation_publisher" content="Preprints">
<meta name="citation_doi" content="{DOI}">
<meta name="citation_pdf_url" content="{PDF_RAW}">
<meta name="citation_abstract_html_url" content="{SITE}">
<meta name="citation_language" content="en">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Agent Harness Survey">
<meta property="og:locale" content="{t['locale']}">
<meta property="og:title" content="{e(TITLE)}">
<meta property="og:description" content="{e(t['description'])}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}assets/architecture_p2_clean.png">
<meta property="og:image:width" content="1774">
<meta property="og:image:height" content="887">
<meta property="og:image:alt" content="{e(t['hero_alt'])}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{e(TITLE)}">
<meta name="twitter:description" content="{e(t['description'])}">
<meta name="twitter:image" content="{SITE}assets/architecture_p2_clean.png">
<link rel="preload" as="image" href="{base}assets/architecture_p2_clean.webp" type="image/webp" fetchpriority="high">
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False, indent=1)}
</script>
<link rel="stylesheet" href="{base}styles.css">
<script defer src="{base}app.js"></script>
</head>"""


def page(t, base, url, alt_url):
    sup_aff = lambda aff, mark: f"<sup>{aff}{mark}</sup>"
    authors = ", ".join(f'<span class="author">{e(f)} {e(l)}{sup_aff(aff, mark)}</span>' for f, l, aff, mark in AUTHORS)
    affs = " ".join(f"<span><sup>{k}</sup>{e(v)}</span>" for k, v in AFFILIATIONS.items())
    links = "".join(f'<a class="{"primary-link" if p else ""}" href="{e(u)}"{"" if u.startswith("#") else " rel=\"noopener\""}>{e(n)}</a>' for n, u, p in t["links"])
    nav = "".join(f'<a href="#{i}">{e(n)}</a>' for i, n in t["nav"])
    switch_href = "zh/" if t["lang"] == "en" else "../"
    functions = "".join(f'<div class="function-card"><dt><span class="function-code">{c}</span> {e(n)}</dt><dd>{e(d)}</dd></div>' for c, n, d in t["functions"])
    terms = "".join(f"<dt>{e(a)}</dt><dd>{e(b)}</dd>" for a, b in t["terms"])
    cases = "".join(f'<li class="case-card"><h4>{e(n)}</h4><span class="case-layer">{e(layer)}</span><p>{e(d)}</p></li>' for n, layer, d in t["cases"])
    findings = "".join(f'<li class="finding-card"><p class="finding-metric"><span class="finding-value">{e(m)}</span><span class="finding-code">{e(c)}</span></p><p>{e(x)}</p></li>' for m, c, x in t["findings"])
    questions = "".join(f"<li><strong>{e(a)}.</strong> {e(b)}</li>" for a, b in t["questions"])
    areas = "".join(
        f'<article class="evaluation-area"><h4>{e(title)}</h4><p>{e(desc)}</p><ul class="benchmark-links">'
        + "".join(f'<li><a href="{e(u)}" rel="noopener">{e(n)}</a></li>' for n, u in EVAL_LINKS[k]) + "</ul></article>"
        for k, title, desc in t["areas"])
    evo = "".join(f'<tr><th scope="row"><a href="{EVO_LINKS[k]}" rel="noopener">{e(n)}</a></th><td>{e(o)}</td><td>{e(q)}</td></tr>' for n, k, o, q in t["evo_rows"])
    agenda = "".join(f"<li><strong>{e(a)}.</strong> {e(b)}</li>" for a, b in t["agenda"])
    legend = "".join(f'<span><b class="rating-dot {CLS[r]}">{LETTER[r]}</b>{e(t["ratings"][r])} · {e(t["legend"][r])}</span>' for r in ["Full", "Partial", "Absent", "Unverified"])
    cat_opts = "".join(f'<option value="{g}">{e(t["categories"][g])}</option>' for g in GROUPS)
    rat_opts = "".join(f'<option value="{r}">{e(t["ratings"][r])}</option>' for r in ["Full", "Partial", "Absent", "Unverified"])
    th_cols = "".join(f'<th scope="col" title="{e(t["comp_names"][k])}"><abbr title="{e(t["comp_names"][k])}">{k}</abbr></th>' for k in ORDER)
    h1_sub = f'<p class="title-sub">{e(t["title"])}</p>' if t["title"] != TITLE else ""
    strings = json.dumps({"count": t["count_tpl"], "copied": t["copied"], "fail": t["copy_fail"], "total": len(SYSTEMS)}, ensure_ascii=False)
    overview = "".join(f"<p>{p}</p>" for p in t["overview"])

    return head(t, base, url, alt_url) + f"""
<body>
<a class="skip-link" href="#main">{e(t['skip'])}</a>
<header class="site-header">
  <a class="wordmark" href="#top">{e(t['home'])}</a>
  <nav class="primary-nav" aria-label="Primary">{nav}</nav>
  <div class="header-actions">
    <a class="github-link" href="{REPO}" rel="noopener">{e(t['github'])}</a>
    <a class="language-toggle" href="{switch_href}" hreflang="{'zh-CN' if t['lang'] == 'en' else 'en'}" lang="{'zh-CN' if t['lang'] == 'en' else 'en'}" aria-label="{e(t['switch_aria'])}">{e(t['switch_label'])}</a>
  </div>
</header>
<main id="main">
<section class="hero page-wrap" id="top" aria-labelledby="paper-title">
  <div class="hero-copy">
    <p class="project-line">{e(t['kicker'])}</p>
    <h1 id="paper-title" lang="en">{e(TITLE)}</h1>
    {h1_sub}
    <p class="authors">{authors}</p>
    <p class="affiliations">{affs}</p>
    <p class="author-notes"><sup>*</sup>{e(t['equal'])} · <sup>†</sup>{e(t['corresponding'])}</p>
    <div class="paper-status">{links}</div>
    <p class="thesis"><strong>{e(t['tldr_label'])}{'：' if t['lang'] != 'en' else ':'}</strong>{'' if t['lang'] != 'en' else ' '}{e(t['tldr'])}</p>
  </div>
  {figure(t, "architecture_p2_clean", t['hero_alt'], t['hero_cap'], base, "hero-figure", eager=True)}
</section>

<section class="paper-section page-wrap" id="overview" aria-labelledby="overview-title">
  <div class="section-heading"><h2 id="overview-title">{e(t['overview_h'])}</h2></div>
  <div class="overview-text">{overview}</div>
</section>

<section class="paper-section page-wrap" id="definition" aria-labelledby="definition-title">
  <div class="section-heading"><h2 id="definition-title">{e(t['def_h'])}</h2></div>
  <p class="lead-text">{e(t['def_text'])}</p>
  <div class="two-col">
    <div class="survey-explanation"><h3>{e(t['example_h'])}</h3><p>{e(t['example'])}</p></div>
    <div><h3>{e(t['terms_h'])}</h3><dl class="concept-definitions">{terms}</dl></div>
  </div>
</section>

<section class="framework-section" id="framework" aria-labelledby="framework-title">
  <div class="page-wrap framework-wrap">
    <div class="section-heading"><h2 id="framework-title">{e(t['fw_h'])}</h2><p class="section-intro">{e(t['fw_intro'])}</p></div>
    <dl class="function-grid">{functions}</dl>
    {figure(t, "step_state_p2", t['step_alt'], t['step_cap'], base, "wide-figure lifecycle-figure")}
    <h3>{e(t['hist_h'])}</h3>
    <p>{e(t['hist_text'])}</p>
    {figure(t, "timeline_p2", t['hist_alt'], t['hist_cap'], base)}
  </div>
</section>

<section class="paper-section page-wrap" id="systems" aria-labelledby="systems-title">
  <div class="section-heading"><h2 id="systems-title">{e(t['sys_h'])}</h2><p class="section-intro">{e(t['sys_intro'])}</p></div>
  {figure(t, "landscape_p2", t['land_alt'], t['land_cap'], base, "wide-figure taxonomy-figure")}
  <h3>{e(t['findings_h'])}</h3>
  <ul class="finding-grid">{findings}</ul>
  <h3>{e(t['cases_h'])}</h3>
  <ul class="case-grid">{cases}</ul>
  <p class="case-summary">{e(t['cases_sum'])}</p>
  <h3 id="matrix">{e(t['matrix_h'])}</h3>
  <div class="matrix-controls">
    <label class="search-label" for="system-search">{e(t['search_label'])}</label>
    <input id="system-search" type="search" autocomplete="off" placeholder="{e(t['search_ph'])}">
    <label class="filter-label" for="category-filter">{e(t['group_label'])}</label>
    <select id="category-filter"><option value="all">{e(t['all_groups'])}</option>{cat_opts}</select>
    <label class="filter-label" for="rating-filter">{e(t['rating_label'])}</label>
    <select id="rating-filter"><option value="all">{e(t['any_rating'])}</option>{rat_opts}</select>
    <p id="matrix-count" class="matrix-count" aria-live="polite"></p>
  </div>
  <div class="legend">{legend}</div>
  <p class="matrix-note">{e(t['legend_note'])}</p>
  <div class="group-actions"><button type="button" id="expand-groups">{e(t['expand'])}</button><button type="button" id="collapse-groups">{e(t['collapse'])}</button></div>
  <div class="table-scroll" tabindex="0" role="region" aria-label="{e(t['matrix_region'])}">
    <table class="system-table">
      <thead><tr><th scope="col">{e(t['th_system'])}</th>{th_cols}<th scope="col">{e(t['th_evidence'])}</th></tr></thead>
      <tbody id="system-rows">{system_rows(t)}</tbody>
    </table>
  </div>
  <details class="figure-overview"><summary>{e(t['cov_summary'])}</summary>
    <figure class="wide-figure coverage-figure p2-figure"><a href="{base}assets/component_matrix_p2.svg"><img src="{base}assets/component_matrix_p2.svg" width="1100" height="890" loading="lazy" alt="{e(t['cov_alt'])}"></a><figcaption>{e(t['cov_cap'])}</figcaption></figure>
  </details>
  <p class="data-download"><a href="{base}systems.json" download="agent-harness-system-evidence.json">{e(t['download'])}</a></p>
</section>

<section class="paper-section page-wrap" id="engineering" aria-labelledby="engineering-title">
  <div class="section-heading"><h2 id="engineering-title">{e(t['eng_h'])}</h2></div>
  <h3>{e(t['tool_h'])}</h3>
  {figure(t, "tool_governance_p2", t['tool_alt'], t['tool_cap'], base)}
  <h3>{e(t['coord_h'])}</h3>
  {figure(t, "multi_agent_topology_p2", t['coord_alt'], t['coord_cap'], base)}
</section>

<section class="evaluation-section" id="evaluation" aria-labelledby="evaluation-title">
  <div class="page-wrap">
    <div class="section-heading"><h2 id="evaluation-title">{e(t['eval_h'])}</h2><p class="section-intro">{e(t['eval_intro'])}</p></div>
    {figure(t, "evaluation_attribution_p2", t['attr_alt'], t['attr_cap'], base, "wide-figure evaluation-figure")}
    <div class="survey-synthesis"><h3>{e(t['q_h'])}</h3><ul class="question-list">{questions}</ul><p>{e(t['report'])}</p></div>
    <h3>{e(t['areas_h'])}</h3>
    <div class="evaluation-list">{areas}</div>
    <p class="task-environment-note">{e(t['task_env'])}</p>
    <h3 id="evolution">{e(t['evo_h'])}</h3>
    <div class="table-scroll"><table class="evolution-table"><thead><tr>{''.join(f'<th scope="col">{e(x)}</th>' for x in t['evo_th'])}</tr></thead><tbody>{evo}</tbody></table></div>
  </div>
</section>

<section class="paper-section page-wrap agenda-section" id="agenda" aria-labelledby="agenda-title">
  <div class="section-heading"><h2 id="agenda-title">{e(t['agenda_h'])}</h2></div>
  <ul class="agenda-list">{agenda}</ul>
</section>

<section class="citation-band" id="cite" aria-labelledby="cite-title">
  <div class="page-wrap citation-grid">
    <div><h2 id="cite-title">{e(t['cite_h'])}</h2><p class="citation-note">{e(t['cite_note'])}</p><a class="text-link" href="{DOI_URL}" rel="noopener">doi.org/{DOI}</a></div>
    <div class="bibtex-block">
      <div class="bibtex-heading"><span>BibTeX</span><button type="button" id="copy-citation">{e(t['copy'])}</button></div>
      <pre><code id="bibtex">{e(BIBTEX)}</code></pre>
      <p class="copy-status" id="copy-status" role="status" aria-live="polite"></p>
    </div>
  </div>
</section>

</main>
<footer class="site-footer page-wrap">
  <span>{e(t['footer'])}</span> <a href="{REPO}" rel="noopener">Gloriaameng/Awesome-Agent-Harness</a>
</footer>
<script id="page-strings" type="application/json">{strings}</script>
</body>
</html>
"""


def main():
    (DOCS / "index.html").write_text(page(EN, "./", SITE, SITE + "zh/"), encoding="utf-8")
    (DOCS / "zh").mkdir(exist_ok=True)
    (DOCS / "zh" / "index.html").write_text(page(ZH, "../", SITE + "zh/", SITE), encoding="utf-8")
    (DOCS / "sitemap.xml").write_text(f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>{SITE}</loc>
    <lastmod>{DATE_MODIFIED}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="{SITE}"/>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="{SITE}zh/"/>
  </url>
  <url>
    <loc>{SITE}zh/</loc>
    <lastmod>{DATE_MODIFIED}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="{SITE}"/>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="{SITE}zh/"/>
  </url>
</urlset>
""", encoding="utf-8")
    print("Built docs/index.html, docs/zh/index.html, docs/sitemap.xml")


if __name__ == "__main__":
    main()
