// ===== engenie · configuración compartida (web + panel) =====
// Datos de tu proyecto de Supabase (la clave "publishable" es pública por diseño)
const SUPABASE_URL = "https://ayihzunpzdoqngushxnl.supabase.co";
const SUPABASE_KEY = "sb_publishable_znRCtYe3dMcZ-nJZZRSeGg_mDoks860";

const U = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;
const esc = s => String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

const DEFAULTS = {
  brand: "engenie",
  banner: "Software y automatización a la medida   |   Restaurantes   |   Hotelería   |   Alquiler de vehículos   |   Barberías   |   Tiendas online   |   Clínicas   |   Gimnasios",
  heroSlides: [
    {eyebrow: "engenie | Desarrollo de software", title: "Soluciones de Software y Automatización a la Medida", text: "Webs, sistemas de reservas y paneles de control a la medida, con todo lo que tu negocio necesita para vender y organizarse."},
    {eyebrow: "Qué hacemos", title: "Webs, reservas y paneles que trabajan por ti", text: "Menús QR, reservas en tiempo real, citas, seguimiento de pedidos y paneles de control para que administres todo desde un solo lugar."},
    {eyebrow: "Para cualquier negocio", title: "Si no ves tu sector, lo construimos contigo", text: "Restaurantes, hoteles, constructoras, clínicas, tiendas y más. Cuéntame qué necesitas y diseñamos una solución a tu medida."}
  ],
  heroImage: U("photo-1517694712202-14dd9538aa97"),
  heroC1: "#0c0d11", heroC2: "#000000", heroOp: 0.12,
  infoCards: [
    {t: "Panel propio", d: "Cambia textos, fotos y colores sin depender de nadie."},
    {t: "Tiempo real", d: "Reservas, pedidos y citas sincronizados en todos tus dispositivos."},
    {t: "Sin dobles reservas", d: "Cada mesa, habitación o turno se bloquea al instante."},
    {t: "Alertas automáticas", d: "Avisos y recordatorios por correo para ti y tus clientes."},
    {t: "Lista para móvil", d: "Se ve y funciona perfecto en teléfono, tablet y computadora."},
    {t: "Hecho a tu medida", d: "Con la identidad de tu marca y los procesos de tu negocio."}
  ],
  ctxText: "Software a la medida para negocios que quieren vender más y trabajar con menos fricción. Del primer boceto al panel de control, todo se diseña, programa y entrega con un solo equipo.",
  stats: [
    {n: 12, s: "", l: "Sectores con soluciones listas"},
    {n: 100, s: "%", l: "A la medida de tu marca"},
    {n: 1, s: "", l: "Panel de control propio por proyecto"}
  ],
  secTitle: "Sectores",
  secText: "Elige un sector para ver, fase por fase, qué hace cada solución y qué valor aporta a tu negocio.",
  specTitle: "El servicio",
  specLead: "Lo que incluye cada proyecto, sin letra pequeña.",
  specs: [
    {t: "Diseño a la medida", d: "Identidad de tu marca, animaciones fluidas y versión optimizada para teléfono, tablet y computadora."},
    {t: "Panel administrativo propio", d: "Cambia textos, imágenes, colores y contenido cuando quieras, sin depender de terceros."},
    {t: "Sincronización en tiempo real", d: "Reservas, mesas, citas y pedidos actualizados al instante en todos los dispositivos."},
    {t: "Alertas y recordatorios", d: "Notificaciones por correo y avisos automáticos para citas, entregas y renovaciones."},
    {t: "Base de datos y alojamiento", d: "Construido sobre Supabase y GitHub: datos seguros, escalables y fáciles de mantener."},
    {t: "Control y validación", d: "Aprobaciones gerenciales, verificación de documentos, membresías y fidelización automática."}
  ],
  steps: [
    {t: "Conversamos", d: "Entiendo tu negocio y definimos qué automatizar."},
    {t: "Diseño", d: "Propuesta visual con la identidad de tu marca."},
    {t: "Desarrollo", d: "Programación de la web, el panel y los flujos."},
    {t: "Entrega", d: "Puesta en línea y acompañamiento para que lo domines."}
  ],
  ctaTitle: "¿Hablamos?",
  cta: "Escríbeme por WhatsApp",
  whatsapp: "50375147697",
  waGeneral: "Hola, quisiera información sobre sus servicios de software y automatización a la medida para mi negocio.",
  waSector: "Hola, estoy interesado en la solución para {sector} ({subtitulo}). Me gustaría recibir información y una cotización.",
  waPhase: "Hola, estoy interesado en la solución para {sector}: {fase}. Me gustaría recibir información y una cotización.",
  formTitle: "¿No encuentras tu negocio?",
  formText: "Cuéntame qué hace tu negocio y qué necesitas. Al enviar, se abre mi WhatsApp con tu mensaje ya escrito y te respondo con una propuesta a tu medida.",
  formNeeds: "Página web\nSistema de reservas o citas\nTienda en línea\nPanel administrativo\nAutomatización de procesos\nOtro",
  waForm: "Hola, quisiera consultar sobre una solución a la medida para mi negocio.",
  footerText: "Desarrollo de software a la medida",
  cPrimary: "#5aa0ff", cBg: "#04070d", cText: "#eef2fa", cCard: "#0a111f", cBanner: "#14337a", cWa: "#25d366",
  privacy: `# Política de privacidad

Última actualización: 3 de noviembre de 2026

## 1. Responsable

engenie, desarrolladora de software independiente. Puedes contactarnos por WhatsApp desde cualquier botón de este sitio.

## 2. Qué datos tratamos

- Navegación: este sitio no pide registro ni formularios y no usa herramientas de analítica ni publicidad.
- Contacto: si nos escribes por WhatsApp, tu número y mensaje son tratados por WhatsApp según su propia política y por nosotros para responderte.
- Administración: el panel privado usa correo y contraseña gestionados por Supabase y solo es accesible para el administrador.

## 3. Finalidad

Responder tus consultas, enviarte las propuestas que solicites y mantener el sitio funcionando.

## 4. Terceros que intervienen

- Supabase: base de datos y archivos del sitio.
- GitHub Pages: alojamiento.
- Google Fonts y redes de distribución de scripts (cdnjs, jsDelivr), que pueden registrar tu dirección IP al cargar recursos.
- WhatsApp, cuando decides escribirnos.

## 5. Conservación

Conservamos tus datos de contacto solo el tiempo necesario para atender tu solicitud o mientras exista una relación comercial.

## 6. Tus derechos

Puedes solicitar acceso, corrección o eliminación de tus datos y retirar tu consentimiento en cualquier momento, escribiéndonos por WhatsApp.

## 7. Cambios

Podemos actualizar esta política; la fecha de arriba indica la última versión.`,
  cookies: `# Política de cookies

Última actualización: 3 de noviembre de 2026

## Qué son

Son pequeños archivos o registros que el navegador guarda para recordar información.

## Qué usamos

- Esenciales: guardamos en tu navegador únicamente tu elección sobre cookies, para no volver a preguntarte.
- Sesión del panel: solo para el administrador, mantiene la sesión iniciada.

## Qué no usamos

No usamos cookies de publicidad, perfilado ni analítica de terceros.

## Cómo cambiar tu elección

Pulsa "Preferencias" al pie de la página o borra los datos del sitio en tu navegador.`,
  sectors: [
   {
    "title": "Restaurantes",
    "tag": "El Ecosistema Gastronómico Automatizado",
    "imgs": [U("photo-1555396273-367ea4eb4db5")],
    "phases": [
     {
      "t": "Fase 1: Menú Digital Interactivo por QR y Autogestión de Mesas",
      "q": "Código QR único por mesa. El cliente escanea, pide en segundos y la comanda llega directo a cocina. El mesero solo entrega.",
      "v": "Reduce tiempos de espera, elimina errores humanos en las órdenes y optimiza el personal de piso."
     },
     {
      "t": "Fase 2: Web Comercial y Control de Mesas en Tiempo Real",
      "q": "Vitrina digital con platos, precios y reseñas. Permite reservas online: al reservar, la mesa se congela automáticamente y se libera desde caja en segundos, sincronizada en todos los dispositivos.",
      "v": "Cero dobles reservas, máxima ocupación del local y control total del flujo de clientes."
     },
     {
      "t": "Fase 3: Panel Administrativo Maestro con Poder Absoluto",
      "q": "Un centro de control gerencial para que el dueño actualice promociones, agregue nuevos platos y gestione todo el sistema con un solo clic.",
      "v": "Autonomía total para el negocio sin depender de terceros para hacer cambios diarios."
     }
    ]
   },
   {
    "title": "Hotelería",
    "tag": "Gestión Inteligente de Alojamientos",
    "imgs": [U("photo-1566073771259-6a8506099945")],
    "phases": [
     {
      "t": "Fase 1: Reservas con Control de Distancia y Cronómetro",
      "q": "El huésped calcula su distancia de llegada y la web congela la habitación por el tiempo estimado. Si no llega, se libera sola. Al hacer check-in, la web marca la hora exacta de salida.",
      "v": "Adiós a las pérdidas por cancelaciones de última hora y control transparente de los tiempos de salida de los huéspedes."
     },
     {
      "t": "Fase 2: Consumo Interno Conectado y Room Service Digital",
      "q": "El huésped pide comida, bebidas o servicios extras directamente desde su habitación hacia la cocina o el bar.",
      "v": "Dispara el consumo interno y mejora la comodidad del cliente sin saturar la recepción."
     }
    ]
   },
   {
    "title": "Alquiler de Vehículos",
    "tag": "Plataforma de Renta y Validación Ágil",
    "imgs": [U("photo-1449965408869-eaa3f722e40d")],
    "phases": [
     {
      "t": "Sistema de Reserva Estilo Zigzag y Validación Documental",
      "q": "Catálogo categorizado de vehículos. El usuario sube sus documentos, DUI, licencia o pasaporte, selecciona los días y el lugar de entrega; la web calcula el precio y detalla las políticas de pago en efectivo o depósito según los días de renta.",
      "v": ""
     },
     {
      "t": "Flujo de Aprobación Gerencial y Alertas Inteligentes",
      "q": "Notificaciones automáticas por correo y panel administrativo. El gerente acepta o rechaza la reserva con motivos específicos que la web detalla al cliente. Incluye alertas y recordatorios para las horas clave de entrega y devolución del vehículo.",
      "v": "Automatiza el filtro de seguridad de clientes, elimina el papeleo manual y organiza las entregas sin depender de procesos digitales de pago complejo."
     }
    ]
   },
   {
    "title": "Barberías",
    "tag": "Plataforma de Reservas y Fidelización",
    "imgs": [U("photo-1503951914875-452162b0f3f1")],
    "phases": [
     {
      "t": "Sistema de Citas por Barbero y Elección de Estilo",
      "q": "Catálogo de servicios de barbería con fotos reales y precios claros. El cliente elige su barbero favorito, selecciona el corte o arreglo de barba y aparta su horario exacto sin esperas en el local.",
      "v": ""
     },
     {
      "t": "Tarjeta de Fidelidad Digital y Acumulación de Cortes",
      "q": "Sistema integrado en la web donde el cliente acumula visitas automáticamente con cada corte realizado. Al llegar al décimo servicio, la web le otorga y registra de forma automática el corte número once totalmente gratis para premiar su fidelidad.",
      "v": ""
     },
     {
      "t": "Panel Administrativo de Control de Silla y Horarios",
      "q": "Panel gerencial para que el dueño o cada barbero administre su propia agenda diaria, controle los turnos pendientes, verifique las tarjetas de fidelidad y organice los espacios disponibles en tiempo real.",
      "v": "Elimina las filas de espera en el local, fideliza a los clientes de forma automática sin tarjetas de papel perdidas y maximiza el rendimiento y la confianza con cada barbero."
     }
    ]
   },
   {
    "title": "E-Commerce y Retail",
    "tag": "Tiendas Online de Alto Rendimiento",
    "imgs": [U("photo-1472851294608-062f824d29cc")],
    "phases": [
     {
      "t": "Monitoreo de Envíos y Seguimiento de Pedidos",
      "q": "Tiendas personalizadas a la identidad de la marca local o internacional. Incluye cálculo de envíos y un sistema donde el cliente rastrea el estado exacto de su compra, si ya se empaquetó, si ya se envió o si va en camino.",
      "v": "Genera confianza absoluta en el comprador y reduce las llamadas de soporte sobre el estado de sus productos."
     }
    ]
   },
   {
    "title": "Servicios Profesionales y Clínicas",
    "tag": "Gestión de Citas",
    "imgs": [U("photo-1576091160399-112ba8d25d1d")],
    "phases": [
     {
      "t": "Sistema de Agendamiento y Control de Pacientes",
      "q": "Ideal para clínicas médicas, abogados, dentistas o consultorios. El cliente agenda su cita eligiendo el horario disponible.",
      "v": "Envío automático de recordatorios para evitar ausencias y optimizar la agenda de los profesionales."
     }
    ]
   },
   {
    "title": "Gimnasios y Centros de Entrenamiento",
    "tag": "Control de Acceso",
    "imgs": [U("photo-1534438327276-14e5300c3a48")],
    "phases": [
     {
      "t": "Plataforma de Membresías y Horarios",
      "q": "Web donde los usuarios pueden consultar planes mensuales, ver horarios de clases grupales y recibir estados de cuenta.",
      "v": "Panel administrativo para llevar el control de quién está solvente y quién necesita renovación en tiempo real"
     }
    ]
   },
   {
    "title": "Construcción y Proyectos",
    "tag": "Control de Obras y Cotizaciones",
    "imgs": [
     U("photo-1504307651254-35680f356dfd")
    ],
    "phases": [
     {
      "t": "Fase 1: Portafolio de Proyectos y Cotizador en Línea",
      "q": "Web corporativa con galería de obras terminadas y un cotizador donde el cliente describe su proyecto, sube planos o fotos y solicita una estimación.",
      "v": "Capta clientes mejor calificados y reduce el tiempo de las primeras reuniones."
     },
     {
      "t": "Fase 2: Seguimiento de Obra para el Cliente",
      "q": "Cada cliente entra con su usuario y consulta el avance de su proyecto por etapas, con fotos semanales, fechas de entrega y documentos.",
      "v": "Transparencia total, menos llamadas de seguimiento y mayor confianza en la empresa."
     },
     {
      "t": "Fase 3: Panel de Control de Obras, Materiales y Personal",
      "q": "Panel gerencial para registrar avances, solicitudes de materiales, asistencia de cuadrillas y gastos por proyecto, con alertas cuando algo se sale del presupuesto.",
      "v": "Control del presupuesto y de los tiempos de cada obra en tiempo real."
     }
    ]
   },
   {
    "title": "Inmobiliarias",
    "tag": "Catálogo y Gestión de Propiedades",
    "imgs": [
     U("photo-1560518883-ce09059eeffa")
    ],
    "phases": [
     {
      "t": "Fase 1: Catálogo de Propiedades con Filtros",
      "q": "Listado de propiedades con fotos, precio y ubicación, con filtros por tipo, zona y rango de precio, y un botón de contacto directo por cada propiedad.",
      "v": "Los compradores encuentran lo que buscan más rápido y el asesor recibe consultas ya calificadas."
     },
     {
      "t": "Fase 2: Agenda de Visitas y Seguimiento de Clientes",
      "q": "El interesado agenda su visita eligiendo un horario disponible, y el asesor registra cada contacto, etapa de negociación y recordatorio de seguimiento.",
      "v": "Ningún prospecto se pierde y se evitan visitas que se cruzan."
     },
     {
      "t": "Fase 3: Panel para Publicar y Administrar",
      "q": "Panel para agregar, editar o marcar propiedades como vendidas o rentadas sin pedir ayuda a nadie.",
      "v": "Catálogo siempre actualizado y autonomía total para la inmobiliaria."
     }
    ]
   },
   {
    "title": "Talleres y Servicio Automotriz",
    "tag": "Citas, Órdenes de Servicio y Seguimiento",
    "imgs": [
     U("photo-1486262715619-67b85e0b08d3")
    ],
    "phases": [
     {
      "t": "Fase 1: Citas en Línea y Recepción Digital",
      "q": "El cliente agenda su servicio, indica su vehículo y el problema, y recibe confirmación y recordatorio de su cita.",
      "v": "Agenda ordenada del taller y menos ausencias."
     },
     {
      "t": "Fase 2: Orden de Servicio con Estado en Tiempo Real",
      "q": "Cada vehículo tiene su orden de servicio. El cliente consulta si está en diagnóstico, en reparación o listo para entrega, y recibe un aviso al terminar.",
      "v": "Genera confianza y reduce las llamadas preguntando por el vehículo."
     },
     {
      "t": "Fase 3: Historial y Recordatorios de Mantenimiento",
      "q": "Registro de servicios por vehículo y avisos automáticos cuando toca el próximo mantenimiento.",
      "v": "Clientes que regresan y ventas recurrentes."
     }
    ]
   },
   {
    "title": "Salones de Belleza y Spas",
    "tag": "Reservas, Profesionales y Fidelización",
    "imgs": [
     U("photo-1560066984-138dadb4c035")
    ],
    "phases": [
     {
      "t": "Fase 1: Reserva por Servicio y Profesional",
      "q": "Catálogo de servicios con precios y duración. El cliente elige profesional, fecha y hora, y recibe un recordatorio antes de su cita.",
      "v": "Agenda llena, sin esperas y sin llamadas para reservar."
     },
     {
      "t": "Fase 2: Paquetes, Membresías y Puntos",
      "q": "Venta y control de paquetes de servicios y puntos que se acumulan automáticamente con cada visita.",
      "v": "Fideliza a los clientes y aumenta el consumo promedio."
     },
     {
      "t": "Fase 3: Panel de Agenda y Ventas",
      "q": "Cada profesional ve su agenda del día y el dueño revisa ingresos y servicios más solicitados.",
      "v": "Decisiones con datos y control total del negocio."
     }
    ]
   },
   {
    "title": "Academias y Educación",
    "tag": "Matrículas, Horarios y Seguimiento",
    "imgs": [
     U("photo-1503676260728-1c00da094a0b")
    ],
    "phases": [
     {
      "t": "Fase 1: Inscripción en Línea y Catálogo de Cursos",
      "q": "Cursos con fechas, cupos y precios. El estudiante se inscribe y sube sus documentos desde la web.",
      "v": "Menos papeleo y matrículas abiertas todo el año."
     },
     {
      "t": "Fase 2: Control de Pagos y Asistencia",
      "q": "Registro de mensualidades, estados de cuenta y asistencia, con avisos de pagos pendientes.",
      "v": "Cobranza ordenada y padres de familia informados."
     },
     {
      "t": "Fase 3: Panel Académico",
      "q": "Panel para publicar horarios, avisos y materiales, y para gestionar grupos y docentes.",
      "v": "Comunicación centralizada y administración sin complicaciones."
     }
    ]
   }
  ]
};

