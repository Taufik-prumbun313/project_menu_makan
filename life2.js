var datapembeli=[];
	function munculpembeli() {
		var namapembeli = document.getElementById("alert");
		alert.innerHTML ="";

		for (var i=0; i<datapembeli.length;i++){
			var buttonubah = "<a href='#' onclick='ubahpembeli("+i+")'>ubah</a>";
			var buttonapus = "<a href='#' onclick='apuspembeli("+i+")'>apus</a>";

			namapembeli.innerHTML += "<li>" + datapembeli[i] + "["+buttonubah+"]</li>";
		}
	}
				function tambahpembeli(){
					var tambah = document.querySelector("input[name=pembeli]");
					datapembeli.push(tambah.value);
					munculpembeli();
				}
				function ubahpembeli(id){
					var ubah = prompt("Masukkan nama pembeli". datapembeli);
					datapembeli[id] = ubah;
					munculpembeli();
				}
				
				// function apuspembeli(){
				// 	datapembeli.splice(id, 1);
				// 	munculpembeli();
				// }