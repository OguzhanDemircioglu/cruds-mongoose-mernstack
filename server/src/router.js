import express from "express";
import Post from "./posts.js";
import mongoose from "mongoose";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const post = req.body
        const createdPost = await Post.create(post)
        if (!post) return
        res.status(201).json(createdPost)
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id",
    async (req, res) => {
        try {
            const {id} = req.params

            if (id === "all") {
                const allPosts = await Post.find()
                res.json(allPosts)
            } else {
                if (!mongoose.Types.ObjectId.isValid(id))
                    return res.status(404).send('No Record with that id');

                const post = await Post.findById(id)
                if (!post) return
                res.status(200).json(post)
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

router.put("/:id",
    async (req, res) => {
        try {
            const {id} = req.params;
            const {title, content, creator} = req.body;

            if (!mongoose.Types.ObjectId.isValid(id))
                return res.status(404).send('No Record with that id');

            const updatedPost = await Post.findByIdAndUpdate(id, {title, content, creator}, {new: true});
            /*if (!post) return*/
            res.json(updatedPost);

        } catch (error) {
            console.log(error)
            res.status(500).send(error.message);
        }
    });

router.delete("/:id",
    async (req, res) => {
        try {
            const { id } = req.params
            await Post.findOneAndDelete(id)
            res.json({ message: 'Post silindi' })

        } catch (error) {
            res.status(500).send(error.message);
        }
    });

router.get("/",
    async (req, res) => {
        res.json({message: "Get Works"});
    });

router.post("/",
    async (req, res) => {
        res.json({message: "Post Works"});
    });

router.put("/",
    async (req, res) => {
        res.json({message: "Put Works"});
    });

router.delete("/",
    async (req, res) => {
        res.json({message: "Delete Works"});
    });

export default router;