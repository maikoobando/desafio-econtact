/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

function largoDelNombre(nombre = "") 
{
  if(typeof(nombre) != 'string')
  {
    return "El parámetro recibido es invalido";
  }
  let longitud = nombre.length;

  if(longitud<=5)
  {
    return "Es un nombre corto. Su largo es de: " + longitud;
  }else if(longitud>=11)
  {
    return  "Es un nombre largo. Su largo es de: " +longitud;
  }
  else
  {
    return "Nombre de Estandar. Su lrgo es de: " + longitud;    
  }
}
console.log("Ej01=> "+ largoDelNombre("Maiko"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

function contarTipoNumber(arreglo = []) 
{
  let contadorNumeros = 0;
  arreglo.forEach(element => {
    if(typeof(element)=='number')
    {
      contadorNumeros++;
    }
  });
  return contadorNumeros;
}
const  miArreglo = [2, "3", "Hola", 43,23.5, "ok", "casa"];
console.log("Ej02=> Total de tipo Number: " + contarTipoNumber(miArreglo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

function datosPersona(persona = {}) 
{
  const { nombre: nombre, edad: edad, altura: altura } = persona;
  if(nombre == undefined || edad == undefined || altura == undefined)
  {
    return "El parametro no posee una estructura valida";
  }else
  {
    return `Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}`;
  }

}
const miObjecto = {
  nombre:"Maiko",
  edad: 40,
  altura: "185 cm"
}
console.log("Ej03=> " + datosPersona(miObjecto));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

function obtenerCantidadDePares(numero1, numero2) 
{
  if(typeof(numero1) != "number" || typeof(numero2)!="number")
  {
    console.error("Los parametros deben ser de tipo number");
    return undefined;
  }
  
  if(numero2<numero1)
  {
    console.error("El parametro 1 debe ser menor o igual que el parametro 2");
    return undefined;
  }
  
  let contadorPares=0;
  for(let i=numero1; i<=numero2; i++ )
  {
    if( ( i % 2)== 0)
    {
      contadorPares++;
    }
  }
  return contadorPares;
}

console.log("Ej04=> La cantidad de numeros pares es: " + obtenerCantidadDePares(2,4));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

function obtenerCantidadDeSedes(econtact = {}) 
{
  try
  {
    var k = Object.keys(econtact.datos).find(e=> e === "sedes");
    if(k != undefined)
    {
      return Object.keys(econtact.datos.sedes).length;
    }
    else
    {
      return undefined;
    }
  }catch
  {
    console.error("No posee la estructura validad");
    return undefined;
  }
}

console.log("Ej05=> Total de Sedes: " + obtenerCantidadDeSedes(objetoFijo));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

function obtenerTelefonoPeru(econtact = {})
{
  try
  {
    var k = Object.keys(econtact.datos.sedes.Peru).find(e=> e === "telefono");
    if(k != undefined)
    {
      const {telefono: telefono,  empleados: empleados} = econtact.datos.sedes.Peru;
      if(telefono == null|| telefono == undefined  || telefono == "" )
      {
        return "Perú no tiene asignado un teléfono";
      }
      else
      {
        return telefono;
      }
    }
    else
    {
      return "Perú no tiene asignado un teléfono";
    }
  }catch
  {
    console.error("No posee la estructura validad");
    return undefined;
  }
}
console.log("Ej06=> " + obtenerTelefonoPeru(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

function obtenerPaisesConTelefono(econtact = {}) 
{
  try
  {
    var k = Object.keys(econtact.datos).find(e=> e === "sedes");
    if(k != undefined)
    {
      let contadorTelefono = 0;
      let sedes = Object.keys(econtact.datos.sedes);
     
      sedes.forEach(s => 
      {
        const {telefono: telefono,  empleados: empleados} = econtact.datos.sedes[s];
        if(telefono != null && telefono != undefined  && telefono != "" )
        {
          contadorTelefono++;
        }
      });
    
      return contadorTelefono; 
   
    }
    else
    {
      return undefined;
    }
  }catch
  {
    console.error("No posee la estructura validad");
    return undefined;
  }
}

console.log("Ej07=> Paises con telefonos: "+obtenerPaisesConTelefono(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

function calculoMatematico(operacion, numero1, numero2) 
{
  if(typeof(numero1)!="number" || typeof(numero2)!= "number"){
    console.error("Tipo de dato es incorrecto");
    return undefined;
  }

  switch(operacion)
  {
    case "+":
      return numero1 + numero2;
      break;
    case"-":
      return numero1 - numero2;
      break;
    case"*":
      return numero1 * numero2;
      break;
    case"/":
      if(numero2==0)
      {
        console.error("El divisor no puede ser CERO");
        return undefined;
      }else{
        return numero1/numero2;
      }
      break;
    default:
      console.error("La operación matemática que intenta realizar es inexistente");
      return undefined;
      break;
  }
}

console.log("Ej08=> El resultado es: " + calculoMatematico("*", 6,5));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

function cargarArreglo(numero) 
{
  let result = [];
  const valorDoble = numero * 2;
  while(numero <= valorDoble)
  {
    result.push(numero);
    numero++;
  }
  return result;
}
console.log("Ej09=> Valores: "+cargarArreglo(10));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

function divisiblesPorCinco(numeros = []) 
{
  let contadorDivisibles =0;
  numeros.forEach(e => 
  {
    if(typeof(e) =='number' )
    {
      if((e % 5) == 0 ){
        contadorDivisibles++;
      }
    }else
    {
      console.error("El parametro debe ser de tipo de number");
    }
  });
  return contadorDivisibles;
}
const misNumeros = [1, 5, 4, 30, 15, 7, 10];
console.log("Ej10=> Total de numeros divisibles entre 5 son: "+ divisiblesPorCinco(misNumeros));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros = []) 
{
  let suma =0;
  numeros.forEach(e => 
  {
    if(typeof(e) =='number' )
    {
      suma += e;
    }else
    {
      console.error("El parametro debe ser de tipo de number");
    }
  });
  return suma;
}
console.log("Ej11=> sumatoria total es: "+sumatoria(misNumeros));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

function verificarCantidadEmpleados(econtact = {}) 
{
  try
  {
    let sumatoriaEmpleadosSedes=0;
    let totalempleados = econtact.datos.empleados;
    let sedes = Object.keys(econtact.datos.sedes);
    
    sedes.forEach(s => 
      {
        const {telefono: telefono,  empleados: empleados} = econtact.datos.sedes[s];
        if(empleados != null && empleados != undefined  && empleados != "" )
        {
          if(typeof(empleados)=='number'){
            sumatoriaEmpleadosSedes += empleados;
          }else{
            console.error("parametro debe ser numero");
          }
        }
      });
      
      if(sumatoriaEmpleadosSedes == totalempleados){
        return true;
      }
      else{
        return false
      }
    
  }catch(ex)
  {
    console.error("ERROR:" + ex);
    return undefined;
  }
 
}
console.log("Ej12=> Validacion Empleados2: " + verificarCantidadEmpleados(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

function calcularCuadrados(arreglo = []) 
{
  let result = [];
  arreglo.forEach(e=> {
    if(typeof(e)=='number')
    {
      result.push(e**2);
    }else
    {
      console.error("Parametro debe ser del tipo number");
    }
  });
  return result;
}
console.log("Ej13=> Los Resultados del calculo del cuadrado de un numero son: "+ calcularCuadrados(arregloFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

function validarArreglo(numeros = []) 
{
  if(numeros.length<6)
  {
    return false;
  }
  else
  {
    let sumatoria = 0;
    for(let i=0; i<numeros.length; i++)
    {
        if(typeof(numeros[i])=="number")
        {
          sumatoria += numeros[i];
        }else
        {
          console.error("Parametro debe ser del tipo number");
        }
    }

    if(sumatoria>100)
    {
      return true;
    }else{
      return false;
    }
  }
}
console.log("Ej14=> Sumtaria Supera el valor de 100: " + validarArreglo(arregloFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

function validarNombre(nombres = [], nombre) 
{
  if(nombres.find(e=> e.toLowerCase().trim()==nombre.toLowerCase().trim())){
    return true;
  }else{
    return false;
  }
}
let arregloNombres = ["Pedro","Maria","Jose","Luisa"];
console.log("Ej15=> Nombre Existe: "+ validarNombre(arregloNombres, "maria"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

function devolverPosicion(numeros = [], numero) 
{
  for(let i=0; i<numeros.length; i++)
  {
    if(numeros[i]===numero)
    {
      return i;
    }
  }
  return undefined;
}
console.log("Ej16=> El numero esta en la posicion: " + devolverPosicion(arregloFijo,26));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

function verificarSector(econtact = {}, sector) 
{
  try
  {
    let sectores =econtact.datos.sectores;
    
    if(sectores.find(e=> e.toLowerCase().trim() == sector.toLowerCase().trim()))
    {
      return true;
    }else{
      return false;
    }
  }catch(ex)
  {
    console.error("ERROR: "+ ex);
    return undefined;
  }
}
console.log("Ej17=> Validando el sector: " +verificarSector(objetoFijo, "finanzas") );
//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

function verificarCantidadEmpleados2(econtact = {}, cantidad) 
{
  try
  {
    let contadorSedes =0;
    let sedes = Object.keys(econtact.datos.sedes);
    
    sedes.forEach(s => 
      {
        const {telefono: telefono,  empleados: empleados} = econtact.datos.sedes[s];
        if(empleados != null && empleados != undefined  && empleados != "" )
        {
          if(typeof(empleados)=='number'){
            if(empleados<cantidad){
              contadorSedes++;
            }            
          }else{
            console.error("parametro debe ser numero");
          }
        }
      });

    return contadorSedes;
  }catch(ex)
  {
    console.error("ERROR:" + ex);
    return undefined;
  }
}
let cantidad = 27;
console.log(`Ej18=> Cantidad de sedes con empleados menor a ${cantidad}: ${verificarCantidadEmpleados2(objetoFijo,cantidad)}`);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */
function verificarClave(objeto = {}, clave) 
{
  try
  {
    let k = Object.keys(objeto);
    if(k.find(e=> e==clave))
    {
      return true
    }else{
      return false;
    }
  }catch(ex)
  {
    console.error("ERROR: " + ex)
  }
}
const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
console.log("Ej19=> Validacion de clave: " + verificarClave(alumno, "altura"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

function quitarParteDecimal(arregloNumerosReales = []) 
{
  let result = [];
  arregloNumerosReales.forEach(e => 
    {
      try
      {
        result.push(Math.trunc(e));
      }catch(ex)
      {
        console.error("Error: " + ex);
      }
    });
 return result;
}
console.log("Ej20=> Numeros Reales procesados: " + quitarParteDecimal(numerosReales));
