// let d = new Date();
// document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

// DOM elements
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//Search the states.json and filter it
const searchStates = async searchText => {
    const res = await fetch('../static/data/states.json');

    // with FETCH API dont' get data right away, need to tell API want json
    const states = await res.json();

//Get matches to current text input (will change anytime type something
//Using filter() as high order array method similar to map() and find() work. loops thru, returns array based on condition(s)
    let matches = states.filter(state => {
        //param1: RegEx translation: ^ (has to start with.. else will match any value no matter position in text) $(search text)
        //param2: 'gi' global and case insensitive flags
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });
    //clear array if text box is empty so doesn't return everything
    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }
    // console.log(matches);  DEBUGGING

    outputHtml(matches);
};


//Show results in HTML
const outputHtml = matches => {
    //map of matches
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class= "card card-body mb-1">
        <h4>${match.name} (${match.abbr}) <span class = "text-primary">
        ${match.capital}</span></h4>
        <small>Lat: ${match.lat} / Long: ${match.long}</small>
        </div>
        `
        ).join('');
        matchList.innerHTML = html;
    }
}

//passing value
search.addEventListener('input', () => searchStates(search.value));

