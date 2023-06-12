fetch('/trilhas')
    .then(res => res.json())
    .then(trilhas => {
        const trilhasContainer = document.querySelector('.container-trilhas');

        const trilhasHtml = trilhas.map(trilha => 
        `<section class="trilha">
            <h2 class="titulo-trilha">${trilha.titulo}</h2>
            ${ trilha.paragrafos.map(paragrafo => `<p class="paragrafo-trilha">${paragrafo}</p>`).join('') }
            <a href="${trilha.linkEmenta}" class="link-ementa" target="_blank">Conferir ementa</a>
        </section>`);

        trilhasContainer.innerHTML = trilhasHtml.join('');
    });

