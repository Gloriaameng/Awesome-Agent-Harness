// Materialize the same English content used by the interactive renderer.
// Run with Node.js after editing docs/app.js; no third-party dependencies.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const js=fs.readFileSync(path.join(root,'docs/app.js'),'utf8');
const context={};
vm.runInNewContext(js.replace(/init\(\);\s*$/, '')+';globalThis.pageCopy=copy;',context);
const d=context.pageCopy.en;
const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let html=fs.readFileSync(path.join(root,'docs/index.html'),'utf8');
function fill(id,tag,body){const re=new RegExp(`(<${tag}[^>]*id="${id}"[^>]*>)[\\s\\S]*?(</${tag}>)`);if(!re.test(html))throw Error(id);html=html.replace(re,(_,a,b)=>a+body+b);}
fill('contributions','ol',d.contributions.map(([t,x])=>`<li><strong>${e(t)}</strong><span>${e(x)}</span></li>`).join(''));
fill('evaluation-list','div',d.evaluations.map(g=>`<article class="evaluation-area"><h3>${e(g.title)}</h3><p>${e(g.desc)}</p><ul class="benchmark-links">${g.links.map(([n,u])=>`<li><a href="${e(u)}" target="_blank" rel="noopener noreferrer">${e(n)}</a></li>`).join('')}</ul></article>`).join(''));
fill('latest-list','div',d.latestWorks.map(w=>`<article class="latest-item"><p class="latest-kind">${e(w.kind)}</p><h3><a href="${e(w.url)}" target="_blank" rel="noopener noreferrer">${e(w.title)}</a></h3><p class="latest-description">${e(w.desc)}</p></article>`).join(''));
fill('agenda-list','ul',d.agenda.map(([t,x])=>`<li><strong>${e(t)}.</strong> ${e(x)}</li>`).join(''));
fill('function-explanation','div',`<strong>E · ${e(d.functions.E[0])}.</strong> ${e(d.functions.E[1])}`);
fs.writeFileSync(path.join(root,'docs/index.html'),html);
console.log('Prerendered core content from app.js.');
