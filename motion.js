(() => {
  'use strict';

  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const hydrateLatestEvidence = () => {
    const eyebrow = document.querySelector('#inicio .eyebrow');
    if (eyebrow) eyebrow.textContent = 'Memorial visual auxiliar · fotografia documental até 28/09/2026';

    const lede = document.querySelector('#inicio .hero-lede');
    if (lede) lede.innerHTML = `A sequência documental que começa na contratação de 06/07/2026, passa por pagamentos,
      “retorno judicial”, parecer técnico e judicialização contra a Caixa, culmina em nova cobrança vinculada a uma
      audiência não localizada no eproc e, mesmo após a reassunção do controle processual, segue com contatos de
      24–25/09 e documentação financeira externa que registra comprometimento concreto da liquidez.`;

    const timelineTitle = document.querySelector('#linha-do-tempo .timeline-intro h2');
    if (timelineTitle) timelineTitle.textContent = '84 dias que mudaram a natureza do problema.';
    const timeline = document.querySelector('#linha-do-tempo .timeline');
    if (timeline) timeline.setAttribute('aria-label', 'Linha do tempo de 6 de julho a 28 de setembro de 2026');

    const nav = document.querySelector('.topnav');
    if (nav && !nav.querySelector('a[href="#atualizacao-28-09"]')) {
      const a = document.createElement('a');
      a.href = '#atualizacao-28-09';
      a.textContent = 'Atualização 28/09';
      nav.insertBefore(a, nav.querySelector('button'));
    }

    const confront = document.querySelector('#confronto .confront-sticky');
    if (confront && !document.getElementById('fonte-enviada-18-09')) {
      confront.insertAdjacentHTML('beforeend', `
        <figure class="document-frame wide event-doc evidence-facsimile" id="fonte-enviada-18-09" data-reveal>
          <div class="facsimile-paper eproc-facsimile">
            <div class="facsimile-stamp">CONSULTA TRF4 · ENCAMINHADA PELA PRÓPRIA PREMIUM EM 18/09/2026</div>
            <div class="eproc-mini-list">
              <span><b>15</b> 14/09 · juntada de certidão — suspensão do prazo até 28/09</span>
              <span><b>14</b> 01/09 · confirmada a citação eletrônica</span>
              <span><b>13</b> 31/08 · juntada de petição — substabelecimento sem reserva</span>
              <span><b>12</b> 27/08 · citação eletrônica expedida à Caixa</span>
              <span><b>11</b> 27/08 · classe processual alterada para JEF</span>
              <span><b>10</b> 26/08 · despacho</span>
            </div>
            <small>A imagem encaminhada no próprio atendimento não exibe ato de designação de audiência.</small>
          </div>
          <figcaption><span>DOCUMENTO NOVO · 18/09</span>A própria estrutura Premium encaminha a fonte judicial que não sustenta, naquela fotografia processual, a audiência usada como fundamento do aporte de R$ 12.836,43.</figcaption>
        </figure>`);
    }

    const ledgerSection = document.getElementById('ledger')?.closest('section');
    if (ledgerSection && !document.getElementById('atualizacao-28-09')) {
      ledgerSection.insertAdjacentHTML('beforebegin', `
        <section class="scene motion-scene" id="atualizacao-28-09" data-chapter="24–28/09 · Atualização">
          <div class="section-head">
            <p class="kicker">10A — depois do takeover</p>
            <h2>A recusa do novo pagamento não encerrou os contatos. <em>A pressão prosseguiu.</em></h2>
            <p>Os documentos fornecidos em 28/09 completam a fotografia posterior à nova representação processual: novas tentativas de contato, reiteração da narrativa de audiência e linguagem processual que precisa ser explicada à luz do estado oficial do processo.</p>
          </div>

          <div class="judicial-grid" data-stagger>
            <article class="fact-card">
              <span class="badge official">24/09 · 17:00</span>
              <h3>“Conclusos para decisão/despacho”.</h3>
              <p>O próprio atendimento envia a movimentação “24/09/2026 13:35 — Conclusos para decisão/despacho” e, na sequência, pergunta se Fábio consegue atender.</p>
            </article>
            <article class="fact-card">
              <span class="badge conflict">25/09 · 10:06</span>
              <h3>“Manobra judicial” para a mesma audiência.</h3>
              <p>Mesmo após a movimentação acima, chega a mensagem: “Consegui uma manobra judicial para te ajudar na audiência, mas fica difícil quando o cliente não responde.”</p>
            </article>
            <article class="fact-card">
              <span class="badge conflict">25/09 · 12:02</span>
              <h3>O silêncio passa a ser tratado como “desinteresse”.</h3>
              <p>Nova mensagem registra: “como não obtive nenhum retorno, entendo como desinteresse da sua parte Fábio”.</p>
            </article>
          </div>

          <div class="refusal-grid" data-stagger>
            <blockquote class="large-quote">
              <span>25/09 · após recusa do pagamento</span>
              <p>“Não vou dar prosseguimento ao pagamento, eu já avisei ele.”</p>
            </blockquote>
            <blockquote class="large-quote alert">
              <span>resposta da estrutura Premium</span>
              <p>“Vou notificar os desembargadores. Boa sorte Fábio.”</p>
            </blockquote>
          </div>

          <div class="evidence-boundary" data-reveal>
            <b>Limite de afirmação preservado</b>
            <p>O memorial não presume intenção nem antecipa tipificação penal. O ponto probatório é objetivo: depois da recusa, a comunicação continua a invocar audiência e atores processuais cuja correspondência com o estado oficial do processo deve ser demonstrada pelas Rés.</p>
          </div>
        </section>

        <section class="scene motion-scene" id="impacto-financeiro" data-chapter="Impacto financeiro">
          <div class="section-head">
            <p class="kicker">10B — repercussão econômica documentada</p>
            <h2>O impacto deixa de ser apenas narrativo: <em>há fonte bancária externa.</em></h2>
            <p>Os novos extratos e faturas não autorizam dizer que toda a situação financeira de Fábio nasceu da Premium. Eles demonstram, com maior precisão, que a contratação e as cobranças se inseriram em orçamento já pressionado e agravaram concretamente a disponibilidade de crédito e liquidez.</p>
          </div>

          <div class="offer-grid" data-stagger>
            <article><small>limite nominal Santander</small><b>R$ 4.670,00</b><span>fatura de agosto/2026</span></article>
            <article class="warn"><small>limite utilizado</small><b>R$ 6.671,02</b><span>acima do limite nominal</span></article>
            <article class="delta"><small>limite disponível</small><b>R$ 0,00</b><span>sem margem no cartão</span></article>
            <article><small>obrigações futuras</small><b>R$ 5.680,14</b><span>saldo consolidado</span></article>
          </div>

          <figure class="document-frame wide evidence-facsimile" data-reveal>
            <div class="facsimile-paper receipt-facsimile">
              <div class="facsimile-stamp">FATURA SANTANDER · AGOSTO/2026 · FONTE BANCÁRIA EXTERNA</div>
              <div class="facsimile-rule"></div>
              <dl class="facsimile-fields">
                <div><dt>Limite do cartão</dt><dd>R$ 4.670,00</dd></div>
                <div><dt>Limite utilizado</dt><dd>R$ 6.671,02</dd></div>
                <div><dt>Limite disponível</dt><dd>R$ 0,00</dd></div>
                <div><dt>Compra parcelada</dt><dd>PREMIUM SOLUCOES</dd></div>
                <div><dt>Parcela</dt><dd>02/10</dd></div>
                <div><dt>Valor da parcela</dt><dd>R$ 300,00</dd></div>
                <div><dt>Obrigações futuras</dt><dd>R$ 5.680,14</dd></div>
              </dl>
              <small>Transcrição fiel dos campos relevantes da fatura; o documento integral permanece no acervo.</small>
            </div>
            <figcaption><span>DOCUMENTO NOVO · SANTANDER</span>A operação “PREMIUM SOLUCOES 02/10 — R$ 300,00” fornece corroboração bancária externa do parcelamento ligado à contratação.</figcaption>
          </figure>

          <div class="message-stack" data-reveal>
            <blockquote>
              <time>25/09 · 14:27</time>
              <p>“infelizmente por causa dessa situação, vou ter que deixar de pagar 3 cartões do banco Santander. Tentei de tudo aqui fazer contas e não vou conseguir pagar mais.”</p>
              <cite>Fábio · registro contemporâneo</cite>
            </blockquote>
          </div>

          <div class="evidence-boundary" data-reveal>
            <b>Leitura causal adotada na inicial</b>
            <p>A mensagem demonstra a percepção contemporânea de sufocamento financeiro; não prova, sozinha, que os três cartões efetivamente entraram em inadimplência. A tese utilizada é de agravamento econômico concreto, sem atribuir à Premium todo débito, juro ou multa preexistente e sem confundir movimentação bancária bruta com renda efetiva.</p>
          </div>
        </section>
      `);
    }

    const ledger = document.getElementById('ledger');
    if (ledger && !ledger.querySelector('[data-latest="28-09"]')) {
      ledger.insertAdjacentHTML('beforeend', `
        <article data-kind="conflict" data-latest="28-09"><header><span>13</span><b>Audiência alegada × fonte oficial enviada pela própria Premium</b><em>contradição intrínseca</em></header><p>No mesmo atendimento de 18/09 em que a audiência é usada para justificar o aporte, a estrutura Premium encaminha consulta pública do TRF4 sem ato de designação.</p></article>
        <article data-kind="conflict" data-latest="28-09"><header><span>14</span><b>“Conclusos para decisão/despacho” × “manobra judicial para a audiência”</b><em>reiteração posterior</em></header><p>Em 24–25/09, o atendimento registra nova movimentação oficial e, ainda assim, mantém a narrativa de audiência como eixo da comunicação.</p></article>
        <article data-kind="conflict" data-latest="28-09"><header><span>15</span><b>“Vou notificar os desembargadores” × estágio processual documentado</b><em>incongruência processual</em></header><p>A mensagem surge após a recusa de novo pagamento e deve ser esclarecida, pois o processo documentado seguia no JEF de primeiro grau.</p></article>
        <article data-kind="fact" data-latest="28-09"><header><span>16</span><b>PREMIUM SOLUCOES 02/10 · R$ 300,00</b><em>fonte bancária externa</em></header><p>A fatura Santander registra parcela da Premium e, no mesmo ciclo, limite disponível de R$ 0,00 e utilização de R$ 6.671,02.</p></article>
        <article data-kind="fact" data-latest="28-09"><header><span>17</span><b>25/09 · risco de interrupção de três cartões</b><em>repercussão contemporânea</em></header><p>Fábio registra que, após refazer as contas, acreditava que não conseguiria manter o pagamento de três cartões Santander. O inadimplemento posterior, se houver, depende de faturas subsequentes.</p></article>
      `);
    }

    const custody = document.querySelector('.custody-grid');
    if (custody && !custody.querySelector('[data-latest="bank"]')) {
      custody.insertAdjacentHTML('beforeend', `
        <article data-latest="bank"><span>07</span><b>Extratos e faturas bancárias</b><p>Documentos de Caixa, Santander e Mercado Pago, lidos com distinção entre renda, giro, crédito transitório e saldo efetivamente disponível.</p></article>
        <article data-latest="bank"><span>08</span><b>Mensagens de 24–25/09</b><p>Novos registros preservam a continuidade dos contatos depois da recusa do pagamento e depois da nova representação processual.</p></article>
      `);
    }

    const lastCause = document.querySelector('.cause-chain article:last-of-type p');
    if (lastCause) lastCause.textContent = 'Revogação, nova representação, auditoria técnica e reiteração posterior dos contatos em 24–25/09.';

    const closingNumber = document.querySelector('.closing-number');
    if (closingNumber) closingNumber.textContent = '28.09';

    const closing = document.querySelectorAll('#fechamento .closing-copy p');
    if (closing[1]) closing[1].innerHTML = `Ela nasce da <b>cumulação documentada</b> de divergências contratuais, técnicas, financeiras e processuais: dados que não fecham com o contrato-fonte; preço informado que não fecha com o recibo; informação de “retorno judicial” anterior à autuação; cobrança vinculada a audiência não localizada; persistência dessa narrativa após a recusa; e, agora, fonte bancária externa demonstrando comprometimento concreto da liquidez.`;
    if (closing[2]) closing[2].textContent = 'O que se pede ao Judiciário é a reconstrução probatória completa dessa cadeia, com contenção imediata da cobrança controvertida, preservação dos registros que só as Rés detêm e consideração da repercussão econômica efetivamente documentada.';

    const footer = document.querySelector('footer > div:first-child span');
    if (footer) footer.textContent = 'Documento auxiliar à leitura da petição inicial · snapshot probatório até 28/09/2026';
  };

  hydrateLatestEvidence();

  root.classList.add('motion-ready');
  root.dataset.motion = reduceMotion ? 'reduced' : 'active';

  const revealables = [...document.querySelectorAll('[data-reveal], [data-title-reveal], [data-phase-in], [data-stagger]')];

  document.querySelectorAll('[data-stagger]').forEach(group => {
    [...group.children].forEach((child, index) => child.style.setProperty('--reveal-delay', `${Math.min(index * 70, 350)}ms`));
  });

  const alreadyVisible = el => {
    const rect = el.getBoundingClientRect();
    return rect.top < innerHeight * .92 && rect.bottom > 0;
  };

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });

    revealables.forEach(el => alreadyVisible(el) ? el.classList.add('is-visible') : observer.observe(el));
  }

  const progressBar = document.getElementById('progressBar');
  let ticking = false;
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const progress = max > 0 ? scrollY / max : 0;
    if (progressBar) progressBar.style.transform = `scaleX(${Math.max(0, Math.min(1, progress)).toFixed(4)})`;
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScroll);
  }, { passive: true });
  updateScroll();

  const scenes = [...document.querySelectorAll('.motion-scene[data-chapter]')];
  const dots = document.getElementById('chapterDots');
  const chapterIndex = document.getElementById('chapterIndex');
  const chapterName = document.getElementById('chapterName');
  const dotMap = new Map();

  if (dots) {
    scenes.forEach((scene, index) => {
      if (!scene.id) scene.id = `scene-${index + 1}`;
      const a = document.createElement('a');
      a.href = `#${scene.id}`;
      a.setAttribute('aria-label', `${String(index + 1).padStart(2,'0')} — ${scene.dataset.chapter}`);
      a.title = scene.dataset.chapter;
      dots.appendChild(a);
      dotMap.set(scene, a);
    });
  }

  const setChapter = scene => {
    const index = scenes.indexOf(scene);
    if (index < 0) return;
    dotMap.forEach(dot => dot.classList.remove('active'));
    dotMap.get(scene)?.classList.add('active');
    if (chapterIndex) chapterIndex.textContent = String(index + 1).padStart(2,'0');
    if (chapterName) chapterName.textContent = scene.dataset.chapter || '';
  };

  if ('IntersectionObserver' in window && scenes.length) {
    const chapterObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setChapter(visible[0].target);
    }, { threshold: [.18,.36,.55], rootMargin: '-22% 0px -50% 0px' });
    scenes.forEach(scene => chapterObserver.observe(scene));
    setChapter(scenes[0]);
  }

  const filters = [...document.querySelectorAll('.filter[data-filter]')];
  const ledgerItems = [...document.querySelectorAll('#ledger article[data-kind]')];
  filters.forEach(btn => btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filters.forEach(b => b.classList.toggle('active', b === btn));
    ledgerItems.forEach(item => {
      const visible = filter === 'all' || item.dataset.kind === filter;
      item.hidden = !visible;
    });
  }));

  const dialog = document.getElementById('imageDialog');
  const dialogImage = document.getElementById('dialogImage');
  const dialogCaption = document.getElementById('dialogCaption');
  const dialogClose = document.getElementById('dialogClose');
  document.querySelectorAll('.image-open').forEach(button => {
    button.addEventListener('click', () => {
      if (!dialog || !dialogImage) return;
      dialogImage.src = button.dataset.image || button.querySelector('img')?.src || '';
      dialogImage.alt = button.querySelector('img')?.alt || 'Documento ampliado';
      if (dialogCaption) dialogCaption.textContent = button.dataset.caption || '';
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });
  dialogClose?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', e => {
    const rect = dialog.getBoundingClientRect();
    const outside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
    if (outside) dialog.close();
  });

  document.getElementById('printBtn')?.addEventListener('click', () => window.print());

  addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.setAttribute('tabindex', '-1');
  });
})();
