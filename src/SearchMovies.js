

export default function SearchMovies(){
  return(
    <form className="form">
      <label htmlFor="query" className="label">Movie name</label>
      <input 
        className="input"
        type="text" 
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button type="submit" className="button">Search</button>
    </form>
  )
}
