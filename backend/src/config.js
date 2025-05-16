import dotenv from "dotenv" // importar la libreria que acabamos de instalar

dotenv.config //ejecutamos la libreria, para acceder al punto env

export const config ={

    db:{
        URI: process.env.DB_URI || "mongodb+srv://teosjennifer2412:jSF7RqIVvX5OJeYH@cluster0.h349r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    },
    server:{
        port: process.env.PORT || 4000,
    },

    jwt:{
secret :process.env.JWT_SECRET || "jSF7RqIVvX5OJeYH",
expiresIn :process.env.JWT_EXPIRES || "30d",
    },
    admin:{
        ADMIN_USERNAME :process.env.ADMIN_USERNAME || "teosjennifer2412@gmail.com",
        ADMIN_PASSWORD :process.env.ADMIN_PASSWORD || "jSF7RqIVvX5OJeYH",
            },
            email:{
                useremail:process.env.USER_EMAIL || "teosjennifer2412@gmail.com" ,
                userpassword:process.env.PASSWORD_EMAIL || "jSF7RqIVvX5OJeYH"
            },
        
            cloudinary:{
               cloudinary_name: process.env.CLOUDINAY_NAME || "dps1p73sq",
               cloudinary_api_key:  process.env.CLOUDINAY_API_NAME || "861325588195656",
               cloudinay_api_secret:  process.env.CLOUDINAY_API_SECRET || "K0JB8L5e2IxAYSwcXzMEINH3I1w"
            }
       
        }