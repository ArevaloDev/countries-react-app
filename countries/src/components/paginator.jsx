export default function Paginator({currentPage,
    totalPages,
    IncreasePaginator,
    decreasePaginator,}) {
  return (
    <>
      <div className="content-paginator">
        <button
          className="buttonPaginator"
          onClick={() => decreasePaginator()}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}{" "}
        </span>
        <button
          className="buttonPaginator"
          onClick={() => IncreasePaginator()}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </>
  );
}
