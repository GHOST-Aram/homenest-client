import {object, string, ref, number, boolean, array } from 'yup'
import { PropertyData, UserData } from '../types'


export const validateLoginDetails = async(loginDetails: LoginDetails) =>{
    const loginSchema = object<LoginDetails>().shape({
        email: string().trim().email('Email is Invalid').required('Email is Required'),
        password: string().min(8, 'Password must be atleast 8 characters.')
            .max(24, 'Password must not be longer than 24 characters.')
            .required('Pasword is required.')
    })

    await loginSchema.validate(loginDetails)
}

export const validateUserData  = async(userData: UserData) =>{
    const userSchema = object<UserData>().shape({
        fullName: string().trim().required('Full name is required.')
            .min(2, 'Full name must be atleast 2 characters.')
            .max(200,'Full name must not be longer than 200 characters'),

        email: string().email('Email is Invalid').required('Email is Required'),
        password: string().min(8, 'Password must be atleast 8 characters.')
            .max(24, 'Password must not be longer than 24 characters.')
            .required('Pasword is required.'),

        confirmPassword: string().oneOf([ref('password')], 'Passwords must match')
            .required('confirm Password is required'),
        
        role: string().trim().oneOf(
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
        propertyName: string().required('Property Name is required.')
            .min(2).max(200).trim(),

        propertyType: string().required('Property Type is required.')
            .min(2).max(200).trim(),

        description: string().trim(),
        backgroundImageUrl: string().trim(),
        rentPerMonth: number().required('Rent per month is required.'),
        locationName: string().trim().required('Location name is required.'),
        cityOrTown: string().trim().required(' City or Town is required.'),
        estate: string().trim().required('Estate is required.'),
        bedrooms: number().required('Number of bedrooms isrequired.'),
        bathrooms: number().required('Number of bathrooms is required.'),
        landlord: string().trim().required('Landlord id is required.')
            .matches(/[a-f0-9]{24}/i, 'Landlord Id must me a 24 character hexadecimal string.'),
        squareFootage: number().required('Property square footage is requred.'),
        isAvailable: boolean().required(),
        isFurnished: boolean().required(),
        hasParkingSpace: boolean().required(),
        energySources: array().of(string().trim().required('Energy sources field is required.')),
        waterSources: array().of(string().trim().required('Water sources field is required.')),
        images: array().of(object({
            url: string().trim(),
            alt: string().trim(),
            _id: string().trim()
        }))    
    })
    
    return propertySchema
}

interface LoginDetails{
    password: string,
    email: string
}