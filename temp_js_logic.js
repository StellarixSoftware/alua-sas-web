
/* ============================================ 
   LÓGICA DE DEPARTAMENTOS Y CIUDADES (COLOMBIA) 
============================================ */
const colombiaData = {
    "Amazonas": ["Leticia", "Puerto Nariño"],
    "Antioquia": ["Medellín", "Bello", "Itagüí", "Envigado", "Apartadó", "Rionegro"],
    "Arauca": ["Arauca", "Arauquita", "Saravena"],
    "Atlántico": ["Barranquilla", "Soledad", "Malambo", "Sabanalarga"],
    "Bolívar": ["Cartagena", "Magangué", "Turbaco"],
    "Boyacá": ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá"],
    "Caldas": ["Manizales", "La Dorada", "Chinchiná"],
    "Caquetá": ["Florencia", "San Vicente del Caguán"],
    "Casanare": ["Yopal", "Aguazul", "Villanueva"],
    "Cauca": ["Popayán", "Santander de Quilichao"],
    "César": ["Valledupar", "Aguachica"],
    "Chocó": ["Quibdó"],
    "Córdoba": ["Montería", "Lorica", "Sahagún"],
    "Cundinamarca": ["Bogotá", "Mosquera", "Funza", "Soacha", "Chía", "Zipaquirá", "Facatativá", "Girardot", "Madrid", "Cajicá"],
    "Guainía": ["Inírida"],
    "Guaviare": ["San José del Guaviare"],
    "Huila": ["Neiva", "Pitalito"],
    "La Guajira": ["Riohacha", "Maicao"],
    "Magdalena": ["Santa Marta", "Ciénaga"],
    "Meta": ["Villavicencio", "Acacías"],
    "Nariño": ["Pasto", "Tumaco", "Ipiales"],
    "Norte de Santander": ["Cúcuta", "Ocaña", "Villa del Rosario"],
    "Putumayo": ["Mocoa", "Puerto Asís"],
    "Quindío": ["Armenia", "Calarcá"],
    "Risaralda": ["Pereira", "Dosquebradas"],
    "San Andrés y Providencia": ["San Andrés"],
    "Santander": ["Bucaramanga", "Floridablanca", "Barrancabermeja", "Girón", "Piedecuesta"],
    "Sucre": ["Sincelejo", "Corozal"],
    "Tolima": ["Ibagué", "Espinal"],
    "Valle del Cauca": ["Cali", "Buenaventura", "Palmira", "Tulua", "Yumbo", "Cartago"],
    "Vaupés": ["Mitú"],
    "Vichada": ["Puerto Carreño"]
};

document.addEventListener('DOMContentLoaded', function () {
    const deptoSelect = document.getElementById('departamento');
    const ciudadSelect = document.getElementById('ciudad');

    // Llenar Departamentos
    for (let depto in colombiaData) {
        let option = document.createElement('option');
        option.value = depto;
        option.textContent = depto;
        deptoSelect.appendChild(option);
    }

    // Evento Cambio de Departamento
    deptoSelect.addEventListener('change', function () {
        const selectedDepto = this.value;

        // Limpiar ciudades
        ciudadSelect.innerHTML = '<option value="">Seleccione...</option>';

        if (selectedDepto && colombiaData[selectedDepto]) {
            ciudadSelect.disabled = false;
            colombiaData[selectedDepto].forEach(ciudad => {
                let option = document.createElement('option');
                option.value = ciudad;
                option.textContent = ciudad;
                ciudadSelect.appendChild(option);
            });
        } else {
            ciudadSelect.disabled = true;
            ciudadSelect.innerHTML = '<option value="">Seleccione Departamento primero</option>';
        }
    });
});
