function init() {
    $("#menu").hide();
    $("#res").val(0);
}

$(document).ready(function () {
    console.log("OK Página");
    init();

    $("#rut").focus();
    $("#rut").keyup(function (evt) {
        if (evt.which === 13) {
            $("#pass").focus();
        }
    });

    $("#pass").keyup(function (evt) {
        if (evt.which === 13) {
            console.log("Debo iniciar sesión");

            var rut = $("#rut").val();
            var pass = $("#pass").val();

            if (rut === "11-1" && pass === "111") {
                $("#menu").show();
                $("#n1").focus();
                $("#formInicio").hide();
                $("#mensaje").html("");

                $("#rut").val("");
                $("#pass").val("");
            } else {
                $("#mensaje").html("No se reconoce la cuenta");
                $("#rut").focus().select();
            }

            console.log("RUT: " + rut);
            console.log("PASS: " + pass);
        }
    });

    $("#btnSalir").click(function () {
        $("#menu").hide();
        $("#formInicio").show();
        $("#rut").focus();
    });

    function sumar() {
        var n1 = parseInt($("#n1").val());
        var n2 = parseInt($("#n2").val());

        if (isNaN(n1) && isNaN(n2)) {
            res = 0;
        } else if (isNaN(n1)) {
            res = n2;
        } else if (isNaN(n2)) {
            res = n1;
        } else {
            res = n1 + n2;
        }

        $("#res").val(res);
    }

    $("#n1").keyup(sumar);
    $("#n2").keyup(sumar);
});