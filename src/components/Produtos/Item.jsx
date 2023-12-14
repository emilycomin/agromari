export default function Item({ nome, price, text }) {
  return (
    //aqui onde vai se mostrar os detalhes do produto
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="..." class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{nome}</h2>
            <h3>{price}</h3>
            <p class="card-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
