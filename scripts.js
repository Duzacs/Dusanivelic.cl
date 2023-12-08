// Contenido de scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí...
});
            const donde = document.querySelector("#trabajos");
            async function portfolio() {
                const consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/dno037-2023-1/main/clase-07/datos.json");
                const data = await consulta.json();
                data.forEach((t, i) => {
                    donde.innerHTML += 
                    `<article class="col">
                        <div class="card h-100 shadow-sm">
                            <img src="${t.fotos[0]}" class="card-img-top">
                            <div class="card-body">
                                <h3 class="fs-5"><a data-bs-toggle="modal" href="#portfolioModal${i}" class="link-secondary">${t.nombre}</a></h3>
                                <p>${t.abstract}</p>
                                <small>${t.soporte}</small>
                            </div>
                        </div>
                    </article>
                    <div class="modal fade" id="portfolioModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <h2 class="text-uppercase">${t.nombre}</h2>
                                    <p>${t.abstract}</p>
                                    <p class="small text-body-secondary">#${t.soporte}</p>
                                        ${fotos(t.fotos)}
                                </div>
                                <div class="modal-footer">
                                    <small>Nombre Apellido © 2023</small>
                                </div>
                            </div>
                        </div>
                    </div>`
                });
                function fotos(arreglo) {
                    var todas = "";
                    arreglo.forEach((x) => (todas = todas + `<img class="w-100 d-block mb-4" src="${x}"/>`));
                    return todas;
                }
            }
            portfolio().catch((error) => console.error(error));
