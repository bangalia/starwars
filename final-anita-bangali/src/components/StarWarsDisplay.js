function StarWarsDisplay(props) {
    const { name, birth, height, mass, gender} = props
  
    if (props === null){
      return null
    }
  
    return (
      <div>
          <h1>{name}</h1>
          <p>Birthyear: {birth}</p>
          <p>Gender: {gender}</p>
          <p>Mass: {mass}</p>
          <p>Height: {height}</p>
          
    </div>
    )
  }
  
  export default StarWarsDisplay