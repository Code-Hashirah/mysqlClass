const router=require('express').Router();
const adminCntroller=require('../controllers/adminController')
router.get('/',adminCntroller.homePage)
// add product routes
router.get('/add-product',adminCntroller.addProductPage)
router.post('/add-product',adminCntroller.addProduct)
module.exports=router;