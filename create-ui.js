function customerListHeader() {
    return `
    <table class="table w-50 p-3 mx-auto">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Customer</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
      </tr>
    </thead>`
}

function createCustomerList() {
    let fullList = customerList.map(function (plist, pindex) {
        return `<div class="w-50 p-3 mx-auto" " id="customer-list">
        <table class="table">
        <tr>
        <th scope="row">${pindex}</th>
        <td id="${plist.list}">${plist.name}</td>
        <td>${plist.number}</td>
        <td><button type="button" class="btn btn-outline-success" id="show-list${pindex}">Show List</button></td>
      </tr>
      </table>
            </div>`
    }).join("")
    return fullList
}


function printCustomerList(pmain) {
    pmain.innerHTML = customerListHeader();
    pmain.innerHTML += createCustomerList()

}

function backtoList() {
    let backButton = document.getElementById("back-list")
    backButton.addEventListener("click", function () {
        window.history.go(0)
    })
}
function checked(plist) {
    let checked = plist.map(function (plist, i) {
        document.getElementById(`checked-box${i}`).addEventListener("click", function (e) {
            document.getElementById(`victim-page${i}`).style.opacity = "0.5"
            e.target.style.visibility = "hidden"

        })
    })
}
function addEvent() {
    let eventList = customerList.map(function (plist, pindex) {
        let clickedName = document.querySelector(`#show-list${pindex}`)
        clickedName.addEventListener("click", function (e) {
            mainContent.innerHTML = createVictimsPage(plist.list)
            mainContent.innerHTML += backHomeButton()
            checked(plist.list)
            backtoList()
        })
    })
}

function createVictimsHeader() {
    return ` <tr class="table  w-50 p-3 mx-auto">
    <th>Victim</th>
    <th>Adress</th>
    <th>Is He Died?</th>
</tr>`
}

function backHomeButton() {
    return `<button type="button" class="btn btn-outline-success" id="back-list">Back to Customer List</button>`
}

function createVictimsPage(plist) {

    let victimlist = plist.map(function (plist, i) {
        return `<div id="victim-page${i}">
    <table class="table  w-50 p-3 mx-auto">
       ${createVictimsHeader()}
        <tr>
            <td><span>${plist.name}</span></td>
       <td><span>${plist.addressone}</span>
          <br> <span>
          ${plist.addresstwo}
           </span>
           </td>
           <td><button type="button" class="btn btn-outline-success" id="checked-box${i}">Game Over</button></td>
        </tr>
    </table>
</div>
`
    })

    return victimlist
}

function addLocal() {
    localStorage.setItem("person", JSON.stringify(customerList))
}

function setLocal() {
    customerList = JSON.parse(localStorage.getItem("person"))
}