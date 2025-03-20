let img = document.getElementById("imagen");
img.src = '../img/';
const preguntas = [
    {
        question: "1. ¿Qué es la computación en la nube (Cloud Computing)?",
        answer: [
            "A) Un modelo de entrega de servicios a través de internet",
            "B) Un sistema operativo avanzado",
            "C) Un nuevo tipo de hardware de computación",
            "D) Un lenguaje de programación"
        ]
    },
    {
        question: "2. ¿Cuál de los siguientes es un proveedor de servicios en la nube?",
        answer: [
            "A) Windows",
            "B) Amazon Web Services (AWS)",
            "C) Microsoft Office",
            "D) Photoshop"
        ]
    },
    {
        question: "3. ¿Cuál de estas opciones es un beneficio clave de la computación en la nube?",
        answer: [
            "A) Se requiere comprar servidores físicos costosos",
            "B) Se paga solo por lo que se usa",
            "C) Solo se puede acceder desde una computadora específica",
            "D) No permite escalabilidad"
        ]
    },
    {
        question: "4. ¿Qué significa SaaS en computación en la nube?",
        answer: [
            "A) Software and Application Services",
            "B) Security as a Software",
            "C) Software as a Service",
            "D) System as a Solution"
        ]
    },
    {
        question: "5. ¿Qué modelo de nube permite a los usuarios ejecutar sus propias aplicaciones sin gestionar la infraestructura?",
        answer: [
            "A) IaaS",
            "B) SaaS",
            "C) PaaS",
            "D) VPN"
        ]
    },
    {
        question: "6. ¿Cuál de estos no es un tipo de implementación de nube?",
        answer: [
            "A) Nube pública",
            "B) Nube privada",
            "C) Nube híbrida",
            "D) Nube local"
        ]
    },
    {
        question: "7. ¿Qué recurso NO es comúnmente ofrecido por la computación en la nube?",
        answer: [
            "A) Almacenamiento",
            "B) Procesamiento",
            "C) Electricidad",
            "D) Redes"
        ]
    },
    {
        question: "8. ¿Cuál es un ejemplo de un servicio de almacenamiento en la nube?",
        answer: [
            "A) Google Drive",
            "B) Excel",
            "C) Bluetooth",
            "D) WhatsApp"
        ]
    },
    {
        question: "9. ¿Qué protocolo de internet se usa comúnmente para acceder a servicios en la nube?",
        answer: [
            "A) FTP",
            "B) HTTP/HTTPS",
            "C) DNS",
            "D) SMTP"
        ]
    },
    {
        question: "10. ¿Cuál de los siguientes modelos de servicio ofrece acceso a máquinas virtuales y almacenamiento sin gestionar hardware?",
        answer: [
            "A) SaaS",
            "B) IaaS",
            "C) PaaS",
            "D) DaaS"
        ]
    }
]

const pregunta = document.getElementById("pregunta");
const btn1 = document.getElementById();
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let indicePreguntas = 0;

function mostrarPregunta(){
    pregunta.innerHTML = preguntas[indicePreguntas].question;
    btn1.innerHTML = preguntas[indicePreguntas].answer[0];
    btn1.innerHTML = preguntas[indicePreguntas].answer[1];
    btn1.innerHTML = preguntas[indicePreguntas].answer[2];
    btn1.innerHTML = preguntas[indicePreguntas].answer[3];
}

mostrarPregunta()