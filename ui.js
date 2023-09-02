class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // profil arayüzünü ekrana basma
  showProfile(user) {
    const created_at = new Date(user.created_at).toLocaleDateString();
    this.profile.innerHTML = `
        <div class="container border my-4 p-4">
        <div class="row">
          <div class="col-md-3 ">
            <img class="img-fluid" src="${user.avatar_url}" />
            <a href="${user.html_url}" target="_blank" class="btn btn-primary my-4 w-100"
              >Profili Göster</a>
          </div>
          
          <div class="col-md-9 ">
            <span class="badge bg-primary fs-6 mt-1">Açık Repolar:${user.public_repos}</span>
            <span class="badge bg-secondary fs-6 mt-1">Açık Gistler: ${user.public_gists}</span>
            <span class="badge bg-success fs-6 mt-1">Takipçiler:${user.followers}</span>
            <span class="badge bg-info fs-6 mt-1">Takip Edilenler:${user.following}</span>

            <ul class="list-group my-5">
              <li class="list-group-item">Hakkında: ${user.bio}</li>
              <li class="list-group-item">Şirket:${user.company}</li>
              <li class="list-group-item">E-mail:${user.blog}</li>
              <li class="list-group-item">Konum:${user.location}</li>
              <li class="list-group-item">Hesap Oluşturulma Tarihi:${created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container p-3" id="repos">

      </div>
      `;
  }
  showrepos(repos) {
    let output = "<h3 class='fs-1 text-center '>En Son Repolar</h3>";
    repos.forEach((repo) => {
      console.log(repo);
      output += `
      <div class="border p-3 mb-4">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge bg-primary">Yıldız : ${repo.stargazers_count}</span>
            <span class="badge bg-secondary">İzleyenler :${repo.watchers_count}</span>
            <span class="badge bg-success">Forklar : ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `;
    });
    //html e gönderme
    document.getElementById("repos").innerHTML = output;
  }
  //uyarı mesajı oluşturma
  showAlert(message, classname) {
    const div = document.createElement("div");
    div.className = classname;
    //yazıyı ekleme
    div.innerText = message;
    //göndereceğimiz yerin elemanını alma
    const outlet = document.getElementById("alert");
    //html e gönderme
    outlet.appendChild(div);
    // alerti 4 saniye sonra kaldır

    setTimeout(() => {
      this.clearAlert();
    }, 4000);
  }
  //uyarıyı ekrandan silme
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    // alert varsa onu kaldır
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // arayüzü temizleme
  clearProfile() {
    this.profile.innerHTML = "";
  }
}

export default UI;
