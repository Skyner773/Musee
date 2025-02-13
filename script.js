function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "Admin" && pass === "123456") {
        alert("เข้าสู่ระบบสำเร็จ!");
        window.location.href = "dashboard.html"; // หน้า Dashboard (ต้องสร้าง)
    } else {
        alert("เบอร์โทรศัพท์หรือรหัสผ่านผิด!");
    }
}