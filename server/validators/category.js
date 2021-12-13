const { check } = require('express-validator');

exports.categoryCreateValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('image')
        .isEmpty()
        .withMessage('Image is required'),
    check('content')
        .isLength({ min: 20 })
        .withMessage('Le contenu doit avoir plus des caractères')
];

exports.categoryUpdateValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('content')
        .isLength({ min: 20 })
        .withMessage('Le contenu doit avoir plus des caractères')
];
