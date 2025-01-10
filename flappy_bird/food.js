// 每隔一段 5-10s 食物出現 3s，碰到隨機改變鳥的大小 5s

function Food(){
    this.x = 100;
    this.y = random(height);
    this.size = random(15,30);

    this.show(){
        fill(120,40,50);
        ellipse(this.x, this.y , this.size);
    }
}