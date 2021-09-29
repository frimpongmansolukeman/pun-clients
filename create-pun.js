window.onload = function () {
  createPunEvent();
};

function createPunEvent() {
  const form = document.getElementById('create-pun-form');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    console.log(e.target);
    let formData = new FormData(e.target);
    let formDataObj = {
      //content: document.getElementById('content-textarea').value
      title: formData.get('title'),
      content: formData.get('content'),
    };
    console.log(formDataObj);
    console.log(JSON.stringify(formDataObj));
    //Genetarting the JSON string from the form Value
    console.log(serializeFormToJSON(form));

    try{
        const response = await fetch('https://puns-app.herokuapp.com/puns', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
           
            body: serializeFormToJSON(e.target) // body data type must match "Content-Type" header
            
          });
          window.location.href = 'manage-puns.html'  
        
    }catch(e){
        console.log(e);
    }

  });
}

//third option in creating content with build in function
function serializeFormToJSON(form) {
  let obj = {};
  let formData = new FormData(form);
  console.log(formData.keys());

  for (let key of formData.keys()) {
    console.log(key);
    let inputData = formData.getAll(key);
    console.log(inputData);
    if (inputData.length > 1) {
      obj[key] = inputData;
    } else {
      obj[key] = inputData[0];
    }
  }
  console.log(obj);
  return JSON.stringify(obj);
}
