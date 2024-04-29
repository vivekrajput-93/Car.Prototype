

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Somethin went wrong at Crud repo!");
            throw error;
        }
    }


    async delete(id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result
        } catch (error) {
            console.log("somethin went wrong with crud repo!");
            throw error
        }
    }

    async get(id) {
        try {
           const result = await this.model.findById(id);
           return result; 
        } catch (error) {
            console.log("somethin went wrong with crud repo!");
            throw error
        }
    }

    async getAll() {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.log("somethin went wrong at crud repo");
            throw error
        }
    }

    async update(id, data) {
        try {
            const result  = await this.model.findByIdAndUpdate(id, data, {new : true});
            return result;
        } catch (error) {
            console.log("somethin went wrong at crud repo");
            throw error
        }
    }
}

module.exports = CrudRepository;