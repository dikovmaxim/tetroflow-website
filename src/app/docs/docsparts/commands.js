
export const commands = [
    {
        command: 'GET',
        description: 'Get the value of a key',
        request: '{"command":"GET","arguments": {"key": int }}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    {
        command: 'SET',
        description: 'Set the value of a key',
        request: '{"command":"SET","arguments": {"key": int, "value": value}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    {
        command: 'DEL',
        description: 'Delete a key',
        request: '{"command":"DEL","arguments": {"key": int}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    {
        command: 'EXISTS',
        description: 'Check if a key exists',
        request: '{"command":"EXISTS","arguments": {"key": int}}',
        response: '{"response": boolean}',
        introduced: '1.0'
    },
    {
        command: 'KEYS',
        description: 'Get all keys',
        request: '{"command":"KEYS","arguments": {}}',
        response: '{"response": [keys]}',
        introduced: '1.0'
    },
    {
        command: 'TYPE',
        description: 'Get the type of a key',
        request: '{"command":"TYPE","arguments": {"key": int}}',
        response: '{"response": string}',
        introduced: '1.0'
    },
    {
        command: 'CAST',
        description: 'Cast a key to a different type (see data types)',
        request: '{"command":"CAST","arguments": {"key": int, "type": string}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //append
    {
        command: 'APPEND',
        description: 'Append a value to a string',
        request: '{"command":"APPEND","arguments": {"key": int, "value": value}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //strlen
    {
        command: 'STRLEN',
        description: 'Get the length of a string',
        request: '{"command":"STRLEN","arguments": {"key": int}}',
        response: '{"response": int}',
        introduced: '1.0'
    },
    //getrange
    {
        command: 'GETRANGE',
        description: 'Get a substring of a string',
        request: '{"command":"GETRANGE","arguments": {"key": int, "start": int, "end": int}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //lpush
    {
        command: 'LPUSH',
        description: 'Push a value to the front of a list',
        request: '{"command":"LPUSH","arguments": {"key": int, "value": value}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //rpush
    {
        command: 'RPUSH',
        description: 'Push a value to the back of a list',
        request: '{"command":"RPUSH","arguments": {"key": int, "value": value}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //lpop
    {
        command: 'LPOP',
        description: 'Pop a value from the front of a list',
        request: '{"command":"LPOP","arguments": {"key": int}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //rpop
    {
        command: 'RPOP',
        description: 'Pop a value from the back of a list',
        request: '{"command":"RPOP","arguments": {"key": int}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //llen
    {
        command: 'LLEN',
        description: 'Get the length of a list',
        request: '{"command":"LLEN","arguments": {"key": int}}',
        response: '{"response": int}',
        introduced: '1.0'
    },
    //sadd
    {
        command: 'SADD',
        description: 'Add a value to a set',
        request: '{"command":"SADD","arguments": {"key": int, "value": value}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //srem
    {
        command: 'SREM',
        description: 'Remove a value from a set',
        request: '{"command":"SREM","arguments": {"key": int, "value": value}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //scard
    {
        command: 'SCARD',
        description: 'Get the cardinality of a set',
        request: '{"command":"SCARD","arguments": {"key": int}}',
        response: '{"response": int}',
        introduced: '1.0'
    },
    //INC
    {
        command: 'INC',
        description: 'Increment an integer key',
        request: '{"command":"INC","arguments": {"key": int }}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //DEC
    {
        command: 'DEC',
        description: 'Decrement an integer key',
        request: '{"command":"DEC","arguments": {"key": int }}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //INCRBY
    {
        command: 'INCRBY',
        description: 'Increment an integer key by a value',
        request: '{"command":"INCRBY","arguments": {"key": int, "value": int}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //DECRBY
    {
        command: 'DECRBY',
        description: 'Decrement an integer key by a value',
        request: '{"command":"DECRBY","arguments": {"key": int, "value": int}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //FLIP
    {
        command: 'FLIP',
        description: 'Flip the value of a boolean key',
        request: '{"command":"FLIP","arguments": {"key": int}}',
        response: '{"response": value}',
        introduced: '1.0'
    },
    //ping
    {
        command: 'PING',
        description: 'Ping the server',
        request: '{"command":"PING","arguments": {}}',
        response: '{"response": "PONG"}',
        introduced: '1.0'
    },

];