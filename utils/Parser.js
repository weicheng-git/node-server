const Events = require("events");

class RequestParser extends Events {
  _state = this._read_request_line;
  _cache = null;
  _message = {};

  _read_request_line(char) {
    if (this._cache) {
      // Method, URI, Version, CRLF
      // [pointer, Method, URI, Version, CRLF]
      this._cache = [1, "", "", "", false];
    }
    if (char === 0x20) {
      // char === 'SP'
      this._cache[0]++;
    } else if (char === 0x0d) {
      // char === 'CR'
      this._cache[4] = true;
    } else if (char === 0x0a) {
      // char === 'LF'
      this._cache = null;
      return this._read_header_line(char);
    } else {
      this._cache[this._cache[0]] += String.fromCharCode(char);
    }
    return this._read_header_line(char);
  }
  _read_header_line(char) {}
  _read_body(char) {}
  _send_finish(char) {
    this.emit("finish", this._message);
    return this._stop(char);
  }
  _stop(char) {
    return this._stop;
  }

  append(buffer) {
    for (let offset = 0; offset < buffer.length; offset++) {
      // 状态机
      this._state = this._state(buffer[offset]);
    }
  }
  // this.emit('finish', message)
}

module.exports = RequestParser;