const sb = window.supabase && SUPABASE_URL.startsWith("https://") ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;
function norm(x){
  if(!x.imgs) x.imgs = x.img ? [x.img] : [];
  if(!x.phases) x.phases = (x.points||[]).map(p=>({t:"",q:p,v:""}));
  return x;
}
async function loadSettings(){
  const s = JSON.parse(JSON.stringify(DEFAULTS));
  try { if(sb){ const {data} = await Promise.race([sb.from("site_settings").select("*"), new Promise(r=>setTimeout(()=>r({data:[]}),4000))]); (data||[]).forEach(r => s[r.key] = r.value); } } catch(e){}
  s.sectors.forEach(norm);
  return s;
}
// Markdown mínimo para las políticas: "# " título, "## " subtítulo, "- " lista
function mdText(t){
  return String(t||"").split(/\n\n+/).map(b=>{
    b=b.trim(); if(!b) return "";
    if(b.startsWith("# ")) return `<h2>${esc(b.slice(2))}</h2>`;
    if(b.startsWith("## ")) return `<h3>${esc(b.slice(3))}</h3>`;
    const ls=b.split("\n");
    if(ls.every(l=>l.trim().startsWith("- "))) return `<ul>${ls.map(l=>`<li>${esc(l.trim().slice(2))}</li>`).join("")}</ul>`;
    return `<p>${esc(b)}</p>`;
  }).join("");
}
function lum(h){const c=h.replace("#","");const v=[0,2,4].map(i=>parseInt(c.substr(i,2),16)/255).map(x=>x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4));return .2126*v[0]+.7152*v[1]+.0722*v[2]}
function applyTheme(s){
  const r=document.documentElement.style;
  r.setProperty("--p",s.cPrimary);r.setProperty("--bg",s.cBg);r.setProperty("--tx",s.cText);r.setProperty("--cc",s.cCard);
  r.setProperty("--on",lum(s.cPrimary)>.45?"#04070d":"#ffffff");r.setProperty("--bn",s.cBanner||"#14337a");r.setProperty("--wa",s.cWa||"#25d366");
  r.setProperty("--h1",s.heroC1);r.setProperty("--h2",s.heroC2);r.setProperty("--ho",s.heroOp);
}
