/* eslint-disable require-jsdoc */

const pilihKelasMatpel = document.querySelectorAll("#kelas, #matpel");
pilihKelasMatpel.forEach((element) =>
  element.addEventListener("change", function () {
    getMateri();
    console.log("DATA MIGHT BE PULLED");
  })
);

function getMateri() {
  const matpel = $("#matpel").val();
  const kelas = $("#kelas").val();
  $.ajax({
    type: "POST",
    // CORS Should be created before
    url: "http://localhost/asadu-client-PHP/src/libs/get_materi.phplibs/get_materi.php",
    data: {
      matpel: matpel,
      kelas: kelas,
    },
    cache: false,
    success: function (msg) {
      $("#materi").html(msg);
    },
  });
}
