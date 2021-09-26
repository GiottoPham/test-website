import { Title } from "components";
import React from "react";
import { TYPES_BOOK } from "utils/static";
import CardTypesBook from "../CardTypesBook/CardTypesBook";
import "./TypesBook.scss";
import { selectTypes } from "features/books/booksSlice";
import { useSelector } from "react-redux";
function TypesBook(props) {
  const types = useSelector(selectTypes);
  const typeUsed =types.slice(0,4);
  if(!types) return(
    <section>
      <div className="container">
        <div className="typesbook">
          <div className="typesbook__header">
            <Title
              title="List type of book"
              text="LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. NATUS, EUM ET. VERITATIS IPSUM IUSTO CORRUPTI ELIGENDI ISTE ODIO INVENTORE DOLORES SAEPE FUGA, MAGNAM EXERCITATIONEM! MAGNAM EXPEDITA NOBIS ILLO LAUDANTIUM POSSIMUS."
            />
          </div>
          <div className="typesbook__list">
            {TYPES_BOOK.map((type) => {
              return <CardTypesBook key={type.id} name={type.name} id = {type.id}/>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
  else return (
    <section>
      <div className="container">
        <div className="typesbook">
          <div className="typesbook__header">
            <Title
              title="Popular book types"
              text="LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. NATUS, EUM ET. VERITATIS IPSUM IUSTO CORRUPTI ELIGENDI ISTE ODIO INVENTORE DOLORES SAEPE FUGA, MAGNAM EXERCITATIONEM! MAGNAM EXPEDITA NOBIS ILLO LAUDANTIUM POSSIMUS."
            />
          </div>
          <div className="typesbook__list">
            {typeUsed.map((type) => {
              return <CardTypesBook key={type.cat_id} name={type.cat_nm} id= {type.cat_id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TypesBook;
