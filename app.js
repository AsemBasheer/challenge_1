document.addEventListener('DOMContentLoaded',  ()=> {
    const cells= document.querySelectorAll('.cell')
    console.log(cells)
    cells.forEach((cell,i)=>{
        cell.addEventListener('click',()=>{
            console.log(i)
            cells[i].classList.add('clickedX')
        })
    })
});