const users=[]

const addUser=({id,name,room})=>{
    room=room.trim().toLowerCase();
    name=name.trim().toLowerCase();
    
    const existingUser=users.find(user=>user.room==room && user.name==name);

    if(!name || !room) return {error:"Both fields are required"}
    if(existingUser) return {error:'Username is already taken'}

    const user={name,room,id};
    users.push(user)
    return {user}
}

const removeUser=(id)=>{
    const i=users.findIndex((user)=>user.id==id)

    if(i!=-1) return users.splice(i,1)[0];
}

const getUser=(id)=>{
    const x=users.find((user)=>user.id==id)
    return {user:x};
}

const getUsersInRoom=(room)=>{
    return users.filter((user)=>user.room==room);
}

module.exports={addUser,removeUser,getUser,getUsersInRoom}