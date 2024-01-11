// Bài tập 1:

document.getElementById('btn1').onclick = function (){
    var diemChuan = document.getElementById('txt-diemChuan').value *1;
    var khuVuc = document.getElementById('txt-khuVuc').value ;
    var doiTuong = document.getElementById('txt-doiTuong').value ;
    var diemThu1 = document.getElementById('txt-diemThu1').value *1;
    var diemThu2 = document.getElementById('txt-diemThu2').value *1;
    var diemThu3 = document.getElementById('txt-diemThu3').value *1;
  
    var diemTong = 0;
    var diemKhuVuc = 0
    
    var ketQua = "";
    if(khuVuc == 'A'){
        diemKhuVuc = 2;
    }else if (khuVuc == 'B'){
        diemKhuVuc = 1;
    }else if ( khuVuc == 'C'){
        diemKhuVuc = 0.5;
    }else {
        diemKhuVuc = 0;
    }
     var chonDoiTuong = 0;
    if (doiTuong == '1'){
        chonDoiTuong = 2.5;
    }else if (doiTuong =='2'){
        chonDoiTuong = 1.5;
    }else if (doiTuong =='3'){
        chonDoiTuong = 1;
    }else {
        chonDoiTuong = 0;
    }
    diemTong = diemThu1 + diemThu2 + diemThu3 + diemKhuVuc + chonDoiTuong;

if (diemTong >= diemChuan){
ketQua = `Chúc mừng bạn đã đậu, điểm tổng của bạn là: ${diemTong}`;

}else {
  ketQua = `Bạn đã rớt, điểm tổng của bạn là: ${diemTong}`;

}

if (diemThu1 == 0 || diemThu2 == 0 || diemThu3 ==0){
    ketQua = 'Bạn đã rớt do điểm của bạn bằng hoặc nhỏ hơn 0';
}

 
    document.getElementById('ketQua1').innerHTML = ketQua ;

    
}






//Bài tập 2: 
document.getElementById('btn2').onclick = function (){
    var hoTen = document.getElementById('txt-hoTen').value;
    var sokW = document.getElementById('txt-kW').value *1;
    var tongTien = 0;
   
    if (sokW <= 50){
        tongTien = sokW * 500;
    }else if (sokW > 50 && sokW <= 100){
        tongTien = 50 * 500 + (sokW - 50) * 650;
    }else if (sokW > 100 && sokW <= 200){
        tongTien = (50 * 500) + (50 * 650)+ (sokW - 100) * 850;
    }else if (sokW >200 && sokW <= 350){
        tongTien = (50 * 500) + (50 * 650) + (850 *100) + (sokW - 200) * 1100;
    }else {
        tongTien = (50 * 500) + (50 * 650) + (850 *100) + (1100 * 150) + ((sokW -350) *1300);
    }
    var tongTienDien = tongTien.toLocaleString({
        style: 'currenly',
        currenly: 'VND'
    })
    document.getElementById('ketQua2').innerHTML = `Họ tên: ${hoTen}, Tiền điên: ${tongTienDien} VND`;
}


//Bài tập 3:
document.getElementById('btn3').onclick = function(){
    var nhapHoTen =  document.getElementById('txt-nhapHoTen').value;
    var tongThuNhapNam =  document.getElementById('txt-tongThue').value * 1;
    var soNguoiPhuThuoc =  document.getElementById('txt-soNguoi').value * 1;
    
    var thuNhapChiuThue = tongThuNhapNam -(4e+6, soNguoiPhuThuoc * 1.6e+6);
    
    var soThue = 0;

  
    if (thuNhapChiuThue <= 60e+6) {
        soThue = thuNhapChiuThue * 0.05; 

    } else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        soThue =   60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.1;

    } else if (thuNhapChiuThue >120e+6 && thuNhapChiuThue <=210e+6) {
        soThue =    60e+6 * 0.1 + 60e+6 * 0.05 + (thuNhapChiuThue - 120e+6) * 0.15 ;

    } else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <=384e+6) {
        soThue =   60e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05 + (thuNhapChiuThue - 210e+6) * 0.2;

    } else if (thuNhapChiuThue >384e+6 && thuNhapChiuThue <=624e+6) {
        soThue =   60e+6 * 0.2 + 60e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05 + (thuNhapChiuThue - 384e+6) * 0.25 ;

    } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        soThue =   60e+6 * 0.25 + 60e+6 * 0.2 + 60e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05 + (thuNhapChiuThue - 624e+6) * 0.3;

    } else {
        soThue =  60e+6 * 0.3 + 60e+6 * 0.25 + 60e+6 * 0.2 + 60e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05 + (thuNhapChiuThue - 960e+6) * 0.35 ;
    }
    
    var chiuThue = soThue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    document.getElementById('ketQua3').innerHTML = `Họ tên: ${nhapHoTen} , Tiền thuế thu nhập cá nhân: ${chiuThue} , Số người phụ thuộc: ${soNguoiPhuThuoc} `;
};

//Bài tập 4:
document.getElementById('btn4').onclick = function (){
    var loaiKhachHang = document.getElementById('txt-khachHang').value;
    var soKetNoi = document.getElementById('txt-soKetNoi').value *1;
    var maKhachHang = document.getElementById('txt-maKhachHang').value;
    var soKenh =document.getElementById('txt-soKenh').value * 1;

    var phiXuLyHoaDon = 0;
    var phiDichVuCoBan = 0;
    var phiKenhCaoCap = 0;


    if (loaiKhachHang == 'Nhà dân'){
        phiXuLyHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        phiKenhCaoCap = 7.5 * soKenh;
    } else if (loaiKhachHang == 'Doanh nghiệp'){
        phiXuLyHoaDon = 15;
        phiDichVuCoBan = 75;
        if(soKetNoi <= 10){
            phiDichVuCoBan += 75;
        }else {
            phiDichVuCoBan += 75 + (soKetNoi - 10) * 5;
        }
        phiKenhCaoCap = 50 * soKenh
    }
    var tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap;
    document.getElementById('ketQua4').innerHTML = `Mã khách hàng: ${maKhachHang} , Tiền cáp: ${tongHoaDon}$  `
}
document.getElementById('txt-khachHang').onchange = function () {
    var loaiKhachHang = document.getElementById('txt-khachHang').value;
    var soKetNoi = document.getElementById('txt-soKetNoi');


    if (loaiKhachHang == 'Nhà dân') {
        soKetNoi.style.display = 'none';

    } else {
        soKetNoi.style.display = 'block';
 
    }
};