  const db=require('../database/db')

  exports.homePage=(req,res)=>{
db.execute('SELECT * FROM products').then(result=>{
    res.render('index',{Record:result[0]})
})
  }

  exports.addProductPage=(req,res)=>{
res.render('addProduct')
  }

//   exports.addProduct=(req,res)=>{
//     db.execute("INSERT INTO products(item,price,image) VALUES('Phone', '2000','data:image/jpeg;base64,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')").then(response=>{
//         res.redirect('/')
//     })
//   }

exports.addProduct=(req,res)=>{
    const {Item, Price,Image}=req.body;
    db.execute("INSERT INTO products(item, price, image) VALUES(?,?,?)",[Item, Price,Image]).then(result=>{
        res.redirect('/')
    })
}