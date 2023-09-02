import Github from "/github.js";
import UI from "/ui.js";
const github = new Github();
// github ve ui sınıflarının bir örneğini oluşturma
const ui = new UI();

// HTML'den alınanlar
const searchUser = document.getElementById("search-user");
const searchButton = document.getElementById("search-button");
// eğer ara butonuna tıklanırsa
searchButton.addEventListener("click", getInput);
// eğer enter tuşuna basılırsa
searchUser.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // "Enter" tuşunu kontrol et
    getInput();
  }
});

function getInput() {
  // eğer input'un içi doluysa API isteği at
  if (searchUser.value.trim() !== "") {
    // trim() ile boşlukları kaldır
    github.getUser(searchUser.value).then((data) => {
      // eğer gelen verideki mesaj "Not Found" ise
      if (data.profile.message === "Not Found") {
        // hata mesajı göster
        ui.showAlert("Aradığınız Kullanıcı Bulunamadı", "alert alert-danger");
      } else {
        // kullanıcıyı göster
        ui.showProfile(data.profile);
        // başarılı mesajı gönder
        ui.showAlert(
          "Aradığınız Kullanıcı Başarıyla Bulundu",
          "alert alert-success",
        );
        // projelerini göster
        ui.showrepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
    // eğer input boş ise uyarı ver
    ui.showAlert("Form alanı boş olamaz", "alert alert-info");
  }
  searchUser.value = "";
}

//tema
const themeBtn = document.getElementById("theme");
themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
  const body = document.querySelector("body");
  body.classList.toggle("text-bg-dark");
  body.classList.toggle("bg-dark");
if(body.classList.contains('bg-dark')){
    themeBtn.innerText ='Açık Mod';
}else{
    themeBtn.innerText = 'Koyu Mod';
}

}
