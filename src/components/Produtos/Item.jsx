export default function Item({ Nome, preco, texto, image }) {
  return (
    //aqui onde vai se mostrar os detalhes do produto
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={image} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{Nome}</h2>
            <h3>{preco}</h3>
            <p class="card-text">{texto}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
