const Ajv = require('ajv');
const ajv = new Ajv();

module.exports.RegisterValidation = ajv.compile({
    type: 'object',
    properties: {
        uid: { type: 'string'},
        email: { type: 'string'},
        name: { type: 'string' },
        course_google_no: { type: 'string' },
        isAdmin: { type: 'boolean' },
    },
    required: ["uid",'email','name','course_google_no','isAdmin'],
    additionalProperties: false
})


