import { FilterAreaContainer } from "./filterStyle";


export const FilterArea = () => {



    return (
    <>
    <FilterAreaContainer>

        <div className="filterBar">

            <input type="text" placeholder="Digite aqui" />

            <button className="searchButton" >Pesquisar</button>

        </div>

        <div className="filterButtons">

            <button id="B0">
                Todas
            </button>

            <button id="B1">
                Lanches
            </button>

            <button id="B2">
                Prato Principal
            </button>

            <button id="B3">
                Sobremesas
            </button>

            <button id="B4">
                Bebidas
            </button>

        </div>
    </FilterAreaContainer>
    </>
    );
};

export default FilterArea;
