// let d = new Date();
// document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

// DOM elements
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//Search the states.json and filter it
const searchStates = async searchText => {
    const res = await fetch('../static/data/statesNew.json');

    // with FETCH API dont' get data right away, need to tell API want json
    const states = await res.json();

//Get matches to current text input (will change anytime type something
//Using filter() as high order array method similar to map() and find() work. loops thru, returns array based on condition(s)
    let matches = states.filter(state => {
        //param1: RegEx translation: ^ (has to start with.. else will match any value no matter position in text) $(search text)
        //param2: 'gi' global and case insensitive flags
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.category.match(regex);
    });
    //clear array if text box is empty so doesn't return everything
    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }
    // console.log(matches);  DEBUGGING

    outputHtml(matches);
};

//location.href = Flask.url_for(${match.long})

//Show results in HTML
const outputHtml = matches => {
    //map of matches
    if (matches.length > 0) {
        const html = matches.map(match => `    
    
        <div><a href="${match.url_for}"</a>
        <table class="table table-hover">
<tbody> 
    <tr class="table-active"><a href="${match.url_for}"</a>
      <th scope="row"><img src="${match.thumbnail}" height="50" width="50" class="img-thumbnail" /></th>
      <td><h4>${match.name} | ${match.category} <span class = "text-white"></span></h4> <blockquote class="blockquote"><p class="mb-0">Description: ${match.description}</p>
  <footer class="blockquote-footer">tags: ${match.tags}</footer></blockquote></td>
    </tr>
    </tbody>
    </table>
        </div>
        `
        ).join('');
        matchList.innerHTML = html;
    }
}

//passing value
search.addEventListener('input', () => searchStates(search.value));

