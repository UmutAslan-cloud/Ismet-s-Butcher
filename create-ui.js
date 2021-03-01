//Bu fonksiyonumuz tablomuzun basligini olusturuyor
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
//Bu fonksiyonumuz musteri listemizi olusturuyor
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

//BU fonksiyonumuz musteri listemizi Ui a yaziyor
function printCustomerList(pmain) {
    pmain.innerHTML = customerListHeader();
    pmain.innerHTML += createCustomerList()

}
//Bu fonksiyonumuz butona tikladigimizda musteri listemize geri donuyor
function backtoList() {
    let backButton = document.getElementById("back-list")
    backButton.addEventListener("click", function () {
        window.history.go(0)
    })
}

//Bu fonksiyonmuz ise kurbaninin isi bitirilip bitirilmedigini kontrol edip ona gore ismini silik gosteren fonksiyonumuz
function checked(plist) {
    let checked = plist.map(function (plist, i) {
        document.getElementById(`checked-box${i}`).addEventListener("click", function (e) {
            document.getElementById(`victim-page${i}`).style.opacity = "0.5"
            e.target.style.visibility = "hidden"

        })
    })
}

//Bu fonksiyonumuz ilgili butona tikladigmizda musterimizin kurban listesini ui a yazdiriyor
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

//Bu fonksiyonumuz ise tablo basligimizi olusturuyor
function createVictimsHeader() {
    return ` <tr class="table  w-50 p-3 mx-auto">
    <th>Victim</th>
    <th>Adress</th>
    <th>Is He Died?</th>
</tr>`
}
//Bu fonksiyonmuz geri donus butonumuzu olusturuyor
function backHomeButton() {
    return `<button type="button" class="btn btn-outline-success" id="back-list">Back to Customer List</button>`
}


//Bu fonksiyonumuz ise kurban listemizi olusturan fonksiyonumuz
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
//Bu fonksiyonlarimiz ise localstorage fonksiyonlarimiz
function addLocal() {
    localStorage.setItem("person", JSON.stringify(customerList))
}

function setLocal() {
    customerList = JSON.parse(localStorage.getItem("person"))
}