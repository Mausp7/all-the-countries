function hasBeaches(lockedOrNot) {
    if (lockedOrNot === false) {
        return "<h5>I have the best beaches.</h5>";
    } else {
        return "<h5>I have no beaches :(</h5>";
    };
};


async function loadEvent() {
    const rootElement = document.getElementById("root");

    const res = await fetch("https://restcountries.com/v3.1/name/peru");
    const peru = await res.json();

    console.log(peru);

    const peruO = peru[0];

    peruHTML =  `
        <section class="independent">
            <img src="${peruO.flags.png}" alt="flag">
            <h1>${peruO.name.official}</h1>
            <h2>${peruO.capital[0]}</h2>
    
            <ul>
                <li>${peruO.languages}</li>
            </ul>
            ${hasBeaches(peruO.landlocked)}
        </section>
    `;

    console.log(rootElement);
    rootElement.insertAdjacentHTML("beforeend", peruHTML);

};

window.addEventListener("load", loadEvent);