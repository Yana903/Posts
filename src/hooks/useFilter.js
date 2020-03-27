import { useState } from "react";

const useFilter = (
    initialSearch = "",
    initialOrder = "asc"
    ) => {
    const [search, setSearch] = useState(initialSearch);
    const [order, setOrder] = useState(initialOrder);
    
    return {search, setSearch, order, setOrder}
}

export default useFilter;