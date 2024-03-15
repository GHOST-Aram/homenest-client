import {object, string, ref, number, boolean, array } from 'yup'
import { PropertyData, UserData } from '../types'


export const validateLoginDetails = async(loginDetails: LoginDetails) =>{
    const loginSchema = object<LoginDetails>().shape({
        email: string().email('Email is Invalid').required('Email is Required'),
        password: string().min(8, 'Password must be atleast 8 characters.')
            .max(24, 'Password must not be longer than 24 characters.')
            .required('Pasword is required.')
    })

    await loginSchema.validate(loginDetails)
}

export const validateUserData  = async(userData: UserData) =>{
    const userSchema = object<UserData>().shape({
        fullName: string()
        .required('Full name is required.')
        .min(2, 'Full name must be atleast 2 characters.')
            .max(200,'Full name must not be longer than 200 characters'),

        email: string().email('Email is Invalid').required('Email is Required'),
        password: string().min(8, 'Password must be atleast 8 characters.')
            .max(24, 'Password must not be longer than 24 characters.')
            .required('Pasword is required.'),

        confirmPassword: string().oneOf([ref('password')], 'Passwords must match')
            .required('confirm Password is required'),
        
        role: string().oneOf(
            ['tenant', 'landlord'], 'Sign up as must be either \'tenant\' or \'landlord\'')
            .required('Sign up as is requred')
        
    })

    await userSchema.validate(userData, { abortEarly: true })
}


export const validatePropertyData = async(propertyData: PropertyData) =>{
    const propertySchema = createPropertySchema()
    await propertySchema.validate(propertyData)
}

const createPropertySchema = () =>{
    const propertySchema = object<PropertyData>().shape({
        propertyName: string().min(2).max(200).required(),
        propertyType: string().min(2).max(200).required(),
        description: string(),
        backgroundImageUrl: string(),
        rentPerMonth: number().required(),
        locationName: string().required(),
        cityOrTown: string().required(),
        estate: string().required(),
        bedrooms: number().required(),
        bathrooms: number().required(),
        landlord: string().matches(/[a-f0-9]{24}/i).required(),
        squareFootage: number().required(),
        isAvailable: boolean().required(),
        isFurnished: boolean().required(),
        hasParkingSpace: boolean().required(),
        energySources: array().of(string().required()),
        waterSources: array().of(string().required()),
        images: array().of(object({
            url: string(),
            alt: string(),
            _id: string()
        })).required()    
    })
    
    return propertySchema
}

interface LoginDetails{
    password: string,
    email: string
}