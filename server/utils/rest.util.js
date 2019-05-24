
module.exports = {
    handleEntityNotFound(res) {
        return function (entity) {
            if (!entity) {
                res.sendStatus(404)
                return null
            }
            return entity
        }
    },
    respondWithResult(res, status = 200) {
        return function(entity) { 
            if (!entity) return null
            res.status(status).json(entity)
        }
    },
    handleCatch(res, status = 500){
        return function(err){
            console.error(err)
            res.status(status).json(err)
        }
    }
}