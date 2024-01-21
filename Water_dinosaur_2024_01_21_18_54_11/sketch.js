function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  CrankNicholson(10, 10000, 100, 100, 0.0005);
}

function CrankNicholson(L, T, Nx, Nt, alpha) {
  const dx = L / Nx;
  const dt = T / Nt;
  const rho = (alpha * dt) / dx;

  let u = [];

  for (let i = 0; i <= Nx; i++) {
    u[i] = [];
    for (let j = 0; j <= Nt; j++) {
      if (i == 0) {
        u[i][j] = 0;
      } else if (i == Nx) {
        u[i][j] = 1;
      } else {
        u[i][j] = 0.5;
      }
    }
  }

  for (let j = 0; j < Nt; j++) {
    for (let i = 1; i < Nx; i++) {
      u[i][j + 1] =
        rho * u[i + 1][j] + (1 - 2 * rho) * u[i][j] + rho * u[i - 1][j];
    }
  }

  // Dibujar la evolución de la temperatura en el canvas
  let rectWidth = width / Nx;
  let rectHeight = height / Nt;

  for (let j = 0; j < Nt; j++) {
    for (let i = 0; i < Nx; i++) {
      let temp = u[i][j];
      let colorValue = map(temp, 0, 1, 0, 255);

      noStroke();
      fill(colorValue, 50, 100);
      rect(i * rectWidth, j * rectHeight, rectWidth, rectHeight);
    }
  }
}

// Detectar el movimiento del ratón y añadir la perturbación
// function mouseMoved() {
//   let i = floor(mouseX / (width / 100)); // Calcular la posición en la matriz u
//   let j = floor(mouseY / (height / 100)); // Calcular la posición en la matriz u

//   // Aplicar la perturbación de 1 grado en el área del mouse
//   if (i >= 0 && i <= 100 && j >= 0 && j <= 100) {
//     u[i][j] += 1; // Añadir una perturbación de 1 grado en la posición del ratón
//   }
// }

// function setup() {
//   createCanvas(1000, 800);
//   background(255);
// }

// function draw() {
//   background(220);
//   CrankNicholson(10, 10000, 100, 100, 0.0005);
// }

// function CrankNicholson(L, T, Nx, Nt, alpha) {
//   const dx = L / Nx;
//   const dt = T / Nt;
//   const rho = (alpha * dt) / dx;

//   let u = [];

//   for (let i = 0; i <= Nx; i++) {
//     u[i] = [];
//     for (let j = 0; j <= Nt; j++) {
//       if (i == 0) {
//         u[i][j] = 0;
//       } else if (i == Nx) {
//         u[i][j] = 1;
//       } else {
//         u[i][j] = 0.5;
//       }
//     }
//   }
//   // console.log('abans', u);

//   for (let j = 0; j < Nt; j++) {
//     for (let i = 1; i < Nx; i++) {
//       u[i][j + 1] =
//         rho * u[i + 1][j] + (1 - 2 * rho) * u[i][j] + rho * u[i - 1][j];
//     }
//   }

//   // console.log('despres', u);
//   console.log("Temperatura en el tiempo final:");
//   for (let i = 0; i <= Nx; i++) {
//     console.log(
//       `x = ${i * dx.toFixed(2)}, rho = ${rho} t = ${T.toFixed(2)} : ${u[i][
//         Nt
//       ].toFixed(4)}`
//     );
//   }

//   let rectWidth = width / u.length;
//   let rectHeight = height;
//   noStroke();
//   // Dibujar el rectángulo que representa la evolución de la temperatura
//   for (let i = 0; i < u.length; i++) {
//     let temp = u[i][Nt]; // Valor de temperatura en esta posición
//     let colorValue = map(temp, 0, 1, 0, 255); // Mapear valores de temperatura a colores

//     fill(colorValue, 90, 100); // Asignar color basado en la temperatura
//     rect(i * rectWidth, 0, rectWidth, rectHeight); // Dibujar un rectángulo coloreado
//   }
// }
