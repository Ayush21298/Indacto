var dashboardData = [
    {slno:1, userid:"1", phone:"98xxxxx",txnType:"Registration", paymentStatus:"N/A",paymentMethod:"N/A",status:"Yes",dateTrx:"5/12/2020",timeTrx:"14:00",referOf:"5",referCode:"123",walletAmt:500, custBonusRef: 0, custPriceTrx: 0, revenue: 0},
    {slno:2, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"No",paymentMethod:"-",status:"No",dateTrx:"5/13/2020",timeTrx:"15:00",referOf:"NA",referCode:"123",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 0},
    {slno:3, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"Yes",paymentMethod:"Credit Card",status:"No",dateTrx:"5/15/2020",timeTrx:"15:05",referOf:"NA",referCode:"NA",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 0},
    {slno:4, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"Yes",paymentMethod:"Wallet",status:"Yes",dateTrx:"5/16/2020",timeTrx:"15:15",referOf:"NA",referCode:"NA",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 459},    
    {slno:4, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"Yes",paymentMethod:"Wallet",status:"Yes",dateTrx:"5/16/2020",timeTrx:"15:15",referOf:"NA",referCode:"NA",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 459},    
    {slno:4, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"Yes",paymentMethod:"Wallet",status:"Yes",dateTrx:"5/16/2020",timeTrx:"15:15",referOf:"NA",referCode:"NA",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 459},    
    {slno:4, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"Yes",paymentMethod:"Wallet",status:"Yes",dateTrx:"5/16/2020",timeTrx:"15:15",referOf:"NA",referCode:"NA",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 459},    
    {slno:4, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"Yes",paymentMethod:"Wallet",status:"Yes",dateTrx:"5/16/2020",timeTrx:"15:15",referOf:"NA",referCode:"NA",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 459},    
    {slno:4, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"Yes",paymentMethod:"Wallet",status:"Yes",dateTrx:"5/16/2020",timeTrx:"15:15",referOf:"NA",referCode:"NA",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 459},    
    {slno:4, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"Yes",paymentMethod:"Wallet",status:"Yes",dateTrx:"5/16/2020",timeTrx:"15:15",referOf:"NA",referCode:"NA",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 459},    
    {slno:4, userid:"1", phone:"98xxxxx",txnType:"Data Migration", paymentStatus:"Yes",paymentMethod:"Wallet",status:"Yes",dateTrx:"5/16/2020",timeTrx:"15:15",referOf:"NA",referCode:"NA",walletAmt:"NA", custBonusRef: 0, custPriceTrx: 0, revenue: 459},    
];
var resetFlag = false;
rateFields = document.querySelectorAll('.dashboard-container > .header-row > .rates > .rate-values > .rate-value');
//TODO - Load initial prices from DB.
var currPrice = rateFields[0].innerText;
var currComm = rateFields[1].innerText;

