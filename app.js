/**
 * Ismet Bey bizden musterilerinin adreslerinin bulundugu ve bunlara kolaylikla erisim saglayabilecegi bir program yazmamizi istemektedir
 * Bu programda ilk sayfada musterilerinin listesini gorecektir
 * Herhangi bir musteriye tikladiginda ise o musterinin kurbanlarinin isim listesi karsisina cikacaktir
 * bu isim listelerinin herhangi birini tiklayinca kurbanin olabilecegi adresler bulunacaktir
 * ve eger kurbanin isini bitirdiyse o kisiyi secip eleyebilecektir
 * 
 * Technical details
 * Ilk olarak ismet beyin musterilerinin oldugu bir liste olusturulup ekrana yansitilacak 
 * Ve her birini atayacagimiz eventler ile tikladigimiz zaman o musterinin kurbanlarinin oldugu sayfamiza gidecegiz
 * Bu kurbanlari da bir array de tutulabilir
 * Bu kurbanlarin sayfasi acildiginda ise bu kurbanlarin adresleri ve yanlarinda secebilmemiz icin bir kutucuk bulunmali
 * kurbani sectigimizde kurbanin ismi ve adresi silik gozukmeli.
 */


let mainContent = document.querySelector("#main-content")
let showVictimListButton = document.querySelector("#show-list")

printCustomerList(mainContent)
addLocal()
setLocal()
addEvent()







