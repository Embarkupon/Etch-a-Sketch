let temp = 16;
generateGrid(temp);

const grid_button = document.querySelector(".grid-button");
grid_button.addEventListener("click", () => {
    let dimension = prompt("How many squares per side for the grid? (Max 100)");
    while (typeof dimension != "number" && (dimension > 100 || dimension < 1)) {
        console.log(typeof dimension + ", " + dimension);
        dimension = prompt("Please enter a number from '1' to '100'.")
    }
    if (dimension != null) {
        removeGrid(temp);
        generateGrid(dimension);
        temp = dimension;
    }
});

function generateGrid(grid_size) {
    const grid_container = document.querySelector(".grid-container");
    const grid_array = [];
    const cell_array = [];
    const cell_size = 32;
    const row_width = cell_size*grid_size;
    console.log(grid_container);
    for(let i = 0; i < grid_size; i++) {
        grid_array[i] = document.createElement("div");
        grid_array[i].setAttribute("style", `display: flex; flex-direction: row; width: ${row_width}px; height: ${cell_size}px;`);
        grid_array[i].classList.add(`grid-box`);
        for(let j = 0; j < grid_size; j++) {
            cell_array[j] = document.createElement("div");
            cell_array[j].setAttribute("style", `border: solid 1px; border-color: black; width: ${cell_size}px; height: ${cell_size}`);
            cell_array[j].classList.add(`grid-cell`);
            grid_array[i].appendChild(cell_array[j])
        }
        grid_container.appendChild(grid_array[i]);
    }
    console.log(grid_array.length);
    draw(cell_size);
}

function draw(cell_size) {
    const grid_cells = document.querySelectorAll(".grid-cell");
    grid_cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.setAttribute("style", `background-color: black; border: solid 1px; border-color: black; width: ${cell_size}px; height: ${cell_size}`)
        });
    });
}

function removeGrid(num) {
    //num is the previous squares per side of the grid
    for(let x = 0; x < num; x++) {
        document.querySelector(".grid-container").removeChild(document.querySelector(".grid-box"));
    }
    /*document.querySelectorAll("grid-box").forEach((bruh) => {
        document.querySelector(".grid-container").removeChild(bruh);
    });*/
}