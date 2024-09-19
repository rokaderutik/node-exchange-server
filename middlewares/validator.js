const queryValidator = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.query);
    if(error)
        return res.status(400).send({ 
            message: "Incomplete or Incorrect data passed", 
            error: error.details[0].message 
        });
    next();
};

module.exports = { queryValidator };