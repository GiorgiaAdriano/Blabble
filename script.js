/* =============================================================================
   Blabble — interazioni
   Nessuna dipendenza: menu mobile, elenco del glossario, frecce della galleria.
   ========================================================================== */
(function () {
  "use strict";

  /* ----------------------------------------------------------- Glossario --- */
  /* I 26 temi del design, in ordine alfabetico come nel file Figma, con la
     definizione mostrata nel popup (testi forniti in `glossario.txt`). */
  var TOPICS = [
    {
      title: "Cambiamento climatico",
      text:
        "Indica la variazione a lungo termine delle temperature e dei modelli meteorologici terrestri, accelerata dalle emissioni di gas serra derivanti dalle attività umane. Il fenomeno intensifica eventi meteo estremi, l'innalzamento del livello dei mari e la perdita di biodiversità, richiedendo ingenti costi di adattamento. La transizione verso modelli a basse emissioni stimola l'innovazione tecnologica, l'efficienza energetica e lo sviluppo di nuove filiere industriali verdi.",
    },
    {
      title: "Capitalismo e consumismo",
      text:
        "Il capitalismo è un sistema economico basato sulla proprietà privata dei mezzi di produzione e sulla libertà di mercato, dove le imprese competono per generare profitto. Il consumismo ne è il riflesso socioculturale: un modello che incentiva l’acquisto continuo di beni e servizi, anche oltre i bisogni primari, per sostenere la crescita economica. Insieme stimolano innovazione tecnologica, disponibilità di prodotti e benessere materiale, sollevando al contempo questioni di equità e impatto ecologico.",
    },
    {
      title: "Chirurgia estetica",
      text:
        "Un ramo della medicina che comprende procedure chirurgiche volte a modificare, correggere o armonizzare l'aspetto fisico di una persona in assenza di patologie. A differenza della chirurgia ricostruttiva, che ripara traumi, malformazioni congenite o esiti di malattie, la chirurgia estetica interviene su tessuti sani per scelta individuale. Viene impiegata per avvicinarsi a specifici canoni estetici o attenuare i segni del tempo, influenzando la percezione corporea e l'autostima.",
    },
    {
      title: "Energia nucleare",
      text:
        "Si ottiene scindendo gli atomi di uranio in reattori dedicati, un processo che libera enormi quantità di calore convertito poi in elettricità. Questa fonte genera una fornitura continua e su vasta scala senza produrre gas serra durante il funzionamento ordinario, occupando poco suolo. La tecnologia produce tuttavia scorie radioattive che richiedono stoccaggio sicuro per millenni, presenta un rischio a bassissima probabilità ma ad alto impatto in caso di incidente grave ed esige costi iniziali e tempi di costruzione molto elevati.",
    },
    {
      title: "Esplorazione spaziale",
      text:
        "Consiste nell'invio di satelliti, sonde ed equipaggi umani per studiare l'universo oltre l'atmosfera terrestre. Questa attività genera innovazioni tecnologiche con ricadute quotidiane, approfondisce le conoscenze scientifiche e climatiche, stimola la cooperazione tra nazioni e apre prospettive per la salvaguardia della specie. Parallelamente, richiede investimenti economici ingenti, incrementa i detriti orbitali, comporta impatti ambientali dovuti ai lanci e rischia di innescare contese geopolitiche o una corsa agli armamenti.",
    },
    {
      title: "Eutanasia",
      text:
        "È l'atto medico che procura intenzionalmente la morte di una persona sotto sua richiesta o esplicito consenso per porre fine a sofferenze causate da una malattia incurabile o terminale. Si differenzia dal suicidio medicalmente assistito, in cui è il paziente stesso ad autosomministrarsi il farmaco letale prescritto dal medico. Alcuni Paesi ne riconoscono la legittimità come espressione di autodeterminazione e la regolano con rigidi requisiti sanitari e legali, mentre altri ordinamenti la equiparano al reato di omicidio del paziente, ammettendo semmai l'accesso al solo suicidio assistito (come in Italia).",
    },
    {
      title: "Famiglia tradizionale",
      text:
        "L'espressione \"famiglia tradizionale\" definisce storicamente un nucleo composto da una coppia eterosessuale unita in matrimonio e dai loro figli biologici, basato su ruoli genitoriali distinti. Questo assetto ha offerto continuità culturale, stabilità demografica e una rete primaria di cura e trasmissione generazionale delle risorse. Al contempo, tale modello esclude configurazioni affettive e identitarie differenti (come coppie dello stesso sesso, famiglie monogenitoriali o conviventi non sposati), riducendo l'autonomia individuale e riflettendo rigide gerarchie di genere.",
    },
    {
      title: "Fast fashion",
      text:
        "Modello di produzione e vendita del settore tessile incentrato sulla realizzazione rapida di capi d’abbigliamento economici, ispirati alle ultime tendenze delle sfilate o dei media. Il sistema si basa su cicli produttivi molto brevi, filiere globali flessibili e un ricambio costante delle collezioni nei negozi fisici e online. Questa formula garantisce ai consumatori un accesso frequente a prezzi ridotti, comportando al contempo elevati volumi di consumo, smaltimento e impiego di risorse.",
    },
    {
      title: "Femminismo",
      text:
        "Il femminismo è un insieme eterogeneo di movimenti sociali, teorie e pratiche politiche volto a raggiungere la parità di diritti e opportunità tra i generi. Storicamente ha promosso l'accesso al voto, l'autonomia economica delle donne e la tutela legislativa contro le discriminazioni e la violenza. La sua evoluzione ha ridefinito la struttura del lavoro e i modelli familiari, sollevando talvolta tensioni tra ruoli identitari e dibattiti su equità e merito.",
    },
    {
      title: "Globalizzazione",
      text:
        "Descrive la crescente interconnessione economica, culturale e tecnologica tra paesi, favorita dalla circolazione rapida di merci, capitali, informazioni e persone. Questo processo ha ridotto i costi di produzione, aperto mercati globali, ampliato l'accesso alle innovazioni e favorito scambi interculturali. Parallelamente, ha generato delocalizzazioni occupazionali, aumentato la vulnerabilità a crisi finanziarie o sanitarie transfrontaliere e ridotto le specificità culturali locali.",
    },
    {
      title: "Immigrazione",
      text:
        "Consiste nello spostamento stabile di individui da un paese d'origine a un altro per motivi economici, sociali o di sicurezza. Nei paesi riceventi compensa cali demografici, copre carenze di manodopera in settori chiave e arricchisce la diversità culturale. Al contempo, flussi consistenti e rapidi pongono pressioni sui servizi pubblici locali, possono alimentare frizioni nell'integrazione sociale e privano i paesi di partenza di capitale umano e competenze professionali qualificate.",
    },
    {
      title: "Intelligenza artificiale",
      text:
        "Comprende sistemi informatici capaci di svolgere compiti tipici dell'intelletto umano, come apprendere dati, riconoscere schemi e risolvere problemi complessi. Questa tecnologia velocizza la ricerca scientifica, automatizza mansioni ripetitive e ottimizza la gestione di servizi medici e industriali. Allo stesso tempo introduce il rischio di disoccupazione tecnologica, presenta vulnerabilità legate a errori o pregiudizi algoritmici e solleva questioni sulla tutela della privacy.",
    },
    {
      title: "Istruzione privata",
      text:
        "Si tratta di scuole e università gestite e finanziate da enti non statali, sostenute da rette o fondi propri anziché da imposte pubbliche. Questo modello offre programmi didattici flessibili, infrastrutture moderne, percorsi pedagogici specializzati e alleggerisce il carico sui sistemi statali. Al contempo, la necessità di risorse economiche private vincola l'accesso a fasce di reddito elevate, riduce la coesione sociale tra classi diverse e può favorire diseguaglianze educative.",
    },
    {
      title: "Mantenimento delle tradizioni",
      text:
        "Consiste nella conservazione e trasmissione di pratiche, usanze, credenze e valori ereditati dal passato di una comunità. Questo processo consolida il senso di appartenenza collettivo, preserva patrimoni culturali storici e fornisce stabilità identitaria e coesione sociale nel tempo. Parallelamente, un rigido attaccamento a tali modelli può ostacolare l'adattamento ai cambiamenti, limitare le libertà individuali ed escludere prospettive o comportamenti innovativi.",
    },
    {
      title: "Matrimonio",
      text:
        "Il matrimonio è un'istituzione sociale, legale o religiosa che formalizza l'unione stabile e consensuale tra due individui, definendone reciproci diritti e doveri. Tale vincolo offre tutele patrimoniali, agevolazioni fiscali e sicurezza giuridica per i figli. D'altro canto, riflette talvolta disparità storiche nella ripartizione del lavoro di cura, esercita pressioni sociali legate ad aspettative idealizzate, riserva privilegi a discapito di altri modelli relazionali e comporta rilevanti complessità economiche ed emotive in caso di separazione.",
    },
    {
      title: "Meritocrazia",
      text:
        "Modello sociale in cui ruoli e riconoscimenti vengono assegnati in base al talento, all'impegno e alle competenze individuali anziché al ceto d'origine. Tale sistema incentiva la dedizione, accresce l'efficienza delle istituzioni e favorisce la mobilità sociale riducendo i privilegi ereditari. D'altra parte, in assenza di pari condizioni di partenza rischia di legittimare le disparità economiche, ignora i fattori casuali del talento e può generare arroganza nei favoriti e frustrazione in chi resta escluso.",
    },
    {
      title: "Metaverso",
      text:
        "Il metaverso indica una rete integrata di ambienti virtuali tridimensionali e interattivi, in cui le persone interagiscono tramite avatar digitali in tempo reale. Questo spazio consente forme avanzate di telelavoro, simulazioni immersive per la formazione medica e nuove opportunità per l'economia digitale globale. Al tempo stesso, solleva questioni di sicurezza sui dati biometrici personali, comporta barriere economiche legate all'accesso ai visori e può favorire isolamento sociale e dipendenza.",
    },
    {
      title: "Norme di abbigliamento",
      text:
        "Sono insiemi di regole o convenzioni sociali che definiscono i capi ritenuti appropriati in contesti lavorativi, istituzionali o comunitari. Esse favoriscono la coesione di gruppo, semplificano il riconoscimento di ruoli e compiti e attenuano disparità socioeconomiche visibili in ambiti come la scuola. Tali imposizioni limitano l'espressione dell'identità individuale, possono generare disagio fisico, comportano costi economici e perpetuano rigidi stereotipi.",
    },
    {
      title: "Poliamore",
      text:
        "È la pratica di intrattenere relazioni affettive o intime con più partner contemporaneamente, con il consenso informato di tutte le parti. Questa scelta consente di appagare bisogni emotivi o relazionali differenti, garantisce una rete di supporto quotidiano più ampia e stimola la crescita personale superando la gelosia. D'altro canto, si scontra con l'assenza di tutele giuridiche per genitorialità ed eredità, l'esposizione allo stigma sociale e una gestione interpersonale complessa.",
    },
    {
      title: "Politicamente corretto",
      text:
        "È un orientamento linguistico e comportamentale volto a evitare espressioni o azioni percepite come offensive o discriminatorie verso gruppi storicamente emarginati. Tale prassi favorisce l'inclusione sociale, sensibilizza sull'uso del linguaggio e promuove il rispetto delle diversità negli spazi pubblici e lavorativi. Questo approccio può alimentare timori di autocensura, polarizzare il dibattito culturale e rischiare di limitare l'ironia o la libertà d'espressione.",
    },
    {
      title: "Privacy online",
      text:
        "Riguarda il controllo e la protezione dei dati personali, delle comunicazioni e della cronologia di navigazione su internet. Una tutela rigorosa salvaguarda l'autonomia individuale, previene furti d'identità e limita la profilazione commerciale non richiesta. Al tempo stesso, una riservatezza stringente riduce la personalizzazione dei servizi digitali, complica le indagini delle forze dell'ordine contro i crimini informatici e appesantisce la navigazione con procedure di consenso.",
    },
    {
      title: "Religione",
      text:
        "Sistema di credenze, pratiche e valori incentrato sulla relazione tra l'essere umano e il sacro, il divino o una realtà trascendente. Essa offre sostegno emotivo, risposte sul senso dell'esistenza, coesione sociale e una rete di aiuto comunitario. Le appartenenze confessionali possono favorire dogmatismo, limitare l'autonomia di pensiero, generare tensioni con visioni laiche o scientifiche e alimentare conflitti tra comunità con fedi diverse.",
    },
    {
      title: "Smart working",
      text:
        "Modalità di lavoro flessibile che sfrutta tecnologie digitali per svolgere le proprie mansioni al di fuori della sede aziendale tradizionale, senza vincoli rigidi di orario o spazio. Questo assetto riduce i tempi di spostamento quotidiano, favorisce l'autonomia nella gestione della giornata e abbatte i costi di gestione degli uffici. Al tempo stesso, può indebolire la separazione tra vita professionale e privata, limitare le interazioni umane e favorire una sensazione di isolamento.",
    },
    {
      title: "Sperimentazione animale",
      text:
        "Prevede l'impiego di animali nella ricerca scientifica e biomedica per studiare processi biologici e testare terapie. Questa pratica consente di verificare l'efficacia e la tossicità di farmaci salvavita e vaccini prima dell'uso clinico umano, ampliando le conoscenze fisiologiche. D'altro canto, comporta sofferenza o soppressione degli esemplari coinvolti, presenta limiti dovuti alle differenze fisiologiche tra specie e richiede costi elevati di mantenimento e conformità etica.",
    },
    {
      title: "Terapia psicologica",
      text:
        "È un percorso strutturato tra un professionista della salute mentale e una persona, volto a comprendere e trattare disagi emotivi, relazionali o comportamentali. Tale processo favorisce l'autoconsapevolezza, offre strategie pratiche di gestione dello stress e allevia la sofferenza psichica. D'altra parte, richiede costanza, notevoli investimenti di tempo e risorse economiche, e si scontra talvolta con lo stigma sociale che associa ancora il ricorso al supporto psicologico a una condizione di debolezza o anormalità.",
    },
    {
      title: "Veganismo e vegetarianismo",
      text:
        "Il vegetarianismo esclude carne e pesce, mentre il veganismo elimina ogni derivato animale, inclusi latticini e uova. Entrambi favoriscono la salute cardiovascolare, il controllo del peso e un maggiore apporto di fibre, riducendo i rischi legati a carni lavorate. D'altro canto, un approccio non guidato può comportare carenze nutrizionali critiche come la vitamina B12 (assente nei vegetali), squilibri legati a diete non pianificate e l'eccessivo consumo di alimenti industriali e ultra-processati.",
    },
  ];

  /* Ogni tema ha un indirizzo diretto: `#tema-<slug>` ricavato dal titolo. È
     quello da incidere sui moduli NFC / QR delle carte, così la scansione apre
     il sito già sul popup del tema. */
  var TOPIC_PREFIX = "tema-";

  var slugify = function (text) {
    var value = String(text);
    /* via gli accenti: "però" diventa "pero" */
    if (value.normalize) {
      value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  var list = document.getElementById("glossary-list");
  var modal = document.getElementById("modal-glossario");
  var modalTitle = document.getElementById("modal-glossario-title");
  var modalBody = document.getElementById("modal-glossario-body");

  if (list) {
    var fragment = document.createDocumentFragment();

    TOPICS.forEach(function (topic, index) {
      var item = document.createElement("li");

      var card = document.createElement("button");
      card.type = "button";
      card.className = "glossary__card";
      card.setAttribute("aria-label", "Scopri di più su " + topic.title);
      card.setAttribute("data-topic", String(index));
      /* l'id è l'ancora del link diretto: #tema-smart-working */
      card.id = TOPIC_PREFIX + slugify(topic.title);

      var title = document.createElement("span");
      title.className = "glossary__title";
      title.textContent = topic.title;

      var badge = document.createElement("span");
      /* .btn-round: stesso hover delle frecce della galleria e della "×" dei popup */
      badge.className = "glossary__plus btn-round";

      var plus = document.createElement("span");
      plus.className = "plus";
      plus.setAttribute("aria-hidden", "true");

      badge.appendChild(plus);
      card.appendChild(title);
      card.appendChild(badge);
      item.appendChild(card);
      fragment.appendChild(item);
    });

    list.appendChild(fragment);
  }

  /* ------------------------------------------------------------- Popup --- */
  /* Un solo <dialog> riempito al volo: apertura modale, chiusura con Esc,
     con il pulsante giallo o cliccando sul fondo sfocato. */
  var lastTrigger = null;

  var openDialog = function (dialog, trigger) {
    if (!dialog) return;
    lastTrigger = trigger || null;
    document.body.classList.add("has-modal");
    if (!dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }
    var close = dialog.querySelector(".modal__close");
    if (close) close.focus();
  };

  var closeDialog = function (dialog) {
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };

  Array.prototype.forEach.call(document.querySelectorAll(".modal"), function (dialog) {
    dialog.addEventListener("close", function () {
      document.body.classList.remove("has-modal");
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    });

    dialog.addEventListener("click", function (event) {
      if (event.target.closest(".modal__close")) {
        closeDialog(dialog);
        return;
      }
      /* click sul backdrop: il target è il <dialog> stesso, non il pannello */
      if (event.target === dialog) closeDialog(dialog);
    });
  });

  /* l'indirizzo segue il tema aperto, così il link della card si può copiare
     dalla barra degli indirizzi (su file:// replaceState non è permesso) */
  var setHash = function (hash) {
    if (location.hash === "#" + hash) return;
    try {
      history.replaceState(null, "", "#" + hash);
    } catch (error) {
      /* pagina aperta da disco: l'indirizzo resta com'è */
    }
  };

  var openTopic = function (card) {
    var topic = TOPICS[Number(card.getAttribute("data-topic"))];
    if (!topic || !modal) return;
    modalTitle.textContent = topic.title;
    modalBody.textContent = topic.text;
    openDialog(modal, card);
    setHash(card.id);
  };

  if (list && modal) {
    list.addEventListener("click", function (event) {
      var card = event.target.closest(".glossary__card");
      if (card) openTopic(card);
    });
  }

  /* chiudendo il popup l'indirizzo torna alla sezione */
  if (modal) {
    modal.addEventListener("close", function () {
      if (location.hash.indexOf("#" + TOPIC_PREFIX) === 0) setHash("il-glossario");
    });
  }

  /* apertura da link diretto, all'arrivo e a ogni cambio di indirizzo */
  var cardFromHash = function () {
    var id = location.hash.replace(/^#/, "");
    if (!id || id.indexOf(TOPIC_PREFIX) !== 0) return null;
    var card = document.getElementById(id);
    return card && card.getAttribute("data-topic") !== null ? card : null;
  };

  var openFromHash = function () {
    var card = cardFromHash();
    if (!card) return;
    /* la card resta dietro al popup, senza lo scorrimento morbido che dal
       fondo della pagina durerebbe secondi */
    var root = document.documentElement;
    var behavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    card.scrollIntoView({ block: "center" });
    root.style.scrollBehavior = behavior;
    openTopic(card);

    /* la navigazione al frammento sposta il focus dopo l'apertura: lo
       riportiamo sul pulsante di chiusura appena il browser ha finito */
    var close = modal && modal.querySelector(".modal__close");
    if (close && typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(function () {
        if (modal.open) close.focus();
      });
    }
  };

  openFromHash();
  window.addEventListener("hashchange", openFromHash);

  var fonti = document.getElementById("modal-fonti");
  Array.prototype.forEach.call(document.querySelectorAll("[data-open-fonti]"), function (button) {
    button.addEventListener("click", function () {
      openDialog(fonti, button);
    });
  });

  /* -------------------------------------------------------- Navbar fissa --- */
  /* La barra resta in alto: appena la pagina scorre si avvicina al bordo, così
     a riposo conserva la distanza del design. */
  var onScroll = function () {
    document.body.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* --------------------------------------------------------- Menu mobile --- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu-mobile");

  if (toggle && menu) {
    var setMenu = function (open) {
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
    };

    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      setMenu(menu.hidden);
    });

    /* chiusura selezionando una voce */
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    /* chiusura con click fuori dal menu */
    document.addEventListener("pointerdown", function (event) {
      if (menu.hidden) return;
      if (!menu.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
    });

    /* chiusura con Esc */
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) {
        setMenu(false);
        toggle.focus();
      }
    });

    /* tornando al layout desktop il pannello non deve restare aperto */
    var desktop = window.matchMedia("(min-width: 1024px)");
    var onBreakpoint = function (query) {
      if (query.matches) setMenu(false);
    };

    if (typeof desktop.addEventListener === "function") {
      desktop.addEventListener("change", onBreakpoint);
    } else if (typeof desktop.addListener === "function") {
      desktop.addListener(onBreakpoint);
    }
  }

  /* ------------------------------------------------------------ Galleria --- */
  /* Le slide nascono dall'elenco in assets/game-carousel/manifest.js, generato
     da tools/build-carousel-manifest.mjs leggendo la cartella: per cambiare le
     foto basta aggiungerle o toglierle lì e rigenerare il manifest, questo file
     non va toccato. Senza immagini resta il placeholder grigio del design. */
  var carousel = document.querySelector(".carousel");
  var track = document.getElementById("carousel-track");
  var controls = document.querySelectorAll("[data-carousel-dir]");
  var slides = Array.isArray(window.BLABBLE_CAROUSEL) ? window.BLABBLE_CAROUSEL : [];

  if (track && slides.length) {
    var shots = document.createDocumentFragment();

    slides.forEach(function (src, index) {
      var slide = document.createElement("div");
      slide.className = "carousel__slide";

      var image = document.createElement("img");
      image.className = "carousel__img";
      image.src = src;
      image.alt = "Blabble in gioco — immagine " + (index + 1) + " di " + slides.length;
      /* la prima slide è visibile subito, le altre solo scorrendo */
      image.loading = index === 0 ? "eager" : "lazy";
      image.decoding = "async";

      slide.appendChild(image);
      shots.appendChild(slide);
    });

    track.appendChild(shots);
  }

  /* con zero o una sola immagine le frecce non hanno dove scorrere */
  if (carousel && slides.length < 2) carousel.classList.add("carousel--single");

  if (track && controls.length && slides.length > 1) {
    Array.prototype.forEach.call(controls, function (button) {
      button.addEventListener("click", function () {
        var direction = Number(button.getAttribute("data-carousel-dir")) || 1;
        var step = track.clientWidth;
        var max = track.scrollWidth - step;
        /* le slide sono larghe come la cornice: si scorre di una per volta e si
           torna in testa (o in coda) arrivati agli estremi */
        var next = Math.round(track.scrollLeft / step) + direction;
        if (next < 0) next = slides.length - 1;
        if (next > slides.length - 1) next = 0;
        track.scrollTo({ left: Math.min(next * step, Math.max(max, 0)), behavior: "smooth" });
      });
    });
  }
})();
