// Typing animation - ROLE (hero section)
const roles = ['MERN Stack Developer_','Full-Stack Engineer_','DSA Problem Solver_','AWS Cloud Practitioner_'];
let ri=0, ci=0, roleDeleting=false;
const roleEl = document.getElementById('typed-role');

function typeRole(){
  const cur = roles[ri];
  if(!roleDeleting){
    roleEl.textContent = cur.slice(0, ci+1);
    ci++;
    if(ci === cur.length){ roleDeleting=true; setTimeout(typeRole,1800); return; }
  } else {
    roleEl.textContent = cur.slice(0, ci-1);
    ci--;
    if(ci === 0){ roleDeleting=false; ri=(ri+1)%roles.length; }
  }
  setTimeout(typeRole, roleDeleting ? 60 : 100);
}
typeRole();


// Typing animation - NAV LOGO (KSHITIJ-TIWARI_)
const logoText = "KSHITIJ-TIWARI_";
let li = 0, logoDeleting = false;
const logoEl = document.getElementById("rolling-text");

function typeLogo(){
  if(!logoDeleting){
    logoEl.textContent = logoText.slice(0, li++);
    if(li > logoText.length){ logoDeleting=true; setTimeout(typeLogo,1500); return; }
  } else {
    logoEl.textContent = logoText.slice(0, li--);
    if(li <= 0){ logoDeleting=false; }
  }
  setTimeout(typeLogo, logoDeleting ? 60 : 100);
}
typeLogo();


const skillStack = document.querySelector('.skill-stack');

if (skillStack) {
  const cards = [...skillStack.querySelectorAll('.skill-card')];
  const leftSvg = skillStack.querySelector('.skill-connector--left');
  const rightSvg = skillStack.querySelector('.skill-connector--right');
  const leftPath = leftSvg?.querySelector('.skill-connector__path');
  const rightPath = rightSvg?.querySelector('.skill-connector__path');

  const createDot = (svg, cx, cy, color) => {
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', cx);
    dot.setAttribute('cy', cy);
    dot.setAttribute('r', '5');
    dot.setAttribute('fill', color);
    dot.setAttribute('opacity', '0.9');
    svg.appendChild(dot);
  };

  const updateSkillConnectors = () => {
    if (!leftPath || !rightPath || cards.length === 0) return;

    const stackRect = skillStack.getBoundingClientRect();
    const stackHeight = Math.max(0, Math.round(stackRect.height));
    const firstCardTop = cards[0].getBoundingClientRect().top - stackRect.top;
    const lastCardBottom = cards[cards.length - 1].getBoundingClientRect().bottom - stackRect.top;

    leftSvg.setAttribute('viewBox', `0 0 40 ${stackHeight}`);
    rightSvg.setAttribute('viewBox', `0 0 40 ${stackHeight}`);
    leftSvg.style.height = `${stackHeight}px`;
    rightSvg.style.height = `${stackHeight}px`;

    const leftX = 18;
    const rightX = 22;

    leftPath.setAttribute('d', `M ${leftX} ${firstCardTop} L ${leftX} ${lastCardBottom}`);
    rightPath.setAttribute('d', `M ${rightX} ${firstCardTop} L ${rightX} ${lastCardBottom}`);

    leftSvg.querySelectorAll('circle').forEach((dot) => dot.remove());
    rightSvg.querySelectorAll('circle').forEach((dot) => dot.remove());

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top - stackRect.top;
      createDot(leftSvg, leftX, cardTop, '#38bdf8');
      createDot(rightSvg, rightX, cardTop, '#a78bfa');
    });
  };

  updateSkillConnectors();
  window.addEventListener('resize', updateSkillConnectors);
}

console.log("Script loaded successfully.");


