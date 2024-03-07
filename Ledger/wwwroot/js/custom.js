$(document).ready(function () {
    // Toggle Navigation
    const sidebarToggle = $('#sidebarToggle');
    if (sidebarToggle.length > 0) {
        sidebarToggle.on('click', function (event) {
            event.preventDefault();
            $('body').toggleClass('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', $('body').hasClass('sb-sidenav-toggled'));
        });
    }
    // Datatables 
    $('#dtequipment').DataTable();
    $('#tblequipments').DataTable();

});

//-------------------------------
// Equipment JQuery Code
//-------------------------------
$("#btn-equipment-add").click(function () {
   
    var Name = $('#modal-equipment #name').val();
  
    if (Name == "") {

        $('#modal-equipment #AlertWarning').removeClass('d-none');
        setTimeout(function () { $('#modal-equipment #AlertWarning').addClass('d-none'); }, 5000);
        $("#modal-equipment #WarningClose").click(function () { $('#modal-equipment #AlertWarning').addClass('d-none'); });

    } else {

        $("#btn-equipment-add").text("Saving...");
        $.ajax({
            url: "/Equipment/Create",
            type: "POST",
            dataType: 'json',
            data: {
                Name: Name
            },
            success: function (response) {

                $("#modal-equipment input").val("");
                $("#modal-equipment select").val("");
                $("#modal-equipment textarea").val("");

                // Alert Code
                $('#modal-equipment #AlertSuccess').removeClass('d-none');
                setTimeout(function () { $('#modal-equipment #AlertSuccess').addClass('d-none'); }, 3000);
                $("#modal-equipment #SuccessClose").click(function () { $('#modal-equipment #AlertSuccess').addClass('d-none'); });

                // Button Text Change
                $("#btn-equipment-add").text("Save");
            },
            error: function (xhr, status, error) {

                $('#modal-equipment #AlertError').removeClass('d-none');
                setTimeout(function () { $('#modal-equipment #AlertError').addClass('d-none'); }, 5000);
                $("#modal-equipment #ErroClose").click(function () { $('#modal-equipment .AlertError').addClass('d-none'); });

            }
        });
    }
});


//----------------
// Fill Edit Form
//----------------
$(".equip-edit-btn").click(function (e) {
    e.preventDefault();
    var currentRow = $(this).closest("tr");
    var Id = currentRow.find("td:first").attr("Id");
    
    $.ajax({
       
        url: "/Equipment/GetEquipment",
        type: "POST",
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        data: { Id: Id },
        success: function (Data) {

            $('#modal-equipment-edit #equipid').val(Data.id);
            $('#modal-equipment-edit #name').val(Data.name);
           
            
            // Load or Show Modal Popup
            $('#modal-equipment-edit').modal('show');

        },
        error: function (xhr, status, error) {
            alert("Error !!!");
        }
    });
});


