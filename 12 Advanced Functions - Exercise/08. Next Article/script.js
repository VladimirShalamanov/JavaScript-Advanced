function getArticleGenerator(articles) {
    let art = Array.from(articles);
    let output = document.getElementById('content');

    return () => {

        if (art.length === 0) {
            return;
        }

        let currArt = art.shift();
        output.innerHTML += `<article>${currArt}</article>`;
    }
}
