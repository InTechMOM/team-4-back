import mongoose from 'mongoose';


const dbUri = `mongodb+srv://karen0212:msDzgYGlNXfGHe3I@cluster0.ezcpsv4.mongodb.net/?retryWrites=true&w=majority`

export const dbConnection = async () => {

  try {
    const response = await mongoose.connect(dbUri);

    console.log("SUCCESS!!", response);
  } catch (error) {
    console.log("no conectado");
  }
}
dbConnection();

