var knex = require("../database/connection");
var User = require("./User");

class PasswordToke{

    async create(email){
        var user = await User.findByEmail(email);
        if (user != undefined) {
            try {
                var token = Date.now();
                await knex("passwordtokens").insert({
                    user_id: user.id,
                    used: 0,
                    token: token //UUID ou GUID
                })
                return {status: true, token: token};
            } catch (err) {
                return {status: false, err: err}
            }
        } else {
            return {status: false, err: "Email não encontrado."};
        }
    }

    async validate(token){
        try {
            var result = await knex("passwordtokens").select().where({token: token});
            if (result.length > 0) {
                var tk = result[0];
                if (tk.used) {
                    return  {status: false};
                } else {
                    return {status: true, token: tk};
                }
            } else {
                return {status: false};
            }
        } catch (err) {
            console.log(err);
            return {status: false};
        }
    }

    async setUsed(token){
        try {
            await knex("passwordtokens").update({used: 1}).where({token: token})
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new PasswordToke;