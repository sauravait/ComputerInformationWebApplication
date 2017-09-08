$(document).ready(function () {
    $('input').ftext();
});

var currentDept = "none";
$(function () {
    var operation = "A"; //"A"=Adding; "E"=Editing
    var selected_index = -1; //Index of the selected list item
    var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data
    tbClients = JSON.parse(tbClients); //Converts string to object
    if (tbClients == null) { tbClients = []; }//If there is no data, initialize an empty array

    function Add() {
        var client = JSON.stringify({

            ComputerName: $("#txtComputerName").val(),
            UserName: $("#txtUserName").val(),
            UserPassword: $("#txtPassword").val(),
            IpAddress: $("#txtIpAddress").val(),
            MachineType: $("#txtMachineType").val(),
            Department: $("#txtDepartment").val(),
            GateWay: $("#txtGateway").val(),
            SubDepartment: $("#txtSubDepartment").val(),
            MacAddress: $("#txtMacAddress").val()

        });
        tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        //alert("The data was saved.");
        return true;
    }
    function Edit() {
        tbClients[selected_index] = JSON.stringify({

            ComputerName: $("#txtComputerName").val(),
            UserName: $("#txtUserName").val(),
            UserPassword: $("#txtPassword").val(),
            IpAddress: $("#txtIpAddress").val(),
            MachineType: $("#txtMachineType").val(),
            Department: $("#txtDepartment").val(),
            GateWay: $("#txtGateway").val(),
            SubDepartment: $("#txtSubDepartment").val(),
            MacAddress: $("#txtMacAddress").val()
        });
        //Alter the selected item on the table
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        //alert("The data was edited.");
        operation = "A";
        //Return to default value
        return true;
    }

    function Delete() {
        tbClients.splice(selected_index, 1);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        //alert("Client deleted.");
    }


    $(document).on("submit", "#frmItem", function () {
        if (operation == "A")
            return Add();
        else
            return Edit();
    });
    $(document).on("click", "#btnEdit", function () {
        operation = "E";
        selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
        var cli = JSON.parse(tbClients[selected_index]);

        $("#txtComputerName").val(cli.ComputerName);
        $("#txtUserName").val(cli.UserName);
        $("#txtPassword").val(cli.UserPassword);
        $("#txtIpAddress").val(cli.IpAddress);
        $("#txtMachineType").val(cli.MachineType);
        $("#txtDepartment").val(cli.Department);
        $("#txtGateway").val(cli.GateWay);
        $("#txtSubDepartment").val(cli.SubDepartment);
        $("#txtMacAddress").val(cli.MacAddress);

        $("#txtComputerName").focus();
    });
    $(document).on("click", "#btnDelete", function (e) {
        selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
        Delete();
        gridLoad(currentDept);
    });
    //$(document).bind("onload", List());
    //$(document).bind("onload", DepartmentComputerList());

    //function List()
    //{

    //    alert("List load on document load ");
    //    if(tbClients.length > 0)
    //    {
    //        alert("List load on document load ");
    //        $("#tblList").html("");
    //        for(var i in tbClients)
    //        {
    //            var cli = JSON.parse(tbClients[i]);

    //            if (cli.Department == "Valuation")
    //            {
    //                if (cli.MachineType == "Desktop")
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //                else
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //            } // valuation
    //            if (cli.Department == "BackUp")
    //            {
    //                if (cli.MachineType == "Desktop")
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //                else
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //            } // backup
    //            if (cli.Department == "CallCenter")
    //            {
    //                if (cli.MachineType == "Desktop")
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //                else
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //            } // CallCenter
    //            if (cli.Department == "Shadow")
    //            {
    //                if (cli.MachineType == "Desktop")
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //                else
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //            } // shadow
    //            if (cli.Department == "609")
    //            {
    //                if (cli.MachineType == "Desktop")
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //                else
    //                {
    //                    $("#tblList").append("<div class='flip3D'>" +
    //                            "<div class='back'>" +
    //                            "<ul>" +
    //                            "<li>" + cli.ComputerName + "</li>" +
    //                            "<li>" + cli.UserName + "</li>" +
    //                            "<li>" + cli.UserPassword + "</li>" +
    //                            "<li>" + cli.IpAddress + "</li>" +
    //                            "<li>" + cli.MacAddress + "</li>" +
    //                            "<li>" + cli.GateWay + "</li>" +
    //                             "<li>" + cli.Department + "</li>" +
    //                             "<li>" + cli.SubDepartment + "</li>" +
    //                             "<li>" + cli.MachineType + "</li>" +
    //                             "</ul>" +
    //                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
    //                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
    //                                "</div>" +
    //                "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
    //                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
    //                "</div></div>"
    //                    );
    //                }
    //            } // 609

    //        }
    //    }
    //}

});

