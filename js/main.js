var termModal;

setTimeout(() => {
    let priceBookLink = document.evaluate('/html/body/div[4]/div[1]/section/div[1]/div[2]/div[2]/div[1]/div/div/div/div/div/div[1]/div/div[2]/div/div[2]/div/div/div[1]/div/div/lst-list-view-manager-header/div/div[1]/div[3]/div/ul/li/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
    // Add custom stylesheet
    let css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('href', 'https://isabellagibson.github.io/BlueCloud/css/main.css');
    document.head.appendChild(css);
    // Basic structure
    termModal = document.createElement('div');
    termModal.id = 'termModal';
    // Modal content
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = 'Hello, world!';
    termModal.appendChild(modal);
    document.body.appendChild(termModal);
}, 5000);

document.addEventListener('keyup', (e) => {
    if (e.key === '`') {
        alert('Interrupting.');
    } else {
        console.log(e.key);
    }
});