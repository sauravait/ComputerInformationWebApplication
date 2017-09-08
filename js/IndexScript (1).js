$(document).ready(function () {
          $('input').ftext();
       });

$(function(){
    var operation = "A"; //"A"=Adding; "E"=Editing
    var selected_index = -1; //Index of the selected list item
    var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data
    tbClients = JSON.parse(tbClients); //Converts string to object
    if(tbClients == null) {tbClients = [];}//If there is no data, initialize an empty array
    
function Add(){
    var client = JSON.stringify({
    
        ComputerName : $("#txtComputerName").val(),
        UserName : $("#txtUserName").val(),
        UserPassword : $("#txtPassword").val(),
        IpAddress : $("#txtIpAddress").val(),
        MachineType : $("#txtMachineType").val(),
        Department : $("#txtDepartment").val(),
        GateWay : $("#txtGateway").val(),
        SubDepartment : $("#txtSubDepartment").val(),
        MacAddress : $("#txtMacAddress").val()

    });
    tbClients.push(client);
    localStorage.setItem("tbClients", JSON.stringify(tbClients));
    //alert("The data was saved.");
    return true;
}
function Edit(){
    tbClients[selected_index] = JSON.stringify({
    
        ComputerName : $("#txtComputerName").val(),
        UserName : $("#txtUserName").val(),
        UserPassword : $("#txtPassword").val(),
        IpAddress : $("#txtIpAddress").val(),
        MachineType : $("#txtMachineType").val(),
        Department : $("#txtDepartment").val(),
        GateWay : $("#txtGateway").val(),
        SubDepartment : $("#txtSubDepartment").val(),
        MacAddress : $("#txtMacAddress").val()
    });
    //Alter the selected item on the table
    localStorage.setItem("tbClients", JSON.stringify(tbClients));
    //alert("The data was edited.");
    operation = "A";
    //Return to default value
    return true;
}

function Delete(){
    tbClients.splice(selected_index, 1);
    localStorage.setItem("tbClients", JSON.stringify(tbClients));
    //alert("Client deleted.");
}

   
$(document).on( "submit", "#frmItem", function(){    
    if(operation == "A")
        return Add();
    else
        return Edit();        
});
$(document).on( "click", "#btnEdit", function(){
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
$(document).on( "click", "#btnDelete", function(e){
    selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
    Delete();
    DepartmentComputerList();
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

function DepartmentComputerList() {

    if (tbClients.length > 0) {
        alert("List load on delete load ");
        $("#editAndView").html("");
        for (var i in tbClients) {
            var cli = JSON.parse(tbClients[i]);

            if (cli.Department == "Valuation") {
                if (cli.MachineType == "Desktop") {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
                else {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
            } // valuation
            if (cli.Department == "BackUp") {
                if (cli.MachineType == "Desktop") {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
                else {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
            } // backup
            if (cli.Department == "CallCenter") {
                if (cli.MachineType == "Desktop") {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
                else {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
            } // CallCenter
            if (cli.Department == "Shadow") {
                if (cli.MachineType == "Desktop") {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
                else {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
            } // shadow
            if (cli.Department == "609") {
                if (cli.MachineType == "Desktop") {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
                else {
                    $("#editAndView").append("<div class='flip3D'>" +
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
                    "<h3 style='text-align:center;'>" + cli.ComputerName + "</h3>" +
                "</div></div>"
                    );
                }
            } // 609

        }
    }
}
});
