const mongoose=require('mongoose')
const  express=require('express')
const cors =require("cors")
const sectionAmodel=require('./modal/sectionA')
const sectionBmodel=require('./modal/sectionB')


mongoose.connect("mongodb+srv://mpravin1021:Pravin12@mydb.sxdrpta.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connected"))
.catch((err)=>console.log(err))



const app=express()
app.use(express.json())
app.use(cors({  origin: 'https://student-fe-pravins-projects-73df0d04.vercel.app',
}))


app.post("/FormA",(req,res)=>{
    sectionAmodel.create(req.body)
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
    console.log(req.body)
})

app.put("/FormA/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const updateData = await sectionAmodel.findById(id);
        
        if (!updateData) {
            return res.status(404).json({ message: "Data not found" });
        }
        
        updateData.attendance = req.body.attendance;
        updateData.date = req.body.date;
        
        await updateData.save();
        
        return res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});


app.put("/FormB/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const updateData = await sectionBmodel.findById(id);
        
        if (!updateData) {
            return res.status(404).json({ message: "Data not found" });
        }
        
        updateData.attendance = req.body.attendance;
        updateData.date = req.body.date;
        
        await updateData.save();
        console.log(updateData);
        
        return res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/FormB",(req,res)=>{
    sectionBmodel.create(req.body)
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
    console.log(req.body)
})

app.get("/", async (req, res) => {
    try {
        const allData = await sectionAmodel.find({});
        res.json(allData); 
    } catch (error) {
      res.status(500).send(error.message); // Handle errors
    }
  });

  app.get("/Sectionb", async (req, res) => {
    try {
        const allData = await sectionBmodel.find({});
        res.json(allData); 
    } catch (error) {
      res.status(500).send(error.message); // Handle errors
    }
  });

const Port=process.env.PORT||3001
app.listen(Port,()=>{
    console.log("Server is running");
})
