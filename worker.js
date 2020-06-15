onmessage = function(event) {
  // The object that the web page sent is stored in the event.data property.
  var nama_b = event.data.nama;
  var usia = event.data.usia;
  var uang_awal = event.data.uang_awal;
  var suku_bunga = event.data.suku_bunga;
  var lama_penyimpanan = event.data.lama_penyimpanan;

  // Using that number range, perform the prime number search.
 	var usia_b = usia + lama_penyimpanan;
	var uang_akhir = uang_awal;
	kalkulasi(uang_awal, suku_bunga, lama_penyimpanan);
	var bunga_total = uang_akhir - uang_awal;

  // Now the search is finished. Send back the results.
  postMessage({
  	nama: nama_b,
  	usia: usia_b,
  	uang: uang_akhir,
  	bunga: bunga_total,
  	simpan: lama_penyimpanan
  });
};
	
	

function kalkulasi(u, s, p){
	
	for (var i = 0; i > p; i++) {
		uang_akhir = uang_akhir + (u*s/100);
	}
	
}