function move()
{
    //document.getElementById("dd1").style.transform = "translate(-560px, -190px)";
    //document.getElementById("dd2").style.transform = "translate(-160px, -190px)";
    //document.getElementById("dd3").style.transform = "translate(240px,-190px)";
    //document.getElementById("dd4").style.transform = "translate(-350px, 0px)";
    //document.getElementById("dd5").style.transform = "translate(30px,0px)";
    //for (var i = 1; i <=5; i++) {
      
    //  document.getElementById("dd"+i).style.opacity = "1";
    //};
    for (var i = 1; i <=5; i++) {
        document.getElementById("dd"+i).style.opacity = "0";
        document.getElementById("dd" + i).style.transform = "translate(0px, 0px)";
    };

    document.getElementById("editAndView").style.opacity = "0";
    document.getElementById("editAndView").style.transform = "scale(0)";
    document.getElementById("addAndView").style.opacity = "1";
    document.getElementById("addAndView").style.transform = "scale(1)";
    

    gridLoad("none");
    currentDept = "none";
    
}

function departments()
{
    //document.getElementById("dd1").style.transform = "translate(0px,0px)";
    //document.getElementById("dd2").style.transform = "translate(0px,0px)";
    //document.getElementById("dd3").style.transform = "translate(0px,0px)";
    //document.getElementById("dd4").style.transform = "translate(0px,0px)";
    //document.getElementById("dd5").style.transform = "translate(0px,0px)";
    
    document.getElementById("addAndView").style.opacity = "0";
    document.getElementById("addAndView").style.transform = "scale(0)";

    document.getElementById("editAndView").style.opacity = "0";
    document.getElementById("editAndView").style.transform = "scale(0)";
    //for (var i = 1; i <=5; i++) {
    //  document.getElementById("dd"+i).style.transform = "translate(0px,0px)";
    //  document.getElementById("dd"+i).style.opacity = "0";
    //};
    
    setTimeout(
      function () 
      {
          document.getElementById("dd1").style.transform = "translate(-560px, -190px)";
          document.getElementById("dd2").style.transform = "translate(-160px, -190px)";
          document.getElementById("dd3").style.transform = "translate(240px,-190px)";
          document.getElementById("dd4").style.transform = "translate(-350px, 0px)";
          document.getElementById("dd5").style.transform = "translate(30px,0px)";
          for (var i = 1; i <= 5; i++) {

              document.getElementById("dd" + i).style.opacity = "1";
          };
          document.getElementById("delay_demo").style.opacity = "1";
          document.getElementById("delay_demo").style.transform = "scale(1)";

      },100);

    //document.getElementById("addAndView").style.opacity = "0";
    //document.getElementById("addAndView").style.transform = "scale(0)";
    
 
}

