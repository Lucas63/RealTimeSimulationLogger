/**
 * Created by lucas63 on 25.06.17.
 */


// -------------- Logger class --------------

function Logger() {
    this.info = [];
    this.verbose = [];
    this.error = [];
    this.debug = [];
}

MessageType = {
    "INFO": 0,
    "ERROR":1,
    "DEBUG":2,
    "VERBOSE":3
};

Logger.prototype.push_message = function (mesasge, type) {
    switch (type) {
        case MessageType.INFO:
            break;

        case MessageType.DEBUG:
            break;

        case MessageType.ERROR:
            break;

        case MessageType.VERBOSE:
            break;
    }

};

// -------------- Message class --------------


function Message() {
    this.time = null;
    this.type
}