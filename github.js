class Githup {
  constructor() {
    this.client_id = "11f229f118d2f3e397b0";
    this.client_secret = "5786e9eeaca10b05a7a1283bc4f72d537d235c6c";
    this.repos_count = 10;
    this.repos_sort = "asc";
  }

  async getUser(user) {
    //gelen user la beraber istek atma
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`,
    );
    // kullanıcının repolarını çekme
    const reposReponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`,
    );
    //gelen user ı json a çevirme
    const profile = await profileResponse.json();
    const repos = await reposReponse.json();
    console.log(repos)
    //işlenmiş veriyi fonksiyonun çağırıldığı yere gönderme
    return {
      profile,
      repos,
    };
  }
}
export default Githup;

/* try {
    const profileResponse = await fetch(
        `https://api.github.com/users/${user}`,
    );
    //gelen user ı json a çevirme
    const profile = await profileResponse.json();
    return profile;
} 
catch (err) {
    console.log(err);
}

 */
