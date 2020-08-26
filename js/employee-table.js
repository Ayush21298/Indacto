var employeeData = [
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
    {slno:1, name: "lorem ipsum", email: "lorem@impsum.com", phone: "999996133"},
];

var table = new Tabulator(".employee-table", {
    data: employeeData,
    layout:"fitColumns",
    layoutColumnsOnNewData:true,
	tooltips:true,            //show tool tips on cells
	addRowPos:"top",          //when adding a new row, add it to the top of the table
	history:true,             //allow undo and redo actions on the table
    columns: [
        {title: "Sl. No", field:"slno",hozAlign:"center", editor: "input"},
        {title: "Name", field:"name", hozAlign:"center", editor: "input"},
        {title: "Email", field: "email", hozAlign:"center", editor: "input"},
        {title: "Phone", field: "phone", hozAlign:"center", editor: "input"},
        {title: "Delete", formatter:"buttonCross", align:"center", title:"del", headerSort:false, cellClick:function(e, cell){
            if(confirm('Are you sure you want to delete this entry?'))
                cell.getRow().delete();
            }
        }
    ]
});

var newEmpBtn = document.querySelector('.add-employee-btn');
newEmpBtn.addEventListener("click", ()=> {
    console.log("HERE")
    table.addRow();
})