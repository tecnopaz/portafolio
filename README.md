# Web engenie (Supabase + GitHub)

Archivos: `index.html` (web), `admin.html` (panel), `shared.js` (configuración y textos por defecto), `supabase.sql`.

1. Supabase: crea el proyecto, abre SQL Editor, pega y ejecuta `supabase.sql`.
2. Authentication > Users > Add user: crea tu correo y contraseña de administrador. Apaga "Allow new users to sign up".
3. Project Settings > API: copia "Project URL" y la clave "anon public" en las dos primeras líneas de `shared.js`.
4. GitHub: sube los 4 archivos a un repositorio, Settings > Pages > Deploy from branch (main, root).
5. Entra a `tu-sitio/admin.html`, inicia sesión y edita todo. "Guardar cambios" publica al instante.

Sin Supabase configurado la web igual funciona con los textos por defecto de `shared.js`.
Nota: la clave anon es pública por diseño; la seguridad la dan las políticas del SQL (solo el usuario autenticado puede escribir).
