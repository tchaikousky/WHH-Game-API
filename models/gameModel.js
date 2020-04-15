const db = require('./conn');

class GameDB {
    constructor(id, category, image1, image2, image3, solution) {
        this.id = id;
        this.category = category;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.solution = solution;
    }

    static async getGameTiles(category) {
        try {
            const response = await db.any(`SELECT * FROM game_tile WHERE category = '${category}'`);
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    static async getAllGameTiles() {
        try {
            const response = await db.any(`SELECT * FROM game_tile`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

}

module.exports = GameDB;