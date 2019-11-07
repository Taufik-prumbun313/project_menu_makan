var dataMakanan =[""];

function tampilMakanan(){
  var dataMakanan = document.getElementById("datamakanan");
  dataMakanan.innerHTML = "";

for(var i = 0; i < dataMakanan.length; i++){
  var buttonUbah = "<a href='#' onclick='ubahMakanan("+i+")'>Ubah</a>";
  var buttonHapus = "<a href='#' onclick='hapusmakanan()'>Hapus</a>";


  dataMakanan.innerHTML += "<ul>" + dataMakanan[i];
  }
}

  function tambahMakanan(){
    var tambah = document.querySelector("input[name=Makanan]");
    dataMakanan.push(tambah.value);
    dataMakanan();
  }

    function ubahMakanan(id){
      var ubahMakanan = prompt("Masukan dataMakanan", dataMakanan);
      dataMakanan[id] = dataMakanan;
      tampilDataMakanan();
    }

    function hapusDataMakanan(id){
      dataMakanan.splice(id, true);
      tampilDataMakanan();
    }
