import { body } from "express-validator";
import { validateResult } from "../../helpers/validateHelper";

export const validateCreateUser = [
    body('username').exists().not().isEmpty(),
    body('password').exists().not().isEmpty(),
    body('email').exists().isEmail().not().isEmpty(),
    (req, res, next)=>{
        validateResult(req, res, next);
    }
];

export const validateLoginUser = [
    body('username').exists().not().isEmpty(),
    body('password').exists().not().isEmpty(),
    (req, res, next)=>{
        validateResult(req, res, next);
    }
];

export const validateAskForChangePassword = [
    body('email').exists().isEmail().not().isEmpty(),
    (req, res, next)=>{
        validateResult(req, res, next);
    }
];

export const validateChangePassword = [
    body('password').exists().not().isEmpty(),
    (req, res, next)=>{
        validateResult(req, res, next);
    }
];