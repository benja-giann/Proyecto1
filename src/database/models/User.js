//1.Guardar al usuario en la DB
//2.Buscar al usuario que se requiere loguear por su email
//2.Buscar a un usuario por su ID
//4.Editar la informacion del usuario
//5.Eliminar a un usuario de la DB


const fs =require('fs');


const User ={
   fileName: '/database/users.json',
   

   getData: function(){
    return JSON.parse(this.fileName, 'utf-8');
   },

   generateID: function(){
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if(lastUser){ 
    return lastUser.id + 1;
    }
    return 1;
   }, 

   findAll:function(){
    return this.getData();
   },

   findByPk:function(id){
    let allUsers = this.findAll();
    let userFound = allUser.find(oneUser => oneUser.id === id); 
    return userFound;
   },

   findByField:function(field, text){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text); 
    return userFound;
   }, 

   create:function(userData){
    let allUsers = this.findAll();
    let newUser={
      id:this.generateID(),
      ...userData
    }
    allUsers.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
    return newUser;
   },

   delete: function(id){
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter(oneUser=> oneUser.id !== id);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
    return true;
   },    

}



module.exports = User;