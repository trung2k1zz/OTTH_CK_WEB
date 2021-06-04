$(document).ready(function(e) {
    $('#openModal').click(function() {
        $('#modal').modal();
    })

    let msv = $('#msv');
    function CheckMSV(){
        let tbMSV = $('#tbMSV');
        let regex = /(([0-9]{10})\b)/g;
        if(msv.val() == ""){
            tbMSV.html('* Trường này không được để trống');
            return false;
        }
        if(isNaN(msv.val())){
            tbMSV.html('* Trường này phải nhập số');
            return false;
        }
        if(!regex.test(msv.val())){
            tbMSV.html('* Mã sinh viên gồm 10 ký tự số');
            return false;
        }
        tbMSV.html('*');
        return true;
    }
    msv.blur(CheckMSV);

    let name = $('#name');
    function CheckName(){
        let tbName = $('#tbName');
        let regex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        
        if(name.val() == ""){
            tbName.html('* Trường này không được để trống');
            return false;
        }
        if(!regex.test(name.val())) {
            tbName.html('* Phải viết hoa chữ cái đầu');
            return false;
        }
        tbName.html('*');
        return true;
    }
    name.blur(CheckName);

    let date = $('#date');
    function CheckDate() {
        let tbDate = $('#tbDate');
        if(date.val() == "") {
            tbDate.html('* Bạn vui lòng chọn ngày');
            return false;
        }
        let day = new Date(date.val());
        let today = new Date();
        today.setDate(today.getDate() + 7);

        if(today > day){
            tbDate.html('* Phải sau ngày hiện tại 7 ngày');
            return false;
        }
        tbDate.html('*');
        return true;
    }
    date.blur(CheckDate);

    let email = $('#mail');
    function CheckMail() {
        let tbMail = $('#tbMail');
        let regex = /^[a-zA-Z0-9.\_\-]+@iuh.edu.vn$/;
        if(email.val() == "") {
            tbMail.html('* Trường này không được để trống');
            return false;
        }
        if(!regex.test(email.val())) {
            tbMail.html('* Nhập đúng định dạng XXXXX@iuh.edu.vn');
            return false;
        }
        tbMail.html('*');
        return true;
    }
    email.blur(CheckMail);

    let i = 0;
    let pic = $('#pic')
    $('#dangky').click(function() {
        if(CheckMSV() && CheckName() && CheckDate() && CheckMail()){
            let item = '<tr><td>' +(i++) + '</td><td>' + msv.val() + '</td><td>' + name.val() + '</td><td>' 
            + date.val() + '</td><td>' + email.val() + '</td><td>' + pic.val() + '</td></tr>';
            
            $('table tbody').append(item);
            $('#modal').modal('hide');
        }else{
            alert('Vui lòng nhập đầy đủ thông tin');
        }
    })
})