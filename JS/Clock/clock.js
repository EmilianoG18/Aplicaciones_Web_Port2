function drawClock() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.clearRect(-radius, -radius, canvas.width, canvas.height);

    
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#333';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Manecilla de las horas
    ctx.save();
    ctx.rotate(-Math.PI / 2 + hours * (Math.PI / 6) + (Math.PI / 6) * (minutes / 60));
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#333';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -radius * 0.5);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // Manecilla de los minutos
    ctx.save();
    ctx.rotate(-Math.PI / 2 + minutes * (Math.PI / 30) + (Math.PI / 30) * (seconds / 60));
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#333';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -radius * 0.8);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // Manecilla de los segundos
    ctx.save();
    ctx.rotate(-Math.PI / 2 + seconds * (Math.PI / 30));
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -radius * 0.9);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}
