import child from "./Child"


function Grandchild({name}) {
    
  return (
    <div>hello{name}</div>
  )
}
function Childd ({name}){
    return <Grandchild name={name}/>
}
function Parentdata(){
    return <Childd name = "anu"/>
}

export default Parentdata