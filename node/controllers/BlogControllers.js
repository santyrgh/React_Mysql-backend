/**
 * ! IMPORTAMOS EL MODELO * */

import BlogModel from "../models/BlogModel.js";

/**
 * TODO: IMPORTAMOS LA CONEXIÓN DE LA BASE DE DADOS * */


/**
* ? Mostrar todos los registros * */

    export const getAllBlogs = async (req, res) => {
        try {
                const blogs = await BlogModel.findAll()
                    res.json(blogs)
        } catch (error) {
            res.json( { message: error.message } )
        }
    }
/**
* ? Mostrar un registros * */
    export const getBlog = async (req, res) => {
        try {
            const blog = await BlogModel.findAll({
                where:{id: req.params.id}
            })
            res.json(blog[0])
        } catch (error) {
            res.json( { message: error.message } )
        } 
    }

/**
* ? crear registros * */
    export const createBlog = async (req, res) => {
        try {
            await BlogModel.create(req.body)
            res.json({
                "message":"¡Registro creado correctamente!"
            })
        } catch (error) {
            res.json( { message: error.message } )
        }
    }
/**
* ? Actualizar registros * */
    export const updateBlog = async (req, res) => {
        try {
            await BlogModel.update(req.body,{
                where:{id:req.params.id}
            })
            res.json({
                "message":"¡Registro Actualizado correctamente!"
            })
        } catch (error) {
            res.json( { message: error.message } )
        }
    }
/**
* ? eliminar  registros * */
    export const deleteBlog = async (req, res) => {
        try {
            await BlogModel.destroy({
                where: {id: req.params.id} 
            })
            res.json({
                "message":"¡Registro Actualizado correctamente!"
            })
        } catch (error) {
            res.json( { message: error.message } )
        }
    }
