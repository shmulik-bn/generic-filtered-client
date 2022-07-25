import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { LANG } from "../../../core/constans/i18n";
import { setRows } from "../../../core/store/actions/actions";
import { filter } from "../../../core/utils"
import { useFilterStyles } from "./Filter.styles";


export const FilterForm = ({array}) =>{

    const [property, setProperty] = useState('name'),
    [query, setQuery] = useState(''),
    dispatch = useDispatch(),
    classes = useFilterStyles();


    useEffect(() => {
        dispatch(setRows(query && property ? filter(array, property, query.toLowerCase()) : array))
    }, [array, property, query])

    return <form className={classes.filterForm} onSubmit={(e) => e.preventDefault()}>
    <label>
      {LANG.FILTER.PROPERTY}
      <select value={property} onChange={(e) => setProperty(e.target.value)}>
        {array[0]? Object.keys(array[0])?.map(key => <option key={Date.now() * Math.random()}>{key}</option>) : ''}
      </select>
    </label>
    <label>
      {LANG.FILTER.SEARCH}
      <input value={query} onInput={(e) => setQuery(e.target.value)} type="search" />
    </label>
  </form>
}