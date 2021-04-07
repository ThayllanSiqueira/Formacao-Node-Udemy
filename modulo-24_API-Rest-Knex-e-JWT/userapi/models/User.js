var knex = require("../database/connection");
var bcrypt = require("bcrypt");
const PasswordToken = require("./PasswordToken");
class User {

    async findAll(){
        try {
            var res = await knex("users").select(["id","name","email","role"]);
            return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async findById(id){
        try {
            var res = await knex("users").select(["id","name","email","role"]).where({id:id});
            if (res.length > 0) {
                return res[0];
            } else {
                return undefined
            }
        } catch (err) {
            console.log(err);
            return undefined;
        }
    }

    async findByEmail(email){
        try {
            var res = await knex("users").select(["id","name","password","email","role"]).where({email: email});
            if (res.length > 0) {
                return res[0];
            } else {
                return undefined;
            }
        } catch (err) {
            console.log(err);
            return undefined;
        }
    }

    async new(email, password, name){
        try {
            var hash = await bcrypt.hash(password, 10);
            await knex.insert({email, password: hash, name, role: 0}).table("users");
        } catch (err) {
            console.log(err);
        }
    }

    async findEmail(email){
        try {
           var res = await knex.select().from("users").where({email: email});
           //console.log(res);
           if (res.length > 0) {
                return true;
           } else {
                return false;
           }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async update(id, email, name, role){
        var user = await this.findById(id);
        if (user != undefined) {
            var editUser = {};
            if(email != undefined){
                if (email != user.email) {
                    var res = await this.findEmail(email);
                    if(!res){
                        editUser.email = email;
                    } else {
                        return {status: false, err: "Email já cadastrado!"}
                    }
                }
            }

            if(name != undefined){
                editUser.name = name;
            }

            if (role != undefined) {
                editUser.role = role;
            }

            try {
                await knex.update(editUser).where({id:id}).table("users");
                return {status: true}
            } catch (err) {
                return {status: false, err: err}
            }


        } else {
            return {status: false, err: "O usuário não existe!"}
        }
    }

    async delete(id){
        var user = await this.findById(id);
        if (user != undefined) {
            try {
                await knex.delete().where({id: id}).table("users");
                return {status: true}
            } catch (err) {
                return {status: false, err: err}
            }
        } else {
            return {status: false, err: "Usuário não existe."}
        }
    }

    async changePassword(newPassword, id, token){
        try {
            var hash = await bcrypt.hash(newPassword, 10);
            await knex("users").update({password: hash}).where({id: id});
            await PasswordToken.setUsed(token);
        } catch (err) {
            console.log(err);
        }
    }


}

module.exports = new User();