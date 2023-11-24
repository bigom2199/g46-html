const data = [
    {firstname: `John`,lastname: `Doe`,email:`john@example.com`},
    {firstname: `Mary`,lastname: `Moe`, email: `mary@example.com`},
]

  // Function to creatae and show the table

function showTable(){
    if(!document.getElementById('dynamicTable')){

    }


    // create table element
    const table = document.createElement(`table`);
    table.id = `dynamicTable`;
    table.classList.add('table','table-striped');

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
     ["FirstName","LastName",Email] .forEach((headerTest));

    headerTexts.forEach((headerTest) => {
        const th = document.createElement('th');
        th.textContent = headerTest;
        headerRow.appendChild(th);
    
    });
    thead.appendChild(headerRow);

    // append thead to the table
    table.appendChild(thead);
    // create table body
    data.forEach(person=> {
        const row = document.createElement(`tr`);
        const columns = [`firstname`,`lastname`,`email`];
        columns.forEach(value => {
            const td = document.createElement(`td`);
            td.textContent =person[value];
            row.appendChild(td);
        });
        tbody.appendChild(row);

    });
    // append thead to the table
    table.appendChild(tbody);
    
  // append the table to the data- table element
    const datatTable =document.getElementById('data-table');
    datatTable.appendChild(table);
    
}
  function hideTable(){
    console.log("hideTable()has been executed!")
    const table = document.getElementById('dynamicTable');
    if(table){
        table.remove();
        hideMessage();

    }

  }
    function displayMessage(){
        /*
        <div class="alert alert-success">
            Operation is done!
        </div>
        */
       const messageElement = document.getElementById('message');
       messageElement.innerHTML ="<strong>Success!</strong>this alert box "
       messageElement.classList.add('aler',alert-success)
    }


function hideMessage(){
    const messageElement = document.getElementById(`message`);
    messageElement.innerHTML = "" ;
    messageElement.hidden = true;
}
















