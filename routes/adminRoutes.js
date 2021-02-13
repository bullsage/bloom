const {Router} = require('express')
const router = Router()
const {allUsers,editUser,del} = require('../controllers/adminController')
const {requireA} = require('../middleware/AdminMiddleware')


router.use(requireA)
router.post('/all', allUsers)

router.put('/editUser', editUser)

router.delete('/delete', del)

module.exports = router
