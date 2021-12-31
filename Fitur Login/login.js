function validasi(){
    var username = document.forms["login"]["Username"].value;
    var password = document.forms["login"]["Password"].value;

    if( username == "ahmad2017" && password == "integrity"){
        alert("Login Berhasil")
        return true;
    }
    else{
      alert("Login Gagal");
      return false;
    }
  }