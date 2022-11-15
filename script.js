var nama_barang = [
  "avanza"
];

var harga_satuan = [
  "200000000"
];

var jumlah = [
  "2"
];

var total = [
  '400000000'
];

function tampil() {
  var tabel = document.getElementById("tabel");
  tabel.innerHTML =
    "<tr><th>No</th><th>Nama</th><th>Harga Satuan</th><th>Jumlah</th><th>Total</th><th id='head'>Action</th></tr>";
  for (let i = 0; i < nama_barang.length; i++) {
    var harga_satuan_reverse = harga_satuan[i].toString().split('').reverse().join(''),
      harga_satuan_ribuan = harga_satuan_reverse.match(/\d{1,3}/g);
      harga_satuan_ribuan = harga_satuan_ribuan.join('.').split('').reverse().join('');

    var total_reverse = total[i].toString().split('').reverse().join(''),
      total_ribuan = total_reverse.match(/\d{1,3}/g);
      total_ribuan = total_ribuan.join('.').split('').reverse().join('');

    var btnEdit =
      "<button class='btn btn-sm light btn-warning' data-toggle='modal' data-target='#editBarangModal'  href='#' onclick='edit(" +
      i + ")'>Edit</button>";
    var btnHapus = "<button class='btn btn-sm light btn-danger' href='#' onclick='deleteAlert(" + i +
      ")'>Hapus</button>";
    j = i + 1;
    tabel.innerHTML += "<tr><td>" + j + "</td><td>" + nama_barang[i] + "</td><td>Rp. " + harga_satuan_ribuan + "</td><td>" + jumlah[i] + "</td><td>Rp. " + total_ribuan + "</td><td id='bodyAction'>" + btnEdit + " " + btnHapus + "</tr>";
  }
}

function tambah() {
  $("#namaBarang").val('');
  $("#hargaBarang").val('');
  $("#jumlahBarang").val('');
}

function simpan_tambah() {
  var nama = $("#namaBarang").val();
  var harga_barang = $("#hargaBarang").val();
  var jumlah_barang = $("#jumlahBarang").val();
  if (nama != "" && harga_barang != "" && jumlah_barang != "") {
    $("#addBarangModal .close").click()
    var total_harga = harga_barang * jumlah_barang;
    var total_harga_reverse = total_harga.toString().split('').reverse().join(''),
      total_harga_ribuan = total_harga_reverse.match(/\d{1,3}/g);
      total_harga_ribuan = total_harga_ribuan.join('.').split('').reverse().join('');

    nama_barang.push(nama);
    harga_satuan.push(harga_barang);
    jumlah.push(jumlah_barang);
    total.push(total_harga_ribuan);

    Swal.fire({
        icon: 'success',
        title: 'Data Sewa Mobil telah berhasil ditambahkan.',
    });

    tampil();
  }
}

function edit(id) {
  $("#rental_id").val(id);
  $("#editnamaBarang").val(nama_barang[id]);
  $("#editHargaBarang").val(harga_satuan[id]);
  $("#editJumlahBarang").val(jumlah[id]);
}

function simpan_edit() {
  var nama = $("#editnamaBarang").val();
  var harga_barang = $("#editHargaBarang").val();
  var jumlah_barang = $("#editJumlahBarang").val();
  if (nama != "" && harga_barang != "" && jumlah_barang != "") {
    $("#editBarangModal .close").click()
    var total_harga = harga_barang * jumlah_barang;
    var total_harga_reverse = total_harga.toString().split('').reverse().join(''),
      total_harga_ribuan = total_harga_reverse.match(/\d{1,3}/g);
      total_harga_ribuan = total_harga_ribuan.join('.').split('').reverse().join('');

    // var harga_barang_reverse = harga_barang.toString().split('').reverse().join(''),
    //   harga_barang_ribuan = harga_barang_reverse.match(/\d{1,3}/g);
    //   harga_barang_ribuan = harga_barang_ribuan.join('.').split('').reverse().join('');

    nama_barang[$("#rental_id").val()] = nama;
    harga_satuan[$("#rental_id").val()] = harga_barang;
    jumlah[$("#rental_id").val()] = jumlah_barang;
    total[$("#rental_id").val()] = total_harga_ribuan;

    Swal.fire({
        icon: 'success',
        title: 'Data Sewa Mobil telah berhasil diubah.',
    });

    tampil();
  }
}

function hapus(id) {
  nama_barang.splice(id, 1);
  harga_satuan.splice(id, 1);
  jumlah.splice(id, 1);
  total.splice(id, 1);
  tampil();
}

tampil();