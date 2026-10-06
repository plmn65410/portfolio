// Portfolio JavaScript

console.log("Portfolio ของ PETCH ทำงานแล้ว");


// แสดงข้อความเมื่อคลิกปุ่มดูผลงาน
const projectLinks = document.querySelectorAll(".project-content a");

projectLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        if (link.getAttribute("href") === "#") {
            event.preventDefault();

            alert("กำลังเตรียมผลงานชิ้นนี้ครับ");
        }

    });

});