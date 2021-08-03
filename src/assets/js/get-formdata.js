document.addEventListener("DOMContentLoaded", function () {
  console.log("Pulling Data");

  $.ajax({
    type: "POST",
    // CORS Disabled by  default
    url: "http://localhost/asadu-client-PHP/src/libs/get_formdata.php",
    cache: false,
    success: function (msg) {
      const data = JSON.parse(msg);

      // Add kelas data to form
      for (let current = 0; current < data[0].length; current++) {
        $("#kelas").append(
          '<option value="' +
            data[0][current].id_kelas +
            '">' +
            data[0][current].nama_kelas +
            "</option>"
        );
      }

      // Add matpel data to form
      for (let current = 0; current < data[1].length; current++) {
        $("#matpel").append(
          '<option value="' +
            data[1][current].id_matpel +
            '">' +
            data[1][current].nama_matpel +
            "</option>"
        );
      }
    },
  });
});
