
angular.module('AngularAuthApp').controller(
    "homeController", ['$http', '$rootScope', '$scope', 'ngAuthSettings','$location' ,
        function ($http, $rootScope, $scope, ngAuthSettings, $location) {

            var serviceBase = ngAuthSettings.apiServiceBaseUri;

            if ($rootScope.info === undefined) $rootScope.getInfo();

            $scope.table = [];

            $scope.notify = function () {
                
                if (!("Notification" in window)) {
                    alert("Brouser nao suporta essa notificação");
                }
                
                else if (Notification.permission === "granted") {
                    $rootScope.createNotify("Texto");
                }
                else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                        if (permission === "granted") {
                            $rootScope.createNotify("Texto");
                        }
                    });
                }
            }

            $scope.mudarFoto = function () {

                var fileUpload = $("#fupload").get(0);
                var files = fileUpload.files;

                if (files.length > 0) {
                    var dataPost = new FormData();
                    for (var i = 0; i < files.length; i++) {
                        dataPost.append(files[i].name, files[i]);
                    }

                    //VARIAVEL QUE PASSAMOS LA
                    dataPost.append("UsuarioId", "01");

                    $.ajax({
                        url: serviceBase + 'api/usuario/mudarfoto',
                        type: "POST",
                        data: dataPost,
                        contentType: false,
                        processData: false,
                        success: function (result) {
                            alert('arquivo salvo com sucesso');
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    }); 
                }
                else {
                    alert('selecione um arquivo');
                }
            };

            $scope.import = function () {

                var fileUpload = $("#fupload").get(0);
                var files = fileUpload.files;

                var tmppath = URL.createObjectURL(files[0]);

                /* set up XMLHttpRequest */
                var url = tmppath;
                var oReq = new XMLHttpRequest();
                oReq.open("GET", url, true);
                oReq.responseType = "arraybuffer";

                oReq.onload = function (e) {
                    var arraybuffer = oReq.response;

                    /* convert data to binary string */
                    var data = new Uint8Array(arraybuffer);
                    var arr = new Array();
                    for (var i = 0; i !== data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                    var bstr = arr.join("");

                    /* Call XLSX */
                    var workbook = XLSX.read(bstr, { type: "binary" });

                    /* DO SOMETHING WITH workbook HERE */
                    var first_sheet_name = workbook.SheetNames[0];
                    /* Get worksheet */
                    var worksheet = workbook.Sheets[first_sheet_name];

                    var jsonExcel = XLSX.utils.sheet_to_json(worksheet, { raw: true });

                    $scope.table = jsonExcel;

                    if ($scope.table[0].nome === undefined) {
                        alert('planilha invalida');
                        $scope.table = [];
                    }

                    $scope.$apply();
                    $("#fupload").val("");
                };

                oReq.send();
            };

        }
    ]
);

