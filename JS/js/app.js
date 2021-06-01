const personas = [
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pablo', edad: 22 },
    { nombre: 'Karen', edad: 10 },
    { nombre: 'Karina', edad: 54 },
    { nombre: 'Miguel', edad: 43 },
]

console.log(personas);

//Mayores de 28 años
const mayores = personas.filter(persona => {
    return persona.edad > 28;
});

console.log(mayores);

const karen = personas.find(persona => {
    return persona.nombre === 'Karen';
});

console.log('Karen tiene ' + karen.edad);