var totalRevenueVal = document.querySelector('.total-revenue > .field-value');
var tableFooter = document.querySelector('.table-footer');
var revenueTable = getDashboardTable(isAdmin=true);
var currPage = document.querySelector('.table-footer > .pagination-block > .curr-page');
var prevPage = document.querySelector('.table-footer > .pagination-block > .prev');
var downloadData = document.querySelector('.table-footer > .download-xls');
downloadData.addEventListener('click', ()=> {
    revenueTable.download("xlsx", "data.xlsx", {sheetName:"Dashboard Data"});
})
prevPage.addEventListener('click',()=> {
    revenueTable.previousPage();
    currPage.innerHTML = "Page " + revenueTable.getPage();
})
var nextPage = document.querySelector('.table-footer > .pagination-block > .next');
nextPage.addEventListener('click',()=> {
    revenueTable.nextPage();
    currPage.innerHTML = "Page " + revenueTable.getPage();
})
function getDashboardTable(isAdmin) {
    if (isAdmin) {
        /*Make Price Chard Editable */
        rateFields = document.querySelectorAll('.dashboard-container > .header-row > .rates > .rate-values > .rate-value');
        rateFields[0].setAttribute("contenteditable", true);
        rateFields[1].setAttribute("contenteditable", true);
        /*Make Columns editable */
        return new Tabulator(".table-container", {
            data: dashboardData,
            layoutColumnsOnNewData:true,
            addRowPos:"top",          //when adding a new row, add it to the top of the table
            history:true,             //allow undo and redo actions on the table
            pagination:"local",       //paginate the data
            paginationSize:7,         //allow 7 rows per page of data
            footerElement: tableFooter, // add refund
            columns: [
                {title: "Sl. No", field:"slno", headerFilter:"input",headerFilterPlaceholder:"search..", frozen: true},
                {title:"UserId", field:"userid", headerFilter:"input",headerFilterPlaceholder:"search..", frozen: true},
                {title:"Phone Number", field:"phone", headerFilter:"input",headerFilterPlaceholder:"search..", frozen: true},
                {title:"Transaction Type", field:"txnType", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Payment Status", field:"paymentStatus", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Payment Method", field:"paymentMethod", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Status", field:"status", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Date of Transaction", field:"dateTrx", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Time of Transaction", field:"timeTrx", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Reference of", field:"referOf", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Reference Code", field:"referCode", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Wallet Amount", field:"walletAmt", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title: "Refund", field: "refund", headerFilter:"input",headerFilterPlaceholder:"search..", editor: "input"},
                {title:"Customised Bonus per reference", field:"custBonusRef", headerFilter:"input",headerFilterPlaceholder:"search..", editor: "input"},
                {title:"Customised Pricing Per transaction", field:"custPriceTrx", headerFilter:"input",headerFilterPlaceholder:"search..", editor: "input"},
                {title:"Revenue", field:"revenue", headerFilter:"input",headerFilterPlaceholder:"search.."}
            ],
            dataFiltered: (filters, rows) => {
                var sum = 0;
                for(var i=0;i<rows.length;i++) {
                    sum += rows[i]._row.data.revenue;
                }
                totalRevenueVal.innerHTML = sum;
            },
            cellEdited: (cell) => {
                if(resetFlag) {
                    resetFlag = false;
                    return;
                } else {
                    if(confirm('Are you sure you want to edit this cell?')) {
                        //TODO - Add code to persist changes in DB.
                    } else {
                        resetFlag = true;
                        cell.setValue(cell._cell.oldValue);
                    }
                }
            }
        });
    } else {
        /*Hide Change Password */
        document.querySelector('.password-change-container').style.display = "none";
        return new Tabulator(".table-container", {
            data: dashboardData,
            layoutColumnsOnNewData:true,
            tooltips:true,            //show tool tips on cells
            addRowPos:"top",          //when adding a new row, add it to the top of the table
            history:true,             //allow undo and redo actions on the table
            pagination:"local",       //paginate the data
            paginationSize:7,         //allow 7 rows per page of data
            footerElement: tableFooter,
            columns: [
                {title: "Sl. No", field:"slno", headerFilter:"input",headerFilterPlaceholder:"search..", frozen: true},
                {title:"UserId", field:"userid", headerFilter:"input",headerFilterPlaceholder:"search..", frozen: true},
                {title:"Phone Number", field:"phone", headerFilter:"input",headerFilterPlaceholder:"search..", frozen: true},
                {title:"Transaction Type", field:"txnType", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Payment Status", field:"paymentStatus", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Payment Method", field:"paymentMethod", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Status", field:"status", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Date of Transaction", field:"dateTrx", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Time of Transaction", field:"timeTrx", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Reference of", field:"referOf", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Reference Code", field:"referCode", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Wallet Amount", field:"walletAmt", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title: "Refund", field: "refund", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Customised Bonus per reference", field:"custBonusRef", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Customised Pricing Per transaction", field:"custPriceTrx", headerFilter:"input",headerFilterPlaceholder:"search.."},
                {title:"Revenue", field:"revenue", headerFilter:"input",headerFilterPlaceholder:"search.."}
            ],
            dataFiltered: (filters, rows) => {
                var sum = 0;
                for(var i=0;i<rows.length;i++) {
                    sum += rows[i]._row.data.revenue;
                }
                totalRevenueVal.innerHTML = sum;
            }
        });
    }
}
//Setting price
for (let index = 0; index < rateFields.length; index++) {
    const field = rateFields[index];
    field.addEventListener("blur", (e)=> {
        if(confirm("Do you want to save the change?")) {
            // TODO - Persist Change to DB
            e.target.innerText = e.target.innerText.trim();
            if(index == 0) currPrice = e.target.innerText;
            else currComm = e.target.innerText;
        } else {
            e.target.innerText = index == 0 ? currPrice : currComm;
        }       
    })
    field.addEventListener("keypress", (e)=> {
        if(e.keyCode === 13) {
            e.target.blur();
        }       
    })
}
//Button Events
const updatePasswordButton = document.querySelector('.update-btn');
updatePasswordButton.addEventListener("click", ()=> {
    var payload = {}
    payload["old-pass"] = document.querySelector('.old-password').value;
    payload["new-pass"] = document.querySelector('.new-password').value;
    payload["confirm-pass"] = document.querySelector(".confirm-password").value;
    console.log(payload);
})
const logoutButton = document.querySelector(".logout");
logoutButton.addEventListener("click", ()=> {
    console.log("Logging out");
    window.location.assign("index.html");
})