//------------------
// Update Edit Form
//------------------
$("#btn-equipment-edit").click(function () {

    var Id = $('#modal-equipment-edit #equipid').val();
    var Name = $('#modal-equipment-edit #name').val();


    if (Name == "" ) {

        $('#modal-equipment-edit #AlertWarning').removeClass('d-none');
        setTimeout(function () { $('#modal-equipment-edit #AlertWarning').addClass('d-none'); }, 5000);
        $("#modal-equipment-edit #WarningClose").click(function () { $('#modal-equipment-edit #AlertWarning').addClass('d-none'); });

    } else {

        $("#btn-equipment-edit").text("Updating...");
        $.ajax({
            url: "/Equipment/Update",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {
                Id: Id,
                Name: Name,
               
            },
            success: function (response) {
                $("#btn-equipment-edit").text("Update");
                // Alert Code
                $('#modal-equipment-edit #AlertSuccess').removeClass('d-none');
                setTimeout(function () {
                    $('#modal-equipment-edit #AlertSuccess').addClass('d-none');
                }, 3000);
                $("#modal-equipment-edit #SuccessClose").click(function () { $('#modal-equipment-edit #AlertSuccess').addClass('d-none'); });


                setTimeout(function () {
                    $("#modal-equipment-edit").modal('hide');
                }, 3000);
                

                
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    }
});

$('#modal-equipment-edit .btn-close').click(function () {

    $('#modal-equipment-edit').modal('hide');

});







//-------------------------------
// Add Branch Code
//-------------------------------
$("#btn-branch-add").click(function () {

    var Name = $('#modal-branch #name').val();
    var Status = $('#modal-branch #status').val();

    if (Name == "" || Status == "") {

        $('#modal-branch #AlertWarning').removeClass('d-none');
        setTimeout(function () { $('#modal-branch #AlertWarning').addClass('d-none'); }, 5000);
        $("#modal-branch #WarningClose").click(function () { $('#modal-branch #AlertWarning').addClass('d-none'); });

    } else {

        $("#btn-branch-add").text("Saving...");
        $.ajax({
            url: "/Branch/Create",
            type: "POST",
            dataType: 'json',
            data: {
                Name: Name,
                Status: Status
            },
            success: function (response) {

                $("#modal-branch input").val("");
                $("#modal-branch select").val("");
                $("#modal-branch textarea").val("");

                // Alert Code
                $('#modal-branch #AlertSuccess').removeClass('d-none');
                setTimeout(function () { $('#modal-branch #AlertSuccess').addClass('d-none'); }, 3000);
                $("#modal-branch #SuccessClose").click(function () { $('#modal-branch #AlertSuccess').addClass('d-none'); });

                // Button Text Change
                $("#btn-branch-add").text("Save");
            },
            error: function (xhr, status, error) {

                $('#modal-branch #AlertError').removeClass('d-none');
                setTimeout(function () { $('#modal-branch #AlertError').addClass('d-none'); }, 5000);
                $("#modal-branch #ErroClose").click(function () { $('#modal-branch .AlertError').addClass('d-none'); });

            }
        });
    }
});



//-----------------------
// Fill Branch Edit Form
//-----------------------
$(".branch-edit-btn").click(function (e) {
    e.preventDefault();
    var currentRow = $(this).closest("tr");
    var Id = currentRow.find("td:first").attr("Id");

    $.ajax({

        url: "/Branch/GetBranch",
        type: "POST",
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        data: { Id: Id },
        success: function (Data) {

            $('#modal-branch-edit #branchid').val(Data.id);
            $('#modal-branch-edit #name').val(Data.name);
            $('#modal-branch-edit #status').val(Data.status);

            // Load or Show Modal Popup
            $('#modal-branch-edit').modal('show');

        },
        error: function (xhr, status, error) {
            alert("Error !!!");
        }
    });
});


//------------------
// Update Branch Edit Form
//------------------
$("#btn-branch-edit").click(function () {

    var Id = $('#modal-branch-edit #branchid').val();
    var Name = $('#modal-branch-edit #name').val();
    var Status = $('#modal-branch-edit #status').val();


    if (Name == "" || Status == "") {

        $('#modal-branch-edit #AlertWarning').removeClass('d-none');
        setTimeout(function () { $('#modal-branch-edit #AlertWarning').addClass('d-none'); }, 5000);
        $("#modal-branch-edit #WarningClose").click(function () { $('#modal-branch-edit #AlertWarning').addClass('d-none'); });

    } else {

        $("#btn-branch-edit").text("Updating...");
        $.ajax({
            url: "/Branch/Update",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {
                Id: Id,
                Name: Name,
                Status: Status
            },
            success: function (response) {
                $("#btn-branch-edit").text("Update");
                // Alert Code
                $('#modal-branch-edit #AlertSuccess').removeClass('d-none');
                setTimeout(function () {
                    $('#modal-branch-edit #AlertSuccess').addClass('d-none');
                }, 3000);
                $("#modal-branch-edit #SuccessClose").click(function () { $('#modal-branch-edit #AlertSuccess').addClass('d-none'); });


                setTimeout(function () {
                    $("#modal-branch-edit").modal('hide');
                }, 3000);

            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    }
});

$('#modal-branch-edit .btn-close').click(function () {

    $('#modal-branch-edit').modal('hide');

});








//-------------------------------
// Add Issue Code
//-------------------------------
$("#btn-issue-add").click(function () {
    
    var equipmentid = $('#modal-issue #equipment').val();
    var branchid = $('#modal-issue #branch').val();
    var condition = $('#modal-issue #condition').val();
    var serialno = $('#modal-issue #serialno').val();
    var qty = $('#modal-issue #qty').val();
    var issuedate = $('#modal-issue #issuedate').val();
    var issuevoucher = $('#modal-issue #issuevoucher').val();
    var minsheetno = $('#modal-issue #minsheetno').val();
    var issueto = $('#modal-issue #issueto').val();
    var receviedby = $('#modal-issue #receviedby').val();
    var details = $('#modal-issue #details').val();

    if (equipmentid == "" || branchid == "" || condition == "" || serialno == "" || qty == "" || issuedate == "" || issuevoucher == "" || minsheetno == "" || issueto == "" || receviedby == "" || details == "" )
    { 
       
        $('#modal-issue #AlertWarning').removeClass('d-none');
        setTimeout(function () { $('#modal-issue #AlertWarning').addClass('d-none'); }, 5000);
        $("#modal-issue #WarningClose").click(function () { $('#modal-issue #AlertWarning').addClass('d-none'); });

    } 
    else {

        $("#btn-issue-add").text("Saving...");
        $.ajax({
            url: "/Issue/Create",
            type: "POST",
            dataType: 'json',
            data: {
                equipmentid: equipmentid,
                branchid: branchid,
                condition: condition,
                serialno: serialno,
                qty: qty,
                issuedate: issuedate,
                issueto: issueto,
                issuevoucher: issuevoucher,
                minsheetno: minsheetno,
                receviedby: receviedby,
                details: details
            },
            success: function (response) {

                $("#modal-issue input").val("");
                $("#modal-issue select").val("");
                $("#modal-issue textarea").val("");

                // Alert Code
                $('#modal-issue #AlertSuccess').removeClass('d-none');
                setTimeout(function () { $('#modal-issue #AlertSuccess').addClass('d-none'); }, 3000);
                $("#modal-issue #SuccessClose").click(function () { $('#modal-issue #AlertSuccess').addClass('d-none'); });

                // Button Text Change
                $("#btn-issue-add").text("Save");
            },
            error: function (xhr, status, error) {

                $('#modal-issue #AlertError').removeClass('d-none');
                setTimeout(function () { $('#modal-issue #AlertError').addClass('d-none'); }, 5000);
                $("#modal-issue #ErroClose").click(function () { $('#modal-issue .AlertError').addClass('d-none'); });

            }
        });
    }

});



//-----------------------
// Fill Branch Edit Form
//-----------------------
$(".issue-edit-btn").click(function (e) {
    e.preventDefault();
    var currentRow = $(this).closest("tr");
    var Id = currentRow.find("td:first").attr("Id");
    alert(Id);
    $.ajax({

        url: "/Issue/GetIssue",
        type: "POST",
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        data: { Id: Id },
        success: function (Data) {

            $('#modal-issue-edit #Issueid').val(Data.id);
            $('#modal-issue-edit #equipment').val(Data.equipmentId);
            $('#modal-issue-edit #branch').val(Data.branchId);
            $('#modal-issue-edit #condition').val(Data.condition);
            $('#modal-issue-edit #serialno').val(Data.serialNo);
            $('#modal-issue-edit #qty').val(Data.qty);
            $('#modal-issue-edit #issuedate').val(Data.issueDate);
            $('#modal-issue-edit #issuevoucher').val(Data.issueVoucher);
            $('#modal-issue-edit #minsheetno').val(Data.minSheetNo);
            $('#modal-issue-edit #issueto').val(Data.issueTo);
            $('#modal-issue-edit #receviedby').val(Data.receviedBy);
            $('#modal-issue-edit #details').val(Data.details);

            // Load or Show Modal Popup
            $('#modal-issue-edit').modal('show');

        },
        error: function (xhr, status, error) {
            alert("Error !!!");
        }
    });
});


//------------------
// Update Issue Edit Form
//------------------
$("#btn-issue-edit").click(function () {

    var Id = $('#modal-issue-edit #Issueid').val();
    var equipmentid = $('#modal-issue-edit #equipment').val();
    var branchid = $('#modal-issue-edit #branch').val();
    var condition = $('#modal-issue-edit #condition').val();
    var serialno = $('#modal-issue-edit #serialno').val();
    var qty = $('#modal-issue-edit #qty').val();
    var issuedate = $('#modal-issue-edit #issuedate').val();
    var issuevoucher = $('#modal-issue-edit #issuevoucher').val();
    var minsheetno = $('#modal-issue-edit #minsheetno').val();
    var issueto = $('#modal-issue-edit #issueto').val();
    var receviedby = $('#modal-issue-edit #receviedby').val();
    var details = $('#modal-issue-edit #details').val();


    if (equipmentid == "" || branchid == "" || condition == "" || serialno == "" || qty == "" || issuedate == "" || issuevoucher == "" || minsheetno == "" || issueto == "" || receviedby == "" || details == "") {

        $('#modal-issue-edit #AlertWarning').removeClass('d-none');
        setTimeout(function () { $('#modal-issue-edit #AlertWarning').addClass('d-none'); }, 5000);
        $("#modal-issue-edit #WarningClose").click(function () { $('#modal-issue-edit #AlertWarning').addClass('d-none'); });

    } else { 

        $("#btn-issue-edit").text("Updating...");
        $.ajax({
            url: "/Issue/Update",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {
                Id: Id,
                equipmentid: equipmentid,
                branchid: branchid,
                condition: condition,
                serialno: serialno,
                qty: qty,
                issuedate: issuedate,
                issueto: issueto,
                issuevoucher: issuevoucher,
                minsheetno: minsheetno,
                receviedby: receviedby,
                details: details
            },
            success: function (response) {
                $("#btn-issue-edit").text("Update");
                // Alert Code
                $('#modal-issue-edit #AlertSuccess').removeClass('d-none');
                setTimeout(function () {
                    $('#modal-issue-edit #AlertSuccess').addClass('d-none');
                }, 3000);
                $("#modal-issue-edit #SuccessClose").click(function () { $('#modal-issue-edit #AlertSuccess').addClass('d-none'); });


                setTimeout(function () {
                    $("#modal-issue-edit").modal('hide');
                }, 3000);

            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    }
});

$('#modal-issue-edit .btn-close').click(function () {

    $('#modal-issue-edit').modal('hide');

});









//------------------
// Details Issue Edit Form
//------------------

$(".issue-detail-btn").click(function (e) {
    e.preventDefault();
    var currentRow = $(this).closest("tr");
    var Id = currentRow.find("td:first").attr("Id");
    alert(Id);
    $.ajax({

        url: "/Issue/GetDetail",
        type: "POST",
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        data: { Id: Id },
        success: function (Data) {

            $('#modal-issue-detail #Issueid').text(Data.id);
            $('#modal-issue-detail #equipment').text(Data.equipmentName);
            $('#modal-issue-detail #branch').text(Data.branchName);
            $('#modal-issue-detail #condition').text(Data.condition);
            $('#modal-issue-detail #serialno').text(Data.serialNo);
            $('#modal-issue-detail #qty').text(Data.qty);
            $('#modal-issue-detail #issuedate').text(Data.issueDate);
            $('#modal-issue-detail #issuevoucher').text(Data.issueVoucher);
            $('#modal-issue-detail #minsheetno').text(Data.minSheetNo);
            $('#modal-issue-detail #issueto').text(Data.issueTo);
            $('#modal-issue-detail #receviedby').text(Data.receviedBy);
            $('#modal-issue-detail #details').text(Data.details);

            // Load or Show Modal Popup
            $('#modal-issue-detail').modal('show');

        },
        error: function (xhr, status, error) {
            alert("Error !!!");
        }
    });
});


$('#modal-issue-detail .btn-close').click(function () {

    $('#modal-issue-detail').modal('hide');

});






//------------------
// Print Single Issue
//------------------

$("#issue-print-btn").click(function (e) {
    e.preventDefault();
    // currentRow = $(this).closest("tr");
    //var Id = currentRow.find("td:first").attr("print-id");
    var Id = $("print-id").val();
    alert(Id);
    $.ajax({

        url: "/Issue/PrintIssue",
        type: "POST",
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        data: { Id: Id },
        success: function (Data) {
            
        },
        error: function (xhr, status, error) {
            alert("Error !!!");
        }
    });
});


























////====================
//// Custom JS Code
////====================

//$('#patient-info-table').DataTable();




////-------------------------------
////Patient Form Input Conditionals
////-------------------------------
//$('#cnic, #RelCnic, #pcontact, #scontact').on('input', function () {
//    $(this).val($(this).val().replace(/[^0-9]/g, ''));
//});
//$('#bloodpressure, #bodytemp, #pulserate, #sugarlevel, #weight').on('input', function () {
//    var value = $(this).val();
//    var numericSlashRegex = /^[0-9]*(\/?[0-9]*)?$/;
//    if (!numericSlashRegex.test(value)) { $(this).val(value.slice(0, -1)); }
//});






////-------------------------------
//// Update Patient Ajax Code
////-------------------------------
//$("#btn-patient-edit").click(function () {
//    // Patient Information
//    var patientid = $('#modal-patient-edit #patientid-edit').val();
//    var Name = $('#modal-patient-edit #name').val();
//    var Cnic = $('#modal-patient-edit #cnic').val();
//    var Dob = $('#modal-patient-edit #dob').val();
//    var GenderId = $('#modal-patient-edit #gender').val();
//    var MaritalStatusId = $('#modal-patient-edit #mstatus').val();
//    var Relation = $('#modal-patient-edit #relation').val();
//    var RelName = $('#modal-patient-edit #RelName').val();
//    var RelCnic = $('#modal-patient-edit #RelCnic').val();
//    var NationalityId = $('#modal-patient-edit #editnationalityid').val();
//    // Patient Contact
//    var ProvinceId = $('#modal-patient-edit #province').val();
//    var CityId = $('#modal-patient-edit #city').val();
//    var Address = $('#modal-patient-edit #address').val();
//    var PContact = $('#modal-patient-edit #pcontact').val();
//    var SContact = $('#modal-patient-edit #scontact').val();
//    alert(NationalityId);
//    if (Name == "" || Cnic == "" || Dob == "" || GenderId == "" || MaritalStatusId == "" || Relation == "" || RelName == "" || RelCnic == "" || NationalityId == "" || MaritalStatusId == "") {
//        alert("Please Fill Patient  fields.");
//    } else if (ProvinceId == "" || CityId == "" || Address == "" || PContact == "" || SContact == "") {
//        alert("Please fill Address & Contact fields.");
//    } else {

//        // Getting Age Code Starts
//        function calculateAge(dob) {
//            var birthDate = new Date(dob);
//            var today = new Date();
//            var age = today.getFullYear() - birthDate.getFullYear();
//            var m = today.getMonth() - birthDate.getMonth();
//            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//                age--;
//            }
//            return age;
//        }
//        var Age = calculateAge(Dob);
//        // Getting Age Code Ends


//        $.ajax({
//            url: "/reception/patientupdate",
//            type: "POST",
//            dataType: 'json',
//            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//            data: {
//                // Patient Information
//                Id: patientid,
//                Name: Name,
//                Cnic: Cnic,
//                Dob: Dob,
//                Age: Age,
//                GenderId: GenderId,
//                RelationId: Relation,
//                RelName: RelName,
//                RelCnic: RelCnic,
//                NationalityId: NationalityId,
//                MaritalStatusId: MaritalStatusId,
//                // Patient Address
//                ProvinceId: ProvinceId,
//                CityId: CityId,
//                StreetAddress: Address,
//                PrmryContactNo: PContact,
//                ScndryContactNo: SContact,
//            },
//            success: function (response) {
//                //$('#patientListContainer').load(location.href + ' #patientListContainer');
//                $("#modal-patient-edit").modal('hide');

//                toastr.info("Data Updated !!!", " Info message");

//            },
//            error: function (xhr, status, error) {
//                alert("Error !!!");
//            }
//        });
//    }
//});





////-------------------------------
//// Patient Vital Lists Code
////-------------------------------
//$(".patient-vital-btn").click(function (e) {
//    e.preventDefault();
//    var currentRow = $(this).closest("tr");
//    var dataIdAttr = currentRow.find("td:first").attr("data-id-attr");
//    // Giving Patient Id to Hidden Input
//    //alert(dataIdAttr);
//    $("#patientid-vital").val(dataIdAttr);
//    // Load or Show Modal Popup
//    $('#modal-vital').modal('show');
//    $.ajax({
//        url: "/reception/PatientVitalsList",
//        type: "POST",
//        dataType: 'json',
//        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//        data: { Patid: dataIdAttr },
//        success: function (data) {
//            // Write Code to Display Recevied Data
//            $('#patient-vitals-tbl tbody').empty();
//            // Populate table rows with fetched data
//            if (data && Array.isArray(data) && data.length === 0) {
//                var row = '<tr><td colspan="10"> No Record Found !!</td></tr>';
//                $('#patient-vitals-tbl tbody').append(row);
//            } else {
//                var i = 0;
//                $.each(data, function (index, item) {
//                    i++;

//                    // Assuming patient.patientdob is in the format "31-Dec-24 12:00:00 AM"
//                    var dobParts = item.d.split(" ")[0].split("-"); // Extracting date parts
//                    var formattedDob = dobParts[0] + "-" + dobParts[1] + "-" + dobParts[2].substring(0, 2);

//                    var row = '<tr><td>' + i + '</td><td>' + item.bp + '</td><td>' + item.bt + '</td><td>' + item.pr + '</td> <td>' + item.sl + '</td> <td>' + item.w + '</td> <td>' + item.h + '</td> <td>' + formattedDob + '</td> <td>' + '<a class="btn btn-danger" href="reception/PatientVitalsPrint?vid=' + item.vid + '&pid=' + item.pid + '"><i class="mdi mdi-printer mdi-18px"></i></a>' + '</td> </tr>';

//                    $('#patient-vitals-tbl tbody').append(row);
//                });
//            }
//            //toastr.info("System Working !!!", " Info message"); // Alert
//        },
//        error: function (xhr, status, error) {
//            alert("Error !!!");
//        }
//    });
//});





////-------------------------------
//// Patient Vital Add Code
////-------------------------------
//$("#btn-patient-vital-add").click(function (e) {

//    var patientid = $('#patientid-vital').val();
//    var bloodpressure = $('#bloodpressure').val();
//    var bodytemp = $('#bodytemp').val();
//    var pulserate = $('#pulserate').val();
//    var sugarlevel = $('#sugarlevel').val();
//    var weight = $('#weight').val();
//    var height = $('#height').val();
//    if (bloodpressure == "" || bodytemp == "" || pulserate == "" || sugarlevel == "" || weight == "" || height == "") {


//        $('#myAlert').removeClass('d-none');

//        setTimeout(function () {
//            $('#myAlert').addClass('d-none');
//        }, 5000); // 3000 milliseconds delay (3 seconds)

//        $("#alert-vital").click(function () {

//            $('#myAlert').addClass('d-none');

//        });


//    } else {
//        $.ajax({
//            url: "/reception/PatientVitalsAdd",
//            type: "POST",
//            dataType: 'json',
//            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//            data: {
//                PatientId: patientid,
//                BloodPressure: bloodpressure,
//                BodyTemp: bodytemp,
//                PulseRate: pulserate,
//                SugarLevel: sugarlevel,
//                Weight: weight,
//                Height: height
//            },
//            success: function (response) {
//                $("#modal-vital").modal('hide');
//                toastr.info("Data Inserted !!!", " Info message");
//            },
//            error: function (xhr, status, error) {
//                alert("Error !!!");
//            }
//        });
//    }



//});




////------------------------------------
//// Patient Details Form
////------------------------------------
//$(".patient-details-btn").click(function (e) {
//    e.preventDefault();
//    var currentRow = $(this).closest("tr");
//    var dataIdAttr = currentRow.find("td:first").attr("data-id-attr");

//    // Testing Function
//    //alert(dataIdAttr);


//    $.ajax({
//        url: "/reception/patientdetails",
//        type: "POST",
//        dataType: 'json',
//        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//        data: { Patid: dataIdAttr },
//        success: function (PDetails) {
//            var patient = PDetails[0];
//            //Patient Information
//            //alert(patient.patientname);
//            $("#modal-patient-details #name").text(patient.patientname);
//            $("#modal-patient-details #cnic").text(patient.patientcnic);

//            // Assuming patient.patientdob is in the format "31-Dec-24 12:00:00 AM"
//            var dobParts = patient.patientdob.split(" ")[0].split("-"); // Extracting date parts
//            var formattedDob = dobParts[0] + "-" + dobParts[1] + "-" + dobParts[2].substring(0, 2);

//            // Setting formatted date to the input field
//            $("#modal-patient-details #dob").text(formattedDob);
//            $("#modal-patient-details #age").text(patient.age);


//            $("#modal-patient-details #gender").text(patient.gender);
//            $("#modal-patient-details #mstatus").text(patient.martialstatus);
//            $("#modal-patient-details #relation").text(patient.relation);
//            $("#modal-patient-details #relname").text(patient.relname);
//            $("#modal-patient-details #relcnic").text(patient.relcnic);
//            $("#modal-patient-details #nationality").text(patient.nationality);
//            // Patient Contact 
//            $("#modal-patient-details #province").text(patient.province);
//            $("#modal-patient-details #city").text(patient.city);
//            $("#modal-patient-details #address").text(patient.streetaddress);
//            $("#modal-patient-details #pcontact").text(patient.prmrycontactno);
//            $("#modal-patient-details #scontact").text(patient.scndrycontactno);
//            //Patient ID For Update Purpose
//            $("#modal-patient-details #patientid-edit").val(dataIdAttr);

//            // Update the href attribute of the anchor tag with the patient ID

//            var url = '/Reception/SinglePatient?id=' + patient.patientid;
//            $('#patient-detail-print-btn').attr('href', url);
//            // Load or Show Modal Popup
//            $('#modal-patient-details').modal('show');


//        },
//        error: function (xhr, status, error) {
//            alert("Error !!!");
//        }
//    });



//});

