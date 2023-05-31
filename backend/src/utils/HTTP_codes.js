
const HTTP_codes = {
    correct_codes: {
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204,
    },
    client_errors: {
        BAD_REQUEST: 400,
        AUTHORIZATION_REQUIRED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        METHOD_NOT_ALLOWED: 405,
        NOT_ACCEPTABLE: 406,
        CONFLICT: 409,
    },
    server_errors: {
        INTERNAL_ERROR: 500,
        NOT_IMPLEMENTED: 501,
        SERVICE_TEMPORARILY_UNAVAILABLE: 503,

    }
}

export default HTTP_codes