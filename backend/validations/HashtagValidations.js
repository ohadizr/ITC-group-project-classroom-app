const Ajv = require('ajv');
const ajv = new Ajv();

module.exports.validateHasHtag = ajv.compile({
    type: 'object',
    properties: {
        hash_tag_name: { type: 'string' },
        hash_tag_content: { type: 'string' },
        course_google_no: { type: 'string' },
    },
    required: ['hash_tag_name','course_google_no','hash_tag_content'],
    additionalProperties: false
})

// module.exports.validateTopic = ajv.compile({
//     type: 'object',
//     properties: {
//         topic_name: { type: 'string', minLength: 1, maxLength: 50  },
//         topic_id_url: { type: 'string', minLength: 1, maxLength: 50  },
//         course_google_no: { type: 'string', minLength: 1, maxLength: 50},
//         hash_tags_id_arr: { type: 'array' },
//     },
//     required: ['topic_name','course_google_no','topic_id_url','hash_tags_id_arr'],
//     additionalProperties: false
// })
