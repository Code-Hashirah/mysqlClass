const router=require('express').Router();
const adminCntroller=require('../controllers/adminController')
router.get('/',adminCntroller.homePage)
// add product routes
router.get('/add-product',adminCntroller.addProductPage)
router.post('/add-product',adminCntroller.addProduct)

router.get('/update-product/:id',adminCntroller.updateProductPage)
router.post('/update-product',adminCntroller.updateProduct)

router.post('/delete-product',adminCntroller.deleteProduct)
module.exports=router;