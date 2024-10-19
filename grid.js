main();
function main() {
    const grid_container = document.querySelector(".grid-container");
    const dimension = 16
    const grid_array = [];
    const cell_array = [];
    const cell_size = 36;
    const row_width = 36*dimension;
    console.log(grid_container);
    for(let i = 0; i < dimension; i++) {
        grid_array[i] = document.createElement("div");
        grid_array[i].setAttribute("style", `display: flex; flex-direction: row; width: ${row_width}px; height: ${cell_size}px;`);
        grid_array[i].classList.add(`grid-box`);
        for(let j = 0; j < dimension; j++) {
            cell_array[j] = document.createElement("div");
            cell_array[j].setAttribute("style", `border: solid 1px; border-color: black; width: ${cell_size}px; height: ${cell_size}`);
            cell_array[j].classList.add(`grid-cell`);
            grid_array[i].appendChild(cell_array[j])
        }
        grid_container.appendChild(grid_array[i]);
    }
    console.log(grid_array.length);
}