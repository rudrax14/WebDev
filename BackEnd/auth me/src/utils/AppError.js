class AppError {
    constructor(message, statusCode) {
        this.message = message
        this.statusCode = statusCode
        this.sucess = false
        this.status = 'Fail'
        this.isOperational = true
    }


}

module.exports = AppError