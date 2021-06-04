$(document).ready(function(e) {
    //idSV
    let id = $('#idSV');
    function CheckID(){
        //id = 8 số
        let tbID = $('#tbID');
        let regex = /(([0-9]{8})\b)/g;
        if(id.val() == "") {
            tbID.html('* Trường này không được để trống');
            return false;
        }
        if(isNaN(id.val())) {
            tbID.html('* Trường này phải là số');
            return false;
        }
        if(!regex.test(id.val())) {
            tbID.html('* Mã sinh viên phải đủ 8 ký tự');
            return false;
        }
        tbID.html('');
        return true;
    }
    id.blur(CheckID);

    //Tên
    let name = $('#tenSV');
    function CheckName() {
        let tbTen = $('#tbten');
        let regex = /^[A-Z][a-z]+(\s[A-z][a-z]+)+$/;
        if(name.val() == "") {
            tbTen.html('* Trường này không được để trống');
            return false;
        }
        if(!regex.test(name.val())) {
            tbTen.html('* Phải nhập đúng định dạng. VD: Le Tuan');
            return false;
        }
        tbTen.html('');
        return true;
    }
    name.blur(CheckName);

    //Lớp - Selected - Giá Tiền: Read Only
    let _class = $('#lop');
    let money = $('#giatien');
    let selectedValue;
    let isSelected = false;
    
    _class.change( function() {
        selectedValue = $('#lop option:selected').val();
        if(selectedValue == 1){
            money.val('500000');
            isSelected = true;
        }else if(selectedValue == 2){
            money.val('700000');
            isSelected = true;
        }else{
            money.val('1000000');
            isSelected = true;
        }
    })

    //Môn học-Checkbox
    let subjects = $("input[type = 'checkbox']");
    let strSubjects;
    let count = 0;//Đếm số checkbox được chọn
    let isCheck_checkBox = false;
    subjects.change(function() {
        let checkChange = $("input[type = 'checkbox']:checked");//arr
        //Khởi tạo lại giá trị khi change
        strSubjects = "";
        count = 0;
        isCheck_checkBox = false;

        //Lưu giá trị của checkbox được chọn vào str
        for(let val of checkChange){
            strSubjects += val.value + ', ';
            count++;
        }

        //Check
        if(count != 0){
            isCheck_checkBox = true;
        }
    })

    //Hình thức thanh toán - radio
    let pay = $("input[type = 'radio']");
    let strPay = "";
    let tt = $("input:radio[value = 1]");
    let ck = $("input:radio[value = 2]");
    let isCheck = false;
    
    pay.change(function() {
        if($(this).val() == 1) {
            strPay = "Trực tiếp";
            ck.prop('checked',false);
            isCheck = true;
        }else if($(this).val() == 2){
            strPay = "Chuyển khoản";
            tt.prop('checked',false);
            isCheck = true;
        }else{
            isCheck = false;
        }
        console.log(strPay);
    })

    //Thành tiền
    function PayMent(){
        return parseInt(money.val()) * count;
    }

    let i = 0;
    $('#dangky').click(function() {
        let money = PayMent();
        let item = '<tr><td>' + (i++) + '</td><td>' + id.val() + '</td><td>' + name.val() + '</td><td>' + 
        (selectedValue == 1?"DHTH15A":(selectedValue == 2?"DTHTH15B":"DHTH15ATT")) + '</td><td>'
        + strSubjects + '</td><td>' + money + '</td><td>' + strPay + '</td></tr>';
        if(CheckID() && CheckName() && isSelected && isCheck && isCheck_checkBox)
            $('table').append(item);
        else{
            alert('Cần nhập thông tin đầy đủ');
        }
    })


})