function exportData() {
    // var ary = localStorage.getItem( "tbClients" ); //csv as a string
    var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data
    var wtbClients = JSON.parse(tbClients); //Converts string to object
    var blob = new Blob([tbClients], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.querySelector("#results"); // id of the <a> element to render the download link
    a.href = url;
    a.download = "file.json";

}

function slide(department)
{
        
        for (var i = 1; i <= 5; i++) {
            document.getElementById("dd" + i).style.opacity = "0";
            document.getElementById("dd" + i).style.transform = "translate(0px, 0px)";
        };
        document.getElementById("editAndView").style.opacity = "1";
        document.getElementById("editAndView").style.transform = "scale(1)";
        gridLoad(department);
        currentDept = department;
}

function gridLoad(department)
{
    var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data
    tbClients = JSON.parse(tbClients); //Converts string to object
    if (tbClients == null)
    {
        tbClients = [];
    }
    //alert("grid load");
    List(tbClients, department);
    
}

function List(tbClients, department) {
    //alert("List load on click ");
    if (tbClients.length > 0) {
        if (department == "none") {
            $("#tblList").html("");
            for (var i in tbClients) {
                var cli = JSON.parse(tbClients[i]);
                if (cli.MachineType == "Desktop") {
                    $("#tblList").append("<div class='flip3D'>" +
                            "<div class='back'>" +
                            "<ul>" +
                            "<li>" + cli.ComputerName + "</li>" +
                            "<li>" + cli.UserName + "</li>" +
                            "<li>" + cli.UserPassword + "</li>" +
                            "<li>" + cli.IpAddress + "</li>" +
                            "<li>" + cli.MacAddress + "</li>" +
                            "<li>" + cli.GateWay + "</li>" +
                             "<li>" + cli.Department + "</li>" +
                             "<li>" + cli.SubDepartment + "</li>" +
                             "<li>" + cli.MachineType + "</li>" +
                             "</ul>" +
                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                "</div>" +
                "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
                   "<h3 style='text-align:center;'>" + cli.Department + "</h3>" +
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
                else {
                    $("#tblList").append("<div class='flip3D'>" +
                            "<div class='back'>" +
                            "<ul>" +
                            "<li>" + cli.ComputerName + "</li>" +
                            "<li>" + cli.UserName + "</li>" +
                            "<li>" + cli.UserPassword + "</li>" +
                            "<li>" + cli.IpAddress + "</li>" +
                            "<li>" + cli.MacAddress + "</li>" +
                            "<li>" + cli.GateWay + "</li>" +
                             "<li>" + cli.Department + "</li>" +
                             "<li>" + cli.SubDepartment + "</li>" +
                             "<li>" + cli.MachineType + "</li>" +
                             "</ul>" +
                             "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                             "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                "</div>" +
                "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
                 "<h3 style='text-align:center;'>" + cli.Department + "</h3>" +
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
            }
        }
        else {
            $("#departmentComputers").html("");
            //alert("department computers load ");
            for (var i in tbClients) {
                var cli = JSON.parse(tbClients[i]);

                switch (department) {
                    case "valuation":
                        if (cli.Department == "Valuation") {
                            if (cli.MachineType == "Desktop") {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
                               "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                            else {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
                             "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                        } // valuation
                        break;
                    case "backUp":
                        if (cli.Department == "BackUp") {
                            if (cli.MachineType == "Desktop") {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
                             "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                            else {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
                             "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                        } // backup
                        break;
                    case "callCenter":
                        if (cli.Department == "CallCenter") {
                            if (cli.MachineType == "Desktop") {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
                             "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                            else {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
                             "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                        } // CallCenter
                        break;
                    case "shadow":
                        if (cli.Department == "Shadow") {
                            if (cli.MachineType == "Desktop") {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
                             "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                            else {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
                             "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                        } // shadow
                        break;
                    case "609":
                        if (cli.Department == "609") {
                            if (cli.MachineType == "Desktop") {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-desktop fa-5x'></i>" +
                             "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                            else {
                                $("#departmentComputers").append("<div class='flip3D'>" +
                                        "<div class='back'>" +
                                        "<ul>" +
                                        "<li>" + cli.ComputerName + "</li>" +
                                        "<li>" + cli.UserName + "</li>" +
                                        "<li>" + cli.UserPassword + "</li>" +
                                        "<li>" + cli.IpAddress + "</li>" +
                                        "<li>" + cli.MacAddress + "</li>" +
                                        "<li>" + cli.GateWay + "</li>" +
                                         "<li>" + cli.Department + "</li>" +
                                         "<li>" + cli.SubDepartment + "</li>" +
                                         "<li>" + cli.MachineType + "</li>" +
                                         "</ul>" +
                                         "<i id='btnEdit' class='fa fa-pencil-square-o fa-2x' alt='Edit" + i + "'></i>" +
                                         "<i id='btnDelete' class='fa fa-times fa-2x' alt='Delete" + i + "'></i>" +
                                            "</div>" +
                            "<div class='front'><i class='fa fa-laptop fa-5x'></i>" +
                             "<h3 style='text-align:center;'>" + department + "</h3>" +
                                "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                            "</div></div>"
                                );
                            }
                        } // 609
                        break;
                    default:
                }
            }
        }
    }
    else {
        $("#tblList").html("No Information available");
        $("#departmentComputers").html("No Information available for "+department);
    }
}


