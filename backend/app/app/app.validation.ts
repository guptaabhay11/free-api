import { body, param } from "express-validator";

export const createApp = [
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be a string"),
  body("createdAt"),
];

export const updateApp = [
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be a string"),
  body("user").notEmpty().withMessage("user is required"),
  body("createdAt"),
];

export const editApp = [
  body("name").isString().withMessage("name must be a string"),
  body("user"),
  body("createdAt"),  
];

export const getAppById = [
  param("id").isMongoId().withMessage("id must be a valid mongo id"),
];


