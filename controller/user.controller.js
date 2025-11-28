const express = require('express')

const getUser = (req, res) => {
    return res.json({
        success: true,
        message: "Response from getUser controller",
        user: {
            id: 1,
            name: "John Doe"
        }
    });
};

module.exports = getUser