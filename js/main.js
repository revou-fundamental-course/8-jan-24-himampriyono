function validasiAngka() {
  var inputSisi = document.getElementById('input_sisi').value;
  var luas_persegi = document.getElementById('luas_persegi');
  var hasil_luas_persegi = document.getElementById('hasil_luas_persegi');
  var keliling_persegi = document.getElementById('keliling_persegi');
  var hasil_keliling_persegi = document.getElementById('hasil_keliling_persegi');
  var sisi_gmb_1 = document.getElementById('sisi_persegi_1');
  var sisi_gmb_2 = document.getElementById('sisi_persegi_2');
  var sisi_gmb_3 = document.getElementById('sisi_persegi_3');
  var sisi_gmb_4 = document.getElementById('sisi_persegi_4');
  var penyelesaian = document.getElementById('penyelesaian_persegi');

  var regex = /^[0-9]+$/;

  if (regex.test(inputSisi)) {
    let sisi = parseInt(inputSisi);
    let luas_p = parseInt(inputSisi) * parseInt(inputSisi);
    let keliling_p = 4 * parseInt(inputSisi);

    sisi_gmb_1.innerHTML = sisi;
    sisi_gmb_2.innerHTML = sisi;
    sisi_gmb_3.innerHTML = sisi;
    sisi_gmb_4.innerHTML = sisi;

    luas_persegi.innerHTML = 'L = '+sisi+' x '+sisi;
    hasil_luas_persegi.innerHTML = 'L = '+luas_p;
    keliling_persegi.innerHTML = 'K = '+'4 x '+sisi;
    hasil_keliling_persegi.innerHTML = 'K = '+keliling_p;
    penyelesaian.style.display = 'flex';
  } else {
    alert('Input tidak valid! \nSilahkan masukan angka yang valid!');
  }
}

function reset_persegi(){
  var inputSisi = document.getElementById('input_sisi');
  var penyelesaian = document.getElementById('penyelesaian_persegi');

  inputSisi.value = "";
  penyelesaian.style.display = 'none';
}