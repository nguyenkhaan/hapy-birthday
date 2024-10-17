//Thực hiện nhúng code 
// Tạo hiệu ứng pháo hoa trên toàn màn hình
const container = document.body;
const fireworks = new Fireworks.default(container, {
    hue: { min: 0, max: 360 },  // Màu sắc ngẫu nhiên
    rocketsPoint: { min: 0, max: 100 }, // Vị trí phát ngẫu nhiên
    speed: 2,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 150,
});

// Hàm bắn pháo hoa
function fireRandomFirework() {
    const randomX = Math.random() * window.innerWidth;  // Vị trí ngẫu nhiên theo chiều ngang
    const randomY = Math.random() * window.innerHeight; // Vị trí ngẫu nhiên theo chiều dọc
    fireworks.setOptions({ rocketsPoint: randomX });    // Cập nhật vị trí ngẫu nhiên
    fireworks.launch();                                // Bắn pháo hoa
}

// Bắt sự kiện nhấn nút để bắn pháo hoa
document.getElementById('button1').addEventListener('click', function() {
    fireRandomFirework();
});

fireworks.start();  // Bắt đầu hiệu ứng pháo hoa