class Automovil{
    constructor(nombre, marca, precio){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}


let autos = []

if(localStorage.getItem("autos")){
    autos = JSON.parse(localStorage.getItem("autos")) ?? [];
}else{
    localStorage.setItem("autos", JSON.stringify(autos));
}

const formCoches = document.getElementById("formCoches");
const botonLista = document.getElementById("mostrarLista");
const divListas = document.getElementById("divListas");

formCoches.addEventListener("submit",(e)=>{
        e.preventDefault();
        const datForm = new FormData(e.target);

     const listaObj = new Automovil(datForm.get("nombre"), datForm.get("marca"), datForm.get("precio"));
   autos.push(listaObj);
   localStorage.setItem("autos", JSON.stringify(autos)); 
   formCoches.reset();
})

botonLista.addEventListener("click",()=>{
    const listasStorage = JSON.parse(localStorage.getItem("autos")) ?? [];
    divListas.innerHTML = "";
    listasStorage.forEach((lista, indice)=>{
        divListas.innerHTML +=`
        <div class="card text-white bg-primary mb-3" id="lista${indice}" style="max-width: 14rem; margin : 4px;">
           <div class="card-header"><h2>${lista.nombre}</h2></div>
           <div class="card-body">
           <p class="card-text">${lista.marca}</p>
           <button class="btn btn-info" >${lista.precio}</button><br><br>
           <button class="btn btn-success" >Borrar Automovil</button>
           </div>
      </div>
      `
    });

      listasStorage.forEach((lista, indice) =>{
        document.getElementById(`lista${indice}`).children[1].children[4].addEventListener('click',()=>{
            document.getElementById(`lista${indice}`).remove();
            autos?.splice(indice,1) ?? indice,0;
            localStorage.setItem("autos", JSON.stringify(autos));
            
        })
     
    })

});