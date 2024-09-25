

let persona={
    nombre:"Cesar",
    apellido:"Martinez",
    telefono:3215668657,
    edad:18,
    activo: true,
    saldo:2000000,
    tarjeta:2323,
};


const {nombre,apellido,telefono}=persona
console.log(apellido,telefono)

console.log(document.querySelector(".recarga-input"))
const consignar=document.getElementById("consignar");
const ventana=document.getElementById("ventanaConsignar");
const cantidadDinero=document.getElementById("cantidadDinero");
cantidadDinero.innerText=`$ ${persona.saldo}`;
let cantidadConsignar = document.getElementById("dineroAConsignar")   //
const seguir=document.getElementById("seguir")
const datos=document.querySelector(".datos")

datos.children[0].innerText=` Bienvenido ${persona.nombre} 👋`

consignar.addEventListener("click",function(event){
    if(ventana.classList.contains("esconder")){
        ventana.classList.remove("esconder")
        
    }else{
        ventana.classList.add("esconder")
    }
})




const cerrarVentana=ventana.children[0]

cerrarVentana.addEventListener("click",function(){
    ventana.classList.add("esconder")
    
})



seguir.addEventListener("click",(event)=>{
    if (cantidadConsignar.value.length==0){
        document.write("debes escribir una cantidad")
    }else{
        if(persona.saldo>=cantidadConsignar.value){
            persona.saldo-=cantidadConsignar.value
            cantidadDinero.innerText=`${persona.saldo}`
            ventana.classList.add("esconder")
        }else{
            alert("cantidad de monton es muy bajo")
        }
    }
    
})




const recargar=document.getElementById("ventanaRecargar")
const botonRecargar=document.getElementById("botonRecargar")
const botonVentanaRecargarCerrar=document.getElementById("ventanaCerrar")

botonVentanaRecargarCerrar.addEventListener("click",function() {
    recargar.classList.add("esconder")
    
})


botonRecargar.addEventListener("click",function(){
    if(recargar.classList.contains("esconder")){
        recargar.classList.remove("esconder")
    }else{
        recargar.classList.add("esconder")
    }
})



const ventanaMas=document.getElementById("mas")
const botonVentanaMas=document.getElementById("bottonMas")



botonVentanaMas.addEventListener("click",()=>{
    if(ventanaMas.classList.contains("esconder")){
        ventanaMas.classList.remove("esconder")
    }else{
        ventanaMas.classList.add("esconder")
    }
})



const ventanaCard=document.getElementById("ventanaCard")
const botonCard=document.getElementById("botonCard")
const tarjeta=document.querySelector(".tarjeta")





botonCard.addEventListener("click",function(){
    if(ventanaCard.classList.contains("esconder")){
        ventanaCard.classList.remove("esconder")
    }else{
        ventanaCard.classList.add("esconder")
    }
})


const nombreTarjeta = tarjeta.children[2].innerText= ` ${persona["nombre"]} ${persona["apellido"]}`
console.log(nombreTarjeta)



const candado=document.querySelector(".candado")


candado.addEventListener("click",()=>{
    if(candado.children[0].classList.contains("fa-solid fa-lock")){
        candado.children[0].classList.remove("fa-solid fa-lock")
        candado.children[0].classList.add("fa-solid fa-lock-open")
    }
})

console.log(candado.children[0])


const cerrarVentanaTarjetaCard=document.getElementById("cerrarTarjetaCard")
console.dir(cerrarVentanaTarjetaCard)


cerrarVentanaTarjetaCard.addEventListener("click",()=>{
    ventanaCard.classList.add("esconder")
})


