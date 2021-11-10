var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    let task = [
        {
            "id": 1,
            "task_name": "Checking Email",
            "task_category": "General"
        },
        {
            "id": 2,
            "task_name": "Schedule Appt.",
            "task_category": "General"
        },
        {
            "id": 3,
            "task_name": "Attend Class",
            "task_category": "General"
        }
    ]
    res.json(task);
});

module.exports = router;