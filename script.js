// const cvs = document.getElementById('snake');
// const ctx = cvs.getContext('2d');
// const scoreEl = document.getElementById('score');

// const CELL = 24;
// const COLS = Math.floor(cvs.width / CELL);
// const ROWS = Math.floor(cvs.height / CELL);

// let snake = [{x:5,y:5}], dir = {x:1,y:0}, food = spawnFood(), score = 0, dead = false;
// let queuedDir = dir;

// function spawnFood(){
//   while(true){
//     const f = {x: Math.floor(Math.random()*COLS), y: Math.floor(Math.random()*ROWS)};
//     if(!snake.some(s=>s.x===f.x && s.y===f.y)) return f;
//   }
// }

// window.addEventListener('keydown', e=>{
//   const k = e.key.toLowerCase();
//   const d = {x:queuedDir.x, y:queuedDir.y};
//   if(k==='arrowup' || k==='w') d.x=0,d.y=-1;
//   if(k==='arrowdown' || k==='s') d.x=0,d.y= 1;
//   if(k==='arrowleft' || k==='a') d.x=-1,d.y=0;
//   if(k==='arrowright'|| k==='d') d.x= 1,d.y=0;
//   // запрет разворота на 180°
//   if(d.x!==-dir.x || d.y!==-dir.y) queuedDir = d;
// });

// function step(){
//   if(dead) return;
//   dir = queuedDir;
//   const head = {x: (snake[0].x + dir.x + COLS) % COLS, y: (snake[0].y + dir.y + ROWS) % ROWS};
//   if(snake.some(s=>s.x===head.x && s.y===head.y)){ gameOver(); return; }
//   snake.unshift(head);
//   if(head.x===food.x && head.y===food.y){
//     score+=10; scoreEl.textContent = score; food = spawnFood();
//   } else {
//     snake.pop();
//   }
//   draw();
//   setTimeout(step, 110); // скорость
// }

// function draw(){
//   ctx.clearRect(0,0,cvs.width,cvs.height);
//   // сетка (легкая)
//   ctx.globalAlpha=0.05;
//   for(let x=0;x<COLS;x++){ for(let y=0;y<ROWS;y++){
//     ctx.strokeRect(x*CELL,y*CELL,CELL,CELL);
//   } }
//   ctx.globalAlpha=1;
//   // еда
//   ctx.fillStyle='#e74c3c';
//   ctx.fillRect(food.x*CELL,food.y*CELL,CELL,CELL);
//   // змейка
//   ctx.fillStyle='#2ecc71';
//   snake.forEach((s,i)=>{
//     ctx.fillRect(s.x*CELL,s.y*CELL,CELL,CELL);
//   });
// }

// function gameOver(){
//   dead = true;
//   window.parent?.postMessage?.({type:'snake_score', score}, '*');
//   ctx.fillStyle='rgba(0,0,0,0.6)';
//   ctx.fillRect(0,0,cvs.width,cvs.height);
//   ctx.fillStyle='#fff';
//   ctx.font='bold 28px system-ui';
//   ctx.textAlign='center';
//   ctx.fillText('Игра окончена', cvs.width/2, cvs.height/2-10);
//   ctx.font='16px system-ui';
//   ctx.fillText('Очки: '+score, cvs.width/2, cvs.height/2+20);
// }

// draw(); step();
