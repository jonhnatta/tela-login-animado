// Animação Login

const ulSqueres = document.querySelector("ul.squares")

for (let i = 0; i < 11; i++){

  const li = document.createElement("li");

  const size = Math.floor(Math.random() * (120 - 10) + 10);

  const position = Math.random() * (99 - 1) +1;

  const delay = Math.random() * (5 - 0.1) + 0.1;

  const duration = Math.random() * (24 - 12) + 12;

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;

  ulSqueres.appendChild(li);

}