export class NotFoundException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'Not found exception';
        this.statusCode = statusCode;
    }
}
