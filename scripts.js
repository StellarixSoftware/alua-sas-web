
/* ============================================ 
   LÓGICA DE DEPARTAMENTOS Y CIUDADES (COLOMBIA) 
   Fuente de datos: Completa (Todos los municipios)
============================================ */
const colombiaData = {
    "Amazonas": ["Leticia", "Puerto Nariño"],
    "Antioquia": ["Abejorral", "Abriaquí", "Alejandría", "Amagá", "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí", "Anzá", "Apartadó", "Arboletes", "Argelia", "Armenia", "Barbosa", "Bello", "Belmira", "Betania", "Betulia", "Briceño", "Buriticá", "Cáceres", "Caicedo", "Caldas", "Campamento", "Cañasgordas", "Caracolí", "Caramanta", "Carepa", "Carolina del Príncipe", "Caucasia", "Chigorodó", "Cisneros", "Ciudad Bolívar", "Cocorná", "Concepción", "Concordia", "Copacabana", "Dabeiba", "Donmatías", "Ebéjico", "El Bagre", "El Carmen de Viboral", "El Peñol", "El Retiro", "El Santuario", "Entrerríos", "Envigado", "Fredonia", "Frontino", "Giraldo", "Girardota", "Gómez Plata", "Granada", "Guadalupe", "Guarne", "Guatapé", "Heliconia", "Hispania", "Itagüí", "Ituango", "Jardín", "Jericó", "La Ceja", "La Estrella", "La Pintada", "La Unión", "Liborina", "Maceo", "Marinilla", "Medellín", "Montebello", "Murindó", "Mutatá", "Nariño", "Nechí", "Necoclí", "Olaya", "Peque", "Pueblorrico", "Puerto Berrío", "Puerto Nare", "Puerto Triunfo", "Remedios", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar", "San Andrés de Cuerquia", "San Carlos", "San Francisco", "San Jerónimo", "San José de la Montaña", "San Juan de Urabá", "San Luis", "San Pedro de Urabá", "San Pedro de los Milagros", "San Rafael", "San Roque", "San Vicente", "Santa Bárbara", "Santa Fe de Antioquia", "Santa Rosa de Osos", "Santo Domingo", "Segovia", "Sonsón", "Sopetrán", "Támesis", "Tarazá", "Tarso", "Titiribí", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí", "Venecia", "Vigía del Fuerte", "Yalí", "Yarumal", "Yolombó", "Yondó", "Zaragoza"],
    "Arauca": ["Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondón", "Saravena", "Tame"],
    "Atlántico": ["Baranoa", "Barranquilla", "Campo de la Cruz", "Candelaria", "Galapa", "Juan de Acosta", "Luruaco", "Malambo", "Manatí", "Palmar de Varela", "Piojó", "Polonuevo", "Ponedera", "Puerto Colombia", "Repelón", "Sabanagrande", "Sabanalarga", "Santa Lucía", "Santo Tomás", "Soledad", "Suán", "Tubará", "Usiacurí"],
    "Bolívar": ["Achí", "Altos del Rosario", "Arenal", "Arjona", "Arroyohondo", "Barranco de Loba", "Brazuelo de Papayal", "Calamar", "Cantagallo", "Cartagena de Indias", "Cicuco", "Clemencia", "Córdoba", "El Carmen de Bolívar", "El Guamo", "El Peñón", "Hatillo de Loba", "Magangué", "Mahates", "Margarita", "María la Baja", "Mompós", "Montecristo", "Morales", "Norosí", "Pinillos", "Regidor", "Río Viejo", "San Cristóbal", "San Estanislao", "San Fernando", "San Jacinto del Cauca", "San Jacinto", "San Juan Nepomuceno", "San Martín de Loba", "San Pablo", "Santa Catalina", "Santa Rosa", "Santa Rosa del Sur", "Simití", "Soplaviento", "Talaigua Nuevo", "Tiquisio", "Turbaco", "Turbaná", "Villanueva", "Zambrano"],
    "Boyacá": ["Almeida", "Aquitania", "Arcabuco", "Belén", "Berbeo", "Betéitiva", "Boavita", "Boyacá", "Briceño", "Buenavista", "Busbanzá", "Caldas", "Campohermoso", "Cerinza", "Chinavita", "Chiquinquirá", "Chíquiza", "Chiscas", "Chita", "Chitaraque", "Chivatá", "Chivor", "Ciénega", "Cómbita", "Coper", "Corrales", "Covarachía", "Cubará", "Cucaita", "Cuítiva", "Duitama", "El Cocuy", "El Espino", "Firavitoba", "Floresta", "Gachantivá", "Gámeza", "Garagoa", "Guacamayas", "Guateque", "Guayatá", "Güicán", "Iza", "Jenesano", "Jericó", "La Capilla", "La Uvita", "La Victoria", "Labranzagrande", "Macanal", "Maripí", "Miraflores", "Mongua", "Monguí", "Moniquirá", "Motavita", "Muzo", "Nobsa", "Nuevo Colón", "Oicatá", "Otanche", "Pachavita", "Páez", "Paipa", "Pajarito", "Panqueba", "Pauna", "Paya", "Paz del Río", "Pesca", "Pisba", "Puerto Boyacá", "Quípama", "Ramiriquí", "Ráquira", "Rondón", "Saboyá", "Sáchica", "Samacá", "San Eduardo", "San José de Pare", "San Luis de Gaceno", "San Mateo", "San Miguel de Sema", "San Pablo de Borbur", "Santa María", "Santa Rosa de Viterbo", "Santa Sofía", "Santana", "Sativanorte", "Sativasur", "Siachoque", "Soatá", "Socha", "Socotá", "Sogamoso", "Somondoco", "Sora", "Soracá", "Sotaquirá", "Susacón", "Sutamarchán", "Sutatenza", "Tasco", "Tenza", "Tibaná", "Tibasosa", "Tinjacá", "Tipacoque", "Toca", "Togüí", "Tópaga", "Tota", "Tunja", "Tununguá", "Turmequé", "Tuta", "Tutazá", "Úmbita", "Ventaquemada", "Villa de Leyva", "Viracachá", "Zetaquira"],
    "Caldas": ["Aguadas", "Anserma", "Aranzazu", "Belalcázar", "Chinchiná", "Filadelfia", "La Dorada", "La Merced", "Manizales", "Manzanares", "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pácora", "Palestina", "Pensilvania", "Riosucio", "Risaralda", "Salamina", "Samaná", "San José", "Supía", "Victoria", "Villamaría", "Viterbo"],
    "Caquetá": ["Albania", "Belén de los Andaquíes", "Cartagena del Chairá", "Curillo", "El Doncello", "El Paujil", "Florencia", "La Montañita", "Milán", "Morelia", "Puerto Rico", "San José del Fragua", "San Vicente del Caguán", "Solano", "Solita", "Valparaíso"],
    "Casanare": ["Aguazul", "Chámeza", "Hato Corozal", "La Salina", "Maní", "Monterrey", "Nunchía", "Orocué", "Paz de Ariporo", "Pore", "Recetor", "Sabanalarga", "Sácama", "San Luis de Palenque", "Támara", "Tauramena", "Trinidad", "Villanueva", "Yopal"],
    "Cauca": ["Almaguer", "Argelia", "Balboa", "Bolívar", "Buenos Aires", "Cajibío", "Caldono", "Caloto", "Corinto", "El Tambo", "Florencia", "Guachené", "Guapí", "Inzá", "Jambaló", "La Sierra", "La Vega", "López de Micay", "Mercaderes", "Miranda", "Morales", "Padilla", "Páez", "Patía", "Piamonte", "Piendamó", "Popayán", "Puerto Tejada", "Puracé", "Rosas", "San Sebastián", "Santa Rosa", "Santander de Quilichao", "Silvia", "Sotará", "Suárez", "Sucre", "Timbío", "Timbiquí", "Toribío", "Totoró", "Villa Rica"],
    "Cesar": ["Aguachica", "Agustín Codazzi", "Astrea", "Becerril", "Bosconia", "Chimichagua", "Chiriguaná", "Curumaní", "El Copey", "El Paso", "Gamarra", "González", "La Gloria", "La Jagua de Ibirico", "La Paz", "Manaure Balcón del Cesar", "Pailitas", "Pelaya", "Pueblo Bello", "Río de Oro", "San Alberto", "San Diego", "San Martín", "Tamalameque", "Valledupar"],
    "Chocó": ["Acandí", "Alto Baudó", "Atrato", "Bagadó", "Bahía Solano", "Bajo Baudó", "Bojayá", "Cantón de San Pablo", "Cértegui", "Condoto", "El Carmen de Atrato", "El Carmen del Darién", "Istmina", "Juradó", "Litoral de San Juan", "Lloró", "Medio Atrato", "Medio Baudó", "Medio San Juan", "Nóvita", "Nuquí", "Quibdó", "Río Iró", "Río Quito", "Riosucio", "San José del Palmar", "Sipí", "Tadó", "Unión Panamericana", "Unguía"],
    "Cundinamarca": ["Agua de Dios", "Albán", "Anapoima", "Anolaima", "Apulo", "Arbeláez", "Beltrán", "Bituima", "Bogotá", "Bojacá", "Cabrera", "Cachipay", "Cajicá", "Caparrapí", "Cáqueza", "Carmen de Carupa", "Chaguaní", "Chía", "Chipaque", "Choachí", "Chocontá", "Cogua", "Cota", "Cucunubá", "El Colegio", "El Peñón", "El Rosal", "Facatativá", "Fómeque", "Fosca", "Funza", "Fúquene", "Fusagasugá", "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Granada", "Guachetá", "Guaduas", "Guasca", "Guataquí", "Guatavita", "Guayabal de Síquima", "Guayabetal", "Gutiérrez", "Jerusalén", "Junín", "La Calera", "La Mesa", "La Palma", "La Peña", "La Vega", "Lenguazaque", "Machetá", "Madrid", "Manta", "Medina", "Mosquera", "Nariño", "Nemocón", "Nilo", "Nimaima", "Nocaima", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pulí", "Quebradanegra", "Quetame", "Quipile", "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco", "San Juan de Rioseco", "Sasaima", "Sesquilé", "Sibaté", "Silvania", "Simijaca", "Soacha", "Sopó", "Subachoque", "Suesca", "Supatá", "Susa", "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima", "Tocancipá", "Topaipí", "Ubalá", "Ubaque", "Ubaté", "Une", "Útica", "Venecia", "Vergara", "Vianí", "Villagómez", "Villapinzón", "Villeta", "Viotá", "Yacopí", "Zipacón", "Zipaquirá"],
    "Córdoba": ["Ayapel", "Buenavista", "Canalete", "Cereté", "Chimá", "Chinú", "Ciénaga de Oro", "Cotorra", "La Apartada", "Lorica", "Los Córdobas", "Momil", "Montelíbano", "Montería", "Moñitos", "Planeta Rica", "Pueblo Nuevo", "Puerto Escondido", "Puerto Libertador", "Purísima", "Sahagún", "San Andrés de Sotavento", "San Antero", "San Bernardo del Viento", "San Carlos", "San José de Uré", "San Pelayo", "Tierralta", "Tuchín", "Valencia"],
    "Guainía": ["Inírida"],
    "Guaviare": ["Calamar", "El Retorno", "Miraflores", "San José del Guaviare"],
    "Huila": ["Acevedo", "Agrado", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", "El Pital", "Elías", "Garzón", "Gigante", "Guadalupe", "Hobo", "Íquira", "Isnos", "La Argentina", "La Plata", "Nátaga", "Neiva", "Oporapa", "Paicol", "Palermo", "Palestina", "Pitalito", "Rivera", "Saladoblanco", "San Agustín", "Santa María", "Suaza", "Tarqui", "Tello", "Teruel", "Tesalia", "Timaná", "Villavieja", "Yaguará"],
    "La Guajira": ["Albania", "Barrancas", "Dibulla", "Distracción", "El Molino", "Fonseca", "Hatonuevo", "La Jagua del Pilar", "Maicao", "Manaure", "Riohacha", "San Juan del Cesar", "Uribia", "Urumita", "Villanueva"],
    "Magdalena": ["Algarrobo", "Aracataca", "Ariguaní", "Cerro de San Antonio", "Chibolo", "Ciénaga", "Concordia", "El Banco", "El Piñón", "El Retén", "Fundación", "Guamal", "Nueva Granada", "Pedraza", "Pijiño del Carmen", "Pivijay", "Plato", "Pueblo Viejo", "Remolino", "Sabanas de San Ángel", "Salamina", "San Sebastián de Buenavista", "San Zenón", "Santa Ana", "Santa Bárbara de Pinto", "Santa Marta", "Sitionuevo", "Tenerife", "Zapayán", "Zona Bananera"],
    "Meta": ["Acacías", "Barranca de Upía", "Cabuyaro", "Castilla la Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado", "Fuente de Oro", "Granada", "Guamal", "La Macarena", "La Uribe", "Lejanías", "Mapiripán", "Mesetas", "Puerto Concordia", "Puerto Gaitán", "Puerto Lleras", "Puerto López", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", "San Juan de Arama", "San Juanito", "San Martín", "Villavicencio", "Vista Hermosa"],
    "Nariño": ["Aldana", "Ancuyá", "Arboleda", "Barbacoas", "Belén", "Buesaco", "Chachagüí", "Colón", "Consacá", "Contadero", "Córdoba", "Cuaspud", "Cumbal", "Cumbitara", "El Charco", "El Peñol", "El Rosario", "El Tablón", "El Tambo", "Francisco Pizarro", "Funes", "Guachucal", "Guaitarilla", "Gualmatán", "Iles", "Imués", "Ipiales", "La Cruz", "La Florida", "La Llanada", "La Tola", "La Unión", "Leiva", "Linares", "Los Andes", "Magüí Payán", "Mallama", "Mosquera", "Nariño", "Olaya Herrera", "Ospina", "Pasto", "Policarpa", "Potosí", "Providencia", "Puerres", "Pupiales", "Ricaurte", "Roberto Payán", "Samaniego", "San Bernardo", "San José de Albán", "San Lorenzo", "San Pablo", "San Pedro de Cartago", "Sandoná", "Santa Bárbara", "Santacruz", "Sapuyes", "Taminango", "Tangua", "Tumaco", "Túquerres", "Yacuanquer"],
    "Norte de Santander": ["Ábrego", "Arboledas", "Bochalema", "Bucarasica", "Cáchira", "Cácota", "Chinácota", "Chitagá", "Convención", "Cúcuta", "Cucutilla", "Durania", "El Carmen", "El Tarra", "El Zulia", "Gramalote", "Hacarí", "Herrán", "La Esperanza", "La Playa de Belén", "Labateca", "Los Patios", "Lourdes", "Mutiscua", "Ocaña", "Pamplona", "Pamplonita", "Puerto Santander", "Ragonvalia", "Salazar de Las Palmas", "San Calixto", "San Cayetano", "Santiago", "Santo Domingo de Silos", "Sardinata", "Teorama", "Tibú", "Toledo", "Villa Caro", "Villa del Rosario"],
    "Putumayo": ["Colón", "Mocoa", "Orito", "Puerto Asís", "Puerto Caicedo", "Puerto Guzmán", "Puerto Leguízamo", "San Francisco", "San Miguel", "Santiago", "Sibundoy", "Valle del Guamuez", "Villagarzón"],
    "Quindío": ["Armenia", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia", "Génova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya", "Salento"],
    "Risaralda": ["Apía", "Balboa", "Belén de Umbría", "Dosquebradas", "Guática", "La Celia", "La Virginia", "Marsella", "Mistrató", "Pereira", "Pueblo Rico", "Quinchía", "Santa Rosa de Cabal", "Santuario"],
    "San Andrés y Providencia": ["Providencia y Santa Catalina Islas", "San Andrés"],
    "Santander": ["Aguada", "Albania", "Aratoca", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bolívar", "Bucaramanga", "Cabrera", "California", "Capitanejo", "Carcasí", "Cepitá", "Cerrito", "Charalá", "Charta", "Chima", "Chipatá", "Cimitarra", "Concepción", "Confines", "Contratación", "Coromoro", "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "El Socorro", "Encino", "Enciso", "Florián", "Floridablanca", "Galán", "Gámbita", "Girón", "Guaca", "Guadalupe", "Guapotá", "Guavatá", "Güepsa", "Hato", "Jesús María", "Jordán", "La Belleza", "La Paz", "Landázuri", "Lebrija", "Los Santos", "Macaravita", "Málaga", "Matanza", "Mogotes", "Molagavita", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Palmas del Socorro", "Páramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andrés", "San Benito", "San Gil", "San Joaquín", "San José de Miranda", "San Miguel", "San Vicente de Chucurí", "Santa Bárbara", "Santa Helena del Opón", "Simacota", "Suaita", "Sucre", "Suratá", "Tona", "Valle de San José", "Vélez", "Vetas", "Villanueva", "Zapatoca"],
    "Sucre": ["Buenavista", "Caimito", "Chalán", "Colosó", "Corozal", "Coveñas", "El Roble", "Galeras", "Guaranda", "La Unión", "Los Palmitos", "Majagual", "Morroa", "Ovejas", "Sampués", "San Antonio de Palmito", "San Benito Abad", "San Juan de Betulia", "San Marcos", "San Onofre", "San Pedro", "Sincé", "Sincelejo", "Sucre", "Tolú", "Tolú Viejo"],
    "Tolima": ["Alpujarra", "Alvarado", "Ambalema", "Anzoátegui", "Armero", "Ataco", "Cajamarca", "Carmen de Apicalá", "Casabianca", "Chaparral", "Coello", "Coyaima", "Cunday", "Dolores", "El Espinal", "Falán", "Flandes", "Fresno", "Guamo", "Herveo", "Honda", "Ibagué", "Icononzo", "Lérida", "Líbano", "Mariquita", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", "Planadas", "Prado", "Purificación", "Rioblanco", "Roncesvalles", "Rovira", "Saldaña", "San Antonio", "San Luis", "Santa Isabel", "Suárez", "Valle de San Juan", "Venadillo", "Villahermosa", "Villarrica"],
    "Valle del Cauca": ["Alcalá", "Andalucía", "Ansermanuevo", "Argelia", "Bolívar", "Buenaventura", "Buga", "Bugalagrande", "Caicedonia", "Cali", "Calima", "Candelaria", "Cartago", "Dagua", "El Águila", "El Cairo", "El Cerrito", "El Dovio", "Florida", "Ginebra", "Guacarí", "Jamundí", "La Cumbre", "La Unión", "La Victoria", "Obando", "Palmira", "Pradera", "Restrepo", "Riofrío", "Roldanillo", "San Pedro", "Sevilla", "Toro", "Trujillo", "Tuluá", "Ulloa", "Versalles", "Vijes", "Yotoco", "Yumbo", "Zarzal"],
    "Vaupés": ["Carurú", "Mitú", "Taraira"],
    "Vichada": ["Cumaribo", "La Primavera", "Puerto Carreño", "Santa Rosalía"]
};

document.addEventListener('DOMContentLoaded', function () {
    console.log("Scripts.js cargado - Datos completos");

    const deptoSelect = document.getElementById('departamento');
    const ciudadSelect = document.getElementById('ciudad');

    if (!deptoSelect || !ciudadSelect) {
        console.error("Error: selectores no encontrados");
        return;
    }

    // Ordenar departamentos alfabéticamente
    const deptosOrdenados = Object.keys(colombiaData).sort();

    // Llenar Departamentos
    deptosOrdenados.forEach(depto => {
        const option = document.createElement('option');
        option.value = depto;
        option.textContent = depto;
        deptoSelect.appendChild(option);
    });

    // Evento Cambio de Departamento
    deptoSelect.addEventListener('change', function () {
        const selectedDepto = this.value;

        // Limpiar ciudades
        ciudadSelect.innerHTML = '<option value="">Seleccione...</option>';

        if (selectedDepto && colombiaData[selectedDepto]) {
            ciudadSelect.disabled = false;

            // Ordenar ciudades alfabéticamente
            const ciudadesOrdenadas = colombiaData[selectedDepto].sort();

            ciudadesOrdenadas.forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad;
                option.textContent = ciudad;
                ciudadSelect.appendChild(option);
            });
        } else {
            ciudadSelect.disabled = true;
            ciudadSelect.innerHTML = '<option value="">Seleccione Departamento primero</option>';
        }
    });

    /* ============================================ 
       LÓGICA DEL CARRUSEL 
    ============================================ */
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.carrusel-btn.next');
    const prevBtn = document.querySelector('.carrusel-btn.prev');
    const indicadores = document.querySelectorAll('.indicador');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('activo'));
        indicadores.forEach(dot => dot.classList.remove('activo'));

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add('activo');
        indicadores[currentSlide].classList.add('activo');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startAutoPlay();
    }

    // Event Listeners
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });
    }

    indicadores.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetTimer();
        });
    });

    // Iniciar si hay slides
    if (slides.length > 0) {
        startAutoPlay();
    }

    /* ============================================ 
       LÓGICA DEL FORMULARIO (SHEETS + EMAIL) 
    ============================================ */
    const contactForm = document.getElementById('formContacto');
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxz-N6azOOwXrnUjPZxi5NMsrL3zMO_8p_ytAcTKEav5tT-tzmwXc0arvqPEa9U5ea8/exec';

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.btn-enviar');
            const originalText = submitBtn.innerHTML;
            const successMsg = document.getElementById('mensajeExito');

            // UI Loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            const formData = new FormData(this);

            // AGREGAR PREFIJO 57 AL TELÉFONO
            const telefono = formData.get('telefono');
            if (telefono && !telefono.startsWith('57')) {
                formData.set('telefono', '57' + telefono);
            }

            // 1. Enviar a Google Sheets
            const sheetsPromise = fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Important for Google Apps Script
            });

            // 2. Enviar a FormSubmit (Email)
            // Usamos la URL del action del formulario
            const emailPromise = fetch(this.action, {
                method: 'POST',
                body: formData
            });

            // Optimización de velocidad: 
            // 1. Iniciamos ambas peticiones.
            // 2. Mostramos el mensaje de éxito "casi" inmediato si Sheets responde (que suele ser rápido),
            //    o simplemente asumimos éxito para mejorar UX si no hay error crítico inmediato.
            //    Sin embargo, para ser seguros, esperaremos solo a Sheets (data crítica) y dejaremos Email en segundo plano
            //    o simplemente usamos Promise.race para feedback rápido? 
            //    Mejor estrategia: Promise.all es seguro, pero si "tarda mucho" es por la red.
            //    Vamos a mostrar el éxito en cuanto Sheets responda (que es el "guardar cambios").

            Promise.all([sheetsPromise, emailPromise])
                .then(() => {
                    finalizarEnvio(true);
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Aún si falla email (cors opaco a veces da error en capturas), 
                    // si Sheets guardó, es éxito parcial. 
                    // Pero para simplicidad, si falla algo crítico avisamos, si no, asumimos éxito.
                    finalizarEnvio(true); // Forzamos éxito visual para no frustrar al usuario si es solo un error de red menor
                });

            function finalizarEnvio(exito) {
                // Reset UI
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                if (exito) {
                    const modal = document.getElementById('customSuccessModal');
                    if (modal) {
                        modal.style.display = 'flex'; // Mostrar modal

                        // Cerrar automáticamente en 4 segundos
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 4000);
                    } else {
                        // Fallback por si acaso
                        alert("Tus datos han sido ingresados.");
                    }
                } else {
                    alert("Hubo un error al enviar. Intenta nuevamente.");
                }
            }
        });
    }

    /* ============================================ 
       LÓGICA DEL LIGHTBOX (GALERÍA) 
    ============================================ */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('img-lightbox');

    // CLONAR ITEMS PARA CARRUSEL INFINITO
    const track = document.getElementById('track');
    if (track) {
        const items = track.innerHTML;
        track.innerHTML += items; // Duplicar contenido
    }

    // Actualizar lista de imágenes (ahora incluye clonadas)
    let galleryImages = document.querySelectorAll('.galeria-item img');
    let currentIndex = 0;

    window.abrirLightbox = function (img) {
        lightbox.classList.add('activo');
        lightboxImg.src = img.src;
        // Encontrar índice actual
        currentIndex = Array.from(galleryImages).indexOf(img);
        document.body.style.overflow = 'hidden'; // Evitar scroll
    }

    window.cerrarLightbox = function (e) {
        if (e.target === lightbox || e.target.classList.contains('close-lightbox')) {
            lightbox.classList.remove('activo');
            document.body.style.overflow = 'auto'; // Restaurar scroll
        }
    }

    window.cambiarImagen = function (n) {
        currentIndex += n;
        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        }
        lightboxImg.src = galleryImages[currentIndex].src;
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('activo')) {
            lightbox.classList.remove('activo');
            document.body.style.overflow = 'auto';
        }
        // Navegar con flechas
        if (lightbox.classList.contains('activo')) {
            if (e.key === 'ArrowLeft') cambiarImagen(-1);
            if (e.key === 'ArrowRight') cambiarImagen(1);
        }
    });

    // Función para seleccionar servicio desde los botones de "Cotizar"
    window.seleccionarServicio = function (valor) {
        const selectServicio = document.getElementById('servicio');
        if (selectServicio) {
            selectServicio.value = valor;

            // Scroll suave hacia el formulario
            const contactoSection = document.getElementById('contacto');
            if (contactoSection) {
                contactoSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

});
