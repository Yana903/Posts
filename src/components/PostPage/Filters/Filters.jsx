import React from "react";
import "../../../App.css";
import SelectAD from "../Select/SelectAD"
import SelectPageSize from "../Select/SelectPageSize"


const Filters = ({view, search, order, limit, setView, setSearch, setOrder, setLimit}) => {
    return(
        <div className="uk-margin-medium-bottom uk-flex">
            <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
              <span className="uk-icon uk-search-icon" uk-search-icon="" />
              {/* <span
                className="uk-search-icon uk-search-icon-flip uk-icon uk-spinner"
                uk-spinner="ratio: 0.6"
              /> */}
              <input
                className="uk-search-input"
                type="search"
                value={search || ''}
                onChange = { e => setSearch(e.target.value)}
                placeholder="Search..."
              />
            </form>
            <SelectAD
              order={order}
              setOrder = {setOrder}
              optionsAD={[
                {text: "ASC", value: "asc"},
                {text: "DESC", value: "desc"}
              ]}
              />
              <SelectPageSize
              limit={limit}
              setLimit={setLimit}
              optionsPageSize={[
                {text: "6", value: 6},
                {text: "12", value: 12},
                {text: "24", value: 24},
                {text: "50", value: 50}
              ]}
              />
            <div className="uk-button-group uk-margin-left">
              <button type="button" onClick={() => setView("grid")} className={`uk-button uk-button-default ${view === "grid" ? "uk-active" : ""}`}>
                <span className="uk-icon" uk-icon="icon: grid" />
              </button>
              <button type="button" onClick={() => setView("list")} className={`uk-button uk-button-default ${view === "list" ? "uk-active" : ""}`}>
                <span className="uk-icon" uk-icon="icon:  list" />
              </button>
            </div>
          </div>
    )
}

export default Filters;