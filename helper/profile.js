module.exports={
    setProfile:(user)=>{
        const {id,email,password} = user;
        const profile ={id,email,password};
        return profile;         
    }
}