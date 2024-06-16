export default function Search({search,setSearch,handleSearch}){

    function handleKeyPress(event){
        if(event.key === 'Enter'){
            handleSearch();
        }
    }

    return <div className="search-engine">
        <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event)=>setSearch(event.target.value)}
        onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
}