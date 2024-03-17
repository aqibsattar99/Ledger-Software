$(document).ready(function () {

    // Get Equipment Ajax Data in Table
    $('#tblequipments').DataTable({
        "ajax": {
            "url": "/Equipment/GetAll",
            "type": "POST"
        },
        "columns": [
            {
                "data": null, 
                "render": function (data, type, row, meta) {
                    return meta.row + 1; // Meta row starts from 0, so add 1 for serial number
                }
            },
           
            { "data": "name" },
            { "data": "specifications" },
            {
                "data": null,
                "render": function (data, type, row) {
                    return "<button class='btn btn-primary equip-edit-btn' data-id='" + data.id + "'>Edit</button>";
                }
            }
        ],
        "order": [[0, "asc"]] // Order by the first column (id) in descending order
        , pageLength: 5,
        "lengthMenu": [[5, 10, 25, 50, -1], [5,10, 25, 50, "All"]]
    });

    // Get Branch Ajax Data in Table
    $('#tblbranches').DataTable({
        "ajax": {
            "url": "/Branch/GetAll",
            "type": "POST"
        },
        "columns": [
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    return meta.row + 1; // Meta row starts from 0, so add 1 for serial number
                }
            },
            { "data": "name" },
     
          
            {
                "data": null,
                "render": function (data, type, row) {
                    return "<button class='btn btn-primary branch-edit-btn' data-id='" + data.id + "'>Edit</button>";
                }
            }
        ],
        "order": [[0, "asc"]] // Order by the first column (id) in descending order
        , pageLength: 5,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]
    });

    // Get Branch Ajax Data in Table
    $('#tblissueequipments').DataTable({
        "ajax": {
            "url": "/GeneralIssue/GetAll",
            "type": "POST"
        },
        "columns": [
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    return meta.row + 1; // Meta row starts from 0, so add 1 for serial number
                }
            },

            { "data": "equipmentName" },
            { "data": "branchName" },
            { "data": "condition" },
            { "data": "serialNo" },
            { "data": "qty" },
            { "data": "issueDate" },
            { "data": "issueVoucher" },
            { "data": "minSheetNo" },
         
            {
                "data": null,
                "render": function (data, type, row) {
                    return "<button type='button' class='btn btn-primary issue-edit-btn' data-id='" + data.id + "'>Edit</button> <a type='button' class='btn btn-danger' target='_blank' href='/GeneralIssue/PrintIssue/" + data.id + "'>Print</a>";
                }
            }
        ],
        "order": [[0, "asc"]] // Order by the first column (id) in descending order
        , pageLength: 5,
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]
    });
   
});


