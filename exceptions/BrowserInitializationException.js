export class BrowserInitializationException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'Browser Initialization Exception';
        this.statusCode = statusCode;
    }
}