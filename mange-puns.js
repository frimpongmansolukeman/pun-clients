window.onload = function () {
  fecthAllPuns();
};

async function fecthAllPuns() {
  try {
    const response = await fetch('http://localhost:5000/posts');
    const puns = await response.json();
    console.log(puns);
    let punsHtml = '';
    for (let pun of puns) {
        let punDate = new Date(pun.date)
      punsHtml += `
        <li class="list-group-item">  
            <p>${pun.title}<br>${pun.content}<br> <span class="date"> ${punDate.getFullYear()}-${punDate.getMonth()}-${punDate.getDate()}</span> </span>  </p>

            <div> 
                <a href="#">Update </a>
                <a href="#">Delete </a>
            </div>
        
        </li>
      
      `;
    }
    document.getElementById('pun-list').innerHTML = punsHtml;
  } catch (error) {
    console.log(error);
  }
}
