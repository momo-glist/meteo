import { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";

const Search = ({onSearchChange}) =>{

    const [search, setSearche] = useState('');
    

    const loadOptions = async (inputValue) => {

            try {
                const response = await fetch(`${GEO_API_URL}/cities?&namePrefix=${inputValue}`, geoApiOptions);
                const data = await response.json();
        
                const options = data.data.map((city) => ({
                    label: `${city.name}, ${city.countryCode}`,
                    value: `${city.latitude}, ${city.longitude}`,
                }));
        
                return { options };
            } catch (error) {
                console.error(error);
                return { options: [] };
            }
    };
    
    
    
    

    const handleOnchange = (searcheData) =>{
        setSearche(searcheData);
        onSearchChange(searcheData);
    }

    
    return(
        <AsyncPaginate 
            placeholder="Entrer le nom de la ville"
            debounceTimeout={600}
            value={search}
            onChange={handleOnchange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;